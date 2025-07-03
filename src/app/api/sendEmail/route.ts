import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email } = body;

  if (!name || !phone || !email) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    await transporter.sendMail({
      from: `"רישום מופע" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `הרשמה חדשה מאת ${name}`,
      html: `
        <h2>פרטי נרשמת:</h2>
        <h3><strong>שם:</strong> ${name}</h3>
        <h3><strong>טלפון:</strong> ${phone}</h3>
        <h3><strong>אימייל:</strong> ${email}</h3>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Email failed to send' },
      { status: 500 }
    );
  }
}
