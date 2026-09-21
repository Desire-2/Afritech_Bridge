import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'slate' | 'dark' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className = '',
  variant = 'white',
  padding = 'md',
  ...props
}: CardProps) {
  const variantStyles = {
    white: 'bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors',
    slate: 'bg-slate-50/70 border border-slate-200/70',
    dark: 'bg-[#152544] border border-slate-700/60 text-white',
    bordered: 'bg-transparent border border-slate-200',
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  };

  return (
    <div
      className={`rounded-xl ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
