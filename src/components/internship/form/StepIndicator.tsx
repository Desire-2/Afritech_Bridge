'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels?: string[];
  onStepClick?: (step: number) => void;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
  stepLabels = ['Track', 'Personal', 'Background', 'Motivation', 'Documents', 'Review'],
  onStepClick,
}) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <div className="w-full mb-8">
      {/* Mobile: Simplified */}
      <div className="md:hidden flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-teal-400">
            Step {currentStep + 1} of {totalSteps}
          </p>
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-teal-500 to-teal-400"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Desktop: Full Step Indicators */}
      <div className="hidden md:flex items-center justify-between gap-2">
        {steps.map((step, index) => {
          const isActive = step === currentStep;
          const isCompleted = step < currentStep;
          const canClick = step <= currentStep;

          return (
            <div
              key={step}
              className="flex items-center flex-1"
              onClick={() => canClick && onStepClick?.(step)}
            >
              {/* Step Circle */}
              <motion.div
                className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all cursor-pointer flex-shrink-0 ${
                  isCompleted
                    ? 'bg-teal-500 border-teal-500'
                    : isActive
                      ? 'border-teal-500 bg-white/5'
                      : 'border-white/20 bg-white/5'
                }`}
                whileHover={canClick ? { scale: 1.1 } : {}}
              >
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Check className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <span
                    className={`text-sm font-semibold ${
                      isActive ? 'text-teal-400' : 'text-white/50'
                    }`}
                  >
                    {step + 1}
                  </span>
                )}

                {/* Pulsing Ring for Active Step */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 border-2 border-teal-500 rounded-full"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 1.3, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {/* Step Label */}
              <motion.p
                className={`ml-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive || isCompleted ? 'text-teal-400' : 'text-white/40'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {stepLabels[index]}
              </motion.p>

              {/* Connecting Line */}
              {step < totalSteps - 1 && (
                <div className="flex-1 ml-2 h-0.5 bg-white/10 relative overflow-hidden">
                  {isCompleted && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-teal-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
