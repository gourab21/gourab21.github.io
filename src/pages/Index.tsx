
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedText from '@/components/ui/AnimatedText';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsSection from '@/components/sections/NewsSection';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    document.title = "Gourab | Home";
    
    // Preload the profile image with highest priority
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/lovable-uploads/7a5ec607-643c-4b67-ad00-baa817466d01.png';
    link.as = 'image';
    link.type = 'image/png';
    link.fetchPriority = 'high';
    document.head.appendChild(link);
    
    // Simulate loading delay and then hide the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2.5 seconds delay for loading effect
    
    return () => clearTimeout(timer);
  }, []);
  
  const roles = [
    "Post Graduate Researcher",
    "Web Developer",
    "Problem Solver",
    "Open Source Contributor",
  ];
  
  return (
    <>
      {loading && <LoadingSpinner text="आत्मनो मोक्षार्थं जगद्धिताय‌ च" />}
      
      <div className={cn(
        "page-transition-wrapper min-h-screen flex flex-col",
        loading ? "opacity-0" : "animate-page-in"
      )}>
        <Navbar />
        
        <main className="flex-grow">
          <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
            {/* Background subtle noise pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise" aria-hidden="true"></div>
            
            {/* Hero content */}
            <div className="container mx-auto max-w-4xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Profile Image for Mobile (shown only on small screens) - Repositioned lower */}
                <div className="md:hidden w-64 h-64 relative mb-6 mt-16">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-white/10 relative">
                    {/* Person image with optimized loading */}
                    <div className="w-full h-full overflow-hidden rounded-full relative z-10">
                      <img 
                        src="/lovable-uploads/7a5ec607-643c-4b67-ad00-baa817466d01.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                        loading="eager" 
                        fetchPriority="high"
                        decoding="async"
                        width="256" 
                        height="256" 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-2/3">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="text-gradient block">Gourab Das</span>
                  </h1>
                  
                  <div className="text-xl md:text-2xl text-foreground/80 font-medium flex flex-wrap items-center justify-center md:justify-start gap-x-2">
                    I'm a <AnimatedText phrases={roles} className="text-primary font-semibold" />
                  </div>
                  
                  <p className="text-foreground/70 max-w-lg">
                  <b>UGC NET JRF and Assistant  Professor Qualified</b> Post  Graduate Student with expertise in <b>Machine Learning, IoT, UAV Security and AI</b>. 
                  Passionate about solving real-world problems through research and technology. <b>2x Winner Coding Contests</b> at prestigious institutions.
                  Focused on <b>AI-driven security solutions</b> and machine Learning for a better Society.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Link to="/resume" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">View Resume
                  </Link>
                    <Link to="/contact" className="px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors">
                      Contact Me
                    </Link>
                  </div>
                </div>
                
                {/* Professional Image (hidden on mobile, shown on larger screens) */}
                <div className="hidden md:block w-80 h-80 lg:w-96 lg:h-96 relative">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-white/10 relative">
                    {/* Person image with optimized loading */}
                    <div className="w-full h-full overflow-hidden rounded-full relative z-10">
                      <img 
                        src="/lovable-uploads/7a5ec607-643c-4b67-ad00-baa817466d01.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                        loading="eager" 
                        fetchPriority="high"
                        decoding="async"
                        width="384" 
                        height="384" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll indicator - hidden on mobile */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce hidden md:flex">
              <span className="text-xs text-foreground/50 mb-2">Scroll</span>
              <ArrowRight className="h-4 w-4 text-foreground/50 transform rotate-90" />
            </div>
          </section>
          
          {/* News Section */}
          <NewsSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;