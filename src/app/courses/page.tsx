import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import SITE_CONFIG from '@/config/site';

export const metadata: Metadata = {
  title: 'Courses & Tech Education - AfriTech Learn',
  description:
    'Hands-on, production-focused technology training in full-stack web, Python backend, mobile apps, and cloud engineering across Kigali, Musanze, and Nyabihu.',
  alternates: {
    canonical: 'https://afritechbridge.online/courses',
  },
};

export default function CoursesPage() {
  const courseTracks = [
    {
      title: 'Full-Stack Web Engineering',
      tag: 'TypeScript • React • Next.js • Node.js',
      level: 'Foundations to Advanced',
      duration: '12 - 16 Weeks',
      desc: 'Build scalable modern web applications with strict type safety, responsive component design systems, and robust REST/GraphQL APIs.',
      modules: [
        'Modern TypeScript & ECMAScript Standards',
        'Component Architecture with React & Next.js App Router',
        'Server-Side APIs, Authentication & Database Migrations',
        'Production Deployment, CI/CD & Performance Optimization',
      ],
    },
    {
      title: 'Backend Systems & API Architecture',
      tag: 'Python • FastAPI • PostgreSQL • Docker',
      level: 'Intermediate to Advanced',
      duration: '12 Weeks',
      desc: 'Master transactional database design, asynchronous microservices, containerization, and API security benchmarks.',
      modules: [
        'Relational Schema Modeling with PostgreSQL & SQL',
        'High-Performance REST APIs with Python & FastAPI',
        'Caching, Message Queues & Background Workers',
        'Containerization with Docker & Cloud Infrastructure',
      ],
    },
    {
      title: 'Mobile Application Development',
      tag: 'React Native • TypeScript • Mobile APIs',
      level: 'Intermediate',
      duration: '12 Weeks',
      desc: 'Develop cross-platform mobile apps for iOS and Android with offline synchronization, device sensors, and native styling.',
      modules: [
        'Cross-Platform UI Architecture & Navigation',
        'Local Storage, Offline Caching & Background Tasks',
        'Hardware Integration (Camera, Biometrics, Geolocation)',
        'App Store & Google Play Submission Standards',
      ],
    },
    {
      title: 'Practical Software Internship Residency',
      tag: 'Real Client Codebases • Senior PR Reviews',
      level: 'Graduate / Pre-Employment',
      duration: '3 - 6 Months',
      desc: 'Work directly inside supervised engineering squads, writing production code, participating in sprint rituals, and earning your Talent Passport.',
      modules: [
        'Daily Standups, Sprint Planning & Git Branch Workflows',
        'Code Reviews by Senior Engineers',
        'Production Bug Fixing & Feature Delivery',
        'Talent Passport Assessment & Job Matching',
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B1C3A] via-[#0E2246] to-[#0B1C3A] text-white py-20 border-b border-slate-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Practical Technology Education
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Curriculums engineered for production readiness. Build real software, submit reviewed pull requests, and earn verified credentials on your Talent Passport.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE_CONFIG.platforms.learning}
                target="_blank"
                rel="noreferrer noopener"
                className="px-6 py-3 rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Access AfriTech Learn LMS</span>
                <span>→</span>
              </a>
              <Link
                href="/internships/apply"
                className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors border border-slate-700"
              >
                Apply for Residency
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Course Offerings Section */}
      <Section variant="white" spacing="lg">
        <Container>
          <SectionHeading
            title="Industry-Aligned Engineering Curriculums"
            description="Taught in-person across our Kigali, Musanze, and Nyabihu centers as well as through interactive online cohort cohorts."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {courseTracks.map((track) => (
              <div
                key={track.title}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00A896]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#00A896] font-semibold bg-[#00A896]/10 px-2.5 py-0.5 rounded-full">
                      {track.level}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {track.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1C3A] mb-1">
                    {track.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F07C2E] uppercase font-semibold mb-3">
                    {track.tag}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {track.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block mb-1">
                      Key Curriculum Modules:
                    </span>
                    {track.modules.map((mod, i) => (
                      <p key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-[#00A896] font-bold">›</span>
                        <span>{mod}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Includes Talent Passport Verification</span>
                  <a
                    href={SITE_CONFIG.platforms.learning}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs font-semibold text-[#00A896] hover:text-[#008B7A] inline-flex items-center gap-1"
                  >
                    <span>Enroll on LMS</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Learning Hubs Banner */}
      <Section variant="surface" spacing="lg">
        <Container>
          <div className="rounded-2xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-2xs text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C3A]">
              Study in our Community Technology Centers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide high-speed internet, dedicated workstations, mentor office hours, and collaborative spaces across our locations in Kigali (Norrsken House), Musanze (near INES), and Nyabihu (Mukamira).
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B1C3A] hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
              >
                <span>Visit a Learning Center</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
