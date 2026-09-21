import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WORKFORCE_JOURNEY_STEPS } from '@/data/journey';

export function WorkforceJourneySection() {
  return (
    <Section variant="surface" spacing="lg" id="journey">
      <Container>
        <SectionHeading
          title="The AfriTech Workforce Journey"
          description="A structured methodology that transforms theoretical potential into verified engineering capability, direct employment, and sustained professional growth."
          align="center"
        />

        <div className="mt-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFORCE_JOURNEY_STEPS.map((step) => (
              <div
                key={step.id}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:border-[#00A896]/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      STEP 0{step.step}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#00A896]/10 text-[#00A896]">
                      {step.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1C3A] tracking-tight">
                    {step.label}
                  </h3>
                  <p className="text-xs font-medium text-[#F07C2E] uppercase tracking-wider mt-0.5 mb-3 font-mono">
                    {step.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-400 block mb-2 uppercase">
                    Deliverables & Standards:
                  </span>
                  <ul className="space-y-1.5">
                    {step.outcomes.map((outcome, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WorkforceJourneySection;
