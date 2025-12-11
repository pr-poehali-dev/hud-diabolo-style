import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RpgButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export function RpgButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: RpgButtonProps) {
  const variants = {
    primary:
      'bg-gradient-to-b from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 border-amber-500 text-amber-950 shadow-amber-900/50',
    secondary:
      'bg-gradient-to-b from-stone-600 to-stone-800 hover:from-stone-500 hover:to-stone-700 border-stone-500 text-stone-100 shadow-stone-900/50',
    danger:
      'bg-gradient-to-b from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 border-red-500 text-red-100 shadow-red-900/50',
    success:
      'bg-gradient-to-b from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 border-green-500 text-green-100 shadow-green-900/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(
        'relative font-bold rounded border-2 shadow-lg transition-all duration-200',
        'hover:scale-105 hover:shadow-xl active:scale-95',
        'before:absolute before:inset-0 before:rounded before:bg-gradient-to-t before:from-black/20 before:to-white/10',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
