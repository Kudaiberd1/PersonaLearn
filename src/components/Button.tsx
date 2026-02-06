import type { ReactNode } from 'react';
import Icon from './Icon';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: string;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'flex items-center justify-center gap-2 font-bold rounded-lg transition-all disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20',
    secondary: 'bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700',
    outline: 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800',
  };

  const iconElement = icon && <Icon name={icon} />;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon && iconPosition === 'left' && iconElement}
      {children}
      {icon && iconPosition === 'right' && iconElement}
    </button>
  );
}
