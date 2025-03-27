
import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';

export interface TimelineItemData {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

interface TimelineItemProps {
  item: TimelineItemData;
  isLast?: boolean;
  className?: string;
}

export default function TimelineItem({ 
  item, 
  isLast = false,
  className
}: TimelineItemProps) {
  return (
    <div className={cn("grid grid-cols-[25px_1fr] gap-4 md:gap-6", className)}>
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary mt-1.5"></div>
        {!isLast && (
          <div className="w-0.5 bg-border h-full mt-1"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="glass-panel p-4 md:p-6 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <h3 className="text-lg font-medium">{item.title}</h3>
          <div className="flex items-center text-sm text-foreground/70">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{item.period}</span>
          </div>
        </div>
        
        <p className="text-sm text-primary font-medium mb-3">{item.company}</p>
        
        <p className="text-sm text-foreground/80 mb-4">{item.description}</p>
        
        {item.skills && item.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span 
                key={skill} 
                className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-foreground/80"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
