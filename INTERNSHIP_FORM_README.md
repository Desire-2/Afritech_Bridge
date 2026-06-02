# AfriTech Bridge Internship Application Form

A complete, production-ready internship application form built with **Next.js**, **React Hook Form**, **Zod validation**, **Framer Motion animations**, and **Tailwind CSS**.

## Features

✨ **Design & UX**
- Dark cosmic theme with teal/orange accent colors
- Fully responsive (mobile, tablet, desktop)
- Smooth page transitions and micro-interactions
- Animated progress indicator
- Accessible form fields with proper labels and error handling

🏗️ **Architecture**
- Multi-step form (6 steps) with step validation
- React Hook Form + Zod schema validation
- Session storage persistence (form data survives page refresh)
- API integration with Axios
- Toast notifications for user feedback

🎨 **Components**
- `PageBackground` - animated grid + floating particles + glow orbs
- `StepIndicator` - progress bar with animated steps
- `TrackSelector` - hero component with 8 internship tracks
- Form steps: Personal Info, Academic Background, Motivation, Documents, Review
- `SuccessScreen` - post-submission celebration with confetti

## Tech Stack

```json
{
  "framework": "Next.js 15.4",
  "ui": "React 18.3",
  "styling": "Tailwind CSS 4 + CSS Variables",
  "forms": "React Hook Form + Zod",
  "animations": "Framer Motion",
  "icons": "Lucide React",
  "http": "Axios",
  "notifications": "React Hot Toast",
  "file-upload": "React Dropzone",
  "confetti": "Canvas Confetti",
  "fonts": "Google Fonts (Syne, DM Sans, DM Mono)"
}
```

## Installation

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

All required dependencies are already in `package.json`:
- `react-hook-form` - Form state management
- `zod` - Schema validation
- `@hookform/resolvers` - Zod integration
- `framer-motion` - Animations
- `axios` - HTTP client
- `react-dropzone` - File uploads
- `lucide-react` - Icons
- `canvas-confetti` - Confetti animation
- `react-hot-toast` - Toast notifications

### 2. Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://study.afritechbridge.online

# Other configs
NEXT_PUBLIC_APP_NAME=AfriTech Bridge
```

## Project Structure

```
src/
├── app/
│   ├── internships/
│   │   ├── apply/
│   │   │   ├── page.tsx              # Main form page
│   │   │   └── layout.tsx            # Metadata
│   │   └── layout.tsx
│   └── globals.css                   # Theme + animations
├── components/internship/
│   ├── layout/
│   │   ├── PageBackground.tsx        # Animated background
│   │   └── Header.tsx                # Title + tagline
│   ├── form/
│   │   ├── StepIndicator.tsx         # Progress bar
│   │   ├── TrackSelector.tsx         # Track cards
│   │   ├── PersonalInfoStep.tsx      # Step 2
│   │   ├── AcademicStep.tsx          # Step 3
│   │   ├── MotivationStep.tsx        # Step 4
│   │   ├── DocumentsStep.tsx         # Step 5
│   │   └── ReviewStep.tsx            # Step 6
│   └── ui/
│       ├── GlowInput.tsx             # Custom input
│       ├── GlowTextarea.tsx          # Custom textarea
│       ├── GlowSelect.tsx            # Custom select
│       ├── DropZone.tsx              # File upload
│       ├── TrackCard.tsx             # Single track card
│       └── SuccessScreen.tsx         # Post-submit screen
├── api/
│   └── internship.ts                 # Axios API calls
├── hooks/
│   ├── useInternshipForm.ts          # Multi-step form state
│   └── useTracks.ts                  # Fetch available tracks
├── schemas/
│   └── applicationSchema.ts          # Zod validation schemas
└── types/
    └── internship.ts                 # TypeScript interfaces
```

## Usage

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

The form will be available at `http://localhost:3000/internships/apply`

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Form Steps

### Step 1: Track Selection
- Display 8 internship tracks: Mobile, Frontend, Backend, Full Stack, Data, Design, DevOps, Other
- Fetches tracks from API (`GET /api/v1/internships/tracks`)
- Falls back to hardcoded tracks if API fails

### Step 2: Personal Information
- Full name, email, phone, national ID, date of birth, gender, district, sector
- Age validation (16-35 years)
- Rwanda district selector

### Step 3: Academic Background
- Applicant type (Recent Graduate, Short Course, Self-Taught)
- Institution, field of study, graduation year
- Experience level (Beginner, Intermediate, Advanced)
- Skills tags (max 10)

### Step 4: Motivation
- Motivation letter (100-1000 chars) with character counter
- Career goals (optional, max 500 chars)
- How they heard about us (dropdown)

### Step 5: Documents
- CV upload (required, PDF/DOC/DOCX, max 5MB)
- Portfolio URL (optional)
- GitHub profile (optional)
- LinkedIn profile (optional)

### Step 6: Review & Submit
- Summary of all data with edit links to jump back
- Consent checkbox
- Submit button (disabled until consent is checked)

## API Integration

### Endpoints Used

