import { ServiceCategory } from '@/types/site';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'workforce',
    title: 'Workforce Development & Talent',
    tagline: 'Empowering African Developers with Verifiable Careers',
    description:
      'We prepare ambitious African talent for the global engineering market through comprehensive skills training, real product exposure, and rigorous assessment.',
    items: [
      {
        id: 'tech-education',
        title: 'Technical Education & Bootcamps',
        description:
          'Structured learning cohorts in full-stack web, mobile development, data engineering, and UI/UX design across Kigali, Musanze, Nyabihu, and online.',
        features: [
          'Instructor-guided project sprints and peer programming',
          'Production code reviews with professional engineers',
          'Access to AfriTech Learn learning management portal',
        ],
        targetAudience: 'Aspiring developers, university graduates, and career switchers',
      },
      {
        id: 'skills-assessment',
        title: 'Capability Assessment & Verification',
        description:
          'Objective benchmarking of technical capability through automated challenges, live problem-solving, and architectural walkthroughs.',
        features: [
          'Verifiable Talent Passport credential generation',
          'Code quality, security, and algorithmic efficiency scoring',
          'Independent review of real project contributions',
        ],
        targetAudience: 'Developers seeking verified credentials and employers seeking reliable screening',
      },
      {
        id: 'internship-program',
        title: 'Structured Internship Placements',
        description:
          'Hands-on internship cohorts where engineers spend 3–6 months working on production codebases under senior developer supervision.',
        features: [
          'Full-time immersive development sprints',
          'Mentorship on software lifecycle, agile workflows, and CI/CD',
          'Direct pipeline to employment with regional and international partners',
        ],
        targetAudience: 'Top-performing bootcamp graduates and university computer science students',
      },
    ],
  },
  {
    id: 'employer',
    title: 'Employer Hiring & Talent Solutions',
    tagline: 'Hire by What People Can Do, Not What Their CV Claims',
    description:
      'We eliminate hiring guesswork by connecting companies with pre-assessed, evidence-backed African software talent ready to deliver on day one.',
    items: [
      {
        id: 'talent-discovery',
        title: 'Pre-Vetted Talent Sourcing',
        description:
          'Search and shortlist developers based on demonstrable code samples, verified skill metrics, and tested capabilities.',
        features: [
          'Review actual GitHub pull requests and project demos before interviewing',
          'Access candidate portfolios with benchmark scores on real engineering tasks',
          'Direct matching through the TalentSphere platform',
        ],
        targetAudience: 'Startups, scale-ups, and global companies expanding engineering teams',
      },
      {
        id: 'technical-shortlisting',
        title: 'Practical Technical Evaluation & Shortlisting',
        description:
          'Let our senior engineers conduct customized coding evaluations tailored to your tech stack and domain requirements.',
        features: [
          'Stack-specific evaluation challenges (React, Node, Python, Django, etc.)',
          'Detailed assessment dossiers covering architecture, code cleanliness, and logic',
          'Drastically lower time-to-hire and eliminate interview churn',
        ],
        targetAudience: 'Hiring managers and engineering leads with limited bandwidth for screening',
      },
      {
        id: 'enterprise-training',
        title: 'Corporate Workforce Training',
        description:
          'Custom technical upskilling programs designed for enterprise IT teams and public sector organizations transitioning to modern architectures.',
        features: [
          'Bespoke curriculum aligned with your internal stack and roadmap',
          'Hands-on workshop delivery on cloud migration, microservices, and DevOps',
          'Post-training capability benchmarking and certification',
        ],
        targetAudience: 'Enterprises, telecom providers, financial institutions, and government bodies',
      },
    ],
  },
  {
    id: 'technology',
    title: 'Software Development & Digital Solutions',
    tagline: 'Technology Built for Real Organizations',
    description:
      'AfriTech Bridge builds digital products and software for organizations while creating practical, mentored opportunities for African technology professionals.',
    items: [
      {
        id: 'web-apps',
        title: 'Modern Web Applications',
        description:
          'High-performance, scalable web applications built with Next.js, React, Node.js, and modern TypeScript ecosystems.',
        features: [
          'Responsive, accessible, search-engine-optimized architectures',
          'Enterprise API integrations, payment gateways, and authentication',
          'High security, automated testing, and CI/CD pipelines',
        ],
        deliverables: ['Custom Portals', 'SaaS Platforms', 'E-commerce Solutions', 'Corporate Websites'],
      },
      {
        id: 'mobile-apps',
        title: 'Mobile Application Development',
        description:
          'Cross-platform and native mobile applications that deliver smooth user experiences on Android and iOS devices.',
        features: [
          'React Native, Flutter, Swift, and Kotlin implementations',
          'Offline-first architecture with localized data syncing',
          'App Store and Google Play publishing and maintenance',
        ],
        deliverables: ['Consumer Apps', 'Enterprise Field Agent Tools', 'Fintech Wallets'],
      },
      {
        id: 'custom-software',
        title: 'Custom Software & Enterprise Systems',
        description:
          'Tailored backend architectures, microservices, and database systems engineered to handle complex business operations.',
        features: [
          'Relational and NoSQL database design (PostgreSQL, MongoDB)',
          'RESTful and GraphQL API services with robust authorization',
          'Containerized deployment on Cloud Run, AWS, and modern infrastructure',
        ],
        deliverables: ['Internal ERPs', 'Inventory Systems', 'Workflow Automation Engines'],
      },
      {
        id: 'workforce-systems',
        title: 'Workforce & Educational Systems',
        description:
          'Specialized platforms for tracking learning outcomes, automated skill assessments, and job matching pipelines.',
        features: [
          'Interactive quiz, code-grading, and progression engines',
          'Automated certificate and credential verification services',
          'Candidate tracking and employer collaboration dashboards',
        ],
        deliverables: ['LMS Portals', 'Talent Portals', 'Assessment Engines'],
      },
    ],
  },
  {
    id: 'local-services',
    title: 'Specialized Local Digital Services',
    tagline: 'Supporting Local Business Digitization in Rwanda',
    description:
      'In addition to corporate software development, our regional centers in Kigali, Musanze, and Nyabihu support local institutions with essential digital services.',
    items: [
      {
        id: 'it-consulting',
        title: 'IT Infrastructure & Digital Transformation',
        description:
          'Practical technology audits, network setups, workstation configurations, and cloud transitions for Rwandan small businesses and non-profits.',
        features: [
          'On-site technical support across Kigali, Musanze, and Nyabihu',
          'Data backup, digital security, and system maintenance',
          'Guidance on software tool adoption and team training',
        ],
        targetAudience: 'Local educational institutions, regional businesses, and non-governmental organizations',
      },
      {
        id: 'digital-publishing',
        title: 'Design & Digital Media Production',
        description:
          'Brand identity design, user interface mockups, technical documentation, and collateral production for growing businesses.',
        features: [
          'Brand guidelines and vector design',
          'Interactive Figma UI/UX prototyping',
          'Professional document and collateral formatting',
        ],
        targetAudience: 'Early-stage entrepreneurs and regional community enterprises',
      },
    ],
  },
];
