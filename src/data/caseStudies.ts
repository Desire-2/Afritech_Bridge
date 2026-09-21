import { CaseStudy } from '@/types/site';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'talentsphere-portal',
    project: 'TalentSphere Job & Workforce Gateway',
    clientType: 'Workforce Platform / AfriTech Ecosystem',
    problem:
      'African developers struggled to find verified opportunities with reliable hiring terms, while employers found it difficult to vet engineering candidates remotely based only on paper resumes.',
    whatWeBuilt:
      'Engineered a comprehensive talent matching portal with candidate profiles, multi-tag search, employer application tracking, and an automated internship application pipeline.',
    technology: ['Next.js', 'TypeScript', 'Node.js API', 'PostgreSQL', 'Tailwind CSS'],
    result:
      'Successfully connected hundreds of candidates with structured internships and jobs, reducing initial screening time for partner employers.',
  },
  {
    id: 'afritech-learn-lms',
    project: 'AfriTech Learn Learning Management System',
    clientType: 'Educational Platform / Regional Campuses',
    problem:
      'Managing physical courses across Kigali, Musanze, and Nyabihu alongside online learners required a centralized hub for curricula, project submissions, and code reviews.',
    whatWeBuilt:
      'Constructed a cloud LMS supporting structured module progression, coding exercises, assignment submission tracking, and student attendance logs.',
    technology: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    result:
      'Empowered seamless blended learning across three regional learning hubs in Rwanda and online remote cohorts.',
  },
  {
    id: 'cooperative-commerce',
    project: 'Ijwi Ryajye Agricultural Gateway',
    clientType: 'Social Enterprise & Agritech Venture',
    problem:
      'Smallholder farmers in western and northern Rwanda lacked direct access to real-time wholesale buyer prices and reliable agronomy alerts.',
    whatWeBuilt:
      'Developed a lightweight, mobile-responsive portal coupled with an SMS gateway allowing agricultural cooperatives to log produce availability and coordinate buyer pickups.',
    technology: ['Next.js', 'Python / Django', 'SMS Gateway Integration', 'PostgreSQL'],
    result:
      'Enabled direct farmer-to-buyer transactions, cutting intermediary delays and providing verified price clarity to rural farming families.',
  },
  {
    id: 'sme-portal',
    project: 'Regional Enterprise Digitization Suite',
    clientType: 'Commercial Client / Musanze SME',
    problem:
      'A growing logistics and distribution business was managing inventory, order invoicing, and delivery tracking manually via fragmented spreadsheets.',
    whatWeBuilt:
      'Built a custom web-based operations portal with inventory tracking, invoice generation, customer accounts, and real-time delivery logs.',
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    result:
      'Eliminated manual reconciliation errors, streamlined billing cycles, and gave management real-time visibility into stock and sales.',
  },
];
