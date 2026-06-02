'use client';

import { forwardRef, TextareaHTMLAttributes } from 'react';

interface GlowTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  required?: boolean;
  charCount?: number;
  maxChars?: number;
}

export const GlowTextarea = forwardRef<HTMLTextAreaElement, GlowTextareaProps>(
  ({ label, error, required, charCount = 0, maxChars, className = '', ...props }, ref) => {
    const isNearLimit = maxChars && charCount > maxChars * 0.8;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-semibold uppercase tracking-wide text-teal-400 mb-2">
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={`glow-input w-full px-4 py-3 text-sm font-medium text-white bg-white/3 border border-teal-500/15 rounded-lg focus:border-teal-500 focus:ring-0 focus:outline-none focus:shadow-lg focus:shadow-teal-500/20 transition-all duration-200 placeholder-white/25 resize-none ${
            error ? 'border-red-400 shadow-lg shadow-red-400/20' : ''
          } ${className}`}
          {...props}
        />
        <div className="flex justify-between items-center mt-2">
          {error && (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-400" />
              {error}
            </p>
          )}
          {maxChars && (
            <p className={`text-xs ml-auto ${isNearLimit ? 'text-orange-400 font-semibold' : 'text-white/40'}`}>
              {charCount}/{maxChars}
            </p>
          )}
        </div>
      </div>
    );
  }
);

GlowTextarea.displayName = 'GlowTextarea';
