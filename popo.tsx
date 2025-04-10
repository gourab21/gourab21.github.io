
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard, { ProjectData } from '@/components/ui/ProjectCard';

const Codes = () => {
  useEffect(() => {
    document.title = "Portfolio | Codes";
  }, []);

  const [filter, setFilter] = useState<string | null>(null);

  // Sample projects data
  const projectsData: ProjectData[] = [
    {
      id: "1",
      title: "Gate Pass Management System",
      description: "An RFID-based gate pass system using ESP32, Firebase, and MySQL, enabling real-time authentication, time-based access control, remote monitoring via dashboards.",
      tags: ["ESP32", "Firebase", "MySQL", "PHP", "HTML"],
      githubUrl: "https://github.com/gourab21/GMS-Gate-Pass-Management-System",
      liveUrl: "https://gourab21.github.io/GMS-Gate-Pass-Management-System/"
    },
    {
      id: "2",
      title: "HeartStack : Heart Disease Prediction",
      description: "A Multi-Layered Ensemble Model for Heart Disease Prediction.",
      tags: ["Python","Ensemble Learning", "Machine Learning"],
      githubUrl: "https://github.com/gourab21/HeartStack-A-Multi-Layered-Ensemble-Model-for-Heart-Disease-Prediction"
    },
    {
      id: "3",
      title: "Personal Academic Website",
      description: "Academic Portfolio website with smooth animations and responsive design.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vite"],
      githubUrl: "https://github.com/gourab21/gourab21.github.io",
      liveUrl: "https://gourab.org"
    },
    {
      id: "6",
      title: "Fitness Tracker",
      description: "An application to track workouts, set fitness goals, and monitor progress over time.",
      tags: ["React Native", "Firebase", "Redux", "Mobile"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  ).sort();
  
  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projectsData.filter(project => project.tags.includes(filter))
    : projectsData;
  
  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Code Projects</h1>
            
            {/* Filter tags - Made horizontally scrollable on mobile */}
            <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
              <div className="flex space-x-2 min-w-max">
                <button
                  onClick={() => setFilter(null)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filter === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-foreground/80"
                  }`}
                >
                  All
                </button>
                
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilter(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      filter === tag
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-foreground/80"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-foreground/70">No projects found with the selected filter.</p>
                <button
                  onClick={() => setFilter(null)}
                  className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
                >
                  Show all projects
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Codes;









































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
  
  // Project thumbnail images for each project
  const projectImages = {
    "1": "/lovable-uploads/pogoo.jpg", // E-Commerce
    "2": "/lovable-uploads/heartstack.jpg", // Task Management
    "3": "/lovable-uploads/website.png", // Weather Dashboard
    "4": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80", // Social Media Analytics
    "5": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80", // Portfolio Website
    "6": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", // Fitness Tracker
  };
  
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
        {projectImages[project.id] ? (
          <img 
            src={projectImages[project.id]} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          // Fallback for projects without images in our map
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
            <img 
              src={project.image || "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
        
        {/* Overlay on hover */}
        <div 
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col justify-start p-6 transition-opacity duration-500 overflow-y-auto",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <h3 className="text-sm group-hover:text-base font-semibold mb-2 transition-all duration-300">{project.title}</h3>
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
