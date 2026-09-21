import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CASE_STUDIES } from '@/data/caseStudies';

export function CaseStudiesSection() {
  return (
    <Section variant="surface" spacing="lg" id="case-studies">
      <Container>
        <SectionHeading
          title="Case Studies & Real Deliverables"
          description="A selection of verifiable systems, platforms, and digital solutions engineered by AfriTech Bridge and our supervised technical talent."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00A896]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-[#0B1C3A] tracking-tight">
                    {cs.project}
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {cs.clientType}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-rose-600 font-bold tracking-wider mb-1">
                    Problem
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cs.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-[#00A896] font-bold tracking-wider mb-1">
                    What We Built
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cs.whatWeBuilt}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-1.5">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technology.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 bg-[#00A896]/5 p-3 rounded-xl border border-[#00A896]/20">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-[#008B7A] block">
                      Verified Result
                    </span>
                    <p className="text-xs text-slate-700 font-medium mt-0.5">
                      {cs.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default CaseStudiesSection;
