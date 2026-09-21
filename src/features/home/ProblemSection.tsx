import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BROKEN_JOURNEY_STEPS, AFRITECH_ALTERNATIVE_STEPS } from '@/data/journey';

export function ProblemSection() {
  return (
    <Section variant="white" spacing="lg" id="problem">
      <Container>
        <SectionHeading
          title="Skills alone are not enough. People need proof and opportunity."
          description="Across the African continent, ambitious developers spend months studying theory and earning certificates, yet still struggle to demonstrate tangible capability to employers."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 items-stretch">
          {/* Fragmented Traditional Journey */}
          <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-200">
                <h3 className="text-xl font-bold text-slate-900">
                  Traditional Credentialing
                </h3>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700">
                  Guesswork High
                </span>
              </div>

              <div className="space-y-4">
                {BROKEN_JOURNEY_STEPS.map((step, idx) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-mono font-bold text-xs flex items-center justify-center border border-rose-200 shrink-0">
                        {idx + 1}
                      </span>
                      {idx < BROKEN_JOURNEY_STEPS.length - 1 && (
                        <div className="w-0.5 h-6 bg-rose-200 my-1" />
                      )}
                    </div>
                    <div className="pt-0.5">
                      <h4 className="font-bold text-sm text-slate-800 font-mono">{step.step}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-200/80 text-xs text-rose-800 font-medium">
              Result: Developers remain invisible; employers rely on expensive, lengthy trial-and-error.
            </div>
          </div>

          {/* AfriTech Alternative */}
          <div className="rounded-2xl border border-[#00A896]/40 bg-[#00A896]/5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#00A896]/20">
                <h3 className="text-xl font-bold text-slate-900">
                  Verified Capability Pipeline
                </h3>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#00A896]/15 text-[#00A896]">
                  Verified Proof
                </span>
              </div>

              <div className="space-y-4">
                {AFRITECH_ALTERNATIVE_STEPS.map((step, idx) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <span className="w-8 h-8 rounded-full bg-[#00A896] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                        {idx + 1}
                      </span>
                      {idx < AFRITECH_ALTERNATIVE_STEPS.length - 1 && (
                        <div className="w-0.5 h-6 bg-[#00A896]/30 my-1" />
                      )}
                    </div>
                    <div className="pt-0.5">
                      <h4 className="font-bold text-sm text-[#0B1C3A] font-mono">{step.step}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#00A896]/20 text-xs text-[#008B7A] font-medium">
              Result: Transparent capability, reduced hiring friction, and dependable careers.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ProblemSection;
