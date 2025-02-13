import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailPayload {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
}

export async function POST(request: Request) {
    try {
      const body: EmailPayload = await request.json();
      const { firstName, lastName, email, phoneNumber, message } = body;

  // Basic validation
      if (!firstName || !lastName || !email || !message) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }

      const data = await resend.emails.send({
        from: 'Your Contact Form <onboarding@resend.dev>',
        to: ['flux.csbyc@christuniversity.in'],
        reply_to: email,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      return NextResponse.json({ success: true, data });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Error sending message' },
        { status: 500 }
      );
    }
}