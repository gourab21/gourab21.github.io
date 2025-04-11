
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TimelineItem, { TimelineItemData } from '@/components/ui/TimelineItem';
import { ScrollArea } from '@/components/ui/scroll-area';

const Achievement = () => {
  useEffect(() => {
    document.title = "Gourab | Achievement";
  }, []);

  // Sample achievement data
  const achievementData: TimelineItemData[] = [

    {
      id: "99",
      title: "Junior Research Fellowship (JRF) - UGC NET December 2024",
      company: "University Grants Commission (UGC)",
      period: "February 2025",
      description: "Awarded Junior Research Fellowship (JRF) & Qualified for Assistant Professor in UGC NET December 2024.",
      link: "https://drive.google.com/file/d/1ClMqzNc7ybJfEdNGWo0Ca3mQrNV2ir2x/view?usp=drive_link"
    },
    {
      id: "100",
      title: "Winner - Codeplay @ Exabyte 2025",
      company: "St. Xavier's College (Autonomous), Kolkata",
      period: "February 2025",
      description: "Secured 1st position in an Inter college Coding competition organized in their annual tech fest Exabyte 2025.",
      link :"https://drive.google.com/file/d/1uoj8Zmj-ZCmJCYobYfvoGDF_bzzOP70t/view?usp=drive_link"
    },
    {
      id: "101",
      title: "Winner - The Turing Show @ Perceptron 2025",
      company: "Ramakrishna Mission Vivekananda Educational and Research Institute",
      period: "January 2025",
      description: "Used problem solving skills & Secured 1st position in an Inter college Coding competition organized by RKMVERI in their annual tech fest Perceptron 2025.",
      link: "https://drive.google.com/file/d/17zqZrezTnzsUqR2laGm5fpC-sz7ouE3i/view?usp=drive_link"
    },
    {
      id: "102",
      title: "Sanjeev Arora Memorial Prize",
      company: "Atma Ram Sanatan Dharma College, University of Delhi",
      period: "May 2024",
      description: "For Excellence in Computer Science.",
      link: "https://drive.google.com/file/d/1yOV94IvWaGP2_MXgcT-Kld1Qtkx8tBuG/view?usp=drive_link"
    },
    {
      id: "103",
      title: "Meritorious Student Award 2023",
      company: "Atma Ram Sanatan Dharma College, University of Delhi",
      period: "May 2024",
      description: "For Securing 1st Rank in the Department in Graduation.",
      link: "https://drive.google.com/file/d/1M5qcZwk_cV_vt7GhDHcH_ZtJQHw0JQmF/view?usp=drive_link"
    },
    {
      id: "104",
      title: "Best Leadership Award 2019",
      company: "Ramakrishna Mission Vidyapith, Deoghar",
      period: "December 2019",
      description: "For Outstanding Leadership in the Senior Secondary Section & co-ordinating various events.",
      link: "https://drive.google.com/file/d/1DcWTBPH-82k4DYs4wpLvqZquASk14v0Z/view?usp=drive_link"
    }
     
  ];
  
  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Achievements</h1>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            <ScrollArea className="w-full overflow-x-auto">
               <div className="relative pl-6">
                 {achievementData.map((item, index) => (
                   <TimelineItem
                     key={item.id}
                     item={item}
                     isLast={index === achievementData.length - 1}
                   />
                 ))}
               </div>
             </ScrollArea>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Achievement;
