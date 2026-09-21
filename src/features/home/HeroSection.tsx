import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SITE_CONFIG from '@/config/site';
import { Container } from '@/components/ui/Container';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1C3A] via-[#0E2246] to-[#0B1C3A] text-white pt-16 pb-20 sm:pt-20 sm:pb-28">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#3ECFB2_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Subtle organic light accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A896]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F07C2E]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              From African potential to{' '}
              <span className="text-[#3ECFB2]">
                verified global talent.
              </span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              AfriTech Bridge helps people build practical skills, prove what they can do, and connect with meaningful opportunities in Africa and the global economy.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#journey"
                className="px-6 py-3.5 rounded-lg bg-[#F07C2E] hover:bg-[#E06C1E] text-white font-semibold text-sm sm:text-base text-center shadow-sm transition-colors"
              >
                Explore AfriTech
              </a>
              <a
                href="#for-employers"
                className="px-6 py-3.5 rounded-lg bg-[#0B1C3A] hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm sm:text-base text-center transition-colors"
              >
                For Employers
              </a>
              <Link
                href="/courses"
                className="px-5 py-3.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium text-center transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>Start Learning</span>
                <svg className="w-4 h-4 text-[#3ECFB2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Core Journey Formula Pill */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#3ECFB2]">
                <span>LEARN</span>
                <span className="text-slate-600">→</span>
                <span>BUILD</span>
                <span className="text-slate-600">→</span>
                <span>PROVE</span>
                <span className="text-slate-600">→</span>
                <span>WORK</span>
                <span className="text-slate-600">→</span>
                <span>GROW</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-slate-700/80 bg-[#122240] p-3 sm:p-4 shadow-2xl">
              {/* Primary Visual Image */}
              <div className="relative h-72 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/images/hero_section.png"
                  alt="African software developers collaborating on real production systems at AfriTech Bridge"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3A] via-transparent to-transparent opacity-80" />

                {/* Overlaid Verified Proof Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1C3A]/90 backdrop-blur-md border border-slate-700/80 p-3.5 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-[#3ECFB2] font-semibold">
                        PEOPLE + SKILLS + PROOF + OPPORTUNITY
                      </p>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Rooted in Rwanda • Operating across Kigali, Musanze & Nyabihu
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
