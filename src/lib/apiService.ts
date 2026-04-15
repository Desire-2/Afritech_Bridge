const API_BASE_URL =
  process.env.NEXT_PUBLIC_TALENTSPHERE_API_URL ||
  process.env.TALENTSPHERE_API_URL ||
  'localhost:5001/api';

interface ApiJob {
  id: number | string;
  title: string;
  slug?: string;
  employment_type?: string;
  experience_level?: string;
  category?: {
    name?: string;
  };
  location?: {
    display?: string;
  };
}

interface ApiJobsResponse {
  jobs?: ApiJob[];
}

export interface FeaturedPosition {
  id: number | string;
  title: string;
  location: string;
  employmentType: string;
  tags: string[];
  detailsUrl: string;
}

class ApiService {
  private readonly baseURL = API_BASE_URL;

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return (await response.json()) as T;
  }

  private async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  private titleCase(value: string): string {
    return value
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('-');
  }

  private extractTags(job: ApiJob): string[] {
    const tags: string[] = [];
    const title = job.title || '';

    const keywordMap = ['React', 'Node.js', 'Python', 'Django', 'TypeScript', 'JavaScript', 'Java', 'Flutter'];

    keywordMap.forEach((keyword) => {
      if (title.toLowerCase().includes(keyword.toLowerCase())) {
        tags.push(keyword);
      }
    });

    if (tags.length < 2 && job.category?.name) {
      tags.push(job.category.name);
    }

    if (tags.length < 2 && job.experience_level) {
      tags.push(this.titleCase(job.experience_level));
    }

    if (tags.length === 0) {
      tags.push('Tech Role');
    }

    return Array.from(new Set(tags)).slice(0, 2);
  }

  private toFeaturedPosition(job: ApiJob): FeaturedPosition {
    const location = job.location?.display || 'Africa';
    const employmentType = this.titleCase(job.employment_type || 'Full-time');

    return {
      id: job.id,
      title: job.title,
      location,
      employmentType,
      tags: this.extractTags(job),
      detailsUrl: `https://jobs.afritechbridge.online/jobs/${job.id}`,
    };
  }

  async getPublicFeaturedJobs(limit = 3): Promise<FeaturedPosition[]> {
    try {
      const query = new URLSearchParams({
        limit: String(limit),
        status: 'published',
      }).toString();

      const response = await this.get<ApiJobsResponse>(`/jobs?${query}`);
      const jobs = Array.isArray(response.jobs) ? response.jobs : [];

      return jobs.slice(0, limit).map((job) => this.toFeaturedPosition(job));
    } catch (error) {
      console.error('Failed to load featured jobs:', error);
      return [];
    }
  }
}

const apiService = new ApiService();

export default apiService;
