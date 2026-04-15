import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const CONTACT_RECEIVER = 'afritech.bridge@yahoo.com'

type ContactPayload = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

function sanitize(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>

    const payload: ContactPayload = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      subject: sanitize(body.subject),
      message: sanitize(body.message),
    }

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      return NextResponse.json({ success: false, error: 'Please fill in all required fields.' }, { status: 400 })
    }

    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        { success: false, error: 'Email service is not configured on the server.' },
        { status: 500 },
      )
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.mail.yahoo.com'
    const smtpPort = Number(process.env.SMTP_PORT || 465)
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === 'true'
      : smtpPort === 465

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: smtpUser,
      to: CONTACT_RECEIVER,
      subject: `New Contact Form: ${payload.subject}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || 'N/A'}`,
        `Subject: ${payload.subject}`,
        '',
        'Message:',
        payload.message,
      ].join('\n'),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(payload.phone || 'N/A')}</p>
        <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact email send failed:', error)
    return NextResponse.json(
      { success: false, error: 'Sorry, there was an error sending your message.' },
      { status: 500 },
    )
  }
}
