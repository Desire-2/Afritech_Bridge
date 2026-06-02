# Setup Guide - AfriTech Bridge Internship Application Form

## Quick Start

### 1. Install Dependencies

```bash
cd /home/desire/My_Project/Client_Project/Afritech_Bridge
npm install
```

This will install all required packages:
- ✅ React Hook Form (form state)
- ✅ Zod (validation)
- ✅ Framer Motion (animations)
- ✅ Axios (HTTP client)
- ✅ React Dropzone (file upload)
- ✅ Lucide React (icons)
- ✅ Canvas Confetti (confetti effect)
- ✅ React Hot Toast (notifications)

### 2. Environment Setup

Copy `.env.example` to `.env.local` and update with your API endpoint:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
NEXT_PUBLIC_API_BASE_URL=https://study.afritechbridge.online
NEXT_PUBLIC_APP_NAME=AfriTech Bridge
```

### 3. Run Development Server

```bash
npm run dev
```

Visit: `http://localhost:3000/internships/apply`

### 4. Build for Production

```bash
npm run build
npm start
```

---

## Architecture Overview

### Project Structure

```
src/
├── app/internships/apply/
│   ├── page.tsx              # Main form page (orchestrates all steps)
│   └── layout.tsx            # Metadata
├── components/internship/
│   ├── layout/               # Background & header
│   ├── form/                 # Step components
│   └── ui/                   # Reusable UI components
├── api/
│   └── internship.ts         # API calls (Axios)
├── hooks/
│   ├── useInternshipForm.ts  # Multi-step state management
│   └── useTracks.ts          # Fetch tracks hook
├── schemas/
│   └── applicationSchema.ts  # Zod validation schemas
├── types/
│   └── internship.ts         # TypeScript interfaces
├── utils/
│   └── form.ts               # Helper functions
└── app/globals.css           # Theme & animations
```

### Data Flow

```
User Input
    ↓
React Hook Form (manages state)
    ↓
Zod Validation (validates on blur/submit)
    ↓
Session Storage (persists data)
    ↓
Submit → FormData → Axios → API
    ↓
Response → Success Screen
```

---

## Component Hierarchy

```
InternshipApplicationPage (page.tsx)
├── PageBackground
├── Header
├── StepIndicator
└── Form Card
    ├── TrackSelector (Step 1)
    ├── PersonalInfoStep (Step 2)
    ├── AcademicStep (Step 3)
    ├── MotivationStep (Step 4)
    ├── DocumentsStep (Step 5)
    │   └── DropZone
    ├── ReviewStep (Step 6)
    └── SuccessScreen (Post-submit)
```

---

## Key Features Explained

### 1. Multi-Step Form Management

**File**: `src/hooks/useInternshipForm.ts`

The hook manages:
- Current step tracking
- Form state (React Hook Form)
- Navigation (goNext, goBack, jumpTo)
- Session storage persistence
- Submission state

```typescript
const {
  currentStep,
  methods,           // React Hook Form methods
  goNext,            // Validate & advance
  goBack,            // Go previous
  jumpTo,            // Jump to specific step (from review)
  isSubmitting,      // API call state
  referenceCode,     // Returned after submission
} = useInternshipForm();
```

### 2. Zod Validation

**File**: `src/schemas/applicationSchema.ts`

Each step has its own schema. Only the current step is validated:

```typescript
// Step 1: Just track selection
step1Schema = z.object({ track_slug: z.string().min(1) })

// Step 2: Personal info (full validation)
step2Schema = z.object({
  full_name: z.string().min(3),
  email: z.string().email(),
  // ... etc
})

// Step 6: Consent checkbox
step6Schema = z.object({ consent: z.literal(true) })
```

Validation happens on:
- **Blur** for individual fields (instant feedback)
- **Submit** for the entire step (goNext button)

### 3. Session Storage Persistence

**Feature**: Form data survives page refresh

```typescript
// Saved to sessionStorage whenever data changes
{
  formData: { /* all form fields */ },
  step: 3  // current step
}
```

Loaded on mount:
```typescript
useEffect(() => {
  const savedState = sessionStorage.getItem('internship_form_state');
  if (savedState) {
    methods.reset(JSON.parse(savedState).formData);
    setCurrentStep(JSON.parse(savedState).step);
  }
}, []);
```

