/**
 * Centralized Site and Platform Configuration
 * AfriTech Bridge: From African potential to verified global talent.
 */

export const SITE_CONFIG = {
  name: 'AfriTech Bridge',
  legalName: 'AfriTech Bridge Ltd',
  tagline: 'From African potential to verified global talent.',
  subtagline: 'AfriTech Bridge helps people build practical skills, prove what they can do, and connect with meaningful opportunities in Africa and the global economy.',
  positioning: 'Built in Africa. Connected to the world.',
  journeyFormula: 'LEARN → BUILD → PROVE → WORK → GROW',
  url: 'https://afritechbridge.online',
  ogImage: '/images/hero_section.png',
  
  contact: {
    email: 'info@afritechbridge.online',
    fallbackEmail: 'afritech.bridge@yahoo.com',
    phone: '+250 780 784 924',
    phoneFormatted: '+250780784924',
    address: 'Norrsken House, Kigali, Rwanda',
  },

  locations: [
    {
      city: 'Kigali',
      role: 'Headquarters & Innovation Hub',
      detail: 'Norrsken House, Kigali, Rwanda',
    },
    {
      city: 'Musanze',
      role: 'Northern Region Learning Center',
      detail: 'Near INES Ruhengeri, Musanze, Rwanda',
    },
    {
      city: 'Nyabihu',
      role: 'Community Technology Center',
      detail: 'Mukamira, Nyabihu, Rwanda',
    },
  ],

  platforms: {
    learn: 'https://study.afritechbridge.online',
    courses: 'https://study.afritechbridge.online/courses',
    jobs: 'https://jobs.afritechbridge.online',
    employers: 'https://jobs.afritechbridge.online/employer',
    internships: '/internships/apply',
  },

  socials: {
    twitter: 'https://twitter.com/afritechbridge',
    linkedin: 'https://linkedin.com/company/afritech-bridge',
    github: 'https://github.com/Desire-2',
  },
} as const;

export default SITE_CONFIG;
