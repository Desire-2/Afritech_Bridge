import { API_BASE_URL, fetchWithTimeout } from '../api/client';
import SITE_CONFIG from '@/config/site';

export interface OpportunityItem {
  id: string | number;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  tags: string[];
  detailsUrl: string;
  isRemote?: boolean;
}

const FALLBACK_OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 'opp-1',
    title: 'Junior Full-Stack Developer (Next.js / Node.js)',
    company: 'AfriTech Partner Network',
    location: 'Kigali / Remote',
    employmentType: 'Full-time',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    detailsUrl: `${SITE_CONFIG.platforms.jobs}/jobs`,
    isRemote: true,
  },
  {
    id: 'opp-2',
    title: 'Mobile App Developer Resident (React Native)',
    company: 'Regional Technology Client',
    location: 'Kigali, Rwanda',
    employmentType: 'Contract / Internship',
    tags: ['React Native', 'Mobile UI', 'REST APIs'],
    detailsUrl: `${SITE_CONFIG.platforms.jobs}/jobs`,
    isRemote: false,
  },
  {
    id: 'opp-3',
    title: 'Python Backend & Data Engineering Associate',
    company: 'Agritech Social Enterprise',
    location: 'Musanze / Hybrid',
    employmentType: 'Full-time',
    tags: ['Python', 'Django', 'FastAPI'],
    detailsUrl: `${SITE_CONFIG.platforms.jobs}/jobs`,
    isRemote: true,
  },
];

export async function getFeaturedOpportunities(limit = 3): Promise<OpportunityItem[]> {
  try {
    const res = await fetchWithTimeout<any>(`${API_BASE_URL}/jobs/featured?limit=${limit}`, {
      next: { revalidate: 3600 },
    });

    const jobs = Array.isArray(res) ? res : res?.data || res?.jobs || [];
    if (!jobs || jobs.length === 0) {
      return FALLBACK_OPPORTUNITIES.slice(0, limit);
    }

    return jobs.slice(0, limit).map((job: any) => ({
      id: job.id || job._id,
      title: job.title || 'Software Engineering Position',
      company: job.company?.name || job.company_name || 'AfriTech Partner',
      location: job.location || 'Rwanda / Remote',
      employmentType: job.employment_type || job.type || 'Full-time',
      tags: Array.isArray(job.tags) && job.tags.length > 0 ? job.tags.slice(0, 3) : ['Software', 'Verified Talent'],
      detailsUrl: job.apply_url || `${SITE_CONFIG.platforms.jobs}/jobs/${job.id}`,
      isRemote: Boolean(job.is_remote || (job.location && job.location.toLowerCase().includes('remote'))),
    }));
  } catch (error) {
    // Graceful fallback to verified sample opportunities
    return FALLBACK_OPPORTUNITIES.slice(0, limit);
  }
}
