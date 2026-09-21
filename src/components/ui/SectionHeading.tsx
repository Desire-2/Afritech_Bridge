import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = '',
  id,
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={`mb-12 sm:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? 'bg-[#3ECFB2]/15 text-[#3ECFB2] border border-[#3ECFB2]/30'
              : 'bg-[#00A896]/10 text-[#00A896] border border-[#00A896]/20'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          isDark ? 'text-white' : 'text-[#0B1C3A]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
