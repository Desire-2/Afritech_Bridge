# AfriTech Bridge - Internship Application Platform

A beautiful, production-ready internship application form built with Next.js, React, and TypeScript.

## 📚 Documentation

**Start here:** [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)

Quick guides:
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - 2 min quick start
- **[COMPLETION_SUMMARY.md](COMPLETION_SUMMARY.md)** - What was built
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Full installation guide
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Deploy to production
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - FAQ & debugging

## 🚀 Quick Start

```bash
npm install
npm run dev
# Visit http://localhost:3000/internships/apply
```

See the [QUICK_REFERENCE.md](QUICK_REFERENCE.md) for more details.

## 📋 Project Features

✅ 6-step multi-step form  
✅ Full validation with real-time feedback  
✅ Session storage persistence  
✅ Beautiful animations  
✅ Mobile responsive design  
✅ WCAG AA accessibility  
✅ File upload support  
✅ API integration ready  
✅ Success screen with confetti  
✅ 100% TypeScript typed  

See [COMPLETION_SUMMARY.md](COMPLETION_SUMMARY.md) for full details.

## 🔧 Configuration

### Internship Application Form

The form is available at `/internships/apply` with the following steps:
1. Track Selection (8 available tracks)
2. Personal Information (name, email, location, etc.)
3. Academic Background (institution, skills, experience)
4. Motivation (motivation letter, career goals)
5. Documents (CV upload, portfolio links)
6. Review & Submit (confirmation & submission)

Update the API endpoint in `.env.local`:
```bash
NEXT_PUBLIC_API_BASE_URL=https://study.afritechbridge.online
```

## Getting Started (Existing)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form Email Setup

The Contact Us form sends email through SMTP using the server route at `/api/contact`.
Set these environment variables in your `.env` file:

```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_yahoo_email@yahoo.com
SMTP_PASS=your_yahoo_app_password
```

Notes:
- The recipient is fixed to `afritech.bridge@yahoo.com` in the API route.
- For Yahoo Mail, use an App Password for `SMTP_PASS`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
