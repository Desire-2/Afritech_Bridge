import axios, { AxiosInstance } from 'axios';
import { InternshipTrack, InternshipCohort, SubmissionResponse, ApplicationStatus } from '@/types/internship';

const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://study.afritechbridge.online';

const apiClient: AxiosInstance = axios.create({
  baseURL: apiBaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fallback tracks in case API fails
const FALLBACK_TRACKS: InternshipTrack[] = [
  {
    id: '1',
    slug: 'mobile',
    name: 'Mobile Development',
    description: 'Build iOS and Android applications',
    icon_key: 'Smartphone',
    is_active: true,
  },
  {
    id: '2',
    slug: 'frontend',
    name: 'Frontend Development',
    description: 'Create beautiful user interfaces',
    icon_key: 'Monitor',
    is_active: true,
  },
  {
    id: '3',
    slug: 'backend',
    name: 'Backend Development',
    description: 'Build robust server infrastructure',
    icon_key: 'Server',
    is_active: true,
  },
  {
    id: '4',
    slug: 'fullstack',
    name: 'Full Stack Development',
    description: 'Master front and back end',
    icon_key: 'Layers',
    is_active: true,
  },
  {
    id: '5',
    slug: 'data',
    name: 'Data Science',
    description: 'Analyze and visualize data',
    icon_key: 'BarChart3',
    is_active: true,
  },
  {
    id: '6',
    slug: 'design',
    name: 'UI/UX Design',
    description: 'Design user experiences',
    icon_key: 'Palette',
    is_active: true,
  },
  {
    id: '7',
    slug: 'devops',
    name: 'DevOps Engineering',
    description: 'Manage cloud infrastructure',
    icon_key: 'Cloud',
    is_active: true,
  },
  {
    id: '8',
    slug: 'other',
    name: 'Other',
    description: 'Other areas',
    icon_key: 'Sparkles',
    is_active: true,
  },
];

export const fetchTracks = async (): Promise<InternshipTrack[]> => {
  try {
    const response = await apiClient.get('/internships/tracks');
    // Backend wraps in { success: true, data: [...] }
    const body = response.data;
    if (body?.success && Array.isArray(body.data)) {
      return body.data;
    }
    if (Array.isArray(body)) {
      return body;
    }
    if (body && typeof body === 'object' && 'tracks' in body && Array.isArray(body.tracks)) {
      return body.tracks;
    }
    console.warn('Unexpected API response format, using fallback');
    return FALLBACK_TRACKS;
  } catch (error) {
    console.error('Failed to fetch tracks, using fallback:', error);
    return FALLBACK_TRACKS;
  }
};

export const fetchOpenCohorts = async (trackSlug: string): Promise<InternshipCohort[]> => {
  try {
    const response = await apiClient.get('/internships/cohorts', {
      params: { track: trackSlug },
    });
    const body = response.data;
    if (body?.success && Array.isArray(body.data)) {
      return body.data;
    }
    if (Array.isArray(body)) {
      return body;
    }
    if (body && typeof body === 'object' && 'cohorts' in body && Array.isArray(body.cohorts)) {
      return body.cohorts;
    }
    console.warn('Unexpected cohorts API response format, returning empty array');
    return [];
  } catch (error) {
    console.error('Failed to fetch cohorts:', error);
    return [];
  }
};

export const submitApplication = async (formData: FormData): Promise<SubmissionResponse> => {
  try {
    const response = await apiClient.post<SubmissionResponse>(
      '/internships/apply',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 429) {
      throw new Error('Too many applications from this device. Please try again later.');
    }
    if (error.response?.status === 409) {
      throw new Error(error.response.data?.message || 'An application from this email is already pending review.');
    }
    if (error.response?.status === 422 || error.response?.status === 400) {
      const errors = error.response.data?.errors;
      if (errors) {
        const messages = Object.entries(errors)
          .map(([field, msgs]) => `${field}: ${(msgs as string[]).join(', ')}`)
          .join('\n');
        throw new Error('Validation error:\n' + messages);
      }
      throw new Error(error.response.data?.message || 'Validation error. Please check your inputs.');
    }
    if (error.response?.status === 500) {
      throw new Error('Server error. Please try again later.');
    }
    throw error;
  }
};

export const checkApplicationStatus = async (
  ref: string,
  email: string
): Promise<ApplicationStatus> => {
  try {
    const response = await apiClient.get(
      '/internships/apply/status',
      {
        params: { ref, email },
      }
    );
    const body = response.data;
    if (body?.success && body.data) {
      return body.data;
    }
    return body;
  } catch (error) {
    console.error('Failed to check application status:', error);
    throw error;
  }
};
