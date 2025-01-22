import { sendEmail } from "@/lib/mailgun";

export async function POST(request) {
    let { name, email, service, otherService, message } = await request.json();
    
    if (!service || service == "Other") {
        service = otherService;
    }

    var subject = `NEW ${service} REQUEST from ${name}`;

    var replyBodyContent = `Hi ${name}, thanks for contacting us in regards to ${service}, in order to understand how we can best help you I'd love to have a discovery call, you can book a meeting with us here #enterbookingmeeting#` 

    var emailText = `
    <html>
    <h1>${subject}</h1>
    <h2>Service: ${service}</h2>
    <p>${message}</p>
    <a href="mailto:${email}?subject=RE-${encodeURIComponent(service)}&body=${encodeURIComponent(replyBodyContent)}">Reply to ${email} </a>
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
