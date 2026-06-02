'use client';

import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import { X } from 'lucide-react';
import { GlowInput } from '../ui/GlowInput';
import { GlowSelect } from '../ui/GlowSelect';
import { useState } from 'react';

interface AcademicStepProps {
  control: any;
  formState: any;
  watch: any;
  setValue: any;
  onNext: () => void;
  onBack: () => void;
}

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 2017 }, (_, i) => 2018 + i).concat([
  'Still studying',
]);

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
  watch,
  setValue,
  onNext,
  onBack,
}) => {
  const skillsTags = watch('skills_tags') || [];
  const [skillInput, setSkillInput] = useState('');

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (skillsTags.length < 10) {
        setValue('skills_tags', [...skillsTags, skillInput.trim()]);
        setSkillInput('');
      }
    }
  };

  const handleRemoveSkill = (index: number) => {
    setValue('skills_tags', skillsTags.filter((_: string, i: number) => i !== index));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-display text-white mb-2">Academic Background</h2>
        <p className="text-white/70">Your education and experience</p>
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
                  { value: 'recent_graduate', label: 'Recent Graduate' },
                  { value: 'short_course', label: 'Short Course Alumni' },
                  { value: 'self_taught', label: 'Self-Taught / Other' },
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

        {/* Institution */}
        <motion.div variants={itemVariants}>
          <Controller
            name="institution"
            control={control}
            render={({ field }) => (
              <GlowInput
                {...field}
                label="Institution Name"
                placeholder="University / School / Bootcamp name"
                required
                error={formState.errors.institution?.message}
              />
            )}
          />
        </motion.div>

        {/* Field of Study */}
        <motion.div variants={itemVariants}>
          <Controller
            name="field_of_study"
            control={control}
            render={({ field }) => (
              <GlowInput
                {...field}
                label="Field of Study"
                placeholder="Computer Science, Biology, etc."
                required
                error={formState.errors.field_of_study?.message}
              />
            )}
          />
        </motion.div>

        {/* Graduation Year */}
        <motion.div variants={itemVariants}>
          <Controller
            name="graduation_year"
            control={control}
            render={({ field }) => (
              <GlowSelect
                {...field}
                label="Graduation Year"
                required
                options={years.map((y) => ({ value: String(y), label: String(y) }))}
                error={formState.errors.graduation_year?.message}
              />
            )}
          />
        </motion.div>

        {/* AfriTech Bridge Course */}
        <motion.div variants={itemVariants}>
          <Controller
            name="atb_course"
            control={control}
            render={({ field }) => (
              <GlowInput
                {...field}
                label="AfriTech Bridge Course (Optional)"
                placeholder="Course you completed at AfriTech Bridge"
                error={formState.errors.atb_course?.message}
              />
            )}
          />
        </motion.div>

        {/* Experience Level */}
        <motion.div variants={itemVariants}>
          <label className="block text-xs font-semibold uppercase tracking-wide text-teal-400 mb-3">
            Experience Level <span className="text-red-400">*</span>
          </label>
          <Controller
            name="experience_level"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'beginner', label: 'Beginner', desc: '0–1 years' },
                  { value: 'intermediate', label: 'Intermediate', desc: '1–3 years' },
                  { value: 'advanced', label: 'Advanced', desc: '3+ years' },
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
                    <p className="text-xs text-white/50 mt-1">{option.desc}</p>
                  </button>
                ))}
              </div>
            )}
          />
          {formState.errors.experience_level && (
            <p className="mt-2 text-xs text-red-400">{formState.errors.experience_level.message}</p>
          )}
        </motion.div>

        {/* Skills Tags */}
        <motion.div variants={itemVariants}>
          <label className="block text-xs font-semibold uppercase tracking-wide text-teal-400 mb-3">
            Skills <span className="text-white/60 font-normal">(Max 10)</span>
          </label>
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleAddSkill}
            placeholder="Type a skill and press Enter"
            className="glow-input w-full px-4 py-3 text-sm font-medium text-white bg-white/3 border border-teal-500/15 rounded-lg focus:border-teal-500 focus:ring-0 focus:outline-none focus:shadow-lg focus:shadow-teal-500/20 transition-all duration-200 placeholder-white/25 mb-3"
          />
          <div className="flex flex-wrap gap-2">
            {skillsTags.map((skill: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 border border-teal-500/40 rounded-full"
              >
                <span className="text-sm text-teal-300">{skill}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                  className="hover:bg-teal-500/30 rounded transition-colors"
                >
                  <X className="w-3 h-3 text-teal-400" />
                </button>
              </motion.div>
            ))}
          </div>
          {formState.errors.skills_tags && (
            <p className="mt-2 text-xs text-red-400">{formState.errors.skills_tags.message}</p>
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
