import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://afritechbridge.online'),
  title: {
    default: 'AFritech Bridge - Rwanda Tech Education & Software Development',
    template: '%s | AFritech Bridge Rwanda'
  },
  description: 'Rwanda\'s premier technology company offering professional software development services, the TalentSpher job portal, and comprehensive tech education in Kigali, Musanze, and Nyabihu. Connect with global opportunities.',
  keywords: [
    'Rwanda technology company',
    'software development Rwanda',
    'tech education Kigali',
    'programming courses Rwanda',
    'web development services',
    'mobile app development',
    'Kigali tech company',
    'Musanze programming',
    'Nyabihu tech training',
    'African tech talent',
    'global tech opportunities',
    'Desire Bikorimana',
    'AFritech Bridge',
    'technology training Rwanda',
    'software development services',
    'React training Rwanda',
    'JavaScript courses',
    'Python programming',
    'tech bootcamp Rwanda',
    'TalentSpher job portal',
    'Rwanda jobs',
    'African job portal',
    'tech jobs Rwanda'
  ],
  authors: [
    { name: 'Desire Bikorimana', url: 'https://afritechbridge.online/about' }
  ],
  creator: 'AFritech Bridge',
  publisher: 'AFritech Bridge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://afritechbridge.online',
    siteName: 'AFritech Bridge',
    title: 'AFritech Bridge - Rwanda Tech Education & Software Development',
    description: 'Rwanda\'s premier technology company offering professional software development services and comprehensive tech education. Connect with global opportunities.',
    images: [
      {
        url: '/images/hero_section.png',
        width: 1200,
        height: 630,
        alt: 'AFritech Bridge - Rwanda Technology Education and Development Company',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AFritech Bridge - Rwanda Tech Education & Software Development',
    description: 'Rwanda\'s premier technology company offering professional software development services and comprehensive tech education.',
    images: ['/images/hero_section.png'],
    creator: '@afritechbridge',
    site: '@afritechbridge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://afritechbridge.online',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1A2B4C' },
    { media: '(prefers-color-scheme: dark)', color: '#1A2B4C' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <meta name="geo.region" content="RW" />
        <meta name="geo.placename" content="Kigali, Rwanda" />
        <meta name="geo.position" content="-1.9441;30.0619" />
        <meta name="ICBM" content="-1.9441, 30.0619" />
        {/* JSON-LD structured data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AFritech Bridge",
          "url": "https://afritechbridge.online",
          "logo": "https://afritechbridge.online/images/logo.png",
          "sameAs": [
            "https://twitter.com/afritechbridge",
            "https://www.linkedin.com/company/afritechbridge/"
          ],
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+250780784924",
            "contactType": "customer service",
            "areaServed": "RW",
            "availableLanguage": ["en", "fr", "rw"]
          }],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kigali",
            "addressLocality": "Kigali",
            "addressCountry": "RW"
          },
          "makesOffer": {
            "@type": "Service",
            "name": "TalentSpher Job Portal",
            "url": "https://afritechbridge.online/talentspher",
            "description": "TalentSpher is Afritech Bridge's job portal connecting African tech talent with global opportunities."
          }
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://afritechbridge.online",
          "name": "AFritech Bridge",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://afritechbridge.online/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }) }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
