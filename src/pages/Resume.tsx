import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TimelineItem, { TimelineItemData } from '@/components/ui/TimelineItem';
import { Download, Mail, MapPin, Phone, Github, Linkedin, Twitter, YoutubeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Resume = () => {
  useEffect(() => {
    document.title = "Gourab | Resume";
  }, []);

  const fieldsOfInterest = [
    "Machine Learning",
    "UAV Security",
    "Internet of Things (IoT)",
    "Artificial Intelligence",
    "Web Development",
    "Frontend Architecture"
  ];

  const experienceData: TimelineItemData[] = [
    {
      id: "1",
      title: "Post Graduate Researcher",
      company: <a href="https://vidyamandira.ac.in/">Ramakrishna Mission Vidyamandira</a> ,
      period: "2024 - Present",
      description: "Working on development and Execution of algorithms and models in the field of Machine learning and UAV Security."
    }
    
  ];
  
  const educationData: TimelineItemData[] = [
    {
      id: "ed1",
      title: "Master of Science - Computer Science",
      company: <a href="https://vidyamandira.ac.in/">Ramakrishna Mission Vidyamandira</a>,
      period: "2024 - Present",
      description: "CGPA - 9.76 (upto Semester 1)."
    },
    {
      id: "ed2",
      title: "Bachelor of Science in Computer Science",
      company: <a href="https://du.ac.in/">University of Delhi</a> ,
      period: "2020 - 2023",
      description: "CGPA - 9.23. College First Rank Holder."
    },
    {
      id: "ed3",
      title: "Higher Secondary Certificate Examination (+2)",
      company: <a href="https://www.rkmvdeoghar.org/">Ramakrishna Mission Vidyapith Deoghar</a>,
      period: "2018 - 2020",
      description: "Percentage - 96.2 %"
    },
    {
      id: "ed4",
      title: "Secondary Certificate Examination (10)",
      company: <a href="https://www.rkmvdeoghar.org/">Sarada Vidya Mandir</a>,
      period: "2018",
      description: "Percentage - 93.8 %"
    }
  ];

  const publicationsData = [
    // {
    //   title: "Modern JavaScript Frameworks: A Comparative Analysis",
    //   journal: "Journal of Web Technologies",
    //   year: "2022",
    //   link: "#"
    // },
    {
      title: " Enhanced UAV Tracking through Multi-Sensor Fusion and Extended Kalman Filtering",
      conference: "Sixth Doctoral Symposium on Intelligence Enabled Research (DoSIER)",
      year: "2024",
      link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
    }
    // ,
    // {
    //   title: "The Future of Web Development: Trends and Predictions",
    //   book: "Web Development: Next Generation Technologies",
    //   year: "2020",
    //   link: "#"
    // }
    
  ];

  const awardsData = [
    {
      title: "JRF - UGC NET DEC-24.",
      organization: "University Grants Commission (UGC).",
      year: "Mar 2025"
    },
    {
      title: "Winner - Codeplay, Coding Competition, SXC Kolkata",
      organization: "St. Xavier's College (Autonomous), Kolkata",
      year: "Feb 2025"
    },
    {
      title: "Winner - The Turing Show, Coding Competition",
      organization: "Ramakrishna Mission Vivekananda Educational and Research Institute",
      year: "Jan 2025"
    },
    {
      title: "Sanjeev Arora Memorial Prize",
      organization: "Atma Ram Sanatan Dharma College",
      year: "May 2024"
    },
    {
      title: "Meritorious Student Award 2023",
      organization: "Atma Ram Sanatan Dharma College",
      year: "May 2024"
    }
  ];

  const projectsData = [
    {
      title: "HECC-PSO: Secure UAV Communication Cryptographic Framework",
      description: "Developed resilient cryptographic framework using HECC and PSO to optimize AES key management for UAVs.",
      link: "#"
    },
    {
      title: "HeartStack: A Multi-Layered Ensemble Model for Heart Disease Prediction",
      description: "Developed stacked ensemble model for precise heart disease prediction.",
      link: "#"
    },
    {
      title: "Academic Personal Website",
      description: "A customized academic personal website for mysel.",
      link: "#"
    }
  ];

  const volunteeringData = [
    {
      role: "Regular (Lifetime) Member",
      organization: "The International Society for Applied Computing (ISAC).",
      period: "2025 - Persent",
      description: ""
    },
    {
      role: "Member",
      organization: "International Association of Engineers (IAENG).",
      period: "2024 - Persent",
      description: ""
    },
    {
      role: "Public Relations (PR) Head",
      organization: "PixElation - The Photography Society of ARSD",
      period: "2021 - 2023",
      description: ""
    }
  ];

  const skillCategories = [
    {
      "name": "Programming Languages",
      "skills": ["Python", "C++", "MATLAB", "HTML5", "CSS3", "Assembly Language","JavaScript"]
    },
    {
      "name": "Frameworks & Libraries",
      "skills": ["Sklearn","Seaborn","Django", "Node.js"]
    },
    {
      "name": "Tools & Technologies",
      "skills": ["Google Colab","Git", "Firebase", "MySQL", "XAMPP", "ESP32", "Arduino"]
    },    
    {
      name: "Soft Skills",
      skills: ["Leadership", "Communication", "Problem-solving", "Team Collaboration", "Project Management", "Mentoring"]
    }
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
    },
    {
      "name": "Revered Swami Divyasudhananda",
      "title": "Monastic Member and Principal",
      "institution": "Ramakrishna Mission Vidyapith, Deoghar",
      "email": "divyasudhananda@gmail.com",
      "phone": "+91-97485 35329"
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
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Gourab Das</h1>
                <h2 className="text-xl text-foreground/80 mb-4">Post Graduate Researcher</h2>
                
                <div className="space-y-2 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>gourabdas2128@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 736-499-7118</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Kolkata, India</span>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-4">
                  <a 
                    href="https://github.com/gourab21" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/gourab21/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://x.com/gourabdas21" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="X (Twitter) Profile"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@gourabdas2128" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="YouTube Channel"
                  >
                    <YoutubeIcon className="h-5 w-5" />
                  </a>


                  <a 
      href="https://orcid.org/0009-0009-6804-7255" 
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
      aria-label="ORCID Profile"
    >
      <span className="h-5 w-5 flex items-center justify-center text-[10px] font-bold bg-white text-black rounded-full">ID</span>
    </a>

    <a 
  href="https://scholar.google.com/citations?user=XTZqxZgAAAAJ&hl=en" 
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
  aria-label="Google Scholar Profile"
>
  <span className="text-xl">🎓</span>
</a>




              
              <a 
                href="/lovable-uploads/GDAS_CV.pdf" 
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
                    {/* You need to change here to add the publication type. */}
                      {/* {pub.journal || pub.conference || pub.book} • {pub.year}    */}
                      {pub.conference} • {pub.year}
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
                  <h3 className="font-medium">Supervised Machine Learning: Regression and Classification</h3>
                  <p className="text-sm text-foreground/70">DeepLearning.AI - Stanford | ONLINE • 2025</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Next Generation Communication Technologies Using MATLAB Tools</h3>
                  <p className="text-sm text-foreground/70">Indian Institute of Information Technology Una • 2025</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Problem Solving (Intermediate) Certificate</h3>
                  <p className="text-sm text-foreground/70">HackerRank • 2025</p>
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
                  <p className="text-sm text-foreground/70">Professional Proficiency</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Hindi</h3>
                  <p className="text-sm text-foreground/70">Professional Proficiency</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Bengali</h3>
                  <p className="text-sm text-foreground/70">Native</p>
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