```javascript
// Fetch available tracks
GET /api/v1/internships/tracks
// Response: InternshipTrack[]

// Fetch cohorts for a track
GET /api/v1/internships/cohorts?track={slug}
// Response: InternshipCohort[]

// Submit application
POST /api/v1/internships/apply
// Content-Type: multipart/form-data
// Response: { success: boolean, reference_code: string, message: string }

// Check application status
GET /api/v1/internships/apply/status?ref={ref}&email={email}
// Response: { status: string, submittedAt: string, review_stage: string }
```

### Error Handling

- **422**: Validation error (shown on form fields)
- **429**: Rate limit (too many requests from device)
- **500**: Server error (generic toast notification)
- **Network error**: "Failed to load tracks" or API connection issue

## Customization

### Change Color Theme

Edit `src/app/globals.css`:

```css
:root {
  --navy: #1a2d5a;      /* Primary background */
  --teal: #1ab3a8;      /* Accent / active state */
  --orange: #f47c20;    /* CTA buttons */
  --bg-deep: #0d1423;   /* Page background */
  --surface: #1a2540;   /* Card background */
  --border: rgba(26, 179, 168, 0.15);
}
```

### Change Form Steps

Edit `src/app/internships/apply/page.tsx`:
- Add/remove step components in the `AnimatePresence` block
- Update `StepIndicator` totalSteps and stepLabels props
- Add corresponding Zod schemas in `src/schemas/applicationSchema.ts`

### Change Internship Tracks

Edit `src/api/internship.ts` - update `FALLBACK_TRACKS` constant with your tracks:

```typescript
const FALLBACK_TRACKS: InternshipTrack[] = [
  {
    id: '1',
    slug: 'your-track',
    name: 'Your Track Name',
    description: 'Short description',
    icon: 'IconName', // Must match Lucide icon name
    isOpen: true,
  },
  // ...
];
```

### Change Rwanda Districts

Edit `src/components/internship/form/PersonalInfoStep.tsx`:

```typescript
const rwandaDistricts = ['District1', 'District2', /* ... */];
```

## Validation Rules

All validation is done with **Zod** schemas in `src/schemas/applicationSchema.ts`:

- **Full Name**: min 3 characters
- **Email**: valid email format
- **Phone**: min 8 characters
- **Date of Birth**: age 16-35
- **Gender**: required enum
- **District**: required
- **Motivation Letter**: 100-1000 characters
- **Goals**: max 500 characters
- **CV File**: required, PDF/DOC/DOCX only, max 5MB
- **URLs**: optional but validated if provided
- **Consent**: must be checked to submit

## Animations

### Page Load
- Header slides down with fade-in
- Form card slides up with fade-in

### Step Transitions
- Exiting step: slides left + fades out (0.25s)
- Entering step: slides in from right (0.3s)
- Form fields stagger entrance with 0.06s delay between them

### Track Cards
- Hover: scale 1.02, lift (translateY -4px), glow effect
- Selected: border glow, checkmark animation
- Grid stagger: 0.04s per card

### Step Indicator
- Completed step: animated checkmark (SVG draw)
- Active step: pulsing ring (2s animation)
- Progress line: width animation on completion

### Success Screen
- Checkmark SVG: draws in over 0.6s
- Heading: fades + slides in
- Confetti: burst on mount (canvas-confetti)
- What-next cards: staggered entrance

## Performance Optimizations

- **Session Storage Persistence**: Form data preserved across page refreshes
- **API Caching**: Track data cached during session (re-fetched on new visits)
- **Lazy Animations**: Framer Motion uses GPU-accelerated transforms
- **Image Optimization**: Background particles use CSS, not images
- **Code Splitting**: Each step component lazy-loaded by Next.js

## Accessibility

- ✓ All form inputs have associated labels
- ✓ Error messages use `role="alert"` with `aria-live="polite"`
- ✓ Track cards are keyboard-focusable (Tab + Enter/Space)
- ✓ Step indicator uses `aria-current="step"`
- ✓ DropZone supports keyboard activation
- ✓ Loading states announce via `aria-busy`
- ✓ Color contrast meets WCAG AA standards
- ✓ Focus rings visible on all interactive elements

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Form not loading
- Check `NEXT_PUBLIC_API_BASE_URL` in `.env.local`
- Verify API is accessible (CORS might be blocking)
- Check browser console for errors

### Animations not smooth
- Ensure hardware acceleration is enabled in browser
- Check for performance issues with `performance` tab in DevTools
- Disable some particles in `PageBackground` if needed

### File upload not working
- Verify MIME type matching in `DropZone.tsx`
- Check API accepts multipart/form-data
- Ensure file size < 5MB

### Form state not persisting
- Check if sessionStorage is enabled
- Verify browser allows sessionStorage
- Check browser console for storage quota errors

## Future Enhancements

- [ ] Real-time email validation with API
- [ ] File upload progress bar
- [ ] Multi-language support (Kinyarwanda, French)
- [ ] Dark mode toggle
- [ ] Google OAuth integration
- [ ] Email verification before submission
- [ ] Admin dashboard to review applications
- [ ] Applicant status tracking page

## License

This form is part of the AfriTech Bridge website. All rights reserved.

## Support

For issues or feature requests, contact: support@afritechbridge.org
