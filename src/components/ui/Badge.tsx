import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'orange' | 'navy' | 'gray' | 'outline';
  className?: string;
  size?: 'sm' | 'md';
}

export function Badge({
  children,
  variant = 'teal',
  size = 'md',
  className = '',
}: BadgeProps) {
  const variantStyles = {
    teal: 'bg-[#00A896]/10 text-[#00A896] border border-[#00A896]/20',
    orange: 'bg-[#F07C2E]/10 text-[#F07C2E] border border-[#F07C2E]/20',
    navy: 'bg-[#0B1C3A]/10 text-[#0B1C3A] border border-[#0B1C3A]/15',
    gray: 'bg-slate-100 text-slate-700 border border-slate-200',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
