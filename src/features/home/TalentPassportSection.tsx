import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TalentPassportCard } from '@/components/ui/TalentPassportCard';
import SITE_CONFIG from '@/config/site';

export function TalentPassportSection() {
  return (
    <Section variant="dark" spacing="xl" id="talent-passport">
      <Container>
        <SectionHeading
          title="Make your capability visible."
          description="A professional digital profile built from demonstrated skills, production code contributions, proctored assessments, and verified experience."
          theme="dark"
          align="center"
        />

        {/* Feature Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
            <h4 className="text-sm font-bold text-white mb-1">Production PRs</h4>
            <p className="text-xs text-slate-400">
              Evaluated on real GitHub pull requests, architecture conventions, and clean syntax.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
            <h4 className="text-sm font-bold text-white mb-1">Proctored Benchmarks</h4>
            <p className="text-xs text-slate-400">
              Timed technical challenges evaluating algorithmic problem solving, API security, and database speed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
            <h4 className="text-sm font-bold text-white mb-1">Immutable Passport ID</h4>
            <p className="text-xs text-slate-400">
              A public, shareable verification record employers can audit instantly without credential fraud.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
            <h4 className="text-sm font-bold text-white mb-1">TalentSphere Match</h4>
            <p className="text-xs text-slate-400">
              Automatic matching with international engineering teams seeking verified stack competencies.
            </p>
          </div>
        </div>

        {/* Illustrative Preview */}
        <div className="max-w-4xl mx-auto">
          <TalentPassportCard />
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/internships/apply"
            className="px-6 py-3 rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white font-semibold text-sm transition-colors shadow-sm"
          >
            Apply to Build Your Talent Passport
          </a>
          <a
            href={SITE_CONFIG.platforms.employers}
            target="_blank"
            rel="noreferrer noopener"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-colors"
          >
            Review Verified Profiles (Employer Portal) →
          </a>
        </div>
      </Container>
    </Section>
  );
}

export default TalentPassportSection;
