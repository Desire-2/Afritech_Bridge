import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import SITE_CONFIG from '@/config/site';

export function ForTalentSection() {
  const steps = [
    { name: 'LEARN', desc: 'Practical full-stack, mobile, and cloud software engineering.' },
    { name: 'BUILD', desc: 'Produce real codebases, API integrations, and team repositories.' },
    { name: 'PROVE', desc: 'Take objective skill benchmarks evaluated by senior developers.' },
    { name: 'SHOW', desc: 'Publish an audit-ready Talent Passport showcasing your code.' },
    { name: 'WORK', desc: 'Access internships, contracts, and full-time remote engineering roles.' },
    { name: 'GROW', desc: 'Advance with continuing education, senior mentorship, and leadership.' },
  ];

  return (
    <Section variant="white" spacing="lg" id="for-talent">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              title="Learn useful skills. Prove them. Get discovered."
              description="Stop applying into black holes with static CVs. AfriTech Bridge equips you with modern engineering practices and creates verifiable proof of your capabilities that employers can trust."
              align="left"
              className="mb-6"
            />

            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="w-6 h-6 rounded-full bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">Industry-Standard Curriculum</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    TypeScript, React/Next.js, Python, PostgreSQL, Docker, Git workflows, and cloud deployments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="w-6 h-6 rounded-full bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">Structured Internship Residencies</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Spend 3 to 6 months writing code alongside experienced senior architects on real client modules.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="w-6 h-6 rounded-full bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900">Direct Gateway to Opportunity</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Showcase your verified profile on the TalentSphere job portal for local and global matching.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.platforms.jobs}
                target="_blank"
                rel="noreferrer noopener"
                className="px-6 py-3.5 rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white font-semibold text-sm text-center shadow-sm transition-colors"
              >
                Build Your Career (TalentSphere) →
              </a>
              <Link
                href="/internships/apply"
                className="px-5 py-3.5 rounded-lg border border-slate-300 text-slate-800 font-semibold text-sm text-center hover:bg-slate-50 transition-colors"
              >
                Apply for Internship
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Vertical Flow */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                The Talent Progression Path
              </h3>
              <div className="space-y-3">
                {steps.map((s, i) => (
                  <div
                    key={s.name}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3.5 shadow-2xs hover:border-[#00A896]/40 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#00A896]/10 text-[#00A896] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900 font-mono">{s.name}</h4>
                        <span className="text-[10px] font-mono text-slate-400">Step {i + 1} of 6</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ForTalentSection;
