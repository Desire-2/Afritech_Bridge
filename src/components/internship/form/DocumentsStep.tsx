'use client';

import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import { FileText } from 'lucide-react';
import { GlowInput } from '../ui/GlowInput';
import { DropZone } from '../ui/DropZone';

interface DocumentsStepProps {
  control: any;
  formState: any;
  watch: any;
  setValue: any;
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

export const DocumentsStep: React.FC<DocumentsStepProps> = ({
  control,
  formState,
  watch,
  setValue,
  onNext,
  onBack,
}) => {
  const cvFile = watch('cv_file');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-display text-white mb-2">Your Documents</h2>
        <p className="text-white/70">Share your CV and portfolio links</p>
      </div>

      {/* Info Banner */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 p-4 rounded-lg bg-teal-500/10 border border-teal-500/30 flex gap-3"
      >
        <FileText className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-white/70">
          Your CV should be up to date. Include any projects, courses, and volunteer work. <strong>No more than 2 pages recommended.</strong>
        </p>
      </motion.div>

      <motion.div
        className="space-y-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* CV File Upload */}
        <motion.div variants={itemVariants}>
          <label className="block text-xs font-semibold uppercase tracking-wide text-teal-400 mb-3">
            Upload CV <span className="text-red-400">*</span>
          </label>
          <DropZone
            onFileSelect={(file) => setValue('cv_file', file)}
            file={cvFile}
            accept=".pdf,.doc,.docx"
            maxSize={5 * 1024 * 1024}
            error={formState.errors.cv_file?.message}
          />
        </motion.div>

        {/* Portfolio URL */}
        <motion.div variants={itemVariants}>
          <Controller
            name="portfolio_url"
            control={control}
            render={({ field }) => (
              <GlowInput
                {...field}
                label="Portfolio / Personal Website (Optional)"
                placeholder="https://yourportfolio.com"
                error={formState.errors.portfolio_url?.message}
              />
            )}
          />
        </motion.div>

        {/* GitHub URL */}
        <motion.div variants={itemVariants}>
          <Controller
            name="github_url"
            control={control}
            render={({ field }) => (
              <GlowInput
                {...field}
                label="GitHub Profile (Optional)"
                placeholder="https://github.com/yourprofile"
                error={formState.errors.github_url?.message}
              />
            )}
          />
        </motion.div>

        {/* LinkedIn URL */}
        <motion.div variants={itemVariants}>
          <Controller
            name="linkedin_url"
            control={control}
            render={({ field }) => (
              <GlowInput
                {...field}
                label="LinkedIn Profile (Optional)"
                placeholder="https://linkedin.com/in/yourprofile"
                error={formState.errors.linkedin_url?.message}
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
          disabled={!cvFile}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
            cvFile
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
