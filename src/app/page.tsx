import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="AFritech Bridge"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-xl font-bold text-[#1A2B4C]">AFritech Bridge</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#1A2B4C] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="/services" className="text-[#1A2B4C] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Services
                </Link>
                <Link href="/courses" className="text-[#1A2B4C] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Courses
                </Link>
                <Link href="/about" className="text-[#1A2B4C] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </Link>
                <Link href="/contact" className="bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A2B4C] via-[#00A896] to-[#1A2B4C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Bridging Rwanda's Youth to 
                <span className="text-[#FF7F50]"> Global Tech Opportunities</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                We connect youth with global opportunities through professional software development services and comprehensive tech education in Kigali, Musanze, and Nyabihu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
                  Explore Our Services
                </Link>
                <Link href="/courses" className="border-2 border-white text-white hover:bg-white hover:text-[#1A2B4C] px-8 py-3 rounded-lg font-semibold transition-colors text-center">
                  View Courses
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero_section.png"
                alt="Youth connecting with global opportunities"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">
              About AFritech Bridge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AFritech Bridge is Rwanda's premier technology company, dedicated to connecting young talent with global opportunities through professional software development services and comprehensive tech education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace new technologies and creative solutions to solve complex problems.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">Education</h3>
              <p className="text-gray-600">Comprehensive tech education that prepares students for the global market.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">Community</h3>
              <p className="text-gray-600">Building stronger communities through technology and opportunity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-6">
                Professional Software Development Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We deliver cutting-edge software development services that help businesses thrive in the digital age. Our team combines technical expertise with innovative thinking.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#FF7F50] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-1">Web Development</h3>
                    <p className="text-gray-600">Responsive websites and web applications using modern technologies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FF7F50] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-1">Mobile App Development</h3>
                    <p className="text-gray-600">Native and cross-platform mobile solutions for iOS and Android</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FF7F50] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-1">Custom Software Solutions</h3>
                    <p className="text-gray-600">Tailored software solutions to meet your unique business needs</p>
                  </div>
                </div>
              </div>
              <Link href="/services" className="inline-block mt-8 bg-[#00A896] hover:bg-[#008B7A] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More About Our Services
              </Link>
            </div>
            <div>
              <Image
                src="/images/services_section.png"
                alt="Software development team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/courses_section.png"
                alt="Students learning technology"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-6">
                Comprehensive Tech Education
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Empower your future with our comprehensive technology courses designed to prepare you for the global job market. Learn from industry experts with hands-on experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#1A2B4C] mb-2">Programming Languages</h3>
                  <p className="text-sm text-gray-600">Python, JavaScript, Java, C++</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#1A2B4C] mb-2">Web Development</h3>
                  <p className="text-sm text-gray-600">React, Node.js, Next.js</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#1A2B4C] mb-2">Mobile Development</h3>
                  <p className="text-sm text-gray-600">Android, iOS, React Native</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#1A2B4C] mb-2">Data Science</h3>
                  <p className="text-sm text-gray-600">Machine Learning, AI, Analytics</p>
                </div>
              </div>
              <Link href="/courses" className="inline-block bg-[#00A896] hover:bg-[#008B7A] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Explore All Courses
              </Link>
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
      <section className="py-20 bg-[#1A2B4C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn more about our services and courses
            </p>
            <Link href="/contact" className="bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">0780784924</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">afritech.bridge@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Locations</h3>
              <p className="text-gray-300">Kigali • Musanze • Nyabihu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.png"
                  alt="AFritech Bridge"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="text-lg font-bold">AFritech Bridge</span>
              </div>
              <p className="text-gray-400">
                We connect youth with global opportunities
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Mobile Apps</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Custom Software</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">IT Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Courses</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/courses" className="hover:text-white transition-colors">Programming</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors">Mobile Development</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors">Data Science</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: 0780784924</li>
                <li>Email: afritech.bridge@gmail.com</li>
                <li>Kigali: Norrsken house</li>
                <li>Musanze: near Iness Ruhengeri</li>
                <li>Nyabihu: Mukamira</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AFritech Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

