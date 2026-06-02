import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply Now | AfriTech Bridge Internship',
  description:
    'Apply for an internship at AfriTech Bridge. Join a community of talented young developers and tech professionals transforming Africa.',
  openGraph: {
    title: 'Apply Now | AfriTech Bridge Internship',
    description:
      'Apply for an internship at AfriTech Bridge. Join a community of talented young developers and tech professionals transforming Africa.',
    url: 'https://afritechbridge.org/internships/apply',
    siteName: 'AfriTech Bridge',
    images: [
      {
        url: 'https://afritechbridge.org/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

export default function InternshipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
