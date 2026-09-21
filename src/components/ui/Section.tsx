import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'surface' | 'dark' | 'navy';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export function Section({
  children,
  className = '',
  variant = 'white',
  spacing = 'lg',
  id,
  ...props
}: SectionProps) {
  const variantStyles = {
    white: 'bg-white text-gray-900',
    surface: 'bg-[#F8FAFC] text-gray-900 border-y border-slate-200/60',
    dark: 'bg-[#0B1C3A] text-white',
    navy: 'bg-[#1A2B4C] text-white',
  };

  const spacingStyles = {
    sm: 'py-10 sm:py-12',
    md: 'py-14 sm:py-16',
    lg: 'py-20 sm:py-24',
    xl: 'py-24 sm:py-32',
  };

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${variantStyles[variant]} ${spacingStyles[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
