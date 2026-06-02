import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internships | AfriTech Bridge',
  description: 'Explore internship opportunities at AfriTech Bridge',
};

export default function InternshipsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