Cleared after successful submission.

### 4. API Integration

**File**: `src/api/internship.ts`

Handles all backend communication:

```typescript
// Fetch available tracks
const tracks = await fetchTracks();

// Submit application as multipart/form-data
const response = await submitApplication(formData);
// Returns: { success: true, reference_code: "ATB-...", message: "..." }
```

Error handling:
- **429**: Rate limited (shown as toast)
- **422**: Validation errors (shown on form fields)
- **500**: Server error (generic toast)

### 5. Animations

**Library**: Framer Motion

```typescript
// Page load - staggered entrance
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} />

// Step transitions - slide & fade
AnimatePresence mode="wait" - exiting step slides left, entering slides in from right

// Track cards - hover effects with spring physics
whileHover={{ y: -4, scale: 1.02 }} transition={{ type: "spring" }}

// Success screen - checkmark SVG draw animation
<motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
```

### 6. Custom UI Components

All form inputs follow the "glow" design:

```typescript
<GlowInput
  label="Full Name"
  error={formState.errors.full_name?.message}
  placeholder="Jean-Pierre Habimana"
/>
```

Features:
- Teal glow on focus
- Red glow on error
- Smooth transitions
- Accessibility: labels, aria-live for errors

---

## Customization Guide

### Change API Endpoint

**File**: `.env.local`

```
NEXT_PUBLIC_API_BASE_URL=your-api-url
```

Or fallback in `src/api/internship.ts`:

```typescript
const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://your-fallback-url.com';
```

### Change Color Theme

**File**: `src/app/globals.css`

```css
:root {
  --navy: #1a2d5a;           /* Primary background */
  --teal: #1ab3a8;           /* Active/focus state */
  --orange: #f47c20;         /* CTA buttons */
  --bg-deep: #0d1423;        /* Page background */
  --surface: #1a2540;        /* Card background */
  --border: rgba(26,179,168,0.15);
  --text-primary: #e6edf3;
  --text-muted: rgba(255,255,255,0.6);
}
```

### Add/Remove Form Steps

1. **Update schema** (`src/schemas/applicationSchema.ts`):
```typescript
export const step7Schema = z.object({
  my_new_field: z.string().min(1),
});
```

2. **Create step component** (`src/components/internship/form/MyNewStep.tsx`):
```typescript
export const MyNewStep: React.FC<Props> = ({ control, onNext, onBack }) => {
  return (/* JSX */);
};
```

3. **Add to main form** (`src/app/internships/apply/page.tsx`):
```typescript
// In useInternshipForm hook
case 6:
  return step7Schema;

// In AnimatePresence
{currentStep === 6 && <MyNewStep {...props} />}

// Update StepIndicator
totalSteps={7}
stepLabels={[..., "MyStep"]}
```

### Modify Internship Tracks

**File**: `src/api/internship.ts` - Update `FALLBACK_TRACKS`:

```typescript
const FALLBACK_TRACKS: InternshipTrack[] = [
  {
    id: '1',
    slug: 'your-track-slug',
    name: 'Track Name',
    description: 'Short description',
    icon: 'IconNameFromLucide', // e.g., 'Smartphone', 'Code', etc.
    isOpen: true,
  },
];
```

