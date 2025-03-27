
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Code, Globe, Database, Terminal, Server, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const About = () => {
  useEffect(() => {
    document.title = "Portfolio | About";
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Code className="h-5 w-5" />,
      skills: ["React", "Vue", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "SCSS"]
    },
    {
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ["Node.js", "Express", "Python", "Django", "Java", "Spring Boot"]
    },
    {
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
    },
    {
      name: "DevOps",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "GitHub Actions"]
    },
    {
      name: "Design",
      icon: <Palette className="h-5 w-5" />,
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"]
    },
    {
      name: "Other",
      icon: <Globe className="h-5 w-5" />,
      skills: ["GraphQL", "REST", "WebSockets", "Testing", "Agile", "Scrum"]
    }
  ];
  
  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">About Me</h1>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Image Column */}
              <div className="md:col-span-1">
                <div className="glass-panel rounded-lg p-2 h-full">
                  <div className="bg-gradient-to-tr from-primary/20 to-secondary/30 rounded h-full min-h-[240px] flex items-center justify-center">
                    <div className="text-5xl font-bold text-primary">JD</div>
                  </div>
                </div>
              </div>
              
              {/* Bio Column */}
              <div className="md:col-span-2 space-y-6">
                <div className="glass-panel rounded-lg p-6 space-y-4">
                  <h2 className="text-xl font-semibold">Who am I?</h2>
                  <p className="text-foreground/80">
                    I'm John Doe, a passionate software engineer specializing in building 
                    exceptional digital experiences. With 5+ years of experience, I enjoy 
                    creating elegant solutions to complex problems.
                  </p>
                  <p className="text-foreground/80">
                    My expertise includes full-stack development with React, Node.js, and 
                    modern cloud technologies. I'm dedicated to writing clean, maintainable code 
                    and creating intuitive user interfaces.
                  </p>
                  <p className="text-foreground/80">
                    When I'm not coding, you can find me contributing to open-source projects, 
                    writing technical articles, or exploring new technologies. I believe in 
                    continuous learning and staying at the forefront of industry trends.
                  </p>
                </div>
                
                <div className="glass-panel rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-foreground/60 text-sm">Email</p>
                      <p>john.doe@example.com</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Location</p>
                      <p>San Francisco, CA</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Role</p>
                      <p>Senior Software Engineer</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Experience</p>
                      <p>5+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Section */}
            <h2 className="text-2xl font-bold mb-6">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {skillCategories.map((category, index) => (
                <div key={index} className="glass-panel rounded-lg overflow-hidden">
                  <div className="px-5 py-4 border-b border-border flex items-center gap-2">
                    {category.icon}
                    <h3 className="font-medium">{category.name}</h3>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className={cn(
                            "text-sm px-3 py-1 rounded-full",
                            skillIndex % 3 === 0 ? "bg-primary/20 text-primary" :
                            skillIndex % 3 === 1 ? "bg-secondary text-foreground/90" :
                            "bg-muted text-foreground/70"
                          )}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Interests Section */}
            <h2 className="text-2xl font-bold mb-6">My Interests</h2>
            <div className="glass-panel rounded-lg p-6 mb-8">
              <p className="text-foreground/80 mb-4">
                Beyond coding, I have various interests that keep me inspired and creative:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside text-foreground/80">
                <li>Open source contribution</li>
                <li>Technical writing</li>
                <li>UI/UX design</li>
                <li>Photography</li>
                <li>Hiking and traveling</li>
                <li>Learning new technologies</li>
                <li>Reading tech books</li>
                <li>Playing musical instruments</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
