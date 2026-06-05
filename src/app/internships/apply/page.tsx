'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { PageBackground } from '@/components/internship/layout/PageBackground';
import { Header } from '@/components/internship/layout/Header';
import { StepIndicator } from '@/components/internship/form/StepIndicator';
import { TrackSelector } from '@/components/internship/form/TrackSelector';
import { PersonalInfoStep } from '@/components/internship/form/PersonalInfoStep';
import { MotivationDocumentsStep } from '@/components/internship/form/MotivationDocumentsStep';
import { ReviewStep } from '@/components/internship/form/ReviewStep';
import { SuccessScreen } from '@/components/internship/ui/SuccessScreen';
import { useInternshipForm } from '@/hooks/useInternshipForm';
import { useTracks } from '@/hooks/useTracks';
import { submitApplication } from '@/api/internship';

export default function InternshipApplicationPage() {
  const {
    currentStep,
    methods,
    goNext,
    goBack,
    jumpTo,
    resetForm,
    isSubmitting,
    setIsSubmitting,
    submitError,
    setSubmitError,
    referenceCode,
    setReferenceCode,
  } = useInternshipForm();

  const { control, formState, watch, setValue, handleSubmit } = methods;
  const { tracks, isLoading: tracksLoading } = useTracks();

  // Auto-select track from URL ?track= parameter
  useEffect(() => {
    if (tracks.length > 0) {
      const params = new URLSearchParams(window.location.search);
      const trackSlug = params.get('track');
      if (trackSlug) {
        const matchedTrack = tracks.find(
          (t) => t.slug === trackSlug || t.id === trackSlug
        );
        if (matchedTrack) {
          setValue('track_id', matchedTrack.id);
        }
      }
    }
  }, [tracks, setValue]);

  // Handle beforeunload for unsaved changes warning
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (currentStep > 0 && currentStep < 3) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [currentStep]);

  const onSubmit = async (_data: any) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Use getValues() to read ALL fields from react-hook-form's internal state.
      // handleSubmit validates against step4Schema which only has applicant_type + consent,
      // so zod strips all other fields from the `data` param. getValues() bypasses this.
      const allValues = methods.getValues();

      // Create FormData for multipart submission
      const formData = new FormData();

      // Append fields matching backend ApplicationSubmissionSchema
      if (allValues.track_id) formData.append('track_id', allValues.track_id);
      if (allValues.applicant_type) formData.append('applicant_type', allValues.applicant_type);
      if (allValues.full_name) formData.append('full_name', allValues.full_name);
      if (allValues.email) formData.append('email', allValues.email);
      if (allValues.phone) formData.append('phone', allValues.phone);
      if (allValues.national_id) formData.append('national_id', allValues.national_id);
      if (allValues.motivation_letter) formData.append('motivation_letter', allValues.motivation_letter);
      if (allValues.portfolio_url) formData.append('portfolio_url', allValues.portfolio_url);
      if (allValues.github_url) formData.append('github_url', allValues.github_url);
      if (allValues.linkedin_url) formData.append('linkedin_url', allValues.linkedin_url);

      // Append CV file
      if (allValues.cv_file) {
        formData.append('cv', allValues.cv_file);
      }

      const response = await submitApplication(formData);

      // Handle both wrapped { success, data: { reference_code } } and flat { reference_code }
      const refCode =
        response?.data?.reference_code ||
        (response as any)?.reference_code ||
        null;

      if (refCode) {
        setReferenceCode(refCode);
        sessionStorage.removeItem('internship_form_state');
        toast.success('Application submitted successfully!');
      } else {
        // API returned success but no reference code — show success message from server
        const msg = response?.message || 'Application submitted successfully!';
        toast.success(msg);
        // Try to extract reference code from the message itself
        const match = msg.match(/ATB-\d{2}-[A-F0-9]{4}/);
        if (match) {
          setReferenceCode(match[0]);
          sessionStorage.removeItem('internship_form_state');
        } else {
          // Fallback: show a generic success
          setReferenceCode('CHECK_EMAIL');
          sessionStorage.removeItem('internship_form_state');
        }
      }
    } catch (error: any) {
      const message = error.message || 'Failed to submit application. Please try again.';
      setSubmitError(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Validation error handler for handleSubmit — shows toast with first error
  const onValidationError = (errors: any) => {
    const firstKey = Object.keys(errors)[0];
    if (firstKey) {
      const error = errors[firstKey];
      const msg = error?.message || `Please fix the ${firstKey} field`;
      toast.error(String(msg));
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const handleNext = async () => {
    if (currentStep === 3) {
      // Final step — validate step 4 fields then submit
      // handleSubmit validates using current step's resolver (step4Schema)
      // and calls onSubmit on success, onValidationError on failure
      handleSubmit(onSubmit, onValidationError)();
    } else {
      goNext();
    }
  };

  // Success Screen - Show after submission
  if (referenceCode) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-[#0d1423] via-[#0a1628] to-[#051018] overflow-hidden">
        <PageBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SuccessScreen referenceCode={referenceCode} email={watch('email')} />
          </motion.div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0d1423] via-[#0a1628] to-[#051018] overflow-hidden">
      <PageBackground />

      <div className="relative z-10 px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <Header />

          {/* Step Indicator */}
          <StepIndicator
            currentStep={currentStep}
            totalSteps={4}
            stepLabels={['Track', 'Personal', 'Motivation & Documents', 'Review']}
            onStepClick={jumpTo}
          />

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-8 md:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a2540] to-[#1a2540]/50 backdrop-blur-xl shadow-2xl"
          >
            {/* Error Banner */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm"
              >
                {submitError}
                <button
                  onClick={() => setSubmitError(null)}
                  className="ml-2 underline hover:no-underline"
                >
                  Dismiss
                </button>
              </motion.div>
            )}

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <TrackSelector
                  key="track"
                  selectedTrack={watch('track_id')}
                  tracks={tracks}
                  isLoading={tracksLoading}
                  onTrackSelect={(id) => setValue('track_id', id)}
                  onNext={goNext}
                />
              )}
              {currentStep === 1 && (
                <PersonalInfoStep
                  key="personal"
                  control={control}
                  formState={formState}
                  onNext={goNext}
                  onBack={goBack}
                />
              )}
              {currentStep === 2 && (
                <MotivationDocumentsStep
                  key="motivation-documents"
                  control={control}
                  formState={formState}
                  watch={watch}
                  setValue={setValue}
                  onNext={goNext}
                  onBack={goBack}
                />
              )}
              {currentStep === 3 && (
                <ReviewStep
                  key="review"
                  control={control}
                  formState={formState}
                  watch={watch}
                  tracks={tracks}
                  onNext={handleNext}
                  onBack={goBack}
                  onJumpTo={jumpTo}
                  isSubmitting={isSubmitting}
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer */}
          <motion.p
            className="text-center text-white/50 text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            🔒 Your information is secure and will never be shared.
          </motion.p>
        </div>
      </div>

      {/* Toaster for notifications */}
      <Toaster position="bottom-center" />
    </div>
  );
}
