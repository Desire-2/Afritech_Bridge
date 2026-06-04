'use client';

import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';

interface AcademicStepProps {
  control: any;
  formState: any;
  onNext: () => void;
  onBack: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const AcademicStep: React.FC<AcademicStepProps> = ({
  control,
  formState,
  onNext,
  onBack,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-display text-white mb-2">Applicant Type</h2>
        <p className="text-white/70">What describes you best?</p>
      </div>

      <motion.div
        className="space-y-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Applicant Type */}
        <motion.div variants={itemVariants}>
          <label className="block text-xs font-semibold uppercase tracking-wide text-teal-400 mb-3">
            What describes you best? <span className="text-red-400">*</span>
          </label>
          <Controller
            name="applicant_type"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'graduate', label: 'Graduate' },
                  { value: 'short_course_alumni', label: 'Short Course Alumni' },
                  { value: 'external', label: 'External Applicant' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => field.onChange(option.value)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      field.value === option.value
                        ? 'border-teal-500 bg-teal-500/10'
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                  >
                    <p className="font-semibold text-white">{option.label}</p>
                  </button>
                ))}
              </div>
            )}
          />
          {formState.errors.applicant_type && (
            <p className="mt-2 text-xs text-red-400">{formState.errors.applicant_type.message}</p>
          )}
        </motion.div>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button
          onClick={onBack}
          className="flex-1 py-3 px-6 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={Object.keys(formState.errors).length > 0}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
            Object.keys(formState.errors).length === 0
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
          }`}
        >
          Continue →
        </button>
      </motion.div>
    </motion.div>
  );
};
