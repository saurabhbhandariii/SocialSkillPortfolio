import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY not found. Email functionality will not work.');
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SendGrid API key not configured');
  }

  try {
    const msg = {
      to: 'beforelyf07@gmail.com', // Your email
      from: 'beforelyf07@gmail.com', // Must be verified sender in SendGrid
      replyTo: data.email,
      subject: `Portfolio Contact: Message from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Portfolio Contact Message</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}