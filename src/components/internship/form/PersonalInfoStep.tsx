'use client';

import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form';
import { GlowInput } from '../ui/GlowInput';
import { ApplicationFormData } from '@/types/internship';

interface PersonalInfoStepProps {
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

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
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
        <h2 className="text-3xl font-bold font-display text-white mb-2">Personal Information</h2>
        <p className="text-white/70">Tell us about yourself</p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Full Name */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <Controller
            name="full_name"
            control={control}
            render={({ field }) => (
              <GlowInput
                {...field}
                label="Full Name"
                placeholder="Jean-Pierre Habimana"
                required
                error={formState.errors.full_name?.message}
              />
            )}
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <GlowInput
                {...field}
                label="Email"
                type="email"
                placeholder="you@example.com"
                required
                error={formState.errors.email?.message}
              />
            )}
          />
        </motion.div>

        {/* Phone */}
        <motion.div variants={itemVariants}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <GlowInput
                {...field}
                label="Phone Number"
                placeholder="+250 7XX XXX XXX"
                required
                error={formState.errors.phone?.message}
              />
            )}
          />
        </motion.div>

        {/* National ID (optional) */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <Controller
            name="national_id"
            control={control}
            render={({ field }) => (
              <GlowInput
                {...field}
                label="National ID (Optional)"
                placeholder="1199010112345678"
                error={formState.errors.national_id?.message}
              />
            )}
          />
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
