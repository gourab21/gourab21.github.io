import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TimelineItem, { TimelineItemData } from '@/components/ui/TimelineItem';
import { Download, Mail, MapPin, Phone, Github, Linkedin, Twitter, YoutubeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Resume = () => {
  useEffect(() => {
    document.title = "Portfolio | Resume";
  }, []);

  const experienceData: TimelineItemData[] = [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Leading the frontend team in developing scalable web applications using React and TypeScript. Implemented CI/CD pipelines and improved performance by 40%."
    },
    {
      id: "2",
      title: "Full-Stack Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2021",
      description: "Developed and maintained full-stack applications using Vue.js and Node.js. Collaborated with designers to implement responsive UI and improved user experience."
    },
    {
      id: "3",
      title: "Web Developer",
      company: "Creative Agency",
      period: "2016 - 2018",
      description: "Built responsive websites for clients across various industries. Worked closely with the design team to create engaging user interfaces and optimized site performance."
    }
  ];
  
  const educationData: TimelineItemData[] = [
    {
      id: "ed1",
      title: "Master of Science in Computer Science",
      company: "Stanford University",
      period: "2013 - 2015",
      description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors."
    },
    {
      id: "ed2",
      title: "Bachelor of Science in Software Engineering",
      company: "University of California",
      period: "2009 - 2013",
      description: "Focused on software development and engineering principles. Participated in coding competitions and hackathons."
    }
  ];

  const publicationsData = [
    {
      title: "Modern JavaScript Frameworks: A Comparative Analysis",
      journal: "Journal of Web Technologies",
      year: "2022",
      link: "#"
    },
    {
      title: "Optimizing React Applications for Performance",
      conference: "International Conference on Web Engineering",
      year: "2021",
      link: "#"
    },
    {
      title: "The Future of Web Development: Trends and Predictions",
      book: "Web Development: Next Generation Technologies",
      year: "2020",
      link: "#"
    }
  ];

  const awardsData = [
    {
      title: "Outstanding Contribution in Open Source",
      organization: "GitHub",
      year: "2022"
    },
    {
      title: "Web Developer of the Year",
      organization: "Tech Excellence Awards",
      year: "2021"
    },
    {
      title: "Best Web Application",
      organization: "Annual Dev Summit",
      year: "2020"
    }
  ];

  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack online shopping platform built with React and Node.js",
      link: "#"
    },
    {
      title: "Task Management Dashboard",
      description: "A productivity tool for tracking and managing team projects",
      link: "#"
    },
    {
      title: "Portfolio Website Template",
      description: "A customizable template for professional portfolios",
      link: "#"
    }
  ];

  const volunteeringData = [
    {
      role: "Mentor",
      organization: "Code for Good",
      period: "2020 - Present",
      description: "Mentoring underrepresented students in coding and web development."
    },
    {
      role: "Workshop Instructor",
      organization: "Women Who Code",
      period: "2019 - 2021",
      description: "Leading workshops on JavaScript and React for beginners."
    }
  ];

  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML5", "CSS3"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React", "Vue.js", "Angular", "Node.js", "Express", "Django", "Spring Boot"]
    },
    {
      name: "Tools & Technologies",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "Firebase", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      name: "Soft Skills",
      skills: ["Leadership", "Communication", "Problem-solving", "Team Collaboration", "Project Management", "Agile/Scrum", "Mentoring"]
    }
  ];

  const fieldsOfInterest = [
    "Web Development",
    "Frontend Architecture",
    "UI/UX Design",
    "Cloud Computing",
    "DevOps",
    "Artificial Intelligence"
  ];
  
  const referencesData = [
    {
      name: "Sarbajit Manna",
      title: "Assistant Professor",
      institution: "Ramakrishna Mission Vidyamandira",
      email: "sarbajit.cs@vidyamandira.ac.in",
      phone: "+91-94743 39952"
    },
    {
      name: "Dr. Shalini Gupta",
      title: "Assistant Professor",
      institution: "ARSD College, University of Delhi",
      email: "sgupta@arsd.du.ac.in",
      phone: "+91-99111 55236"
    },
    {
      name: "Dr. Arindam Sarkar",
      title: "Assistant Professor (HOD)",
      institution: "Ramakrishna Mission Vidyamandira",
      email: "arindamsarkar@vidyamandira.ac.in",
      phone: "+91-98517 00660"
    }
  ];
  
  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">John Doe</h1>
                <h2 className="text-xl text-foreground/80 mb-4">Senior Software Engineer</h2>
                
                <div className="space-y-2 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-4">
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="X (Twitter) Profile"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="YouTube Channel"
                  >
                    <YoutubeIcon className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://orcid.org" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="ORCID Profile"
                  >
                    <div className="h-5 w-5 flex items-center justify-center text-xs font-bold">ID</div>
                  </a>
                  <a 
                    href="https://scholar.google.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="Google Scholar Profile"
                  >
                    <div className="h-5 w-5 flex items-center justify-center text-xs font-bold">GS</div>
                  </a>
                </div>
              </div>
              
              <a 
                href="/public/GDAS_CV.pdf" 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2 hover:bg-primary/90 transition-colors self-start mt-2 md:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Fields of Interest</h2>
              <div className="flex flex-wrap gap-3">
                {fieldsOfInterest.map((field, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
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
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              
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

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Publications</h2>
              
              <div className="space-y-4">
                {publicationsData.map((pub, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <h3 className="font-medium">{pub.title}</h3>
                    <p className="text-sm text-foreground/70">
                      {pub.journal || pub.conference || pub.book} • {pub.year}
                    </p>
                    <a 
                      href={pub.link} 
                      className="text-sm text-primary hover:underline mt-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Publication
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <div key={index} className="glass-panel rounded-lg overflow-hidden">
                    <div className="px-5 py-3 border-b border-border">
                      <h3 className="font-medium">{category.name}</h3>
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className={cn(
                              "text-xs px-2 py-1 rounded-full",
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
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Awards</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {awardsData.map((award, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <h3 className="font-medium">{award.title}</h3>
                    <p className="text-sm text-foreground/70">{award.organization} • {award.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
              
              <div className="space-y-4">
                {projectsData.map((project, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-foreground/70 mb-2">{project.description}</p>
                    <a 
                      href={project.link} 
                      className="text-sm text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">AWS Certified Solutions Architect</h3>
                  <p className="text-sm text-foreground/70">Amazon Web Services • 2022</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Google Cloud Professional Developer</h3>
                  <p className="text-sm text-foreground/70">Google Cloud • 2021</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Microsoft Certified: Azure Developer Associate</h3>
                  <p className="text-sm text-foreground/70">Microsoft • 2020</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Certified Kubernetes Administrator</h3>
                  <p className="text-sm text-foreground/70">Cloud Native Computing Foundation • 2020</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Volunteering</h2>
              
              <div className="space-y-4">
                {volunteeringData.map((item, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <h3 className="font-medium">{item.role}</h3>
                    <p className="text-sm font-medium text-primary/80">{item.organization}</p>
                    <p className="text-sm text-foreground/70">{item.period}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Languages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">English</h3>
                  <p className="text-sm text-foreground/70">Native</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Spanish</h3>
                  <p className="text-sm text-foreground/70">Professional Proficiency</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">French</h3>
                  <p className="text-sm text-foreground/70">Basic Proficiency</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">References</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {referencesData.map((reference, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <h3 className="font-medium">{reference.name}</h3>
                    <p className="text-sm text-foreground/80">{reference.title}</p>
                    <p className="text-sm text-foreground/70">{reference.institution}</p>
                    <div className="mt-2 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-primary/80" />
                        <span>{reference.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-primary/80" />
                        <span>{reference.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
