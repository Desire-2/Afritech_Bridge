export interface InternshipTrack {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon_key: string;
  is_active: boolean;
}

export interface InternshipCohort {
  id: string;
  track_id: string;
  cohort_name: string;
  cohort_code: string;
  start_date: string;
  end_date: string;
  capacity: number | null;
  is_accepting: boolean;
  accepted_count: number;
  spots_available: number | null;
  is_full: boolean;
  description: string | null;
}

export interface ApplicationFormData {
  // Step 1: Track Selection
  track_id: string;

  // Step 2: Personal Information
  full_name: string;
  email: string;
  phone: string;
  national_id: string;

  // Step 3: Motivation & Documents
  motivation_letter: string;
  portfolio_url: string;
  github_url: string;
  linkedin_url: string;
  cv_file?: File;

  // Step 4: Review & Consent
  applicant_type: string;
  consent: boolean;
}

export interface SubmissionResponse {
  success: boolean;
  data?: {
    reference_code: string;
    message: string;
  };
  reference_code?: string;
  message: string;
}

export interface ApplicationStatus {
  status: string;
  submittedAt: string;
  review_stage: string;
  full_name: string;
  email: string;
  reference_code: string;
  track_name: string;
  updated_at: string;
}
