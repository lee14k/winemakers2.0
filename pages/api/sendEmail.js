import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { firstName, lastName, email, phoneNumber, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // use SSL for port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailData = {
    from: email,
    to:process.env.SMTP_USER,  // you can change this to where you want to receive the emails
    subject: 'New Contact Form Submission',
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(`Email sending error: ${error}`);
    res.status(500).send('Internal Server Error');
  }
};
