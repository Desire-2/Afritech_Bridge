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
  track_id: string;

  // Step 2: Personal Information
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  district: string;

  // Step 3: Academic Background
  applicant_type: string;
  institution: string;
  field_of_study: string;
  graduation_year: string;
  experience_level: string;
  skills_tags: string[];

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
  reference_code: string;
  message: string;
}

export interface ApplicationStatus {
  status: string;
  submittedAt: string;
  review_stage: string;
}
