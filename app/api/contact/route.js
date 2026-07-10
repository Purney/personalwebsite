import { architectureAuditOffers } from "@/data/architectureAuditOffers";
import { Data as services } from "@/data/servicesData";
import { sendEmail } from "@/lib/mailgun";

const bookingUrl = "https://calendly.com/hello-william-purnell/initial-call";
const fromEmail = "noreply@william-purnell.com";
const maxLengths = {
    name: 120,
    email: 254,
    service: 160,
    otherService: 160,
    message: 4000,
};
// Modest per-instance friction; serverless deployments do not share this map across instances.
const requestsByIp = new Map();
const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMax = 5;
const maxRateLimitEntries = 1000;
const maxBodyBytes = 16 * 1024;
const serviceOptions = new Set([
    ...services.map((service) => service.title),
    "Architecture AI & Automation Audit",
    ...architectureAuditOffers.map((offer) => offer.name),
    "Other",
]);

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function jsonResponse(body, status) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}

function getClientIp(request) {
    return (
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip") ||
        "unknown"
    );
}

function isRateLimited(request) {
    const ip = getClientIp(request);
    const now = Date.now();
    const entry = requestsByIp.get(ip);

    if (!entry || now - entry.startedAt > rateLimitWindowMs) {
        if (requestsByIp.size >= maxRateLimitEntries) {
            for (const [storedIp, storedEntry] of requestsByIp) {
                if (now - storedEntry.startedAt > rateLimitWindowMs) {
                    requestsByIp.delete(storedIp);
                }
            }
        }

        if (requestsByIp.size >= maxRateLimitEntries) {
            const oldestIp = requestsByIp.keys().next().value;
            requestsByIp.delete(oldestIp);
        }

        requestsByIp.set(ip, { count: 1, startedAt: now });
        return false;
    }

    entry.count += 1;
    return entry.count > rateLimitMax;
}

function asTrimmedString(value) {
    return typeof value === "string" ? value.trim() : "";
}

function sanitizeEmailHeader(value = "") {
    return String(value).replace(/[\r\n]+/g, " ").replace(/[^\S ]+/g, " ").trim();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function verifyRecaptcha(token) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey || !token) {
        return false;
    }

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            secret: secretKey,
            response: token,
        }),
    });

    if (!response.ok) {
        return false;
    }

    const result = await response.json();
    return Boolean(result.success);
}

export async function POST(request) {
    const contentType = request.headers.get("content-type") || "";
    if (
        contentType &&
        !/^application\/(?:json|[a-z0-9!#$&^_.+-]+\+json)(?:\s*;|$)/i.test(contentType)
    ) {
        return jsonResponse({ message: "Invalid request." }, 415);
    }

    const declaredLength = Number(request.headers.get("content-length"));
    if (Number.isFinite(declaredLength) && declaredLength > maxBodyBytes) {
        return jsonResponse({ message: "Invalid request." }, 413);
    }

    if (isRateLimited(request)) {
        return jsonResponse({ message: "Unable to process this request right now." }, 429);
    }

    let body;

    try {
        const rawBody = await request.text();
        if (new TextEncoder().encode(rawBody).length > maxBodyBytes) {
            return jsonResponse({ message: "Invalid request." }, 413);
        }
        body = JSON.parse(rawBody);
    } catch {
        return jsonResponse({ message: "Invalid request." }, 400);
    }

    let {
        name,
        email,
        service,
        otherService,
        message,
        recaptchaToken,
        website,
    } = body || {};

    name = asTrimmedString(name);
    email = asTrimmedString(email);
    service = asTrimmedString(service);
    otherService = asTrimmedString(otherService);
    message = asTrimmedString(message);
    recaptchaToken = asTrimmedString(recaptchaToken);
    website = asTrimmedString(website);

    if (website) {
        return jsonResponse({ message: "Success" }, 200);
    }

    if (
        !name ||
        !email ||
        !service ||
        !message ||
        name.length > maxLengths.name ||
        email.length > maxLengths.email ||
        service.length > maxLengths.service ||
        otherService.length > maxLengths.otherService ||
        message.length > maxLengths.message ||
        !isValidEmail(email) ||
        !serviceOptions.has(service)
    ) {
        return jsonResponse({ message: "Invalid request." }, 400);
    }

    if (service === "Other") {
        service = otherService;
    }

    if (!service || service.length > maxLengths.service) {
        return jsonResponse({ message: "Invalid request." }, 400);
    }

    if (!process.env.NOTIFICATIONEMAIL) {
        return jsonResponse({ message: "Unable to send message right now." }, 500);
    }

    const captchaVerified = await verifyRecaptcha(recaptchaToken);

    if (!captchaVerified) {
        return jsonResponse({ message: "Unable to verify this request." }, 400);
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const subjectService = sanitizeEmailHeader(service);
    const subjectName = sanitizeEmailHeader(name);
    const enquirySubject = `NEW ${subjectService} REQUEST from ${subjectName}`;
    const customerSubject = `Thanks for your enquiry about ${subjectService}`;

    const customerText = `Hi ${name}

Thanks for contacting me about ${service}.

To understand how I can best help, please book an initial call here:
${bookingUrl}

I'll use the call to understand your workflow, goals, and where automation could help.

Thanks,
William`;

    const customerHtml = `
    <html>
    <h1>Thanks for your enquiry, ${safeName}</h1>
    <p>Thanks for contacting me about ${safeService}.</p>
    <p>To understand how I can best help, please book an initial call:</p>
    <p><a href="${bookingUrl}">Book your initial call</a></p>
    <p>I&apos;ll use the call to understand your workflow, goals, and where automation could help.</p>
    <p>Thanks,<br />William</p>
    </html>
    `;

    const replyBodyContent = `Hi ${name}, thanks for contacting me about ${service}. I'd love to understand how I can best help. You can book an initial call here: ${bookingUrl}`;

    const notificationHtml = `
    <html>
    <h1>${escapeHtml(enquirySubject)}</h1>
    <h2>Service: ${safeService}</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
    <p><a href="mailto:${encodeURIComponent(email)}?subject=RE-${encodeURIComponent(service)}&body=${encodeURIComponent(replyBodyContent)}">Reply to ${safeEmail}</a></p>
    </html>
    `;

    const notificationText = `
    New enquiry

    Service: ${service}
    Name: ${name}
    Email: ${email}

    Message:
    ${message}
    `;

    try {
        await sendEmail(email, customerSubject, customerText, customerHtml, fromEmail);
        await sendEmail(process.env.NOTIFICATIONEMAIL, enquirySubject, notificationText, notificationHtml, email);

        return jsonResponse({ message: "Success" }, 200);
    } catch {
        return jsonResponse({ message: "Unable to send message right now." }, 500);
    }
}
