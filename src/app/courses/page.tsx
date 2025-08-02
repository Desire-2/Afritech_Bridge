import Image from 'next/image'
import Link from 'next/link'

export default function Courses() {
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
                <Link href="/courses" className="text-[#00A896] px-3 py-2 rounded-md text-sm font-medium">
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
      <section className="bg-gradient-to-br from-[#1A2B4C] to-[#00A896] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Tech Education
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Empower your future with our comprehensive technology courses designed to prepare you for the global job market. Learn from industry experts and gain hands-on experience with real-world projects.
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">
              Course Categories
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our wide range of technology courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#00A896] text-white p-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
                <p className="text-gray-200">Master popular programming languages</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Python Programming</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>JavaScript Fundamentals</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Java Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>C++ Programming</span>
                  </li>
                </ul>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Duration:</span> 8-12 weeks
                </div>
                <Link href="/contact" className="block w-full bg-[#00A896] hover:bg-[#008B7A] text-white text-center py-2 rounded-lg font-semibold transition-colors">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#00A896] text-white p-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-200">Build modern websites and web applications</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>HTML, CSS & JavaScript</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>React Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Next.js Framework</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Node.js Backend</span>
                  </li>
                </ul>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Duration:</span> 12-16 weeks
                </div>
                <Link href="/contact" className="block w-full bg-[#00A896] hover:bg-[#008B7A] text-white text-center py-2 rounded-lg font-semibold transition-colors">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#00A896] text-white p-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
                <p className="text-gray-200">Create mobile apps for iOS and Android</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Android Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>iOS Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>React Native</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Flutter Development</span>
                  </li>
                </ul>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Duration:</span> 10-14 weeks
                </div>
                <Link href="/contact" className="block w-full bg-[#00A896] hover:bg-[#008B7A] text-white text-center py-2 rounded-lg font-semibold transition-colors">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Data Science */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#00A896] text-white p-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Science & AI</h3>
                <p className="text-gray-200">Explore data analysis and machine learning</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Data Analysis with Python</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Machine Learning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Data Visualization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>AI Fundamentals</span>
                  </li>
                </ul>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Duration:</span> 14-18 weeks
                </div>
                <Link href="/contact" className="block w-full bg-[#00A896] hover:bg-[#008B7A] text-white text-center py-2 rounded-lg font-semibold transition-colors">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#00A896] text-white p-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-200">Create beautiful and user-friendly interfaces</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Design Principles</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Figma & Adobe XD</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>User Research</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Prototyping</span>
                  </li>
                </ul>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Duration:</span> 8-12 weeks
                </div>
                <Link href="/contact" className="block w-full bg-[#00A896] hover:bg-[#008B7A] text-white text-center py-2 rounded-lg font-semibold transition-colors">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-[#00A896] text-white p-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">DevOps & Cloud</h3>
                <p className="text-gray-200">Learn deployment and cloud technologies</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>AWS Cloud Services</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Docker & Kubernetes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>CI/CD Pipelines</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF7F50] rounded-full mr-3"></div>
                    <span>Infrastructure as Code</span>
                  </li>
                </ul>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Duration:</span> 10-14 weeks
                </div>
                <Link href="/contact" className="block w-full bg-[#00A896] hover:bg-[#008B7A] text-white text-center py-2 rounded-lg font-semibold transition-colors">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn with Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-6">
                Why Learn with AFritech Bridge?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FF7F50] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-2">Industry Expert Instructors</h3>
                    <p className="text-gray-600">Learn from experienced professionals working in the tech industry</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FF7F50] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-2">Hands-on Projects</h3>
                    <p className="text-gray-600">Build real-world projects that you can showcase in your portfolio</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FF7F50] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-2">Career Support</h3>
                    <p className="text-gray-600">Get help with job placement and career guidance after graduation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FF7F50] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2B4C] mb-2">Flexible Learning</h3>
                    <p className="text-gray-600">Choose from in-person, online, or hybrid learning options</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/courses_section.png"
                alt="Students learning technology"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our courses have transformed careers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00A896] rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-[#1A2B4C]">Alice Mukamana</h3>
                  <p className="text-sm text-gray-600">Web Development Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The web development course at AFritech Bridge was comprehensive and practical. I now work as a frontend developer at a leading tech company in Kigali."
              </p>
              <div className="text-sm text-[#00A896] font-semibold">
                Now working at: TechCorp Rwanda
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00A896] rounded-full flex items-center justify-center text-white font-bold">
                  D
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-[#1A2B4C]">David Nshimiyimana</h3>
                  <p className="text-sm text-gray-600">Data Science Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The data science program opened up a whole new world for me. I'm now working on AI projects that are making a real impact in healthcare."
              </p>
              <div className="text-sm text-[#00A896] font-semibold">
                Now working at: HealthTech Solutions
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#00A896] rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-[#1A2B4C]">Sarah Uwimana</h3>
                  <p className="text-sm text-gray-600">Mobile Development Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Learning mobile development at AFritech Bridge gave me the skills to create my own startup. We've now launched three successful mobile apps."
              </p>
              <div className="text-sm text-[#00A896] font-semibold">
                Founder of: MobileApps Rwanda
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A2B4C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive tech courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Enroll Today
            </Link>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-[#1A2B4C] px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More About Us
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

