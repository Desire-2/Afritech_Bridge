import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function SoftwareTechSection() {
  const capabilities = [
    {
      title: 'Web Applications',
      tag: 'Next.js / React / TypeScript',
      desc: 'High-performance web apps, enterprise portals, and SaaS solutions engineered for fast load speeds and scale.',
    },
    {
      title: 'Mobile Applications',
      tag: 'React Native / Flutter / Swift',
      desc: 'Native and cross-platform mobile apps for iOS and Android with offline-first support and localized payment flows.',
    },
    {
      title: 'Custom Software Systems',
      tag: 'PostgreSQL / Node / Python',
      desc: 'Tailored backend microservices, transactional databases, and workflow automation engines built for real business operations.',
    },
    {
      title: 'UI/UX & Product Design',
      tag: 'Figma / Design Systems',
      desc: 'Human-centered user interfaces, intuitive dashboards, and brand identities crafted for African and international users.',
    },
    {
      title: 'Digital Transformation',
      tag: 'Cloud Migration / Audits',
      desc: 'Modernizing legacy paper processes and manual spreadsheets into reliable, secure cloud workflows.',
    },
    {
      title: 'Workforce & Learning Systems',
      tag: 'LMS / Talent Portals',
      desc: 'Specialized educational software, automated skill test engines, and candidate evaluation dashboards.',
    },
  ];

  return (
    <Section variant="white" spacing="lg" id="software">
      <Container>
        <SectionHeading
          title="Technology built for real organizations."
          description="AfriTech Bridge builds digital products and software for organizations while creating practical, supervised opportunities for African technology professionals."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#00A896]/50 shadow-2xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#00A896] bg-[#00A896]/10 px-2.5 py-1 rounded-full font-semibold inline-block mb-3">
                  {cap.tag}
                </span>
                <h3 className="text-lg font-bold text-[#0B1C3A] mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Enterprise Standard</span>
                <Link
                  href="/services#technology"
                  className="text-xs font-semibold text-[#00A896] hover:text-[#008B7A] inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact?inquiry=software"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0B1C3A] hover:bg-[#152D56] text-white text-sm font-semibold transition-colors"
          >
            <span>Discuss a Software Project</span>
            <svg className="w-4 h-4 text-[#3ECFB2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default SoftwareTechSection;
