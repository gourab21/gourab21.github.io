
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { newsData } from '@/data/newsData';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const newsItem = newsData.find(item => item.id === id);

  useEffect(() => {
    if (newsItem) {
      document.title = `Gourab | ${newsItem.title}`;
    } else {
      document.title = "Gourab | News Not Found";
    }
  }, [newsItem]);

  if (!newsItem) {
    return (
      <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">News Item Not Found</h1>
            <p className="text-foreground/70 mb-6">The news item you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/news')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <article className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <Link to="/news" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all news
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {newsItem.title}
              {newsItem.link && (
                <a 
                  href={newsItem.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary hover:text-primary/80 ml-2"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-1 text-foreground/70">
                <Calendar className="h-4 w-4" />
                <time dateTime={newsItem.date} className="text-sm">
                  {new Date(newsItem.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              <Badge className={cn(
                "text-xs",
                newsItem.category === 'achievement' && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800/30",
                newsItem.category === 'publication' && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800/30",
                newsItem.category === 'career' && "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800/30",
                newsItem.category === 'general' && "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400 border-gray-200 dark:border-gray-700/50"
              )}>
                {newsItem.category}
              </Badge>
            </div>
            
            <div className="glass-panel p-6 rounded-lg mb-8">
              <p className="text-lg font-medium mb-4">{newsItem.summary}</p>
              <div className="prose dark:prose-invert max-w-none">
                <p>{newsItem.content}</p>
              </div>
              
              {newsItem.link && (
                <div className="mt-6">
                  <a 
                    href={newsItem.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Visit related link <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={() => navigate('/news')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to all news
              </Button>
              <div className="text-sm text-foreground/50">ID: {newsItem.id}</div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;