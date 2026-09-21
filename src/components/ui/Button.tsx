import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'teal' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#F07C2E] hover:bg-[#E06C1E] text-white shadow-sm hover:shadow transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#F07C2E] focus-visible:ring-offset-2',
  secondary:
    'bg-[#0B1C3A] hover:bg-[#152D56] text-white shadow-sm hover:shadow transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0B1C3A]',
  teal:
    'bg-[#00A896] hover:bg-[#008B7A] text-white shadow-sm hover:shadow transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#00A896]',
  outline:
    'border border-slate-300 text-[#0B1C3A] hover:bg-slate-50 hover:border-slate-400 transition-all duration-200',
  ghost:
    'text-[#0B1C3A] hover:bg-slate-100 transition-all duration-200',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs font-medium rounded-md',
  md: 'px-5 py-2.5 text-sm font-semibold rounded-lg',
  lg: 'px-7 py-3.5 text-base font-semibold rounded-lg',
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-colors cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export interface LinkButtonProps extends BaseButtonProps {
  href: string;
  isExternal?: boolean;
  target?: string;
  rel?: string;
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  isExternal,
  target,
  rel,
  children,
}: LinkButtonProps) {
  const isExt = isExternal || href.startsWith('http');
  const finalTarget = target || (isExt ? '_blank' : undefined);
  const finalRel = rel || (isExt ? 'noreferrer noopener' : undefined);

  return (
    <Link
      href={href}
      target={finalTarget}
      rel={finalRel}
      className={`inline-flex items-center justify-center font-medium transition-colors cursor-pointer select-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export default Button;
