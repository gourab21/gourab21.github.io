import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import the scholar data from the JSON file
import scholarData from './scholarData.json';

const GoogleScholar = () => {
  useEffect(() => {
    document.title = "Portfolio | Google Scholar";
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Google Scholar</h1>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            {/* Scholar profile card */}
            <div className="glass-panel p-6 rounded-lg mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">Scholar Metrics</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-secondary/30">
                      <p className="text-sm text-foreground/70">Citations</p>
                      <p className="text-3xl font-bold text-primary">{scholarData.citations}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/30">
                      <p className="text-sm text-foreground/70">h-index</p>
                      <p className="text-3xl font-bold text-primary">{scholarData.h_index}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/30">
                      <p className="text-sm text-foreground/70">Publications</p>
                      <p className="text-3xl font-bold text-primary">{scholarData.publications}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/20 p-4 rounded-lg self-stretch">
                  
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      asChild
                    >
                      <a 
                        href="https://scholar.google.com/citations?user=XTZqxZgAAAAJ=en&oi=ao" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                          <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5 12 0Z" />
                        </svg>
                        View Scholar Profile
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Publications list */}
            <h2 className="text-2xl font-semibold mb-6">Publications</h2>
            <div className="space-y-4">
              {scholarData.recent_publications.map((pub, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold mb-1 text-foreground flex-1">{pub.title}</h3>
                      <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded-full bg-primary/10 text-primary ml-2 whitespace-nowrap",
                      )}>
                        {pub.year}
                      </span>
                    </div>
                    
                    <p className="text-sm text-primary/100 mb-2">{pub.authors}</p>
                    <p className="text-sm text-foreground/90 mb-3 italic">{pub.citation}</p>
                    
                    {pub.abstract !== "Abstract not available" && (
                      <div className="mb-3">
                        <details className="text-sm">
                          <summary className="cursor-pointer text-primary hover:text-primary/80 transition-colors">
                            Abstract
                          </summary>
                          <p className="mt-2 text-xs text-foreground/70 bg-secondary/10 p-3 rounded">
                            {pub.abstract}
                          </p>
                        </details>
                      </div>
                    )}
                    
                    {pub.url !== "#" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                        asChild
                      >
                        <a 
                          href={pub.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Publication
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GoogleScholar;