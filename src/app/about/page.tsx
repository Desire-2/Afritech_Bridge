import Image from 'next/image'
import Link from 'next/link'

export default function About() {
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
                <Link href="/about" className="text-[#00A896] px-3 py-2 rounded-md text-sm font-medium">
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
      <section className="bg-gradient-to-br from-[#1A2B4C] to-[#00A896] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About AFritech Bridge
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We are Rwanda's premier technology company, dedicated to connecting young talent with global opportunities through professional software development services and comprehensive tech education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between Rwanda's talented youth and global technology opportunities, AFritech Bridge has become a leading provider of software development services and tech education in Rwanda.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that technology is the key to unlocking unlimited potential. Our journey began with a simple idea: to create a bridge that connects local talent with global opportunities, empowering young people to build successful careers in technology.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve clients across various industries while training the next generation of tech professionals who are ready to compete on the global stage.
              </p>
            </div>
            <div>
              <Image
                src="/images/hero_section.png"
                alt="Our story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A2B4C] mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To connect Rwanda's youth with global technology opportunities through world-class software development services and comprehensive tech education that empowers individuals to reach their full potential.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A2B4C] mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be the leading technology bridge that transforms lives and communities through innovation, education, and opportunity, making Rwanda a recognized hub for tech talent in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do, from our code to our customer service.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace new technologies and creative solutions to solve complex problems.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Empowerment</h3>
              <p className="text-gray-600">We empower individuals to reach their full potential through education and opportunity.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Community</h3>
              <p className="text-gray-600">We are committed to building stronger communities through technology and collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">
              We're present across Rwanda to serve you better
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Kigali</h3>
              <p className="text-gray-600 mb-4">Our main headquarters located in the heart of Rwanda's capital</p>
              <p className="text-sm text-gray-500">Norrsken House</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Musanze</h3>
              <p className="text-gray-600 mb-4">Serving the northern region with quality tech education and services</p>
              <p className="text-sm text-gray-500">Near Iness Ruhengeri</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Nyabihu</h3>
              <p className="text-gray-600 mb-4">Expanding opportunities to rural communities through technology</p>
              <p className="text-sm text-gray-500">Mukamira</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the passionate professionals behind AFritech Bridge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-[#00A896] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold">
                BD
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">Desire Bikorimana</h3>
              <p className="text-gray-600 mb-3">Founder & CEO</p>
              <p className="text-sm text-gray-500">
                Passionate about connecting African talent with global opportunities through technology education and innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-[#00A896] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold">
                AM
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">Alice Mukamana</h3>
              <p className="text-gray-600 mb-3">Head of Education</p>
              <p className="text-sm text-gray-500">
                Expert in curriculum development and tech education with over 8 years of experience in training developers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-[#00A896] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold">
                DN
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">David Nshimiyimana</h3>
              <p className="text-gray-600 mb-3">Lead Developer</p>
              <p className="text-sm text-gray-500">
                Full-stack developer with expertise in modern web technologies and a passion for building scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">
              Why Choose AFritech Bridge?
            </h2>
            <p className="text-xl text-gray-600">
              What sets us apart in the tech education and development space
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2B4C] mb-3">Proven Track Record</h3>
              <p className="text-gray-600">Over 500 successful graduates now working in tech companies worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2B4C] mb-3">Industry Partnerships</h3>
              <p className="text-gray-600">Strong partnerships with leading tech companies for internships and job placements</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2B4C] mb-3">Flexible Learning</h3>
              <p className="text-gray-600">Multiple learning formats including in-person, online, and hybrid options</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2B4C] mb-3">Expert Mentorship</h3>
              <p className="text-gray-600">One-on-one mentorship from industry professionals throughout your journey</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2B4C] mb-3">Real Projects</h3>
              <p className="text-gray-600">Work on real client projects to build your portfolio and gain practical experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1A2B4C] mb-3">Global Network</h3>
              <p className="text-gray-600">Access to our global network of alumni and tech professionals worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A2B4C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Become part of a growing community of tech professionals who are making a difference in Rwanda and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </Link>
            <Link href="/courses" className="border-2 border-white text-white hover:bg-white hover:text-[#1A2B4C] px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Courses
            </Link>
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

