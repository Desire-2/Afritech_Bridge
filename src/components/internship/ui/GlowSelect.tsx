'use client';

import { forwardRef, SelectHTMLAttributes } from 'react';

interface GlowSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  required?: boolean;
  options: Array<{ value: string; label: string }>;
}

export const GlowSelect = forwardRef<HTMLSelectElement, GlowSelectProps>(
  ({ label, error, required, options, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-semibold uppercase tracking-wide text-teal-400 mb-2">
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={`glow-input w-full px-4 py-3 text-sm font-medium text-white bg-white/3 border border-teal-500/15 rounded-lg focus:border-teal-500 focus:ring-0 focus:outline-none focus:shadow-lg focus:shadow-teal-500/20 transition-all duration-200 cursor-pointer appearance-none pr-10 ${
            error ? 'border-red-400 shadow-lg shadow-red-400/20' : ''
          } ${className}`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%231ab3a8' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 12px center',
          }}
          {...props}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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

GlowSelect.displayName = 'GlowSelect';
