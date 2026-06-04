'use client';

import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import { Lightbulb } from 'lucide-react';
import { GlowTextarea } from '../ui/GlowTextarea';

interface MotivationStepProps {
  control: any;
  formState: any;
  watch: any;
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

export const MotivationStep: React.FC<MotivationStepProps> = ({
  control,
  formState,
  watch,
  onNext,
  onBack,
}) => {
  const motivationText = watch('motivation_letter') || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-display text-white mb-2">Your Motivation</h2>
        <p className="text-white/70">Help us understand your goals and aspirations</p>
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
          <strong className="text-teal-300">💡 Tip:</strong> Write authentically. We read every
          application personally.
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
                maxChars={1000}
                charCount={motivationText.length}
                error={formState.errors.motivation_letter?.message}
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
