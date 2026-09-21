import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WORKFORCE_PRODUCTS, VERTICAL_VENTURES } from '@/data/platforms';

export function ProductEcosystemSection() {
  return (
    <Section variant="surface" spacing="lg" id="platform-ecosystem">
      <Container>
        <SectionHeading
          title="The AfriTech Bridge Ecosystem"
          description="A unified portfolio of interconnected platforms powering talent verification, workforce matching, and high-impact African digital ventures."
          align="center"
        />

        {/* 1. Core Workforce Products */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A896]" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-800">
              Workforce & Talent Infrastructure (Parent Platform)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFORCE_PRODUCTS.map((prod) => {
              const isExt = prod.isExternal || prod.href.startsWith('http');
              return (
                <div
                  key={prod.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00A896]/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                        {prod.metricsOrRole}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>

                    <h4 className="text-xl font-bold text-[#0B1C3A] tracking-tight">
                      {prod.name}
                    </h4>
                    <p className="text-xs font-mono font-medium text-[#F07C2E] uppercase mt-0.5 mb-3">
                      {prod.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <ul className="space-y-1.5 mb-4">
                      {prod.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="text-[#00A896] font-bold">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={prod.href}
                      target={isExt ? '_blank' : undefined}
                      rel={isExt ? 'noreferrer noopener' : undefined}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#00A896] hover:text-[#008B7A] transition-colors"
                    >
                      <span>Explore {prod.name}</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Vertical Ventures */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F07C2E]" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-800">
              Specialized Vertical Ventures (Incubated & Operated by AfriTech Bridge)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VERTICAL_VENTURES.map((v) => (
              <div
                key={v.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#F07C2E]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-[#F07C2E] bg-[#F07C2E]/10 px-2.5 py-0.5 rounded-full font-bold uppercase">
                      Vertical Venture
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Affiliated Product</span>
                  </div>

                  <h4 className="text-2xl font-bold text-[#0B1C3A] tracking-tight">
                    {v.name}
                  </h4>
                  <p className="text-xs font-mono font-medium text-slate-500 uppercase mt-0.5 mb-3">
                    {v.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {v.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {v.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-[#F07C2E] font-bold">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Parent: AfriTech Bridge Ltd</span>
                  <a
                    href={v.href}
                    className="text-xs font-semibold text-[#0B1C3A] hover:text-[#00A896] inline-flex items-center gap-1"
                  >
                    <span>Venture details & partnerships</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ProductEcosystemSection;
