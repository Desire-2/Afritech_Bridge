'use client';

import { useCallback, useEffect, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ApplicationFormData } from '@/types/internship';
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
  step6Schema,
} from '@/schemas/applicationSchema';

const STORAGE_KEY = 'internship_form_state';

export const useInternshipForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [referenceCode, setReferenceCode] = useState<string | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);

  // Get schema for current step
  const getSchemaForStep = (step: number) => {
    switch (step) {
      case 0:
        return step1Schema;
      case 1:
        return step2Schema;
      case 2:
        return step3Schema;
      case 3:
        return step4Schema;
      case 4:
        return step5Schema;
      case 5:
        return step6Schema;
      default:
        return step1Schema;
    }
  };

  const methods = useForm<ApplicationFormData>({
    resolver: zodResolver(getSchemaForStep(currentStep)),
    mode: 'onBlur',
    defaultValues: {
      track_id: '',
      full_name: '',
      email: '',
      phone: '',
      date_of_birth: '',
      gender: '',
      district: '',
      applicant_type: '',
      institution: '',
      field_of_study: '',
      graduation_year: '',
      experience_level: '',
      skills_tags: [],
      motivation_letter: '',
      portfolio_url: '',
      github_url: '',
      linkedin_url: '',
      consent: false,
    },
  });

  // Load form state from session storage on mount
  useEffect(() => {
    const savedState = sessionStorage.getItem(STORAGE_KEY);
    if (savedState) {
      try {
        const { formData, step } = JSON.parse(savedState);
        methods.reset(formData);
        setCurrentStep(step);
      } catch (error) {
        console.error('Failed to load form state:', error);
      }
    }
  }, []);

  // Save form state to session storage whenever it changes
  useEffect(() => {
    const subscription = methods.watch((data) => {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          formData: data,
          step: currentStep,
        })
      );
    });

    return () => subscription.unsubscribe();
  }, [methods, currentStep]);

  const goNext = useCallback(async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [methods]);

  const goBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const jumpTo = useCallback((step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const resetForm = useCallback(() => {
    methods.reset();
    setCurrentStep(0);
    setCvFile(null);
    setReferenceCode(null);
    setSubmitError(null);
    sessionStorage.removeItem(STORAGE_KEY);
  }, [methods]);

  return {
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
  };
};
