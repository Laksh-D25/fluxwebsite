import { Resend } from 'resend';
const resend = new Resend(RESEND_API_KEY); 
export async function POST(request) {
    try {
        const { firstName, lastName, email, phoneNumber, message } = await request.json();

        const data = await resend.emails.send({
        from: 'Your Contact Form <onboarding@resend.dev>',
        to: ['flux.csbyc@christuniversity.in'],
        reply_to: email,
        subject: 'New Contact Form Submission',
        html: `
            <h2>New Contact Form Submission</h2><br />
            <p><strong>Name:</strong> ${firstName} ${lastName}</p><br />
            <p><strong>Email:</strong> ${email}</p><br />
            <p><strong>Phone:</strong> ${phoneNumber}</p><br />
            <p><strong>Message:</strong></p><br />
            <p>${message}</p>
        `
        });

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ success: false, error: error.message });
    }
}