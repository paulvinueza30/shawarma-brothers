import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const emailData = {
      to: "mohamedjudeh@yahoo.com",
      from: "pa112696@ucf.edu",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await sgMail.send(emailData);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("SendGrid error:", error);
      res.status(500).json({ message: "Email failed to send." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
