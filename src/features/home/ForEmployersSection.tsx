import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import SITE_CONFIG from '@/config/site';

export function ForEmployersSection() {
  const workflow = [
    {
      step: '01',
      title: 'DEFINE',
      sub: 'Role + Core Skills',
      description: 'Specify your exact tech stack requirements, engineering level, and team timezone constraints.',
    },
    {
      step: '02',
      title: 'DISCOVER',
      sub: 'Verified Talent',
      description: 'Search curated African software developers pre-vetted through production-standard exercises.',
    },
    {
      step: '03',
      title: 'ASSESS',
      sub: 'Practical Evaluation',
      description: 'Audit audited code contributions, benchmark challenge scores, and architectural reviews.',
    },
    {
      step: '04',
      title: 'SHORTLIST',
      sub: 'Evidence-Rich Profiles',
      description: 'Inspect live pull requests, PR review habits, and proctored technical evaluations.',
    },
    {
      step: '05',
      title: 'HIRE',
      sub: 'Interview + Offer',
      description: 'Conduct focused final-round discussions with pre-qualified candidates and make offers with confidence.',
    },
    {
      step: '06',
      title: 'GROW',
      sub: 'Workforce Retention',
      description: 'Accelerate team velocity with ongoing mentorship and continuous skill upskilling support.',
    },
  ];

  return (
    <Section variant="surface" spacing="lg" id="for-employers">
      <Container>
        <SectionHeading
          title="Find people by what they can do."
          description="Traditional tech hiring relies on unverified resumes and weeks of repetitive interviews. AfriTech Bridge provides pre-assessed African engineering talent with verifiable work samples."
          align="center"
        />

        {/* 6-step workflow cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#00A896]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#F07C2E]">
                    PHASE {item.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                    {item.sub}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1C3A] font-mono mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-mono text-[#00A896]">
                <span>Reduced hiring risk</span>
              </div>
            </div>
          ))}
        </div>

        {/* Employer Action Banner */}
        <div className="mt-12 rounded-2xl bg-[#0B1C3A] text-white p-8 sm:p-10 border border-slate-700/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-2xl font-bold tracking-tight text-white">
              Ready to hire verified African engineering talent?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Access the TalentSphere employer dashboard, review candidate portfolios, or discuss a dedicated software development squad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.platforms.employers}
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-3.5 rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white font-semibold text-sm shadow-sm transition-colors text-center w-full sm:w-auto"
            >
              Hire Talent (Employer Portal) →
            </a>
            <Link
              href="/contact?inquiry=employer"
              className="px-5 py-3.5 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 text-sm font-semibold transition-colors text-center w-full sm:w-auto"
            >
              Speak with Talent Lead
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ForEmployersSection;
