import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import SITE_CONFIG from '@/config/site';

export function GlobalPositioningSection() {
  const presenceStages = [
    {
      region: 'RWANDA (ROOT & HEADQUARTERS)',
      status: 'Active Operations',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      details: [
        'Kigali HQ: Norrsken House, Kigali',
        'Musanze: Regional Learning Hub near INES Ruhengeri',
        'Nyabihu: Community Technology Center in Mukamira',
      ],
      desc: 'Our operational anchor where our core engineering teams, classrooms, and community initiatives are based.',
    },
    {
      region: 'EAST AFRICA',
      status: 'Regional Outreach',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      details: [
        'Cross-border regional talent sourcing',
        'Collaborations with East African technology organizations',
        'Blended remote learning participation',
      ],
      desc: 'Connecting developers and startups across neighboring ecosystems in Kenya, Uganda, Tanzania, and beyond.',
    },
    {
      region: 'CONTINENTAL AFRICA',
      status: 'Pan-African Pipeline',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      details: [
        'Pan-African developer community participation',
        'Standardized technical competency benchmarking',
        'TalentSphere decentralized matching',
      ],
      desc: 'Expanding our verifiable credentialing model to talent across Western, Southern, and Northern Africa.',
    },
    {
      region: 'GLOBAL MARKETPLACE',
      status: 'Connected Worldwide',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
      details: [
        'Remote engineering placements in North America & Europe',
        'Distributed product squads for global startups',
        'Direct employment and international contracting',
      ],
      desc: 'Enabling international engineering organizations to integrate pre-assessed African software engineers into their core teams.',
    },
  ];

  return (
    <Section variant="white" spacing="lg" id="positioning">
      <Container>
        <SectionHeading
          title={SITE_CONFIG.positioning}
          description="AfriTech Bridge is rooted in Rwanda and building technology that connects African people, organizations and talent to wider opportunities."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {presenceStages.map((stage, idx) => (
            <div
              key={stage.region}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00A896]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    STAGE 0{idx + 1}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold border ${stage.badgeColor}`}
                  >
                    {stage.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B1C3A] font-mono mb-2">
                  {stage.region}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                {stage.details.map((item, i) => (
                  <p key={i} className="text-[11px] text-slate-500 flex items-start gap-1.5">
                    <span className="text-[#00A896] font-bold">›</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default GlobalPositioningSection;
