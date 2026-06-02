'use client';

import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import { Edit2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ReviewStepProps {
  control: any;
  formState: any;
  watch: any;
  onNext: () => void;
  onBack: () => void;
  onJumpTo: (step: number) => void;
  isSubmitting: boolean;
}

const SectionHeader: React.FC<{ title: string; onClick: () => void; isExpanded: boolean }> =
  ({ title, onClick, isExpanded }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {isExpanded ? (
        <ChevronUp className="w-5 h-5 text-teal-400" />
      ) : (
        <ChevronDown className="w-5 h-5 text-white/40" />
      )}
    </button>
  );

const DataRow: React.FC<{ label: string; value: string | React.ReactNode }> = ({
  label,
  value,
}) => (
  <div className="py-3 border-b border-white/10 last:border-0">
    <p className="text-xs text-white/60 uppercase tracking-wide mb-1">{label}</p>
    <p className="text-white font-medium">{value}</p>
  </div>
);

export const ReviewStep: React.FC<ReviewStepProps> = ({
  control,
  formState,
  watch,
  onNext,
  onBack,
  onJumpTo,
  isSubmitting,
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    personal: true,
    background: true,
    motivation: true,
    documents: false,
  });

  const formData = watch();

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const goToSection = (section: string) => {
    const sectionSteps: Record<string, number> = {
      personal: 1,
      background: 2,
      motivation: 3,
      documents: 4,
    };
    onJumpTo(sectionSteps[section]);
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
        <h2 className="text-3xl font-bold font-display text-white mb-2">Review Your Application</h2>
        <p className="text-white/70">Everything looks good? Review below and submit!</p>
      </div>

      <motion.div
        className="space-y-4 mb-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
      >
        {/* Track */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="p-6 rounded-lg bg-gradient-to-r from-teal-500/20 to-teal-500/10 border border-teal-500/30"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Selected Track</h3>
            <button
              onClick={() => onJumpTo(0)}
              className="flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-semibold"
            >
              <Edit2 className="w-4 h-4" /> Edit
            </button>
          </div>
          <p className="text-white font-semibold text-lg">{formData.track_slug}</p>
        </motion.div>

        {/* Personal Information */}
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="p-6 rounded-lg bg-white/5 border border-white/10">
          <SectionHeader
            title="Personal Information"
            isExpanded={expandedSections.personal}
            onClick={() => toggleSection('personal')}
          />
          {expandedSections.personal && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-3 pt-4"
            >
              <DataRow label="Full Name" value={formData.full_name} />
              <DataRow label="Email" value={formData.email} />
              <DataRow label="Phone" value={formData.phone} />
              <DataRow label="Date of Birth" value={formData.date_of_birth} />
              <DataRow label="Gender" value={formData.gender} />
              <DataRow label="District" value={formData.district} />
              {formData.sector && <DataRow label="Sector" value={formData.sector} />}
              <button
                onClick={() => onJumpTo(1)}
                className="mt-4 text-teal-400 hover:text-teal-300 text-sm font-semibold flex items-center gap-2"
              >
                <Edit2 className="w-4 h-4" /> Edit
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Background */}
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="p-6 rounded-lg bg-white/5 border border-white/10">
          <SectionHeader
            title="Academic Background"
            isExpanded={expandedSections.background}
            onClick={() => toggleSection('background')}
          />
          {expandedSections.background && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-3 pt-4"
            >
              <DataRow label="Applicant Type" value={formData.applicant_type} />
              <DataRow label="Institution" value={formData.institution} />
              <DataRow label="Field of Study" value={formData.field_of_study} />
              <DataRow label="Graduation Year" value={formData.graduation_year} />
              <DataRow label="Experience Level" value={formData.experience_level} />
              {formData.skills_tags?.length > 0 && (
                <div className="py-3 border-b border-white/10">
                  <p className="text-xs text-white/60 uppercase tracking-wide mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills_tags.map((skill: string, i: number) => (
                      <span key={i} className="px-2 py-1 bg-teal-500/20 border border-teal-500/40 rounded-full text-xs text-teal-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <button
                onClick={() => onJumpTo(2)}
                className="mt-4 text-teal-400 hover:text-teal-300 text-sm font-semibold flex items-center gap-2"
              >
                <Edit2 className="w-4 h-4" /> Edit
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Motivation */}
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="p-6 rounded-lg bg-white/5 border border-white/10">
          <SectionHeader
            title="Motivation"
            isExpanded={expandedSections.motivation}
            onClick={() => toggleSection('motivation')}
          />
          {expandedSections.motivation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-3 pt-4"
            >
              <div className="py-3 border-b border-white/10">
                <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Why AfriTech Bridge?</p>
                <p className="text-white font-medium line-clamp-3">{formData.motivation_letter}</p>
              </div>
              <DataRow label="How did you hear about us?" value={formData.heard_about} />
              <button
                onClick={() => onJumpTo(3)}
                className="mt-4 text-teal-400 hover:text-teal-300 text-sm font-semibold flex items-center gap-2"
              >
                <Edit2 className="w-4 h-4" /> Edit
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Documents */}
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="p-6 rounded-lg bg-white/5 border border-white/10">
          <SectionHeader
            title="Documents"
            isExpanded={expandedSections.documents}
            onClick={() => toggleSection('documents')}
          />
          {expandedSections.documents && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-3 pt-4"
            >
              <DataRow label="CV" value={formData.cv_file?.name || 'No file'} />
              {formData.portfolio_url && <DataRow label="Portfolio" value={formData.portfolio_url} />}
              {formData.github_url && <DataRow label="GitHub" value={formData.github_url} />}
              {formData.linkedin_url && <DataRow label="LinkedIn" value={formData.linkedin_url} />}
              <button
                onClick={() => onJumpTo(4)}
                className="mt-4 text-teal-400 hover:text-teal-300 text-sm font-semibold flex items-center gap-2"
              >
                <Edit2 className="w-4 h-4" /> Edit
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Consent Checkbox */}
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="p-6 rounded-lg bg-white/5 border border-white/10">
          <Controller
            name="consent"
            control={control}
            render={({ field }) => (
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                  className="mt-1 w-5 h-5 rounded border-2 border-teal-500/50 bg-white/5 checked:bg-teal-500 cursor-pointer accent-teal-500"
                />
                <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                  I confirm all information is accurate and I agree to AfriTech Bridge's terms and
                  internship program guidelines.
                </span>
              </label>
            )}
          />
          {formState.errors.consent && (
            <p className="mt-2 text-xs text-red-400">{formState.errors.consent.message}</p>
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
          disabled={isSubmitting}
          className="flex-1 py-3 px-6 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all disabled:opacity-50"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!formData.consent || isSubmitting}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
            formData.consent && !isSubmitting
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application →'
          )}
        </button>
      </motion.div>
    </motion.div>
  );
};
