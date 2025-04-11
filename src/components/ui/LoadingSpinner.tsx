
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
            isMobile ? "text-lg font-medium" : "text-2xl font-bold"
          )}>
            {text}
          </p>
          <p className="text-sm text-muted-foreground mt-2 opacity-80">For one's own salvation and for the welfare of the world</p>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;