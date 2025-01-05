import { sendEmail } from "@/lib/mailgun";

export async function POST(request) {
    const { name, email, service, message } = await request.json();

    var subject = `NEW ${service} REQUEST from ${name}`
    var emailText = `
    <html>
    <h1>${subject}</h1>
    <h2>Service: ${service}</h2>
    <p>${message}</p>
    <a href="mailto:${email}">Reply to ${email} </a>
    </html>
    `

    try {
        await sendEmail(process.env.NOTIFICATIONEMAIL, subject, emailText, emailText, "noreply@william.purnell2016@gmail.com" );

        return new Response(JSON.stringify({ message: "Success" }), {
            status: 200,
          });
    } catch (error) {
        return new Response(JSON.stringify({ message: error }), {
            status: 500,
          });
    }
}
