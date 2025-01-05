import config  from "../config";
import Mailgun from "mailgun.js";
import formData from "form-data";

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "api",
  url: "https://api.eu.mailgun.net/",
  key: process.env.MAILGUN_API_KEY || "dummy",
});

if (!process.env.MAILGUN_API_KEY && process.env.NODE_ENV === "development") {
  console.group("⚠️ MAILGUN_API_KEY missing from .env");
  console.error("It's not mandatory but it's required to send emails.");
  console.error("If you don't need it, remove the code from /libs/mailgun.js");
  console.groupEnd();
}

export const sendEmail = async (to, subject, text, html, replyTo) => {
  // Validate required fields
  if (!to || !subject || (!text && !html)) {
    throw new Error(
      "Missing required fields: to, subject, and either text or html must be provided"
    );
  }

  const data = {
    from: config.mailgun.fromAdmin,
    to: [to],
    subject,
    text,
    html,
    ...(replyTo && { "h:Reply-To": replyTo }),
  };

  try {
    await mg.messages.create(
      (config.mailgun.subdomain ? `${config.mailgun.subdomain}.` : "") +
        config.domainName,
      data
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};
