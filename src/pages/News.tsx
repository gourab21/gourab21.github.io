
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, Filter, Newspaper } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { newsData, NewsItem } from '@/data/newsData';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const News = () => {
  useEffect(() => {
    document.title = "Gourab | News & Updates";
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const filteredNews = selectedCategory 
    ? sortedNews.filter(item => item.category === selectedCategory)
    : sortedNews;

  const categories = Array.from(new Set(newsData.map(item => item.category)));

  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <Newspaper className="h-6 w-6 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">News & Updates</h1>
            </div>
            <p className="text-foreground/70 mb-8 max-w-2xl">
              Stay up to date with my latest professional achievements, publications, and career updates.
            </p>

            {/* Filters */}
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
              <div className="flex items-center gap-1 mr-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                className="rounded-full whitespace-nowrap"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className="rounded-full whitespace-nowrap"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>

            {/* News list */}
            <div className="space-y-6">
              {filteredNews.map((item) => (
                <Link to={`/news/${item.id}`} key={item.id} className="block group">
                  <Card className="w-full transition-all hover:shadow-md hover:border-primary/30 group-hover:transform group-hover:translate-y-[-2px]">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors flex items-center">
                          {item.title}
                          {item.link && (
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center text-primary hover:text-primary/80 ml-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <time dateTime={item.date} className="text-sm text-foreground/60">
                            {new Date(item.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                          <Badge variant="outline" className={cn(
                            "text-xs",
                            item.category === 'achievement' && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800/30",
                            item.category === 'publication' && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800/30",
                            item.category === 'career' && "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800/30",
                            item.category === 'general' && "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400 border-gray-200 dark:border-gray-700/50"
                          )}>
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70">{item.summary}</p>
                      <div className="mt-4">
                        <Button variant="link" className="p-0 h-auto text-primary">
                          Read more <ChevronRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;