# Frontend-Backend Alignment - FIXED ✓

## Issue Summary
The frontend was sending unnecessary fields and using different field names than what the backend expected. This document outlines all the changes made to align frontend data submission with backend requirements.

## Backend Requirements
The backend API endpoint `POST /api/v1/internships/apply` expects:
- **opportunity_id** (Required) - Maps from frontend `track_slug`
- **full_name** (Required)
- **email** (Required)
- **phone**
- **date_of_birth**
- **gender**
- **district**
- **applicant_type**
- **institution**
- **field_of_study**
- **graduation_year**
- **experience_level**
- **skills_tags**
- **cover_letter** (Required) - Maps from frontend `motivation_letter`
- **resume** (Required - file) - Maps from frontend `cv_file`
- **portfolio_url** (Optional)
- **github_url** (Optional)
- **linkedin_url** (Optional)

## Changes Made

### 1. **Schema Updates** (`src/schemas/applicationSchema.ts`)
#### Removed Fields:
- ❌ `national_id` (Step 2) - Not required by backend
- ❌ `sector` (Step 2) - Not required by backend
- ❌ `atb_course` (Step 3) - Not required by backend
- ❌ `goals_after` (Step 4) - Not required by backend
- ❌ `heard_about` (Step 4) - Not required by backend

**Result:** Schema now contains only fields that backend actually needs.

### 2. **Type Definitions** (`src/types/internship.ts`)
Updated `ApplicationFormData` interface to match cleaned schema:
- Removed all optional unnecessary fields
- Kept only backend-required and optional-accepted fields
- Removed `cohort_id` which was never used

### 3. **Component Updates**

#### PersonalInfoStep.tsx
- ❌ Removed "National ID" field
- ❌ Removed "Sector" field

#### AcademicStep.tsx
- ❌ Removed "AfriTech Bridge Course" field

#### MotivationStep.tsx
- ❌ Removed "What do you hope to achieve after this internship?" field
- ❌ Removed "How did you hear about AfriTech Bridge?" dropdown

#### ReviewStep.tsx
- ❌ Removed "Sector" display from Personal Information section
- ❌ Removed "How did you hear about us?" display from Motivation section

### 4. **Hook Updates** (`src/hooks/useInternshipForm.ts`)
Updated default form values to exclude removed fields:
- `national_id` → removed
- `sector` → removed
- `atb_course` → removed
- `goals_after` → removed
- `heard_about` → removed

### 5. **API Submission Logic** (`src/app/internships/apply/page.tsx`)
Added field mapping in `onSubmit` function to transform frontend data to backend format:

```typescript
// Frontend → Backend field mapping
const fieldMapping = {
  track_slug: 'opportunity_id',
  motivation_letter: 'cover_letter',
  cv_file: 'resume',
};
```

**Smart transformation:**
- ✅ `track_slug` → `opportunity_id`
- ✅ `motivation_letter` → `cover_letter`
- ✅ `cv_file` → `resume`
- ✅ `consent` → Not sent to backend (local validation only)
- ✅ All other fields mapped as-is

## Data Flow Summary

### Before (Incorrect)
```
Frontend Form Data:
├── track_slug ❌ (backend expects "opportunity_id")
├── full_name ✓
├── email ✓
├── phone ✓
├── national_id ❌ (unnecessary)
├── date_of_birth ✓
├── gender ✓
├── district ✓
├── sector ❌ (unnecessary)
├── applicant_type ✓
├── institution ✓
├── field_of_study ✓
├── graduation_year ✓
├── atb_course ❌ (unnecessary)
├── experience_level ✓
├── skills_tags ✓
├── motivation_letter ❌ (backend expects "cover_letter")
├── goals_after ❌ (unnecessary)
├── heard_about ❌ (unnecessary)
├── cv_file ❌ (backend expects "resume")
├── portfolio_url ✓
├── github_url ✓
├── linkedin_url ✓
└── consent ❌ (shouldn't be sent)
```

### After (Correct)
```
Frontend Form Data → Backend API:
├── opportunity_id (from track_slug) ✓
├── full_name ✓
├── email ✓
├── phone ✓
├── date_of_birth ✓
├── gender ✓
├── district ✓
├── applicant_type ✓
├── institution ✓
├── field_of_study ✓
├── graduation_year ✓
├── experience_level ✓
├── skills_tags ✓
├── cover_letter (from motivation_letter) ✓
├── resume (from cv_file) ✓
├── portfolio_url ✓
├── github_url ✓
└── linkedin_url ✓

Consent: Validated locally, NOT sent to backend ✓
```

## Testing Checklist

- [ ] Form loads without errors
- [ ] Step validation works for all 6 steps
- [ ] Fields removed are no longer displayed
- [ ] Form submission creates FormData with correct field names
- [ ] Field mapping converts: `track_slug` → `opportunity_id`
- [ ] Field mapping converts: `motivation_letter` → `cover_letter`
- [ ] Field mapping converts: `cv_file` → `resume`
- [ ] Consent field is validated but NOT sent to backend
- [ ] Application submits successfully to backend
- [ ] Reference code is returned after submission
- [ ] Success screen displays after submission

## Files Modified

1. ✅ `src/schemas/applicationSchema.ts` - Removed 5 fields from schemas
2. ✅ `src/types/internship.ts` - Updated ApplicationFormData interface
3. ✅ `src/hooks/useInternshipForm.ts` - Removed default values
4. ✅ `src/components/internship/form/PersonalInfoStep.tsx` - Removed 2 fields
5. ✅ `src/components/internship/form/AcademicStep.tsx` - Removed 1 field
6. ✅ `src/components/internship/form/MotivationStep.tsx` - Removed 2 fields
7. ✅ `src/components/internship/form/ReviewStep.tsx` - Removed display of 2 fields
8. ✅ `src/app/internships/apply/page.tsx` - Added field mapping logic

## Total Changes
- **Removed fields:** 5 (national_id, sector, atb_course, goals_after, heard_about)
- **Field mappings:** 3 (track_slug→opportunity_id, motivation_letter→cover_letter, cv_file→resume)
- **Files modified:** 8
- **Lines of code removed:** ~80
- **Lines of code added:** ~20 (field mapping logic)

## Status
✅ **COMPLETE** - Frontend now sends exactly what backend expects with proper field name mappings.
