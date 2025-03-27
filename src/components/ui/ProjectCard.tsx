
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "glass-panel rounded-lg overflow-hidden relative group transition-all duration-500",
        "transform-gpu hover:-translate-y-1 hover:shadow-xl",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
            <span className="text-2xl font-semibold">{project.title[0]}</span>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div 
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col justify-start p-6 transition-opacity duration-500 overflow-y-auto",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-foreground/80 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3 mt-auto">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Title and tags shown when not hovered */}
      <div 
        className={cn(
          "p-4 transition-opacity duration-500",
          isHovered ? "opacity-0" : "opacity-100"
        )}
      >
        <h3 className="font-semibold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary/80"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-foreground/60">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
