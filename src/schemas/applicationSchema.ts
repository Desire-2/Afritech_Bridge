import { z } from 'zod';

// Step 1: Track Selection
export const step1Schema = z.object({
  track_id: z.string().min(1, 'Please select a track'),
});

// Step 2: Personal Information (matches backend ApplicationSubmissionSchema)
export const step2Schema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters').max(255),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(6, 'Phone must be at least 6 characters').max(20),
  national_id: z.string().max(50).optional().or(z.literal('')),
});

// Step 3: Motivation & Documents (matches backend validation)
export const step3Schema = z.object({
  motivation_letter: z
    .string()
    .min(50, 'Motivation letter must be at least 50 characters')
    .max(5000, 'Motivation letter must not exceed 5000 characters'),
  cv_file: z.instanceof(File, { message: 'CV file is required' }),
  portfolio_url: z.string().url('Invalid URL').optional().or(z.literal('')),
  github_url: z
    .string()
    .refine(
      (url) => !url || url.includes('github.com'),
      'GitHub URL must contain github.com'
    )
    .optional()
    .or(z.literal('')),
  linkedin_url: z
    .string()
    .refine(
      (url) => !url || url.includes('linkedin.com'),
      'LinkedIn URL must contain linkedin.com'
    )
    .optional()
    .or(z.literal('')),
});

// Step 4: Review & Consent
export const step4Schema = z.object({
  applicant_type: z.enum(['graduate', 'short_course_alumni', 'external'], {
    errorMap: () => ({ message: 'Please select an applicant type' }),
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms' }),
  }),
});

// Combined schema for full application
export const fullApplicationSchema = z.intersection(
  z.intersection(
    z.intersection(step1Schema, step2Schema),
    step3Schema
  ),
  step4Schema
);

export type Step1FormData = z.infer<typeof step1Schema>;
export type Step2FormData = z.infer<typeof step2Schema>;
export type Step3FormData = z.infer<typeof step3Schema>;
export type Step4FormData = z.infer<typeof step4Schema>;
export type FullApplicationFormData = z.infer<typeof fullApplicationSchema>;
