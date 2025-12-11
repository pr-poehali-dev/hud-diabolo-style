import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RpgPanelProps {
  children: ReactNode;
  className?: string;
  title?: string;
  variant?: 'default' | 'gold' | 'dark' | 'bronze';
}

export function RpgPanel({ children, className, title, variant = 'default' }: RpgPanelProps) {
  const variants = {
    default: 'bg-gradient-to-br from-amber-900/40 via-stone-900/60 to-amber-900/40 border-amber-600/60',
    gold: 'bg-gradient-to-br from-amber-800/50 via-yellow-900/60 to-amber-800/50 border-amber-500/80',
    dark: 'bg-gradient-to-br from-stone-900/80 via-stone-950/90 to-stone-900/80 border-stone-700/60',
    bronze: 'bg-gradient-to-br from-orange-900/40 via-stone-900/60 to-orange-900/40 border-orange-700/60',
  };

  return (
    <div
      className={cn(
        'relative border-2 rounded-lg shadow-2xl backdrop-blur-sm',
        'before:absolute before:inset-0 before:rounded-lg before:p-[2px]',
        'before:bg-gradient-to-b before:from-amber-400/20 before:via-transparent before:to-transparent',
        'before:-z-10',
        variants[variant],
        className
      )}
    >
      {/* Decorative corners */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-amber-400/80 rounded-tl" />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-amber-400/80 rounded-tr" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-amber-400/80 rounded-bl" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-amber-400/80 rounded-br" />

      {title && (
        <div className="relative px-4 py-2 border-b-2 border-amber-700/50 bg-gradient-to-r from-transparent via-amber-900/30 to-transparent">
          <h3 className="text-lg font-bold text-amber-300 text-center font-['Cinzel'] tracking-wider uppercase">
            {title}
          </h3>
          {/* Title decorations */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500/80 to-amber-500/0" />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500/80 to-amber-500/0" />
        </div>
      )}

      <div className="p-4">{children}</div>
    </div>
  );
}
