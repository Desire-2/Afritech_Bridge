'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { PageBackground } from '@/components/internship/layout/PageBackground';
import { Header } from '@/components/internship/layout/Header';
import { StepIndicator } from '@/components/internship/form/StepIndicator';
import { TrackSelector } from '@/components/internship/form/TrackSelector';
import { PersonalInfoStep } from '@/components/internship/form/PersonalInfoStep';
import { AcademicStep } from '@/components/internship/form/AcademicStep';
import { MotivationStep } from '@/components/internship/form/MotivationStep';
import { DocumentsStep } from '@/components/internship/form/DocumentsStep';
import { ReviewStep } from '@/components/internship/form/ReviewStep';
import { SuccessScreen } from '@/components/internship/ui/SuccessScreen';
import { useInternshipForm } from '@/hooks/useInternshipForm';
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
    cvFile,
    setCvFile,
  } = useInternshipForm();

  const { control, formState, watch, setValue, handleSubmit } = methods;

  // Sync cv_file from react-hook-form to the cvFile state
  // (cvFile state is the source of truth for the File object)
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'cv_file' || name === undefined) {
        const file = value.cv_file;
        if (file instanceof File) {
          setCvFile(file);
        } else {
          setCvFile(null);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setCvFile]);

  // Handle beforeunload for unsaved changes warning
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (currentStep > 0 && currentStep < 5) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [currentStep]);

  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Create FormData for multipart submission
      const formData = new FormData();

      // --- CV FILE (backend expects field name 'cv', NOT 'cv_file') ---
      const cvFileToSend = (
        (cvFile instanceof File ? cvFile : null)
        ?? (methods.getValues('cv_file') instanceof File ? methods.getValues('cv_file') : null)
        ?? (data.cv_file instanceof File ? data.cv_file : null)
      );

      if (cvFileToSend) {
        formData.append('cv', cvFileToSend);
      }

      // --- TRACK ID (stored in form state at selection time) ---
      // Read ALL form values directly from form state at submit time
      // (handleSubmit's 'data' parameter may not include unregistered fields)
      const allValues = methods.getValues();

      // track_id was saved in form state when the user selected the track
      const trackId = allValues.track_id || data.track_id;
      if (trackId) {
        formData.append('track_id', trackId);
      } else {
        // Last resort fallback: send the slug directly
        const trackSlug = allValues.track_slug || data.track_slug;
        if (trackSlug) {
          formData.append('track_id', trackSlug);
        }
      }

      // --- FORM TEXT FIELDS ---
      const skipFields = new Set([
        'track_slug',   // sent as track_id instead
        'consent',      // UI-only field
        'cv_file',      // sent as 'cv' above
      ]);

      // Build FormData from allValues (direct form state) with fallback to data
      const sourceData = (Object.keys(allValues).length > 0 ? allValues : data) as Record<string, unknown>;

      Object.keys(sourceData).forEach((key) => {
        if (skipFields.has(key)) return;

        const value = sourceData[key];
        if (value === null || value === undefined || value === '') return;

        formData.append(key, String(value));
      });

      // Backend wraps response: {success, message, data: {reference_code, ...}}
      const response = await submitApplication(formData);
      const refCode = response?.data?.reference_code ?? response?.reference_code ?? null;
      setReferenceCode(refCode);

      // Clear form state from sessionStorage
      sessionStorage.removeItem('internship_form_state');

      toast.success('Application submitted successfully!');
    } catch (error: any) {
      const message = error.message || 'Failed to submit application. Please try again.';
      setSubmitError(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = async () => {
    if (currentStep === 5) {
      // Final submission
      handleSubmit(onSubmit)();
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
            totalSteps={6}
            stepLabels={['Track', 'Personal', 'Applicant', 'Motivation', 'Documents', 'Review']}
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
                  selectedTrack={watch('track_slug')}
                  onTrackSelect={(slug, trackId) => {
                    setValue('track_slug', slug);
                    setValue('track_id', trackId);
                  }}
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
                <AcademicStep
                  key="academic"
                  control={control}
                  formState={formState}
                  onNext={goNext}
                  onBack={goBack}
                />
              )}
              {currentStep === 3 && (
                <MotivationStep
                  key="motivation"
                  control={control}
                  formState={formState}
                  watch={watch}
                  onNext={goNext}
                  onBack={goBack}
                />
              )}
              {currentStep === 4 && (
                <DocumentsStep
                  key="documents"
                  control={control}
                  formState={formState}
                  watch={watch}
                  setValue={setValue}
                  onNext={goNext}
                  onBack={goBack}
                />
              )}
              {currentStep === 5 && (
                <ReviewStep
                  key="review"
                  control={control}
                  formState={formState}
                  watch={watch}
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
