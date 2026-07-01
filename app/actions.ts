"use server"

import nodemailer from "nodemailer"

interface ActionResponse {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(formData: FormData): Promise<ActionResponse> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  const errors: ActionResponse["errors"] = {}

  if (!name || name.trim().length < 2) {
    errors.name = ["Name must be at least 2 characters."]
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Please enter a valid email address."]
  }

  if (!subject || subject.trim().length < 3) {
    errors.subject = ["Subject must be at least 3 characters."]
  }

  if (!message || message.trim().length < 10) {
    errors.message = ["Message must be at least 10 characters."]
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors in the form.",
      errors,
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "portfoliosenderjc@gmail.com",
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const mailOptions = {
      from: ` ${email} <portfoliosenderjc@gmail.com>`,
      to: "jameschamilton070605@gmail.com",
      replyTo: email,
      subject: `Portfolio Inquiry: ${subject}`,
      text: `New message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; color: #333; max-width: 600px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #2563eb; margin-top: 0; font-size: 20px; font-weight: 700;">New Portfolio Inquiry</h2>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #4b5563;">Name:</strong> ${name}</p>
          <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
          <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #4b5563;">Subject:</strong> ${subject}</p>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #f3f4f6; margin-top: 20px;">
            <p style="margin: 0; font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px;">Message:</p>
            <p style="margin: 0; font-size: 14px; color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: `Thank you, ${name}! Your message has been sent successfully.`,
    }
  } catch (error) {
    console.error("SMTP Mail Send Error:", error)
    return {
      success: false,
      message: "Unable to send message via SMTP. Please try again later or contact me directly at jameschamilton070605@gmail.com.",
    }
  }
}
