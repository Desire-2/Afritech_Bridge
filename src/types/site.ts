export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  description?: string;
  children?: NavigationItem[];
}

export interface PlatformProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'workforce' | 'venture';
  href: string;
  isExternal?: boolean;
  status: 'active' | 'expanding' | 'venture';
  highlights: string[];
  metricsOrRole?: string;
}

export interface JourneyStep {
  step: number;
  id: string;
  label: string;
  tagline: string;
  description: string;
  outcomes: string[];
  highlight: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  deliverables?: string[];
  targetAudience?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  items: ServiceItem[];
}

export interface CaseStudy {
  id: string;
  project: string;
  clientType: string;
  problem: string;
  whatWeBuilt: string;
  technology: string[];
  result: string;
}

export interface TalentPassportSkill {
  name: string;
  category: string;
  level: 'Proficient' | 'Advanced' | 'Expert';
  verifiedDate: string;
  verifiedMethod: string;
}

export interface TalentPassportEvidence {
  title: string;
  type: 'Project' | 'Assessment' | 'Experience' | 'Reference';
  description: string;
  metrics: string;
  verificationBadge: string;
}

export interface TalentPassportProfile {
  name: string;
  title: string;
  location: string;
  status: string;
  avatarSeed: string;
  verifiedSkills: TalentPassportSkill[];
  evidence: TalentPassportEvidence[];
  completionScore: number;
  passportId: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  companyOrTrack: string;
  quote: string;
  avatarInitials: string;
  verifiedType: 'Alumni' | 'Employer' | 'Partner';
}
