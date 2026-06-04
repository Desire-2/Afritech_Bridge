export interface InternshipTrack {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  isOpen: boolean;
}

export interface InternshipCohort {
  id: string;
  track_id: string;
  name: string;
  startDate: string;
  endDate: string;
  spotsAvailable: number;
}

export interface ApplicationFormData {
  // Step 1: Track Selection
  track_slug: string;
  track_id: string;
  cohort_id?: string;

  // Step 2: Personal Information (backend fields only)
  full_name: string;
  email: string;
  phone: string;
  national_id?: string;

  // Step 3: Applicant Type (backend enum: graduate / short_course_alumni / external)
  applicant_type: string;

  // Step 4: Motivation
  motivation_letter: string;

  // Step 5: Documents
  cv_file?: File;
  portfolio_url?: string;
  github_url?: string;
  linkedin_url?: string;

  // Step 6: Review & Consent
  consent: boolean;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  data?: {
    reference_code: string;
    message: string;
  };
  reference_code?: string;
}

export interface ApplicationStatus {
  status: string;
  submittedAt: string;
  review_stage: string;
}
