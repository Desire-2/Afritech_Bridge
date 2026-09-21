import { Testimonial } from '@/types/site';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-jean-claude',
    author: 'Jean Claude N.',
    role: 'Full-Stack Developer',
    companyOrTrack: 'Web Development Track Alumni',
    quote:
      'AfriTech Bridge gave me more than theory. Writing production-grade code, receiving strict code reviews, and building real client modules gave me the confidence to step into professional software engineering.',
    avatarInitials: 'JC',
    verifiedType: 'Alumni',
  },
  {
    id: 't-aline',
    author: 'Aline Uwamahoro',
    role: 'Software Engineering Intern',
    companyOrTrack: 'Kigali Innovation Cohort',
    quote:
      'The transition from classroom exercises to an actual engineering sprint was eye-opening. Having senior developers review my pull requests pushed my coding standards to an international level.',
    avatarInitials: 'AU',
    verifiedType: 'Alumni',
  },
  {
    id: 't-emmanuel',
    author: 'Emmanuel Hakizimana',
    role: 'Regional Operations Lead',
    companyOrTrack: 'Enterprise Software Client',
    quote:
      'AfriTech Bridge designed and deployed our operations management system on schedule. Their developers communicated clearly, understood our workflow constraints, and built a rock-solid platform.',
    avatarInitials: 'EH',
    verifiedType: 'Employer',
  },
];
