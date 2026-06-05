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

      // Map frontend fields to backend field names
      const fieldMapping: Record<string, string> = {
        motivation_letter: 'cover_letter',
        cv_file: 'resume',
      };

      // Add all fields to FormData with proper mapping
      Object.keys(data).forEach((key) => {
        if (key === 'consent') {
          // Don't send consent to backend
          return;
        }

        const backendKey = fieldMapping[key] || key;

        if (key === 'cv_file' && data[key]) {
          formData.append('resume', data[key]);
        } else if (key === 'skills_tags' && Array.isArray(data[key])) {
          formData.append('skills_tags', JSON.stringify(data[key]));
        } else if (key === 'motivation_letter' && data[key]) {
          formData.append('cover_letter', data[key]);
        } else if (data[key] !== null && data[key] !== undefined && data[key] !== '') {
          formData.append(backendKey, String(data[key]));
        }
      });

      const response = await submitApplication(formData);
      setReferenceCode(response.reference_code);

      // Clear form state from sessionStorage
      sessionStorage.removeItem('internship_form_state');

      // Success toast
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
            stepLabels={['Track', 'Personal', 'Background', 'Motivation', 'Documents', 'Review']}
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
                <AcademicStep
                  key="academic"
                  control={control}
                  formState={formState}
                  watch={watch}
                  setValue={setValue}
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
