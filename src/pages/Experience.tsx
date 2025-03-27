
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TimelineItem, { TimelineItemData } from '@/components/ui/TimelineItem';

const Experience = () => {
  useEffect(() => {
    document.title = "Portfolio | Experience";
  }, []);

  // Sample experience data
  const experienceData: TimelineItemData[] = [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Leading the frontend team in developing scalable web applications using React and TypeScript. Implemented CI/CD pipelines and improved performance by 40%.",
      skills: ["React", "TypeScript", "NextJS", "AWS", "CI/CD"]
    },
    {
      id: "2",
      title: "Full-Stack Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2021",
      description: "Developed and maintained full-stack applications using Vue.js and Node.js. Collaborated with designers to implement responsive UI and improved user experience.",
      skills: ["Vue.js", "Node.js", "Express", "MongoDB", "Docker"]
    },
    {
      id: "3",
      title: "Web Developer",
      company: "Creative Agency",
      period: "2016 - 2018",
      description: "Built responsive websites for clients across various industries. Worked closely with the design team to create engaging user interfaces and optimized site performance.",
      skills: ["JavaScript", "HTML5", "CSS3", "WordPress", "PHP"]
    },
    {
      id: "4",
      title: "Frontend Intern",
      company: "Startup Hub",
      period: "2015 - 2016",
      description: "Assisted in developing user interfaces for web applications. Gained experience in modern JavaScript frameworks and responsive design principles.",
      skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }
  ];
  
  // Education data
  const educationData: TimelineItemData[] = [
    {
      id: "ed1",
      title: "Master of Science in Computer Science",
      company: "Stanford University",
      period: "2013 - 2015",
      description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
      skills: ["Algorithms", "Machine Learning", "UI/UX Design", "Research"]
    },
    {
      id: "ed2",
      title: "Bachelor of Science in Software Engineering",
      company: "University of California",
      period: "2009 - 2013",
      description: "Focused on software development and engineering principles. Participated in coding competitions and hackathons.",
      skills: ["Programming", "Data Structures", "Software Architecture", "Team Projects"]
    }
  ];
  
  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Experience</h1>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
              
              <div className="relative pl-6">
                {experienceData.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    isLast={index === experienceData.length - 1}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              
              <div className="relative pl-6">
                {educationData.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    isLast={index === educationData.length - 1}
                  />
                ))}
              </div>
            </div>
            
            <div className="glass-panel rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Programming Languages</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 rounded-lg">
                      <div className="text-3xl mb-2">JS</div>
                      <span className="text-sm">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 rounded-lg">
                      <div className="text-3xl mb-2">TS</div>
                      <span className="text-sm">TypeScript</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 rounded-lg">
                      <div className="text-3xl mb-2">PY</div>
                      <span className="text-sm">Python</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 rounded-lg">
                      <div className="text-3xl mb-2">JV</div>
                      <span className="text-sm">Java</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React", "Vue.js", "Node.js", "Express", "MongoDB", "PostgreSQL",
                      "Redis", "Docker", "Kubernetes", "AWS", "GCP", "Firebase",
                      "Git", "GitHub", "CI/CD", "Jest", "Cypress", "Webpack",
                      "Babel", "ESLint", "Prettier", "REST API", "GraphQL", "WebSockets"
                    ].map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Experience;
