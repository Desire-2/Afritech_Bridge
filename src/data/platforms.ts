import { PlatformProduct } from '@/types/site';
import SITE_CONFIG from '@/config/site';

export const WORKFORCE_PRODUCTS: PlatformProduct[] = [
  {
    id: 'learn',
    name: 'AfriTech Learn',
    tagline: 'Practical Skills Education',
    description:
      'Rigorous, project-first technical curriculum covering modern web architecture, mobile apps, data systems, and cloud fundamentals.',
    category: 'workforce',
    href: SITE_CONFIG.platforms.learn,
    isExternal: true,
    status: 'active',
    highlights: [
      'Production-standard engineering tracks',
      'Direct code reviews and project grading',
      'Cohorts in Kigali, Musanze, Nyabihu & online',
    ],
    metricsOrRole: 'Active Learning Platform',
  },
  {
    id: 'assess',
    name: 'AfriTech Assess',
    tagline: 'Skill Verification & Benchmarking',
    description:
      'Replacing paper certificates with performance-based technical challenges, code reviews, and scenario evaluations.',
    category: 'workforce',
    href: '#talent-passport',
    status: 'active',
    highlights: [
      'Automated code evaluation and style analysis',
      'Real-world bug resolution simulations',
      'Anti-plagiarism and original implementation audits',
    ],
    metricsOrRole: 'Verifiable Evaluation Engine',
  },
  {
    id: 'talent',
    name: 'AfriTech Talent',
    tagline: 'The Talent Passport Profile',
    description:
      'A verifiable digital identity combining proven project repositories, assessment badges, work history, and expert endorsements.',
    category: 'workforce',
    href: '#talent-passport',
    status: 'active',
    highlights: [
      'Evidence-backed capabilities replace generic CVs',
      'Public verifiable credentials and project links',
      'Transparent competency maps by technology stack',
    ],
    metricsOrRole: 'Digital Identity & Credentials',
  },
  {
    id: 'work',
    name: 'AfriTech Work',
    tagline: 'Opportunities & Career Gateway',
    description:
      'The bridge to global companies, regional tech firms, paid internships, and high-impact digital contracts.',
    category: 'workforce',
    href: SITE_CONFIG.platforms.jobs,
    isExternal: true,
    status: 'active',
    highlights: [
      'Direct matches between verified talent and open roles',
      'Internship placements with structured mentorship',
      'Full-time and remote international opportunities',
    ],
    metricsOrRole: 'TalentSphere Job Gateway',
  },
  {
    id: 'business',
    name: 'AfriTech Business',
    tagline: 'Employer Hiring & Workforce Squads',
    description:
      'Enables companies to discover vetted African engineers, evaluate work samples before interviewing, and hire with confidence.',
    category: 'workforce',
    href: SITE_CONFIG.platforms.employers,
    isExternal: true,
    status: 'active',
    highlights: [
      'Reduce screening time with pre-assessed candidates',
      'Custom technical team assembly for enterprise projects',
      'Direct onboarding support and retention monitoring',
    ],
    metricsOrRole: 'Employer Portal & Sourcing',
  },
];

export const VERTICAL_VENTURES: PlatformProduct[] = [
  {
    id: 'ijwi-ryajye',
    name: 'Ijwi Ryajye',
    tagline: 'Agricultural Community & Commerce',
    description:
      "A specialized vertical venture developed by AfriTech Bridge connecting rural smallholder farmers directly to market prices, buyers, and agronomy guidance.",
    category: 'venture',
    href: '/contact?inquiry=partnerships',
    status: 'venture',
    highlights: [
      'Local-language SMS and mobile accessibility',
      'Direct farm-gate market transparency',
      'Piloted across rural agricultural cooperatives in Rwanda',
    ],
    metricsOrRole: 'Agritech Social Enterprise Venture',
  },
  {
    id: 'ladys-essence',
    name: "Lady's Essence",
    tagline: "Women's Health & Wellness Technology",
    description:
      "A health technology initiative incubating digital resources, maternal guidance, and reproductive health wellness tools tailored for African women.",
    category: 'venture',
    href: '/contact?inquiry=partnerships',
    status: 'venture',
    highlights: [
      'Community health worker integration',
      'Confidential digital wellness tracking',
      'Incubated within AfriTech Bridge’s product studio',
    ],
    metricsOrRole: 'HealthTech Innovation Venture',
  },
];
