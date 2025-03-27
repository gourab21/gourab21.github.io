
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TimelineItem, { TimelineItemData } from '@/components/ui/TimelineItem';

const Achievement = () => {
  useEffect(() => {
    document.title = "Portfolio | Achievement";
  }, []);

  // Sample achievement data
  const achievementData: TimelineItemData[] = [
    {
      id: "1",
      title: "Best Paper Award",
      company: "International Conference on Computer Science",
      period: "June 2023",
      description: "Received the Best Paper Award for research on advanced machine learning algorithms for natural language processing."
    },
    {
      id: "2",
      title: "Outstanding Research Contribution",
      company: "Science Foundation",
      period: "December 2022",
      description: "Recognized for significant contributions to the field of computer vision, developing novel approaches for object detection in low-light environments."
    },
    {
      id: "3",
      title: "Innovation Award",
      company: "Tech Innovations Summit",
      period: "March 2022",
      description: "Awarded for developing an innovative solution using blockchain technology for secure medical record sharing."
    },
    {
      id: "4",
      title: "Google Developer Expert",
      company: "Google",
      period: "January 2022",
      description: "Selected as a Google Developer Expert in Web Technologies, recognizing expertise and contributions to the developer community."
    },
    {
      id: "5",
      title: "IEEE Fellowship",
      company: "IEEE",
      period: "September 2021",
      description: "Awarded fellowship for outstanding research in cybersecurity and privacy-preserving technologies."
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
            
            <div className="relative pl-6">
              {achievementData.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={index === achievementData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Achievement;
