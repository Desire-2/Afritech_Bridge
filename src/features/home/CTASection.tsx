import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import SITE_CONFIG from '@/config/site';

export function CTASection() {
  return (
    <Section variant="dark" spacing="xl" id="cta-hub">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0B1C3A] via-[#102446] to-[#0A2038] border border-slate-700/80 p-8 sm:p-14 lg:p-16 text-center max-w-5xl mx-auto shadow-2xl overflow-hidden">
          {/* Subtle ambient circle */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#00A896]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F07C2E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#3ECFB2]/15 text-[#3ECFB2] border border-[#3ECFB2]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECFB2]" />
              {SITE_CONFIG.positioning}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Ready to turn potential into verified capability?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you are an aspiring engineer ready to build demonstrable proof, or an organization seeking pre-assessed African technology talent, AfriTech Bridge is your gateway.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/internships/apply"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white font-semibold text-sm transition-colors shadow-sm text-center"
              >
                Apply for Internship Residency
              </Link>
              <a
                href={SITE_CONFIG.platforms.employers}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold text-sm transition-colors text-center"
              >
                Hire Verified Talent (Employers)
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors text-center"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-700/60 text-xs font-mono text-slate-400">
              Kigali (Norrsken House) • Musanze (near INES) • Nyabihu (Mukamira)
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default CTASection;
