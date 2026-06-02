import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A2B4C] to-[#00A896] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Software Development Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We deliver cutting-edge software development services that help businesses thrive in the digital age. Our team combines technical expertise with innovative thinking to create solutions that drive growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="bg-[#00A896] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Web Development</h3>
              <p className="text-gray-600">Modern, responsive websites and web applications</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#00A896] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Mobile Apps</h3>
              <p className="text-gray-600">Native and cross-platform mobile applications</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#00A896] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Custom Software</h3>
              <p className="text-gray-600">Tailored solutions for your business needs</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#00A896] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">IT Consulting</h3>
              <p className="text-gray-600">Strategic technology guidance and support</p>
            </div>
            <div className="text-center group">
              <div className="bg-[#FF7F50] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Internship Programs</h3>
              <p className="text-gray-600">Build your career with hands-on tech training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Web Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A2B4C] mb-6">Web Development</h2>
                <p className="text-lg text-gray-600 mb-6">
                  From simple websites to complex web applications, we build responsive, user-friendly solutions using the latest technologies including React, Next.js, and Node.js.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Responsive design for all devices</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Modern frameworks and technologies</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">SEO optimization and performance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Content management systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/services_section2.png"
                  alt="Web development team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Mobile Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/services_section3.png"
                  alt="Mobile app development"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-[#1A2B4C] mb-6">Mobile App Development</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We create engaging mobile experiences for both iOS and Android platforms, using native development and cross-platform frameworks like React Native.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Native iOS and Android development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Cross-platform solutions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">App store deployment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Maintenance and updates</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Custom Software */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A2B4C] mb-6">Custom Software Solutions</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Every business is unique. We develop custom software solutions tailored to your specific requirements, ensuring seamless integration with your existing systems.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Business process automation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Database design and management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">API development and integration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#FF7F50] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Cloud deployment and scaling</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/services_section4.png"
                  alt="Custom software development"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20 bg-gradient-to-br from-[#FF7F50]/10 to-[#00A896]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4 text-center">
              Internship Programs
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Launch your tech career with our comprehensive internship programs. Gain hands-on experience, mentorship from industry experts, and real-world project exposure across multiple specializations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Mobile Development</h3>
              <p className="text-gray-600 mb-4">Build native iOS and Android applications using the latest frameworks and best practices</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Swift & Kotlin development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>App Store deployment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Frontend Development</h3>
              <p className="text-gray-600 mb-4">Create beautiful, interactive user interfaces using modern web technologies</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>React, Vue, Angular frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Responsive web design</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Backend Development</h3>
              <p className="text-gray-600 mb-4">Build robust server-side applications and APIs that power modern software</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Node.js, Python, Java</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Database management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Full Stack Development</h3>
              <p className="text-gray-600 mb-4">Master both frontend and backend technologies to build complete applications</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>MERN & MEAN stacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Full application development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">Data Science</h3>
              <p className="text-gray-600 mb-4">Work with data analytics, machine learning, and insights generation</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Python & R programming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Machine learning models</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">UX/UI Design</h3>
              <p className="text-gray-600 mb-4">Create stunning user experiences with design thinking and tools</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Figma & design tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>User research methods</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-[#FF7F50] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">DevOps</h3>
              <p className="text-gray-600 mb-4">Learn infrastructure, deployment, and cloud operations</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Docker & Kubernetes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Cloud platforms (AWS, GCP)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Internship Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-10 mb-12">
            <h3 className="text-2xl font-bold text-[#1A2B4C] mb-8 text-center">What You'll Gain</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#00A896] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#1A2B4C] mb-2">Real-World Experience</h4>
                <p className="text-gray-600">Work on actual projects used by real clients</p>
              </div>
              <div className="text-center">
                <div className="bg-[#00A896] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#1A2B4C] mb-2">Expert Mentorship</h4>
                <p className="text-gray-600">Learn from experienced tech professionals</p>
              </div>
              <div className="text-center">
                <div className="bg-[#00A896] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#1A2B4C] mb-2">Career Growth</h4>
                <p className="text-gray-600">Build your portfolio and network with professionals</p>
              </div>
              <div className="text-center">
                <div className="bg-[#00A896] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-[#1A2B4C] mb-2">Job Placement</h4>
                <p className="text-gray-600">Opportunity to join our team or partner companies</p>
              </div>
            </div>
          </div>

          {/* Apply CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to start your journey? Apply now and join our next cohort!
            </p>
            <Link href="/internships/apply" className="bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
              Apply for an Internship
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C] mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your requirements and business goals</p>
            </div>
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">Planning</h3>
              <p className="text-gray-600">Creating detailed project plans and technical specifications</p>
            </div>
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">Development</h3>
              <p className="text-gray-600">Building your solution using agile development practices</p>
            </div>
            <div className="text-center">
              <div className="bg-[#00A896] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-[#1A2B4C] mb-2">Deployment</h3>
              <p className="text-gray-600">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A2B4C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your software development needs and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get a Free Consultation
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
                <li className="pt-2">
                  <a 
                    href="https://study.afritechbridge.online" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#FF7F50] hover:bg-[#FF6B35] text-white px-3 py-1 rounded text-sm inline-flex items-center transition-colors">
                    <span>Access LMS</span>
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: 0780784924</li>
                <li>Email: afritech.bridge@yahoo.com</li>
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

