
import React from 'react';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface LoadingSpinnerProps {
  text?: string;
  className?: string;
}

const LoadingSpinner = ({ text, className }: LoadingSpinnerProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn("fixed inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-50", className)}>
      <div className="relative">
        <Loader className="h-12 w-12 text-primary animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
      
      {text && (
        <div className="mt-6 text-center">
          <p className={cn(
            "text-primary animate-pulse-slow",
            isMobile ? "text-xl font-medium" : "text-3xl font-bold"
          )}>
            {text}
          </p>
          <p className="text-lg md:text-base text-muted-foreground mt-2 opacity-100">Brahman is real, the universe is mithya.<br/>The jiva is Brahman itself and not different.</p>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;