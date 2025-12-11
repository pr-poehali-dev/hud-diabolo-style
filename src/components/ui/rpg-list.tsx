import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RpgListProps {
  children: ReactNode;
  className?: string;
}

interface RpgListItemProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export function RpgList({ children, className }: RpgListProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {children}
    </div>
  );
}

export function RpgListItem({ children, className, active, onClick }: RpgListItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'relative px-4 py-3 rounded',
        'bg-gradient-to-r from-stone-900/60 via-stone-800/40 to-stone-900/60',
        'border-l-4 border-r-2 border-y-2',
        'transition-all duration-200',
        'hover:border-amber-500/80 hover:bg-gradient-to-r hover:from-amber-900/30 hover:via-stone-800/50 hover:to-amber-900/30',
        'hover:shadow-lg hover:shadow-amber-900/30 hover:translate-x-1',
        active
          ? 'border-amber-400 bg-gradient-to-r from-amber-900/40 via-stone-800/60 to-amber-900/40 shadow-lg shadow-amber-900/40'
          : 'border-stone-700/60',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {/* Decorative line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}
