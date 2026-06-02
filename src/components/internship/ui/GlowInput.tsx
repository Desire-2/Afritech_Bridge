'use client';

import { forwardRef, InputHTMLAttributes } from 'react';

interface GlowInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export const GlowInput = forwardRef<HTMLInputElement, GlowInputProps>(
  ({ label, error, required, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-semibold uppercase tracking-wide text-teal-400 mb-2">
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`glow-input w-full px-4 py-3 text-sm font-medium text-white bg-white/3 border border-teal-500/15 rounded-lg focus:border-teal-500 focus:ring-0 focus:outline-none focus:shadow-lg focus:shadow-teal-500/20 transition-all duration-200 placeholder-white/25 ${
            error ? 'border-red-400 shadow-lg shadow-red-400/20' : ''
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-2 text-xs text-red-400 animate-[fadeIn_0.2s_ease-in] flex items-center gap-1">
            <span className="inline-block w-1 h-1 rounded-full bg-red-400" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

GlowInput.displayName = 'GlowInput';
