import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#003A7A] text-white overflow-hidden pattern-grid">
        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00A6B8]/10 blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
          <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-[#F68B1F]/8 blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
          <svg className="absolute top-20 left-10 w-16 h-16 text-[#00A6B8]/10 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" aria-hidden="true">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="25" />
            <circle cx="50" cy="50" r="10" />
          </svg>
          <svg className="absolute bottom-40 right-16 w-20 h-20 text-[#F68B1F]/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" style={{animation: 'floatDrift2 7s ease-in-out infinite'}} aria-hidden="true">
            <rect x="10" y="10" width="80" height="80" rx="8" />
            <rect x="25" y="25" width="50" height="50" rx="4" />
          </svg>
          <svg className="absolute top-1/3 right-1/4 w-12 h-12 text-white/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" style={{animation: 'floatDrift 9s ease-in-out infinite'}} aria-hidden="true">
            <polygon points="50,5 95,50 50,95 5,50" />
          </svg>
        </div>

        {/* Animated brand gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003A7A]/90 via-[#003A7A]/70 to-[#002a5e]/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <span className="eyebrow-label justify-center mb-6">Our Services</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight font-['Syne',sans-serif]">
              Professional<br />
              <span className="brand-gradient-text">Software Development</span><br />
              Services
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed font-['DM_Sans',sans-serif]">
              We deliver cutting-edge software development services that help businesses thrive in the digital age. Our team combines technical expertise with innovative thinking to create solutions that drive growth and success.
            </p>
            {/* Animated underline accent */}
            <div className="flex justify-center mt-8">
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#00A6B8] to-[#F68B1F]" style={{animation: 'pulseGlow 3s ease-in-out infinite'}} />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              {
                title: 'Web Development',
                desc: 'Modern, responsive websites and web applications',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                delay: 'anim-delay-1',
              },
              {
                title: 'Mobile Apps',
                desc: 'Native and cross-platform mobile applications',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                ),
                delay: 'anim-delay-2',
              },
              {
                title: 'Custom Software',
                desc: 'Tailored solutions for your business needs',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                ),
                delay: 'anim-delay-3',
              },
              {
                title: 'IT Consulting',
                desc: 'Strategic technology guidance and support',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                delay: 'anim-delay-4',
              },
              {
                title: 'Internship Programs',
                desc: 'Build your career with hands-on tech training',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                ),
                delay: 'anim-delay-5',
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl p-6 lg:p-7 text-center hover-lift anim-fade-up ${service.delay}`}
              >
                {/* Icon */}
                <div className="relative mx-auto mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A6B8]/10 to-[#00A6B8]/5 border border-[#00A6B8]/20 flex items-center justify-center text-[#00A6B8] icon-glow cursor-default overflow-hidden shimmer-overlay">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-[#003A7A] mb-2 font-['Syne',sans-serif] group-hover:text-[#00A6B8] transition-colors duration-300">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-['DM_Sans',sans-serif]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DETAILED SERVICES ===== */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section label */}
          <div className="text-center mb-16 lg:mb-20">
            <span className="eyebrow-label justify-center mb-4">What We Deliver</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003A7A] font-['Syne',sans-serif]">
              Our Expertise
            </h2>
            <div className="flex justify-center mt-5">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#00A6B8] to-[#F68B1F]" />
            </div>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {/* ---- Web Development ---- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center anim-fade-up anim-delay-1">
              <div>
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 rounded-full bg-[#00A6B8]" />
                  <span className="text-xs font-medium text-[#00A6B8] font-['DM_Mono',monospace] tracking-widest uppercase">Service 01</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003A7A] mb-6 font-['Syne',sans-serif]">Web Development</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed font-['DM_Sans',sans-serif]">
                  From simple websites to complex web applications, we build responsive, user-friendly solutions using the latest technologies including React, Next.js, and Node.js.
                </p>
                <ul className="space-y-4">
                  {[
                    'Responsive design for all devices',
                    'Modern frameworks and technologies',
                    'SEO optimization and performance',
                    'Content management systems',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#00A6B8] to-[#00A6B8]/70 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 font-['DM_Sans',sans-serif]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00A6B8] to-[#F68B1F] rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500" />
                <Image
                  src="/images/services_section2.png"
                  alt="Web development team"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* ---- Mobile Development ---- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center anim-fade-up anim-delay-2">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute -inset-2 bg-gradient-to-l from-[#00A6B8] to-[#F68B1F] rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500" />
                <Image
                  src="/images/services_section3.png"
                  alt="Mobile app development"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 rounded-full bg-[#00A6B8]" />
                  <span className="text-xs font-medium text-[#00A6B8] font-['DM_Mono',monospace] tracking-widest uppercase">Service 02</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003A7A] mb-6 font-['Syne',sans-serif]">Mobile App Development</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed font-['DM_Sans',sans-serif]">
                  We create engaging mobile experiences for both iOS and Android platforms, using native development and cross-platform frameworks like React Native.
                </p>
                <ul className="space-y-4">
                  {[
                    'Native iOS and Android development',
                    'Cross-platform solutions',
                    'App store deployment',
                    'Maintenance and updates',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#00A6B8] to-[#00A6B8]/70 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 font-['DM_Sans',sans-serif]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ---- Custom Software ---- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center anim-fade-up anim-delay-3">
              <div>
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-8 h-0.5 rounded-full bg-[#F68B1F]" />
                  <span className="text-xs font-medium text-[#F68B1F] font-['DM_Mono',monospace] tracking-widest uppercase">Service 03</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003A7A] mb-6 font-['Syne',sans-serif]">Custom Software Solutions</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed font-['DM_Sans',sans-serif]">
                  Every business is unique. We develop custom software solutions tailored to your specific requirements, ensuring seamless integration with your existing systems.
                </p>
                <ul className="space-y-4">
                  {[
                    'Business process automation',
                    'Database design and management',
                    'API development and integration',
                    'Cloud deployment and scaling',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#F68B1F] to-[#F68B1F]/70 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 font-['DM_Sans',sans-serif]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#F68B1F] to-[#00A6B8] rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500" />
                <Image
                  src="/images/services_section4.png"
                  alt="Custom software development"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERNSHIP PROGRAMS ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A6B8]/3 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6B8]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="eyebrow-label justify-center mb-4">Build Your Future</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003A7A] mb-5 font-['Syne',sans-serif]">
              Internship Programs
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-['DM_Sans',sans-serif]">
              Launch your tech career with our comprehensive internship programs. Gain hands-on experience, mentorship from industry experts, and real-world project exposure across multiple specializations.
            </p>
          </div>

          {/* Internship Track Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                title: 'Mobile Development',
                desc: 'Build native iOS and Android applications using the latest frameworks and best practices',
                bullets: ['Swift & Kotlin development', 'App Store deployment'],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                ),
                delay: 'anim-delay-1',
              },
              {
                title: 'Frontend Development',
                desc: 'Create beautiful, interactive user interfaces using modern web technologies',
                bullets: ['React, Vue, Angular frameworks', 'Responsive web design'],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                delay: 'anim-delay-2',
              },
              {
                title: 'Backend Development',
                desc: 'Build robust server-side applications and APIs that power modern software',
                bullets: ['Node.js, Python, Java', 'Database management'],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                ),
                delay: 'anim-delay-3',
              },
              {
                title: 'Full Stack Development',
                desc: 'Master both frontend and backend technologies to build complete applications',
                bullets: ['MERN & MEAN stacks', 'Full application development'],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                ),
                delay: 'anim-delay-4',
              },
              {
                title: 'Data Science',
                desc: 'Work with data analytics, machine learning, and insights generation',
                bullets: ['Python & R programming', 'Machine learning models'],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
                delay: 'anim-delay-5',
              },
              {
                title: 'UX/UI Design',
                desc: 'Create stunning user experiences with design thinking and tools',
                bullets: ['Figma & design tools', 'User research methods'],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                ),
                delay: 'anim-delay-6',
              },
              {
                title: 'DevOps',
                desc: 'Learn infrastructure, deployment, and cloud operations',
                bullets: ['Docker & Kubernetes', 'Cloud platforms (AWS, GCP)'],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                delay: 'anim-delay-7',
              },
            ].map((track) => (
              <div
                key={track.title}
                className={`group relative bg-white rounded-2xl p-6 lg:p-7 hover-lift anim-fade-up ${track.delay}`}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{padding: '1px', background: 'linear-gradient(135deg, #00A6B8, #F68B1F)', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor'}} />
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00A6B8]/10 to-[#F68B1F]/5 border border-[#00A6B8]/15 flex items-center justify-center text-[#00A6B8] mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00A6B8]/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {track.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#003A7A] mb-2 font-['Syne',sans-serif] group-hover:text-[#00A6B8] transition-colors">
                  {track.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed font-['DM_Sans',sans-serif]">
                  {track.desc}
                </p>
                <ul className="space-y-1.5 text-sm">
                  {track.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-500 font-['DM_Sans',sans-serif]">
                      <span className="text-[#00A6B8] mt-0.5 flex-shrink-0">&#8226;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* What You'll Gain */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#003A7A] to-[#002a5e] p-8 lg:p-12 mb-12 overflow-hidden pattern-grid anim-scale-in anim-delay-3">
            {/* Decorative */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#00A6B8]/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#F68B1F]/5 blur-3xl" />

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-10 text-center font-['Syne',sans-serif]">
              What You&apos;ll Gain
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Real-World Experience',
                  desc: 'Work on actual projects used by real clients',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  ),
                },
                {
                  title: 'Expert Mentorship',
                  desc: 'Learn from experienced tech professionals',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  ),
                },
                {
                  title: 'Career Growth',
                  desc: 'Build your portfolio and network with professionals',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
                {
                  title: 'Job Placement',
                  desc: 'Opportunity to join our team or partner companies',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A6B8]/20 to-[#00A6B8]/5 border border-[#00A6B8]/25 flex items-center justify-center mx-auto mb-4 text-[#00A6B8] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00A6B8]/20">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-['Syne',sans-serif]">{item.title}</h4>
                  <p className="text-sm text-white/80 font-['DM_Sans',sans-serif]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Apply CTA */}
          <div className="text-center anim-fade-up anim-delay-4">
            <p className="text-base sm:text-lg text-gray-600 mb-6 font-['DM_Sans',sans-serif]">
              Ready to start your journey? Apply now and join our next cohort!
            </p>
            <Link
              href="/internships/apply"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#F68B1F] to-[#d97a10] text-white px-8 py-3.5 rounded-xl font-bold font-['DM_Sans',sans-serif] transition-all duration-300 hover:shadow-xl hover:shadow-[#F68B1F]/30 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">Apply for an Internship</span>
              <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d97a10] to-[#F68B1F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA] relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="eyebrow-label justify-center mb-4">How We Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003A7A] mb-4 font-['Syne',sans-serif]">
              Our Development Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-['DM_Sans',sans-serif]">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              { num: '01', title: 'Discovery', desc: 'Understanding your requirements and business goals' },
              { num: '02', title: 'Planning', desc: 'Creating detailed project plans and technical specifications' },
              { num: '03', title: 'Development', desc: 'Building your solution using agile development practices' },
              { num: '04', title: 'Deployment', desc: 'Testing, deployment, and ongoing support' },
            ].map((step, i) => {
              const delay = `anim-delay-${i + 1}`
              return (
                <div
                  key={step.title}
                  className={`group relative bg-white rounded-2xl p-7 lg:p-8 text-center hover-lift anim-fade-up ${delay}`}
                >
                  {/* Step number */}
                  <div className="relative mx-auto mb-5 w-16 h-16 rounded-full flex items-center justify-center">
                    {/* Animated ring */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
                      <circle cx="32" cy="32" r="29" fill="none" stroke="#00A6B8" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />
                      <circle cx="32" cy="32" r="29" fill="none" stroke="#00A6B8" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100" className="transition-all duration-700 group-hover:stroke-dashoffset-0" />
                    </svg>
                    <span className="relative z-10 text-xl font-black text-[#00A6B8] font-['Syne',sans-serif]">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#003A7A] mb-2 font-['Syne',sans-serif] group-hover:text-[#00A6B8] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-['DM_Sans',sans-serif]">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[11.5rem] left-[calc(12.5%+3rem)] right-[calc(12.5%+3rem)] h-px bg-gradient-to-r from-[#00A6B8] via-[#F68B1F] to-[#00A6B8] opacity-30" />
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 lg:py-32 bg-[#003A7A] text-white overflow-hidden pattern-grid">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#00A6B8]/8 blur-3xl animate-pulse" style={{animationDuration: '7s'}} />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#F68B1F]/6 blur-3xl animate-pulse" style={{animationDuration: '9s'}} />
          <svg className="absolute top-1/4 right-1/4 w-24 h-24 text-white/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" style={{animation: 'floatDrift 8s ease-in-out infinite'}} aria-hidden="true">
            <circle cx="50" cy="50" r="45" />
            <path d="M50 5 L50 95 M5 50 L95 50" />
          </svg>
          <svg className="absolute bottom-1/3 left-1/4 w-16 h-16 text-white/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" style={{animation: 'floatDrift2 10s ease-in-out infinite'}} aria-hidden="true">
            <polygon points="50,5 95,50 50,95 5,50" />
            <polygon points="50,20 80,50 50,80 20,50" />
          </svg>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#002a5e]/40 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow-label justify-center mb-5 text-white/80 before:bg-white/40">Let&apos;s Collaborate</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight font-['Syne',sans-serif]">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-['DM_Sans',sans-serif]">
            Let&apos;s discuss your software development needs and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#F68B1F] to-[#d97a10] text-white px-8 py-3.5 rounded-xl font-bold font-['DM_Sans',sans-serif] transition-all duration-300 hover:shadow-xl hover:shadow-[#F68B1F]/30 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">Get a Free Consultation</span>
              <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d97a10] to-[#F68B1F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/about"
              className="group relative inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-bold font-['DM_Sans',sans-serif] transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-0.5"
            >
              Learn More About Us
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#1A1A1A] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <Image
                  src="/images/logo.png"
                  alt="AFritech Bridge"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-lg font-bold font-['Syne',sans-serif]">AFritech Bridge</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-['DM_Sans',sans-serif]">
                We connect youth with global opportunities
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-bold text-white/80 mb-5 uppercase tracking-wider font-['DM_Mono',monospace]">Services</h3>
              <ul className="space-y-3">
                {['Web Development', 'Mobile Apps', 'Custom Software', 'IT Consulting'].map((item) => (
                  <li key={item}>
                    <Link href="/services" className="text-sm text-gray-300 hover:text-[#00A6B8] transition-colors duration-200 font-['DM_Sans',sans-serif]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-sm font-bold text-white/80 mb-5 uppercase tracking-wider font-['DM_Mono',monospace]">Courses</h3>
              <ul className="space-y-3">
                {['Programming', 'Web Development', 'Mobile Development', 'Data Science'].map((item) => (
                  <li key={item}>
                    <Link href="/courses" className="text-sm text-gray-300 hover:text-[#00A6B8] transition-colors duration-200 font-['DM_Sans',sans-serif]">
                      {item}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="https://study.afritechbridge.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 bg-gradient-to-r from-[#F68B1F] to-[#d97a10] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#F68B1F]/30"
                  >
                    <span>Access LMS</span>
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold text-white/80 mb-5 uppercase tracking-wider font-['DM_Mono',monospace]">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-300 font-['DM_Sans',sans-serif]">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-[#00A6B8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0780784924</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-[#00A6B8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:afritech.bridge@yahoo.com" className="hover:text-[#00A6B8] transition-colors">afritech.bridge@yahoo.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-[#00A6B8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Kigali: Norrsken house</span>
                </li>
                <li className="flex items-start gap-2 pl-6">
                  <span>Musanze: near Iness Ruhengeri</span>
                </li>
                <li className="flex items-start gap-2 pl-6">
                  <span>Nyabihu: Mukamira</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400 font-['DM_Sans',sans-serif]">
              &copy; 2025 AFritech Bridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
