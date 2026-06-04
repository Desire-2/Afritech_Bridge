import axios, { AxiosInstance } from 'axios';
import { InternshipTrack, InternshipCohort, SubmissionResponse, ApplicationStatus } from '@/types/internship';

const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://study.afritechbridge.online';

// Axios auto-detects the correct Content-Type based on the request data
// (application/json for objects, multipart/form-data for FormData, etc.)
const apiClient: AxiosInstance = axios.create({
  baseURL: apiBaseURL,
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
    const response = await apiClient.get('/internships/tracks');
    const data = response.data;

    // Handle different response formats:
    // 1. Bare array: [track, track, ...]
    // 2. Wrapped: { data: [track, track, ...] }
    // 3. Wrapped: { tracks: [track, track, ...] }
    if (Array.isArray(data)) {
      return data;
    }
    if (data?.data && Array.isArray(data.data)) {
      return data.data;
    }
    if (data?.tracks && Array.isArray(data.tracks)) {
      return data.tracks;
    }

    console.error('Unexpected tracks response format:', data);
    return FALLBACK_TRACKS;
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
    // Axios has global defaults that set Content-Type: application/x-www-form-urlencoded
    // for POST requests. We MUST explicitly override it to null so the browser
    // auto-sets the correct multipart/form-data; boundary=... header.
    // Without this, Flask/Werkzeug can't parse the multipart body.
    const response = await apiClient.post<SubmissionResponse>(
      '/internships/apply',
      formData,
      {
        headers: {
          'Content-Type': null,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Submit application error:', error);

    // Handle 400/422 validation errors with detailed backend messages
    if (error.response?.status === 400 || error.response?.status === 422) {
      const responseData = error.response.data;

      // Extract error messages from different backend response formats
      let errorMessage = 'Validation failed. Please check your inputs.';

      if (typeof responseData === 'string') {
        errorMessage = responseData;
      } else if (responseData?.message) {
        errorMessage = responseData.message;
      } else if (responseData?.errors) {
        // Marshmallow/Flask validation errors format
        const errors = responseData.errors;
        if (typeof errors === 'object') {
          errorMessage = Object.entries(errors)
            .map(([field, msgs]) => `${field}: ${Array.isArray(msgs) ? msgs.join(', ') : msgs}`)
            .join('; ');
        } else {
          errorMessage = String(errors);
        }
      } else if (Array.isArray(responseData)) {
        errorMessage = responseData.map((e: any) => e.message || e).join('; ');
      } else if (responseData?.error) {
        errorMessage = responseData.error;
      }

      throw new Error(errorMessage);
    }

    if (error.response?.status === 429) {
      throw new Error('Too many applications from this device. Please try again later.');
    }
    if (error.response?.status === 500) {
      throw new Error('Server error. Please try again later.');
    }

    // Network errors or unexpected errors
    if (error.code === 'ERR_NETWORK') {
      throw new Error('Cannot connect to the server. Please check your connection and try again.');
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
