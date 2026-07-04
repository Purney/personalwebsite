import { sendEmail } from "@/lib/mailgun";

const bookingUrl = "https://calendly.com/hello-william-purnell/initial-call";
const fromEmail = "noreply@william-purnell.com";

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export async function POST(request) {
    let { name, email, service, otherService, message } = await request.json();
    
    if (!service || service == "Other") {
        service = otherService;
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const enquirySubject = `NEW ${service} REQUEST from ${name}`;
    const customerSubject = `Thanks for your enquiry about ${service}`;

    const customerText = `Hi ${name},

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
    `

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

        return new Response(JSON.stringify({ message: "Success" }), {
            status: 200,
          });
    } catch (error) {
        return new Response(JSON.stringify({ message: error }), {
            status: 500,
          });
    }
}
