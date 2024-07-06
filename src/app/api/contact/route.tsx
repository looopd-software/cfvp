import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const form = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_SERVER,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.MAIL_USERNAME,
      to: process.env.MAIL_RECIPIENT,
      subject: `Mensaje nuevo del formulario de parte de : ${form.email}`,
      html: `
        <p>Nombre: ${form.name}</p>
        <p>Email: ${form.email}</p>
        <p>Telefono: ${form.phone}</p>
        <p>Empresa: ${form.company}</p>
        <p>Mensaje: ${form.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
