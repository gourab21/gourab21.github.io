
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard, { ProjectData } from '@/components/ui/ProjectCard';

const Projects = () => {
  useEffect(() => {
    document.title = "Portfolio | Projects";
  }, []);

  const [filter, setFilter] = useState<string | null>(null);

  // Sample projects data
  const projectsData: ProjectData[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects. Includes features like drag-and-drop, task prioritization, and team collaboration.",
      tags: ["Vue.js", "Firebase", "Tailwind CSS", "PWA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather information and forecasts using the OpenWeatherMap API.",
      tags: ["JavaScript", "APIs", "CSS3", "Responsive"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "4",
      title: "Social Media Analytics",
      description: "A dashboard for social media analytics that visualizes engagement metrics and audience demographics.",
      tags: ["React", "D3.js", "Node.js", "REST API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "5",
      title: "Portfolio Website",
      description: "A personal portfolio website with smooth animations and responsive design.",
      tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h1>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            <p className="text-foreground/80 max-w-2xl mb-8">
              Here's a selection of my recent projects. Each one presented unique challenges and 
              opportunities to learn and grow as a developer.
            </p>
            
            {/* Filter tags */}
            <div className="mb-8 overflow-x-auto scrollbar-none">
              <div className="flex space-x-2 min-w-max pb-2">
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

export default Projects;
