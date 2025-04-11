
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard, { ProjectData } from '@/components/ui/ProjectCard';
import { ScrollArea } from '@/components/ui/scroll-area';

const Codes = () => {
  useEffect(() => {
    document.title = "Gourab | Codes";
  }, []);

  const [filter, setFilter] = useState<string | null>(null);

  // Sample projects data
  const projectsData: ProjectData[] = [
    {
      id: "1",
      title: "Gate Pass Management System",
      description: "An RFID-based gate pass system using ESP32, Firebase, and MySQL, enabling real-time authentication, time-based access control, remote monitoring via dashboards.",
      tags: ["ESP32", "Firebase", "MySQL", "PHP", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/gourab21/GMS-Gate-Pass-Management-System",
      liveUrl: "https://gourab21.github.io/GMS-Gate-Pass-Management-System/"
    },
    {
      id: "2",
      title: "HeartStack : Heart Disease Prediction",
      description: "A Multi-Layered Ensemble Model for Heart Disease Prediction.",
      tags: ["Python","Ensemble Learning","Stacking","Machine Learning"],
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
    
    // Add more projects as needed
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
            {/* Filter tags - Made horizontally scrollable with mouse wheel and touch */}
            <div className="mb-8">
               <ScrollArea className="w-full" orientation="horizontal">
                 <div className="flex space-x-2 pb-2 px-1" style={{ minWidth: 'max-content' }}>
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
               </ScrollArea>
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



