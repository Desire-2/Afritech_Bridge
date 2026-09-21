import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import SITE_CONFIG from '@/config/site';
import { WORKFORCE_JOURNEY_STEPS } from '@/data/journey';

export const metadata: Metadata = {
  title: 'About Us - AfriTech Bridge',
  description:
    'AfriTech Bridge is a Rwanda-born technology company building digital infrastructure that helps people develop skills, prove their capabilities, and access economic opportunity.',
  alternates: {
    canonical: 'https://afritechbridge.online/about',
  },
};

export default function AboutPage() {
  const leadership = [
    {
      name: 'Desire Bikorimana',
      role: 'Founder & CEO',
      bio: 'Leading the vision of turning African potential into verified global engineering talent. Passionate about software craftsmanship, developer enablement, and inclusive tech education across Rwanda and Africa.',
      initials: 'DB',
    },
    {
      name: 'Alice Mukamana',
      role: 'Head of Education & Pedagogy',
      bio: 'Directing curriculum development, competency benchmarks, and practical pedagogy to bridge theoretical computer science with enterprise software engineering.',
      initials: 'AM',
    },
    {
      name: 'David Nshimiyimana',
      role: 'Lead Systems Architect',
      bio: 'Overseeing technical architecture, code quality audits, and developer mentoring across client projects and internal platform infrastructure.',
      initials: 'DN',
    },
  ];

  const values = [
    {
      title: 'Verifiable Proof Over Guesswork',
      desc: 'We believe skills should be evidenced through running production code, rigorous assessments, and objective benchmarks rather than claims on paper.',
    },
    {
      title: 'Practical Craftsmanship',
      desc: 'Our engineering training emphasizes real-world software practices: version control, test coverage, code reviews, and maintainable systems.',
    },
    {
      title: 'Locally Rooted, Globally Standard',
      desc: 'We operate directly within Rwandan communities while upholding international software engineering standards and remote team practices.',
    },
    {
      title: 'Economic Mobility',
      desc: 'Every curriculum, tool, and service we build is judged by whether it moves African people into sustainable, high-impact careers.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B1C3A] via-[#0E2246] to-[#0B1C3A] text-white py-20 border-b border-slate-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              About AfriTech Bridge
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              AfriTech Bridge is a Rwanda-born technology company building digital infrastructure that helps people develop skills, prove their capabilities, and access economic opportunity.
            </p>
          </div>
        </Container>
      </section>

      {/* Story & Background Section */}
      <Section variant="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0B1C3A] tracking-tight">
                Closing the gap between study and proof.
              </h2>
              <p>
                Across Africa, millions of young people are investing their energy into technology learning. Yet traditional academic and boot camp pathways leave a critical void: certificates cannot prove what a developer can actually build under real pressure.
              </p>
              <p>
                AfriTech Bridge was founded in Rwanda to bridge this exact divide. We combine hands-on technical training, verified skill assessments, and real client engineering delivery to create an audit-ready Talent Passport for every engineer.
              </p>
              <p>
                By connecting this verified talent directly with startups and enterprises through TalentSphere and our engineering studio, we turn theoretical potential into durable careers and high-velocity software squads.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <div className="relative h-72 rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/services_section.png"
                    alt="AfriTech Bridge software and talent team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3A]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-mono text-[#3ECFB2] font-semibold">
                      Kigali • Musanze • Nyabihu
                    </p>
                    <p className="text-xs text-slate-200 mt-0.5">
                      Empowering tech talent from community hubs to international teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision Section */}
      <Section variant="surface" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="w-10 h-10 rounded-xl bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-sm mb-4">
                01
              </span>
              <h3 className="text-xl font-bold text-[#0B1C3A] mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {SITE_CONFIG.mission}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="w-10 h-10 rounded-xl bg-[#F07C2E]/10 text-[#F07C2E] flex items-center justify-center font-bold text-sm mb-4">
                02
              </span>
              <h3 className="text-xl font-bold text-[#0B1C3A] mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {SITE_CONFIG.vision}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Journey Flow */}
      <Section variant="white" spacing="lg">
        <Container>
          <SectionHeading
            title="The Unified Workforce Pipeline"
            description="Our end-to-end framework translating ambition into demonstrated capability and employment."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {WORKFORCE_JOURNEY_STEPS.map((s) => (
              <div
                key={s.id}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold block mb-1">
                    PHASE 0{s.step}
                  </span>
                  <h4 className="font-bold text-sm text-[#0B1C3A] mb-1 font-mono">
                    {s.label}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    {s.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Physical Locations Section */}
      <Section variant="surface" spacing="lg" id="locations">
        <Container>
          <SectionHeading
            title="Rooted in Rwanda"
            description="Active facilities where our engineers, mentors, and students build every day."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {SITE_CONFIG.locations.map((loc) => (
              <div
                key={loc.city}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#00A896]">
                    {loc.role}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1C3A] mb-1">{loc.city}</h3>
                <p className="text-xs font-mono text-[#F07C2E] mb-3">{loc.detail}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Leadership Team */}
      <Section variant="white" spacing="lg">
        <Container>
          <SectionHeading
            title="The People Driving the Mission"
            description="Passionate technologists committed to unlocking Africa's engineering potential."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 flex flex-col justify-between text-center"
              >
                <div>
                  <div className="w-20 h-20 rounded-full bg-[#00A896] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-sm">
                    {leader.initials}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1C3A]">{leader.name}</h3>
                  <p className="text-xs font-mono text-[#00A896] font-semibold mb-3">
                    {leader.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section variant="surface" spacing="lg">
        <Container>
          <SectionHeading
            title="What We Stand For"
            description="Our core values guide every curriculum we author, software system we deliver, and candidate we verify."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
              >
                <h3 className="text-base font-bold text-[#0B1C3A] mb-2">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section variant="dark" spacing="lg">
        <Container>
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Join Us on the Journey
            </h2>
            <p className="text-sm text-slate-300">
              Whether you are an aspiring builder, an employer hiring technical talent, or an organization seeking software development partners.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/internships/apply"
                className="px-6 py-3 rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white font-semibold text-xs transition-colors"
              >
                Apply for Residency
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
              >
                Contact AfriTech Bridge
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
