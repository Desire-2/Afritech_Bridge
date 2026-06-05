import { z } from 'zod';

const currentYear = new Date().getFullYear();

// Step 1: Track Selection
export const step1Schema = z.object({
  track_id: z.string().min(1, 'Please select a track'),
});

// Step 2: Personal Information
export const step2Schema = z.object({
  full_name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Invalid phone number'),
  date_of_birth: z.string().refine((date) => {
    const birthDate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 16 && age <= 35;
  }, 'You must be between 16 and 35 years old'),
  gender: z.enum(['male', 'female', 'prefer_not_to_say'], {
    errorMap: () => ({ message: 'Please select a gender' }),
  }),
  district: z.string().min(1, 'Please select a district'),
});

// Step 3: Academic Background
export const step3Schema = z.object({
  applicant_type: z.enum(['recent_graduate', 'short_course', 'self_taught'], {
    errorMap: () => ({ message: 'Please select an applicant type' }),
  }),
  institution: z.string().min(2, 'Please enter institution name'),
  field_of_study: z.string().min(2, 'Please enter field of study'),
  graduation_year: z.string().refine((year) => {
    const parsedYear = parseInt(year);
    return parsedYear >= 2018 && parsedYear <= currentYear;
  }, `Graduation year must be between 2018 and ${currentYear}`),
  experience_level: z.enum(['beginner', 'intermediate', 'advanced'], {
    errorMap: () => ({ message: 'Please select experience level' }),
  }),
  skills_tags: z.array(z.string()).max(10, 'Maximum 10 skills allowed'),
});

// Step 4: Motivation
export const step4Schema = z.object({
  motivation_letter: z
    .string()
    .min(100, 'Motivation letter must be at least 100 characters')
    .max(1000, 'Motivation letter must not exceed 1000 characters'),
});

// Step 5: Documents
export const step5Schema = z.object({
  cv_file: z.instanceof(File).optional(),
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

// Step 6: Review & Consent
export const step6Schema = z.object({
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms' }),
  }),
});

// Combined schema for full application
export const fullApplicationSchema = z.intersection(
  z.intersection(
    z.intersection(
      z.intersection(
        z.intersection(step1Schema, step2Schema),
        step3Schema
      ),
      step4Schema
    ),
    step5Schema
  ),
  step6Schema
);

export type Step1FormData = z.infer<typeof step1Schema>;
export type Step2FormData = z.infer<typeof step2Schema>;
export type Step3FormData = z.infer<typeof step3Schema>;
export type Step4FormData = z.infer<typeof step4Schema>;
export type Step5FormData = z.infer<typeof step5Schema>;
export type Step6FormData = z.infer<typeof step6Schema>;
export type FullApplicationFormData = z.infer<typeof fullApplicationSchema>;
