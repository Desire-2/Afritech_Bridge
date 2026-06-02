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
    icon: 'Smartphone',
    isOpen: true,
  },
  {
    id: '2',
    slug: 'frontend',
    name: 'Frontend Development',
    description: 'Create beautiful user interfaces',
    icon: 'Monitor',
    isOpen: true,
  },
  {
    id: '3',
    slug: 'backend',
    name: 'Backend Development',
    description: 'Build robust server infrastructure',
    icon: 'Server',
    isOpen: true,
  },
  {
    id: '4',
    slug: 'fullstack',
    name: 'Full Stack Development',
    description: 'Master front and back end',
    icon: 'Layers',
    isOpen: true,
  },
  {
    id: '5',
    slug: 'data',
    name: 'Data Science',
    description: 'Analyze and visualize data',
    icon: 'BarChart3',
    isOpen: true,
  },
  {
    id: '6',
    slug: 'design',
    name: 'UI/UX Design',
    description: 'Design user experiences',
    icon: 'Palette',
    isOpen: true,
  },
  {
    id: '7',
    slug: 'devops',
    name: 'DevOps Engineering',
    description: 'Manage cloud infrastructure',
    icon: 'Cloud',
    isOpen: true,
  },
  {
    id: '8',
    slug: 'other',
    name: 'Other',
    description: 'Other areas',
    icon: 'Sparkles',
    isOpen: true,
  },
];

export const fetchTracks = async (): Promise<InternshipTrack[]> => {
  try {
    const response = await apiClient.get<InternshipTrack[]>('/internships/tracks');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch tracks, using fallback:', error);
    return FALLBACK_TRACKS;
  }
};

export const fetchOpenCohorts = async (trackSlug: string): Promise<InternshipCohort[]> => {
  try {
    const response = await apiClient.get<InternshipCohort[]>(
      '/internships/cohorts',
      {
        params: { track: trackSlug },
      }
    );
    return response.data;
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
    if (error.response?.status === 422) {
      throw new Error('Validation error: ' + JSON.stringify(error.response.data));
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
    const response = await apiClient.get<ApplicationStatus>(
      '/internships/apply/status',
      {
        params: { ref, email },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to check application status:', error);
    throw error;
  }
};

export const checkEmailExists = async (email: string): Promise<boolean> => {
  try {
    const response = await apiClient.get<{ exists: boolean }>(
      '/internships/apply/check-email',
      {
        params: { email },
      }
    );
    return response.data.exists;
  } catch (error) {
    console.error('Failed to check email:', error);
    return false;
  }
};
