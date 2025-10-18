import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFritech Bridge - Connecting Africa Youth to Global Tech Opportunities',
  description: 'AFritech Bridge offers professional software development services and comprehensive tech education in Kigali, Musanze, and Nyabihu. We connect African youth with global technology opportunities.',
  keywords: 'Africa technology, software development, tech education, programming courses, web development, mobile apps, Kigali tech company, Musanze programming, Nyabihu tech training, African tech talent, global opportunities, Desire Bikorimana',
  authors: [{ name: 'Desire Bikorimana', url: 'https://afritechbridge.online' }],
  creator: 'AFritech Bridge',
  publisher: 'AFritech Bridge',
  openGraph: {
    title: 'AFritech Bridge - Connecting Africa Youth to Global Tech Opportunities',
    description: 'Professional software development services and comprehensive tech education in Africa. Bridging youth to global opportunities.',
    url: 'https://afritechbridge.online',
    siteName: 'AFritech Bridge',
    images: [
      {
        url: '/images/hero_section.png',
        width: 1200,
        height: 630,
        alt: 'AFritech Bridge - Africa Tech Education and Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AFritech Bridge - Africa Tech Education & Development',
    description: 'Connecting Africa youth to global tech opportunities through education and professional software development.',
    images: ['/images/hero_section.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://afritechbridge.online/#organization",
        "name": "AFritech Bridge",
        "alternateName": "AFritech Bridge Africa",
        "url": "https://afritechbridge.online",
        "logo": {
          "@type": "ImageObject",
          "url": "https://afritechbridge.online/images/logo.png",
          "width": 200,
          "height": 200
        },
        "description": "Africa's premier technology company connecting youth with global opportunities through professional software development and tech education.",
        "founder": {
          "@type": "Person",
          "name": "Desire Bikorimana",
          "jobTitle": "Founder & CEO"
        },
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Kigali",
            "addressCountry": "Africa",
            "streetAddress": "Norrsken House"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Musanze",
            "addressCountry": "Africa",
            "streetAddress": "Near Iness Ruhengeri"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Nyabihu",
            "addressCountry": "Africa",
            "streetAddress": "Mukamira"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+250780784924",
          "contactType": "customer service",
          "email": "afritech.bridge@gmail.com"
        },
        "sameAs": [
          "https://linkedin.com/company/afritech-bridge",
          "https://twitter.com/afritechbridge"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://afritechbridge.online/#website",
        "url": "https://afritechbridge.online",
        "name": "AFritech Bridge",
        "description": "Professional software development and tech education in Africa",
        "publisher": {
          "@id": "https://afritechbridge.online/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://afritechbridge.online/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "AFritech Bridge",
        "description": "Comprehensive technology education and training in Africa",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kigali, Musanze, Nyabihu",
          "addressCountry": "Africa"
        },
        "offers": [
          {
            "@type": "Course",
            "name": "Web Development Course",
            "description": "Learn modern web development with React, Node.js, and Next.js",
            "provider": {
              "@id": "https://afritechbridge.online/#organization"
            }
          },
          {
            "@type": "Course",
            "name": "Mobile App Development",
            "description": "Build mobile applications for Android and iOS platforms",
            "provider": {
              "@id": "https://afritechbridge.online/#organization"
            }
          },
          {
            "@type": "Course",
            "name": "Programming Languages",
            "description": "Master Python, JavaScript, Java, and C++ programming",
            "provider": {
              "@id": "https://afritechbridge.online/#organization"
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "AFritech Bridge",
        "@id": "https://afritechbridge.online/#localbusiness",
        "description": "Software development and technology education company in Africa",
        "priceRange": "$$",
        "telephone": "+250780784924",
        "email": "afritech.bridge@gmail.com",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Norrsken House",
            "addressLocality": "Kigali",
            "addressCountry": "Africa"
          }
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -1.9441,
          "longitude": 30.0619
        },
        "openingHours": "Mo-Fr 08:00-18:00",
        "image": "https://afritechbridge.online/images/logo.png"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-[#1A2B4C] via-[#00A896] to-[#1A2B4C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Bridging Africa's Youth to 
                <span className="text-[#FF7F50]"> Global Tech Opportunities</span>
              </h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200 max-w-xl">
                We connect youth with global opportunities through professional software development services and comprehensive tech education in Kigali, Musanze, and Nyabihu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 duration-300 text-center shadow-lg">
                  Explore Our Services
                </Link>
                <Link href="/courses" className="border-2 border-white text-white hover:bg-white hover:text-[#1A2B4C] px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 duration-300 text-center">
                  View Courses
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-up order-first lg:order-last mt-4 lg:mt-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF7F50] to-[#00A896] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Image
                src="/images/hero_section.png"
                alt="Africa youth connecting with global technology opportunities through AFritech Bridge education"
                width={400}
                height={200}
                className="rounded-lg shadow-2xl relative transform transition duration-500 hover:scale-[1.01] w-full h-[500px]"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-50" id="about" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#00A896]/20 text-[#00A896] text-sm font-medium px-3 py-1 rounded-full mb-4">About Us</span>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">
              About AFritech Bridge - Africa's Premier Tech Company
            </h2>
            <div className="w-20 h-1.5 bg-[#FF7F50] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AFritech Bridge is Africa's premier technology company, dedicated to connecting young talent with global opportunities through professional software development services and comprehensive tech education in Kigali, Musanze, and Nyabihu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#00A896] to-[#00C2AE] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md" aria-hidden="true">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Innovation</h3>
              <div className="w-12 h-1 bg-[#FF7F50] mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600">We embrace new technologies and creative solutions to solve complex problems for businesses in Africa and beyond.</p>
            </article>
            <article className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#00A896] to-[#00C2AE] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md" aria-hidden="true">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Tech Education</h3>
              <div className="w-12 h-1 bg-[#FF7F50] mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600">Comprehensive technology education that prepares African students for the global digital market and international opportunities.</p>
            </article>
            <article className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#00A896] to-[#00C2AE] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md" aria-hidden="true">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Community Building</h3>
              <div className="w-12 h-1 bg-[#FF7F50] mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600">Building stronger communities through technology and opportunity, connecting Africa with global markets.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#FF7F50]/20 text-[#FF7F50] text-sm font-medium px-3 py-1 rounded-full mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-2">
              Professional Software Development Services
            </h2>
            <div className="w-20 h-1.5 bg-[#00A896] mx-auto mb-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-600 mb-8">
                We deliver cutting-edge software development services that help businesses thrive in the digital age. Our team combines technical expertise with innovative thinking.
              </p>
              <div className="space-y-6">
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-[#FF7F50] to-[#FF6B35] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-2 text-lg">Web Development</h3>
                    <p className="text-gray-600">Responsive websites and web applications using modern technologies including React, Next.js, and more</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-[#FF7F50] to-[#FF6B35] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-2 text-lg">Mobile App Development</h3>
                    <p className="text-gray-600">Native and cross-platform mobile solutions for iOS and Android using React Native and Flutter</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-[#FF7F50] to-[#FF6B35] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-2 text-lg">Custom Software Solutions</h3>
                    <p className="text-gray-600">Tailored software solutions to meet your unique business needs with scalable architecture</p>
                  </div>
                </div>
              </div>
              <Link href="/services" className="inline-flex items-center mt-8 bg-gradient-to-r from-[#00A896] to-[#009688] hover:from-[#009688] hover:to-[#00A896] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg group">
                Learn More About Our Services
                <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00A896] to-[#1A2B4C] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <Image
                src="/images/services_section.png"
                alt="Software development team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl relative transform transition duration-500 hover:scale-[1.02] w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-800">Always Delivering Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#00A896]/20 text-[#00A896] text-sm font-medium px-3 py-1 rounded-full mb-4">Our Courses</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-2">
              Comprehensive Tech Education
            </h2>
            <div className="w-20 h-1.5 bg-[#FF7F50] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Empower your future with our comprehensive technology courses designed to prepare you for the global job market. Learn from industry experts with hands-on experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative animate-slide-up">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7F50] to-[#00A896] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <Image
                src="/images/courses_section.png"
                alt="Students learning technology"
                width={600}
                height={400}
                className="rounded-lg shadow-xl relative transform transition duration-500 hover:scale-[1.02] w-full h-auto"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FF7F50] rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-gray-800">Next Session Starts Soon</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-in">
              <p className="text-lg text-gray-600 mb-8">
                Our courses are designed to give you practical skills that employers are looking for. With small class sizes and expert instructors, you'll get the personalized attention you need to succeed.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-l-4 border-[#1A2B4C]">
                  <h3 className="font-semibold text-[#1A2B4C] mb-2 text-lg">Programming Languages</h3>
                  <p className="text-gray-600">Python, JavaScript, Java, C++</p>
                  <div className="mt-4 flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>3-6 months</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-l-4 border-[#FF7F50]">
                  <h3 className="font-semibold text-[#1A2B4C] mb-2 text-lg">Web Development</h3>
                  <p className="text-gray-600">React, Node.js, Next.js</p>
                  <div className="mt-4 flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>4-6 months</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-l-4 border-[#00A896]">
                  <h3 className="font-semibold text-[#1A2B4C] mb-2 text-lg">Mobile Development</h3>
                  <p className="text-gray-600">Android, iOS, React Native</p>
                  <div className="mt-4 flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>3-6 months</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-l-4 border-[#1A2B4C]">
                  <h3 className="font-semibold text-[#1A2B4C] mb-2 text-lg">Data Science</h3>
                  <p className="text-gray-600">Machine Learning, AI, Analytics</p>
                  <div className="mt-4 flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>6-8 months</span>
                  </div>
                </div>
              </div>
              <Link 
                href="/courses" 
                className="inline-flex items-center bg-gradient-to-r from-[#00A896] to-[#009688] hover:from-[#009688] hover:to-[#00A896] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg group"
              >
                Explore All Courses
                <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Portal Section */}
      <section className="py-20 bg-gradient-to-r from-[#1A2B4C] to-[#1A2B4C]/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#00A896]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF7F50]/20 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-3/5">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-[#FF7F50] to-[#00A896] p-2 rounded-lg">
                    <Image 
                      src="/job-icon.svg" 
                      alt="Job Portal" 
                      width={40} 
                      height={40} 
                      className="text-white"
                    />
                  </div>
                  <div className="ml-4 flex items-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">AFritech Job Portal</h2>
                    <span className="bg-[#FF7F50] text-white text-xs px-2 py-1 rounded-full ml-3">NEW</span>
                  </div>
                </div>
                <p className="text-lg text-gray-200 mb-6">
                  Looking for tech job opportunities in Africa and beyond? Our job portal connects talented 
                  professionals with top employers in the technology sector. Whether you're a developer, 
                  designer, or tech specialist, find your next career move with us.
                </p>
                <ul className="text-gray-200 space-y-2 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#FF7F50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Latest tech positions in Africa and across Africa
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#FF7F50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Remote and hybrid opportunities
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#FF7F50]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Exclusive positions for AFritech Bridge graduates
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://jobs.afritechbridge.online"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gradient-to-r from-[#FF7F50] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FF7F50] text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:scale-105 text-center group"
                  >
                    Explore Jobs
                    <svg className="w-5 h-5 ml-2 inline-block transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a 
                    href="https://jobs.afritechbridge.online/employer"
                    target="_blank"
                    rel="noreferrer" 
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1A2B4C] px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg text-center"
                  >
                    For Employers
                  </a>
                </div>
              </div>
              
              <div className="w-full md:w-2/5">
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-300">
                  <div className="bg-gradient-to-r from-[#1A2B4C] to-[#00A896] p-4">
                    <h3 className="text-white font-bold text-lg">Featured Positions</h3>
                  </div>
                  <div className="divide-y">
                    <div className="p-4 hover:bg-gray-50 transition-colors">
                      <h4 className="font-semibold text-[#1A2B4C]">Full-stack Developer</h4>
                      <p className="text-sm text-gray-600">Kigali, Africa • Full-time</p>
                      <div className="flex items-center mt-2">
                        <span className="bg-[#00A896]/10 text-[#00A896] text-xs px-2 py-1 rounded-full">React</span>
                        <span className="bg-[#00A896]/10 text-[#00A896] text-xs px-2 py-1 rounded-full ml-2">Node.js</span>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50 transition-colors">
                      <h4 className="font-semibold text-[#1A2B4C]">UI/UX Designer</h4>
                      <p className="text-sm text-gray-600">Remote • Contract</p>
                      <div className="flex items-center mt-2">
                        <span className="bg-[#FF7F50]/10 text-[#FF7F50] text-xs px-2 py-1 rounded-full">Figma</span>
                        <span className="bg-[#FF7F50]/10 text-[#FF7F50] text-xs px-2 py-1 rounded-full ml-2">UI/UX</span>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50 transition-colors">
                      <h4 className="font-semibold text-[#1A2B4C]">Python Developer</h4>
                      <p className="text-sm text-gray-600">Musanze, Africa • Part-time</p>
                      <div className="flex items-center mt-2">
                        <span className="bg-[#00A896]/10 text-[#00A896] text-xs px-2 py-1 rounded-full">Python</span>
                        <span className="bg-[#00A896]/10 text-[#00A896] text-xs px-2 py-1 rounded-full ml-2">Django</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 text-center">
                    <a 
                      href="https://jobs.afritechbridge.online/jobs"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#1A2B4C] font-medium hover:text-[#00A896]"
                    >
                      View all positions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our students and clients who have achieved their goals with AFritech Bridge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00A896] rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-[#1A2B4C]">Jean Claude</h3>
                  <p className="text-sm text-gray-600">Web Developer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "AFritech Bridge transformed my career. The comprehensive web development course gave me the skills I needed to land my dream job at a tech company in Kigali."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00A896] rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-[#1A2B4C]">Marie Uwimana</h3>
                  <p className="text-sm text-gray-600">Mobile App Developer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The mobile development course was exactly what I needed. Now I'm building apps that are making a real difference in my community."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00A896] rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-[#1A2B4C]">Patrick Nzeyimana</h3>
                  <p className="text-sm text-gray-600">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "AFritech Bridge developed our company's website and mobile app. Their professionalism and technical expertise exceeded our expectations."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#1A2B4C] to-[#1A2B4C]/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7F50]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00A896]/10 rounded-full filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 backdrop-blur-sm">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Tech Journey?
            </h2>
            <div className="w-20 h-1.5 bg-[#FF7F50] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our services and courses. We're ready to help you take the next step in your tech career.
            </p>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-[#FF7F50] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FF7F50] text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg transform hover:scale-105 inline-flex items-center"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-all hover:shadow-lg transform hover:scale-105">
              <div className="w-12 h-12 bg-[#FF7F50] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-lg">Phone</h3>
              <p className="text-gray-300">0780784924</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-all hover:shadow-lg transform hover:scale-105">
              <div className="w-12 h-12 bg-[#00A896] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-lg">Email</h3>
              <p className="text-gray-300">afritech.bridge@gmail.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-all hover:shadow-lg transform hover:scale-105">
              <div className="w-12 h-12 bg-[#1A2B4C] border-2 border-[#FF7F50] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-lg">Locations</h3>
              <p className="text-gray-300">Kigali • Musanze • Nyabihu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/images/logo.png"
                  alt="AFritech Bridge"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <span className="text-xl font-bold">AFritech Bridge</span>
              </div>
              <p className="text-gray-400 mb-6">
                Connecting Africa's youth with global technology opportunities through professional software development and comprehensive tech education.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/afritechbridge" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00A896] transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/afritech-bridge" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00A896] transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/Desire-2" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00A896] transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6 border-b border-gray-800 pb-2">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/services" className="hover:text-[#FF7F50] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Services
                </Link></li>
                <li><Link href="/courses" className="hover:text-[#FF7F50] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Courses
                </Link></li>
                <li><Link href="/about" className="hover:text-[#FF7F50] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </Link></li>
                <li><Link href="https://jobs.afritechbridge.online" target="_blank" rel="noreferrer" className="hover:text-[#FF7F50] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Job Portal
                </Link></li>
                <li><Link href="https://study.afritechbridge.online" target="_blank" rel="noreferrer" className="hover:text-[#FF7F50] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Learning Platform
                </Link></li>
                <li><Link href="/contact" className="hover:text-[#FF7F50] transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact Us
                </Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6 border-b border-gray-800 pb-2">Our Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/services" className="hover:text-[#FF7F50] transition-colors">Web Development</Link></li>
                <li><Link href="/services" className="hover:text-[#FF7F50] transition-colors">Mobile App Development</Link></li>
                <li><Link href="/services" className="hover:text-[#FF7F50] transition-colors">Custom Software Solutions</Link></li>
                <li><Link href="/services" className="hover:text-[#FF7F50] transition-colors">IT Consulting</Link></li>
                <li><Link href="/services" className="hover:text-[#FF7F50] transition-colors">UI/UX Design</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6 border-b border-gray-800 pb-2">Contact Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-[#FF7F50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0780784924</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-[#FF7F50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>afritech.bridge@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-[#FF7F50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p>Kigali: Norrsken house</p>
                    <p>Musanze: near Iness Ruhengeri</p>
                    <p>Nyabihu: Mukamira</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 AFritech Bridge. All rights reserved.</p>
            <div className="flex justify-center items-center mt-4 space-x-6">
              <Link href="/services" className="text-sm text-gray-500 hover:text-gray-300">Services</Link>
              <Link href="/courses" className="text-sm text-gray-500 hover:text-gray-300">Courses</Link>
              <Link href="/about" className="text-sm text-gray-500 hover:text-gray-300">About</Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-300">Contact</Link>
              <a href="https://jobs.afritechbridge.online" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-gray-300">Jobs</a>
              <a href="https://study.afritechbridge.online" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-gray-300">LMS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

