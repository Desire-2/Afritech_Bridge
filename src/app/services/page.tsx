import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SERVICE_CATEGORIES } from '@/data/services';
import SITE_CONFIG from '@/config/site';

export const metadata: Metadata = {
  title: 'Services & Solutions - AfriTech Bridge',
  description:
    'Comprehensive workforce development, verified talent sourcing, enterprise software engineering, and structured engineering internships.',
  alternates: {
    canonical: 'https://afritechbridge.online/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B1C3A] via-[#0E2246] to-[#0B1C3A] text-white py-20 border-b border-slate-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Services & Capabilities
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We help organizations build mission-critical digital systems and connect with pre-assessed African software engineers through verifiable talent pathways.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href="#workforce"
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 transition-colors"
              >
                01 • Workforce & Talent
              </a>
              <a
                href="#employer"
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 transition-colors"
              >
                02 • Employer Hiring Solutions
              </a>
              <a
                href="#technology"
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 transition-colors"
              >
                03 • Software Development
              </a>
              <a
                href="#local-services"
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 transition-colors"
              >
                04 • Regional Tech Hubs
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Structured Service Categories */}
      {SERVICE_CATEGORIES.map((category, catIdx) => {
        const isDark = catIdx % 2 === 1;
        return (
          <Section
            key={category.id}
            variant={isDark ? 'dark' : catIdx === 0 ? 'white' : 'surface'}
            spacing="lg"
            id={category.id}
          >
            <Container>
              <SectionHeading
                title={category.title}
                description={category.description}
                theme={isDark ? 'dark' : 'light'}
                align="left"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all ${
                      isDark
                        ? 'bg-slate-800/60 border border-slate-700 hover:border-[#3ECFB2]/50'
                        : 'bg-white border border-slate-200/90 shadow-2xs hover:border-[#00A896]/60'
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        {item.targetAudience && (
                          <span
                            className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-semibold uppercase block w-fit mb-2 ${
                              isDark
                                ? 'bg-[#3ECFB2]/15 text-[#3ECFB2]'
                                : 'bg-[#00A896]/10 text-[#00A896]'
                            }`}
                          >
                            For: {item.targetAudience}
                          </span>
                        )}
                        <h3
                          className={`text-xl font-bold tracking-tight ${
                            isDark ? 'text-white' : 'text-[#0B1C3A]'
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {item.description}
                      </p>

                      <div>
                        <h4
                          className={`text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          Key Capabilities & Deliverables
                        </h4>
                        <ul className="space-y-1.5">
                          {item.features.map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className={`text-xs flex items-start gap-2 ${
                                isDark ? 'text-slate-300' : 'text-slate-700'
                              }`}
                            >
                              <span className="text-[#00A896] font-bold">›</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {item.deliverables && (
                        <div className="pt-2">
                          <h4
                            className={`text-[11px] font-mono font-bold uppercase tracking-wider mb-1.5 ${
                              isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}
                          >
                            Standard Deliverables
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.deliverables.map((d) => (
                              <span
                                key={d}
                                className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                                  isDark
                                    ? 'bg-slate-900 text-slate-300 border-slate-700'
                                    : 'bg-slate-50 text-slate-700 border-slate-200'
                                }`}
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={`mt-6 pt-4 border-t flex items-center justify-between ${
                        isDark ? 'border-slate-700' : 'border-slate-100'
                      }`}
                    >
                      <Link
                        href={`/contact?inquiry=${category.id}`}
                        className={`text-xs font-semibold inline-flex items-center gap-1 ${
                          isDark
                            ? 'text-[#3ECFB2] hover:underline'
                            : 'text-[#00A896] hover:text-[#008B7A]'
                        }`}
                      >
                        <span>Discuss this solution</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Bottom Conversion Banner */}
      <Section variant="dark" spacing="lg">
        <Container>
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Have a custom technical challenge?
            </h2>
            <p className="text-sm text-slate-300">
              Speak directly with our technical architecture team in Kigali to scope your requirements, timeline, and delivery team.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white font-semibold text-xs transition-colors"
              >
                Discuss a Project
              </Link>
              <a
                href={SITE_CONFIG.platforms.employers}
                target="_blank"
                rel="noreferrer noopener"
                className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
              >
                Hire Through TalentSphere →
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
