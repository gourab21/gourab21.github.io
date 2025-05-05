import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import the scholar data from the JSON file
import scholarData from './scholarData.json';

interface Publication {
  id: string;
  title: string;
  authors: string;
  citation: string;
  year: string;
  type: 'journal' | 'conference' | 'poster' | 'chapter';
  url?: string;
  abstract?: string;
}

const Publication = () => {
  useEffect(() => {
    document.title = "Gourab | Publications";
  }, []);

  const [filter, setFilter] = useState<string | null>(null);

  // Map scholarData.recent_publications to match Publication interface
  const publicationsData: Publication[] = scholarData.recent_publications.map((pub, index) => ({
    id: (index + 1).toString(),
    title: pub.title,
    authors: pub.authors,
    citation: pub.citation,
    year: pub.year.toString(),
    type: pub.type as 'journal' | 'conference' | 'poster' | 'chapter',
    url: pub.url !== "#" ? pub.url : undefined,
    abstract: pub.abstract !== "Abstract not available" ? pub.abstract : undefined,
  }));

  const publicationTypes = [
    { id: 'journal', label: 'Journal Articles' },
    { id: 'conference', label: 'Conference Papers' },
    { id: 'poster', label: 'Posters' },
    { id: 'chapter', label: 'Book Chapters' },
  ];

  // Define color classes for each type
  const typeColors = {
    journal: {
      filterActive: 'bg-green-500 text-white',
      filterInactive: 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800',
      label: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    },
    conference: {
      filterActive: 'bg-blue-500 text-white',
      filterInactive: 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800',
      label: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    },
    poster: {
      filterActive: 'bg-purple-500 text-white',
      filterInactive: 'bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800',
      label: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    },
    chapter: {
      filterActive: 'bg-orange-500 text-white',
      filterInactive: 'bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:hover:bg-orange-800',
      label: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    },
  };

  // Sort publications by ID in descending order
  const sortedPublications = [...publicationsData].sort((a, b) => 
    parseInt(b.id) - parseInt(a.id)
  );

  const filteredPublications = filter
    ? sortedPublications.filter(pub => pub.type === filter)
    : sortedPublications;

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
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground/80'
                  }`}
                >
                  All Publications
                </button>
                
                {publicationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFilter(type.id as 'journal' | 'conference' | 'poster' | 'chapter')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      filter === type.id
                        ? typeColors[type.id as keyof typeof typeColors].filterActive
                        : typeColors[type.id as keyof typeof typeColors].filterInactive
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Publications list */}
            <div className="space-y-4">
              {filteredPublications.map((pub) => (
                <Card key={pub.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold mb-1 text-foreground flex-1">{pub.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          "text-xs font-bold px-2 py-1 rounded-full",
                          typeColors[pub.type as keyof typeof typeColors].label
                        )}>
                          {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                        </span>
                        <span className={cn(
                          "text-xs font-bold px-2 py-1 rounded-full bg-primary/5 text-primary whitespace-nowrap",
                        )}>
                          {pub.year}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-primary/100 mb-2">{pub.authors}</p>
                    <p className="text-sm text-foreground/90 mb-3 italic">{pub.citation}</p>
                    
                    {pub.abstract && (
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
                    
                    {pub.url && (
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