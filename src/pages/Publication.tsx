
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: 'journal' | 'conference' | 'book' | 'chapter';
  doi?: string;
  link?: string;
}

const Publication = () => {
  useEffect(() => {
    document.title = "Gourab | Publications";
  }, []);

  const [filter, setFilter] = useState<string | null>(null);

  // Sample publications data
  const publicationsData: Publication[] = [
    // {
    //   id: "1",
    //   title: "Advanced Techniques in Natural Language Processing for Social Media Analysis",
    //   authors: "Doe, J., Smith, A., & Johnson, B.",
    //   venue: "Journal of Computational Linguistics",
    //   year: "2023",
    //   type: "journal",
    //   doi: "10.1234/jcl.2023.1234",
    //   link: "https://example.com/publication1"
    // },
    // {
    //   id: "2",
    //   title: "A Novel Approach to Real-time Object Detection in Low-Resource Environments",
    //   authors: "Doe, J., Williams, C., & Brown, D.",
    //   venue: "International Conference on Computer Vision (ICCV)",
    //   year: "2022",
    //   type: "conference",
    //   link: "https://example.com/publication2"
    // },
    // {
    //   id: "3",
    //   title: "Blockchain Technologies: Applications and Future Directions",
    //   authors: "Garcia, E., Doe, J., & Lee, M.",
    //   venue: "Springer Publishing",
    //   year: "2022",
    //   type: "book",
    //   doi: "10.5678/sp.2022.5678"
    // },
    // {
    //   id: "4",
    //   title: "Privacy-Preserving Machine Learning: Methods and Applications",
    //   authors: "Doe, J., Anderson, R.",
    //   venue: "Handbook of Artificial Intelligence in Healthcare",
    //   year: "2021",
    //   type: "chapter",
    //   doi: "10.9101/ai.2021.9101"
    // },
    // {
    //   id: "5",
    //   title: "Efficient Deep Learning Architectures for Edge Computing",
    //   authors: "Doe, J., Singh, P., & Thomas, L.",
    //   venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    //   year: "2021",
    //   type: "journal",
    //   doi: "10.1121/ieee.2021.1121",
    //   link: "https://example.com/publication5"
    // },
    {
      id: "1",
      title: "Enhanced UAV Tracking through Multi-Sensor Fusion and Extended Kalman Filtering",
      authors: "Bodhisattwa Baidya, Atanu Mondal, Sarbajit Manna, Gourab Das, Anirban Santra, Arkaprava Chakraborty",
      venue: "The 2024 Sixth Doctoral Symposium on Intelligence Enabled Research (DoSIER 2024)",
      year: "2024",
      type: "conference",
      link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
    }
  ];
  
  const publicationTypes = [
    { id: 'journal', label: 'Journal Articles' },
    { id: 'conference', label: 'Conference Papers' },
    { id: 'book', label: 'Books' },
    { id: 'chapter', label: 'Book Chapters' }
  ];
  
  const filteredPublications = filter
    ? publicationsData.filter(pub => pub.type === filter)
    : publicationsData;
  
  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Publications</h1>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            {/* Filter buttons - Made horizontally scrollable on mobile */}
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
                  All Publications
                </button>
                
                {publicationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFilter(type.id as 'journal' | 'conference' | 'book' | 'chapter')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      filter === type.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-foreground/80"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Publications list */}
            <div className="space-y-6">
              {filteredPublications.map((pub) => (
                <div key={pub.id} className="glass-panel p-5 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">{pub.title}</h3>
                  <p className="text-primary/90 text-sm mb-1">{pub.authors}</p>
                  <p className="text-foreground/70 text-sm mb-1">
                    <span className="font-medium">{pub.venue}</span>, {pub.year}
                  </p>
                  <div className="flex mt-3 items-center gap-3">
                    <span 
                      className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        pub.type === 'journal' ? "bg-primary/20 text-primary" :
                        pub.type === 'conference' ? "bg-secondary text-foreground/90" :
                        pub.type === 'book' ? "bg-muted text-foreground/70" :
                        "bg-primary/10 text-primary/80"
                      )}
                    >
                      {
                        pub.type === 'journal' ? 'Journal Article' :
                        pub.type === 'conference' ? 'Conference Paper' :
                        pub.type === 'book' ? 'Book' : 'Book Chapter'
                      }
                    </span>
                    
                    {pub.doi && (
                      <a 
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary/80 hover:text-primary transition-colors"
                      >
                        DOI: {pub.doi}
                      </a>
                    )}
                    
                    {pub.link && (
                      <a 
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary/80 hover:text-primary transition-colors"
                      >
                        View Publication
                      </a>
                    )}
                  </div>
                </div>
              ))}
              
              {filteredPublications.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-foreground/70">No publications found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Publication;
