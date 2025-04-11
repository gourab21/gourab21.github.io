
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, Newspaper } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { newsData } from '@/data/newsData';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

const NewsSection = () => {
  // Get only the most recent 3 news items
  const latestNews = [...newsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-16 px-4 w-full bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Latest News</h2>
          </div>
          <Link to="/news" className="flex items-center text-primary hover:text-primary/80 font-medium">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((item) => (
            <Card key={item.id} className="h-full transition-all hover:shadow-md hover:border-primary/30 hover:translate-y-[-2px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors flex items-center">
                  {item.title}
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary hover:text-primary/80 ml-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span className="text-xs">
                    {formatDistanceToNow(new Date(item.date), { addSuffix: true })}
                  </span>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    item.category === 'achievement' && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                    item.category === 'submission' && "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
                    item.category === 'publication' && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                    item.category === 'career' && "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                    item.category === 'general' && "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400"
                  )}>
                    {item.category}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 line-clamp-3">{item.summary}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/news/${item.id}`}>
                  <Button variant="link" className="p-0 h-auto text-primary justify-start">
                    Read more <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;