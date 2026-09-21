import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/features/home/HeroSection';
import { ProblemSection } from '@/features/home/ProblemSection';
import { WorkforceJourneySection } from '@/features/home/WorkforceJourneySection';
import { TalentPassportSection } from '@/features/home/TalentPassportSection';
import { ForTalentSection } from '@/features/home/ForTalentSection';
import { ForEmployersSection } from '@/features/home/ForEmployersSection';
import { SoftwareTechSection } from '@/features/home/SoftwareTechSection';
import { ProductEcosystemSection } from '@/features/home/ProductEcosystemSection';
import { GlobalPositioningSection } from '@/features/home/GlobalPositioningSection';
import { CaseStudiesSection } from '@/features/home/CaseStudiesSection';
import { FeaturedOpportunitiesSection } from '@/features/home/FeaturedOpportunitiesSection';
import { CTASection } from '@/features/home/CTASection';
import SITE_CONFIG from '@/config/site';

export const metadata: Metadata = {
  title: 'AfriTech Bridge - From African Potential to Verified Global Talent',
  description:
    'AfriTech Bridge turns African potential into verified global talent. Build practical skills, prove capability through the Talent Passport, and connect with global opportunities. Built in Africa. Connected to the world.',
  alternates: {
    canonical: 'https://afritechbridge.online',
  },
};

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://afritechbridge.online/#organization',
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/images/logo.png`,
        description: SITE_CONFIG.tagline,
        slogan: SITE_CONFIG.positioning,
        sameAs: [
          SITE_CONFIG.socials.linkedin,
          SITE_CONFIG.socials.twitter,
          SITE_CONFIG.socials.github,
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Norrsken House',
          addressLocality: 'Kigali',
          addressCountry: 'RW',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://afritechbridge.online/#website',
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.subtagline,
        publisher: {
          '@id': 'https://afritechbridge.online/#organization',
        },
      },
    ],
  };

  return (
    <div className="w-full">
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 1. Hero: Positioning & Immediate Value */}
      <HeroSection />

      {/* 2. Problem: Fragmented Traditional Journey vs. AfriTech Pipeline */}
      <ProblemSection />

      {/* 3. Core Workforce Journey: LEARN → BUILD → PROVE → TALENT PASSPORT → WORK → GROW */}
      <WorkforceJourneySection />

      {/* 4. Talent Passport: The Proof Layer */}
      <TalentPassportSection />

      {/* 5. For Talent: Pathways & Opportunities */}
      <ForTalentSection />

      {/* 6. For Employers: Practical Evaluation & Hiring Pipeline */}
      <ForEmployersSection />

      {/* 7. Software Engineering Studio: Digital Products for Real Organizations */}
      <SoftwareTechSection />

      {/* 8. Product Ecosystem: Workforce Suite & Incubated Vertical Ventures */}
      <ProductEcosystemSection />

      {/* 9. Geographic & Global Positioning: Built in Africa. Connected to the World */}
      <GlobalPositioningSection />

      {/* 10. Case Studies: Problems, Architecture & Verified Outcomes */}
      <CaseStudiesSection />

      {/* 11. Featured Opportunities: TalentSphere Gateway */}
      <FeaturedOpportunitiesSection />

      {/* 12. Unifying Call to Action Hub */}
      <CTASection />
    </div>
  );
}