Icon names: [Lucide React Icons](https://lucide.dev/)

### Change Rwanda Districts List

**File**: `src/components/internship/form/PersonalInfoStep.tsx`:

```typescript
const rwandaDistricts = [
  'District 1',
  'District 2',
  // ... your districts
];
```

---

## API Endpoint Specifications

### Expected Backend API Structure

```javascript
// Base URL: https://study.afritechbridge.online

// GET /api/v1/internships/tracks
// Response:
[
  {
    "id": "1",
    "slug": "mobile",
    "name": "Mobile Development",
    "description": "Build iOS and Android apps",
    "icon": "Smartphone",
    "isOpen": true
  }
]

// GET /api/v1/internships/cohorts?track=mobile
// Response:
[
  {
    "id": "cohort-1",
    "track_id": "1",
    "name": "2025 Q1 Cohort",
    "startDate": "2025-01-15",
    "endDate": "2025-04-15",
    "spotsAvailable": 15
  }
]

// POST /api/v1/internships/apply
// Content-Type: multipart/form-data
// Body:
{
  "track_slug": "mobile",
  "full_name": "Jean-Pierre",
  "email": "jp@example.com",
  "phone": "+250 7XX XXX XXX",
  "date_of_birth": "2002-05-15",
  "gender": "male",
  "district": "Kigali",
  "institution": "University of Rwanda",
  "field_of_study": "Computer Science",
  "graduation_year": "2024",
  "applicant_type": "recent_graduate",
  "experience_level": "intermediate",
  "skills_tags": ["React", "Node.js"],
  "motivation_letter": "I want to...",
  "heard_about": "linkedin",
  "cv_file": <File>,
  "portfolio_url": "https://portfolio.com",
  "consent": true
}

// Response:
{
  "success": true,
  "reference_code": "ATB-XXXX-XXXX",
  "message": "Application received successfully"
}

// GET /api/v1/internships/apply/status?ref=ATB-XXXX-XXXX&email=jp@example.com
// Response:
{
  "status": "under_review",
  "submittedAt": "2025-01-10T10:30:00Z",
  "review_stage": "initial_screening"
}
```

---

## Testing Checklist

### Form Functionality
- [ ] All 6 steps navigate correctly
- [ ] Validation prevents progression with errors
- [ ] Back button works on all steps
- [ ] Jump to step works from Review screen
- [ ] Form data persists on page refresh
- [ ] Form clears after successful submission

### Validation
- [ ] Email validation works
- [ ] Age validation (16-35) works
- [ ] File upload validation (type, size)
- [ ] Motivation letter character count
- [ ] All required fields block submission

### API Integration
- [ ] Tracks load from API
- [ ] Application submits successfully
- [ ] Success screen shows reference code
- [ ] Error messages display correctly
- [ ] Rate limiting handled (429)

### UI/UX
- [ ] Animations smooth on all devices
- [ ] Responsive on mobile/tablet/desktop
- [ ] Focus indicators visible
- [ ] Accessibility keyboard navigation works
- [ ] Toast notifications appear
- [ ] Confetti effect on success

### Performance
- [ ] Page loads quickly
- [ ] No console errors
- [ ] Animations don't cause jank
- [ ] Session storage works

---

## Troubleshooting

### Issue: "Cannot find module" errors

**Solution**: Run `npm install` again and check `node_modules/` exists

### Issue: Form not loading at `/internships/apply`

**Solution**: 
- Check Next.js dev server running on port 3000
- Try `npm run dev` again
- Clear `.next` folder: `rm -rf .next && npm run dev`

### Issue: API calls failing

**Solution**:
- Verify `NEXT_PUBLIC_API_BASE_URL` in `.env.local`
- Check if API is online: `curl https://your-api-url/api/v1/internships/tracks`
- Check browser console for CORS errors
- Verify API accepts multipart/form-data

### Issue: Animations not smooth

**Solution**:
- Check GPU acceleration enabled in browser
- Reduce particle count in `PageBackground.tsx`
- Check DevTools Performance tab for bottlenecks

### Issue: File upload not working

**Solution**:
- Verify file size < 5MB
- Check accepted file types: PDF, DOC, DOCX
- Check API accepts multipart/form-data
- Check browser console for upload errors

---

## Performance Optimization Tips

1. **Lazy load track images** (if added in future)
2. **Debounce email validation** calls
3. **Reduce particle count** in `PageBackground` on mobile
4. **Use React.memo** for static components
5. **Split large steps** into smaller sub-components

---

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git add .
git commit -m "Add internship form"
git push origin main

# Deploy to Vercel
vercel deploy
```

Set environment variables in Vercel dashboard:
```
NEXT_PUBLIC_API_BASE_URL=https://your-api.com
```

### Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t afritech-internship .
docker run -p 3000:3000 afritech-internship
```

---

## Next Steps

1. ✅ Form is ready - test locally
2. ⏳ Deploy to staging environment
3. ⏳ Test with real API
4. ⏳ Get user feedback
5. ⏳ Deploy to production
6. ⏳ Monitor submissions and errors

---

## Support & Contact

For issues, feature requests, or customization help:
- 📧 Email: support@afritechbridge.org
- 📱 WhatsApp: +250 XXX XXX XXX
- 🔗 Website: https://afritechbridge.org

---

**Last Updated**: June 2, 2025
**Version**: 1.0.0
**Status**: ✅ Production Ready
