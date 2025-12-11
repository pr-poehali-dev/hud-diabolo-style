import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface RpgInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const RpgInput = forwardRef<HTMLInputElement, RpgInputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-semibold text-amber-400 uppercase tracking-wide">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-2 rounded border-2',
            'bg-stone-950/80 border-amber-700/60 text-amber-100',
            'focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 focus:outline-none',
            'placeholder:text-stone-600',
            'transition-all duration-200',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

RpgInput.displayName = 'RpgInput';
