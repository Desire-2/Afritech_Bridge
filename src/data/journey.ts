import { JourneyStep } from '@/types/site';

export const WORKFORCE_JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    id: 'learn',
    label: 'LEARN',
    tagline: 'Practical Skills First',
    description:
      'Candidates master foundational and modern engineering principles through intensive, hands-on technical curriculum rather than rote memorization.',
    outcomes: [
      'Full-Stack JavaScript & TypeScript',
      'Python & Data Engineering',
      'Mobile Frameworks (React Native, Flutter, Swift/Kotlin)',
      'Modern Cloud & API Architecture',
    ],
    highlight: 'Rigorous industry curriculum',
  },
  {
    step: 2,
    id: 'build',
    label: 'BUILD',
    tagline: 'Create Real Evidence',
    description:
      'Learners work directly on production-grade software projects, realistic microservices, open-source modules, and team sprint deliverables.',
    outcomes: [
      'Git version control & code review etiquette',
      'Realistic relational database schemas',
      'Complex API integrations and automated tests',
      'Deployments to real cloud environments',
    ],
    highlight: 'Real codebases, not toy exercises',
  },
  {
    step: 3,
    id: 'prove',
    label: 'PROVE',
    tagline: 'Demonstrate Capability',
    description:
      'Skills are verified through timed evaluations, system architecture reviews, code quality audits, and live engineering assessments.',
    outcomes: [
      'Automated challenge benchmarks',
      'Senior engineer technical review',
      'Code cleanliness & security checks',
      'Validated problem-solving metrics',
    ],
    highlight: 'Objective verification, zero guesswork',
  },
  {
    step: 4,
    id: 'passport',
    label: 'TALENT PASSPORT',
    tagline: 'Make Capability Visible',
    description:
      'All verified skills, completed projects, benchmark scores, and mentor recommendations are unified in a public, immutable digital profile.',
    outcomes: [
      'Shareable verified profile URL',
      'Direct links to inspected pull requests',
      'Skill level breakdown with proof badges',
      'Employer-ready capability dossier',
    ],
    highlight: 'Living proof replacing static CVs',
  },
  {
    step: 5,
    id: 'work',
    label: 'WORK',
    tagline: 'Connect to Opportunity',
    description:
      'Engineers are matched with vetted local and international companies, remote engineering contracts, and structured internship residencies.',
    outcomes: [
      'TalentSphere matching algorithm',
      'Internship placements with active mentorship',
      'International remote software roles',
      'Corporate engineering contracts',
    ],
    highlight: 'High-impact economic bridge',
  },
  {
    step: 6,
    id: 'grow',
    label: 'GROW',
    tagline: 'Continuous Advancement',
    description:
      'Careers flourish through ongoing senior mentorship, leadership development, specialization tracks, and lifetime alumni network support.',
    outcomes: [
      'Tech lead and architectural roadmaps',
      'Cross-border mentorship cohorts',
      'Alumni community collaboration',
      'Lifelong technical upskilling',
    ],
    highlight: 'Sustainable lifelong trajectory',
  },
];

export const BROKEN_JOURNEY_STEPS = [
  { step: 'LEARN', description: 'Theory-heavy courses with little practical coding' },
  { step: 'CERTIFICATE', description: 'Paper PDF with no verification of actual coding ability' },
  { step: 'CV', description: 'Self-reported bullet points that all look identical' },
  { step: 'APPLICATION', description: 'Mass-applying to job boards with 2% response rate' },
  { step: 'EMPLOYER GUESSES', description: 'Companies risk weeks of screening with unpredictable outcomes' },
];

export const AFRITECH_ALTERNATIVE_STEPS = [
  { step: 'LEARN', description: 'Production-standard engineering tracks focused on industry needs' },
  { step: 'BUILD', description: 'Real software products and inspected pull requests' },
  { step: 'PROVE', description: 'Strict performance evaluations and benchmarked challenges' },
  { step: 'TALENT PASSPORT', description: 'Transparent digital profile showing tangible code evidence' },
  { step: 'WORK', description: 'Direct matching to verified employers with mutual confidence' },
];
