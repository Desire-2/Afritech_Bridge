import { TalentPassportProfile } from '@/types/site';

/**
 * Illustrative Talent Passport Profile
 * Note: Clearly marked in UI as an illustrative preview demonstrating
 * how verified skills, evidence, and code reviews are presented on AfriTech Talent.
 */
export const SAMPLE_TALENT_PASSPORT: TalentPassportProfile = {
  name: 'Eric Manzi',
  title: 'Full-Stack Software Engineer',
  location: 'Kigali, Rwanda (Open to Global Remote)',
  status: 'Available for Hire',
  avatarSeed: 'EM',
  passportId: 'ATB-PASSPORT-2025-0482',
  completionScore: 96,
  verifiedSkills: [
    {
      name: 'TypeScript & Next.js',
      category: 'Frontend & Full-Stack',
      level: 'Advanced',
      verifiedDate: 'Verified',
      verifiedMethod: 'Evaluated on 3 production pull requests & timed benchmark',
    },
    {
      name: 'Python & FastAPI',
      category: 'Backend Architecture',
      level: 'Proficient',
      verifiedDate: 'Verified',
      verifiedMethod: 'REST API service design benchmark with 98% test coverage',
    },
    {
      name: 'PostgreSQL & SQL Modeling',
      category: 'Database Systems',
      level: 'Advanced',
      verifiedDate: 'Verified',
      verifiedMethod: 'Schema optimization & ACID transactional integrity audit',
    },
    {
      name: 'Git & Agile Collaboration',
      category: 'Workflows',
      level: 'Expert',
      verifiedDate: 'Verified',
      verifiedMethod: '6 months tracked sprint contributions and peer code reviews',
    },
    {
      name: 'Docker & Cloud Deployment',
      category: 'DevOps & Cloud',
      level: 'Proficient',
      verifiedDate: 'Verified',
      verifiedMethod: 'Automated container build and deployment verification',
    },
  ],
  evidence: [
    {
      title: 'Fintech Payment Webhook Reconciliation Service',
      type: 'Project',
      description: 'Engineered idempotent webhook processing service with Redis queue and automated retries.',
      metrics: '1,200 simulated req/min • 0 drop rate • 100% test coverage',
      verificationBadge: 'Verified Code Contribution',
    },
    {
      title: 'AfriTech Comprehensive Backend Benchmark',
      type: 'Assessment',
      description: 'Timed 4-hour live architectural debugging and database indexing challenge.',
      metrics: 'Top 5% Cohort Score • Audited by Lead Architect',
      verificationBadge: 'Proctored Technical Benchmark',
    },
    {
      title: 'Software Engineering Internship Residency',
      type: 'Experience',
      description: '6-month immersive placement building enterprise features on production web portals.',
      metrics: '42 merged PRs • Supervised by Senior Software Engineer',
      verificationBadge: 'Verified Work Placement',
    },
    {
      title: 'Senior Technical Lead Endorsement',
      type: 'Reference',
      description: '"Eric demonstrates mature software craftsmanship, clear communication, and dependable execution under sprint deadlines."',
      metrics: 'Verified Staff Engineer, AfriTech Bridge',
      verificationBadge: 'Direct Reference Verified',
    },
  ],
};
