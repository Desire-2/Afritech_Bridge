'use client';

import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import { Lightbulb, FileText } from 'lucide-react';
import { GlowInput } from '../ui/GlowInput';
import { GlowTextarea } from '../ui/GlowTextarea';
import { DropZone } from '../ui/DropZone';

interface MotivationDocumentsStepProps {
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

export const MotivationDocumentsStep: React.FC<MotivationDocumentsStepProps> = ({
  control,
  formState,
  watch,
  setValue,
  onNext,
  onBack,
}) => {
  const motivationText = watch('motivation_letter') || '';
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
        <h2 className="text-3xl font-bold font-display text-white mb-2">Motivation & Documents</h2>
        <p className="text-white/70">Share your motivation and upload your CV</p>
      </div>

      {/* Info Tip */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 p-4 rounded-lg bg-teal-500/10 border border-teal-500/30 flex gap-3"
      >
        <Lightbulb className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-white/70">
          <strong className="text-teal-300">💡 Tip:</strong> Write authentically about your passion for technology. We read every application personally.
        </p>
      </motion.div>

      <motion.div
        className="space-y-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Motivation Letter */}
        <motion.div variants={itemVariants}>
          <Controller
            name="motivation_letter"
            control={control}
            render={({ field }) => (
              <GlowTextarea
                {...field}
                label="Why do you want to intern at AfriTech Bridge?"
                placeholder="Tell us about your passion for technology and why this opportunity matters to you..."
                required
                maxChars={5000}
                charCount={motivationText.length}
                error={formState.errors.motivation_letter?.message}
              />
            )}
          />
        </motion.div>

        {/* CV File Upload */}
        <motion.div variants={itemVariants}>
          <label className="block text-xs font-semibold uppercase tracking-wide text-teal-400 mb-3">
            Upload CV <span className="text-red-400">*</span>
          </label>
          <div className="mb-3 p-3 rounded-lg bg-teal-500/5 border border-teal-500/20 flex gap-3">
            <FileText className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-white/60">
              PDF, DOC, or DOCX — Max 5MB. No more than 2 pages recommended.
            </p>
          </div>
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
          disabled={!cvFile || Object.keys(formState.errors).length > 0}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
            cvFile && Object.keys(formState.errors).length === 0
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
