import { NavigationItem } from '@/types/site';
import SITE_CONFIG from '@/config/site';

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: 'Platform',
    href: '/#platform-ecosystem',
    description: 'The AfriTech workforce ecosystem & verified pipeline',
    children: [
      {
        label: 'AfriTech Learn',
        href: SITE_CONFIG.platforms.learn,
        isExternal: true,
        description: 'Industry-standard technical curriculum & project cohorts',
        badge: 'LMS',
      },
      {
        label: 'AfriTech Assess',
        href: '/#talent-passport',
        description: 'Practical evaluations, real challenges, verified proof',
      },
      {
        label: 'AfriTech Talent',
        href: '/#talent-passport',
        description: 'Verifiable Talent Passport and verified capability profiles',
        badge: 'Passport',
      },
      {
        label: 'AfriTech Work',
        href: SITE_CONFIG.platforms.jobs,
        isExternal: true,
        description: 'Jobs, internships, contract roles and remote opportunities',
      },
      {
        label: 'AfriTech Business',
        href: SITE_CONFIG.platforms.employers,
        isExternal: true,
        description: 'For organizations hiring proven, pre-assessed talent',
      },
    ],
  },
  {
    label: 'For Talent',
    href: '/#for-talent',
    description: 'Learn useful skills, build real projects, and get discovered',
    children: [
      {
        label: 'Career Pathways',
        href: '/courses',
        description: 'Explore full-stack, mobile, data, and design curriculum',
      },
      {
        label: 'Internship Program',
        href: '/internships/apply',
        description: 'Apply for structured hands-on work placement',
        badge: 'Applications Open',
      },
      {
        label: 'Jobs & Projects',
        href: SITE_CONFIG.platforms.jobs,
        isExternal: true,
        description: 'Connect with active roles on the TalentSphere portal',
      },
      {
        label: 'Talent Passport',
        href: '/#talent-passport',
        description: 'Showcase verified capabilities beyond traditional CVs',
      },
    ],
  },
  {
    label: 'For Employers',
    href: '/#for-employers',
    description: 'Hire pre-assessed developers with verifiable project proof',
    children: [
      {
        label: 'Hire Verified Talent',
        href: SITE_CONFIG.platforms.employers,
        isExternal: true,
        description: 'Discover candidates pre-evaluated on realistic technical problems',
      },
      {
        label: 'Custom Software Projects',
        href: '/services#technology',
        description: 'Deploy product squads for web, mobile, and custom systems',
      },
      {
        label: 'Workforce Development',
        href: '/contact?inquiry=employer',
        description: 'Upskill your engineering teams with custom enterprise cohorts',
      },
    ],
  },
  {
    label: 'Learning',
    href: '/courses',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Get Started',
    href: 'https://study.afritechbridge.online/courses',
    isExternal: true,
  },
];

export const FOOTER_COLUMNS = [
  {
    title: 'FOR TALENT',
    links: [
      { label: 'AfriTech Learn', href: SITE_CONFIG.platforms.learn, isExternal: true },
      { label: 'Technical Courses', href: '/courses' },
      { label: 'Internship Program', href: '/internships/apply' },
      { label: 'Talent Passport', href: '/#talent-passport' },
      { label: 'Job Opportunities', href: SITE_CONFIG.platforms.jobs, isExternal: true },
    ],
  },
  {
    title: 'FOR EMPLOYERS',
    links: [
      { label: 'Hire Verified Talent', href: SITE_CONFIG.platforms.employers, isExternal: true },
      { label: 'Software Development', href: '/services#technology' },
      { label: 'Workforce Solutions', href: '/services#workforce' },
      { label: 'Request a Product Squad', href: '/contact?inquiry=software' },
      { label: 'Post Opportunities', href: SITE_CONFIG.platforms.employers, isExternal: true },
    ],
  },
  {
    title: 'PLATFORMS',
    links: [
      { label: 'AfriTech Learn', href: SITE_CONFIG.platforms.learn, isExternal: true },
      { label: 'AfriTech Assess', href: '/#talent-passport' },
      { label: 'AfriTech Talent', href: '/#talent-passport' },
      { label: 'AfriTech Work (TalentSphere)', href: SITE_CONFIG.platforms.jobs, isExternal: true },
      { label: 'AfriTech Business', href: SITE_CONFIG.platforms.employers, isExternal: true },
      { label: 'Ijwi Ryajye (AgriTech)', href: '/#ecosystem' },
      { label: "Lady's Essence (HealthTech)", href: '/#ecosystem' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About AfriTech Bridge', href: '/about' },
      { label: 'Our Story & Mission', href: '/about#mission' },
      { label: 'Case Studies', href: '/#case-studies' },
      { label: 'Locations in Rwanda', href: '/about#locations' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];
