'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { OpportunityItem, getFeaturedOpportunities } from '@/services/opportunities/opportunityService';
import SITE_CONFIG from '@/config/site';

export function FeaturedOpportunitiesSection() {
  const [opportunities, setOpportunities] = useState<OpportunityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getFeaturedOpportunities(3)
      .then((items) => {
        if (isMounted) {
          setOpportunities(items);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Section variant="white" spacing="lg" id="opportunities">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <SectionHeading
              title="Jobs, Internships & Remote Roles"
              description="A concise gateway to active technical openings connected through AfriTech Bridge and our hiring partner network."
              align="left"
              className="mb-0"
            />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/internships/apply"
              className="px-4 py-2 rounded-lg bg-[#00A896]/10 text-[#00A896] hover:bg-[#00A896]/20 text-xs font-semibold transition-colors"
            >
              Internship Application
            </Link>
            <a
              href={SITE_CONFIG.platforms.jobs}
              target="_blank"
              rel="noreferrer noopener"
              className="px-4 py-2 rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white text-xs font-semibold transition-colors inline-flex items-center gap-1"
            >
              <span>Explore All Jobs</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Opportunity Cards */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 animate-pulse h-48"
              />
            ))}
          </div>
        ) : opportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((opp) => (
              <a
                key={opp.id}
                href={opp.detailsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00A896]/60 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {opp.employmentType}
                    </span>
                    {opp.isRemote && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                        Remote Friendly
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-[#0B1C3A] group-hover:text-[#00A896] transition-colors leading-snug mb-1">
                    {opp.title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-3">{opp.company} • {opp.location}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {opp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00A896]/10 text-[#00A896]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#00A896] group-hover:translate-x-1 transition-transform">
                    <span>View Role Details</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <p className="text-sm text-slate-600 mb-4">
              Explore active listings directly on the TalentSphere portal.
            </p>
            <a
              href={SITE_CONFIG.platforms.jobs}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F07C2E] text-white text-xs font-semibold"
            >
              <span>Visit TalentSphere Portal</span>
              <span>→</span>
            </a>
          </div>
        )}

        {/* Supporting note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Opportunities are managed through AfriTech Work on the TalentSphere portal.
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedOpportunitiesSection;
