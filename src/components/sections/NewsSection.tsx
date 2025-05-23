import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ExternalLink, Newspaper } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { newsData } from '@/data/newsData';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';


const NewsSection = () => {
  // Get only the most recent 7 news items
  const latestNews = [...newsData]
  .sort((a, b) => Number(b.id) - Number(a.id))
    .reverse()
    .slice(0, 6);
     
    const [autoplay, setAutoplay] = useState(true);
    const [api, setApi] = useState<any>();
    const [isRewinding, setIsRewinding] = useState(false);
    const navigate = useNavigate();

    // Setup autoplay for the carousel
    useEffect(() => {
      if (!api || !autoplay) return;
      
      const interval = setInterval(() => {
// Skip during rewind animation
if (isRewinding) return;
       
// If we're at the last slide
if (!api.canScrollNext()) {
  setIsRewinding(true);
  
  // Create a quick rewind animation by scrolling back to the beginning
  // We use a smaller interval to make the rewind faster
  let currentIndex = latestNews.length - 1;
  const rewindInterval = setInterval(() => {
    currentIndex--;
    api.scrollTo(currentIndex);
    
    if (currentIndex <= 0) {
      clearInterval(rewindInterval);
      setIsRewinding(false);
    }
  }, 100); // Quick rewind speed
} else {
  api.scrollNext();
}      
}, 2300); // Change slide every 5 seconds
      
      return () => clearInterval(interval);
    }, [api, autoplay, isRewinding, latestNews.length]);


    const handleCardClick = (id: string, e: React.MouseEvent) => {
      // Don't navigate if clicking on an external link
      if ((e.target as HTMLElement).closest('a[href^="http"]')) {
        return;
      }
      navigate(`/news/${id}`);
    };


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
        <Carousel 
           setApi={setApi} 
           className="w-full"
           opts={{
             align: "start",
             loop: false, // Disable built-in loop
            }}
         >
           <CarouselContent>
             {latestNews.map((item) => (
               <CarouselItem key={item.id} className="md:basis-1/3 lg:basis-1/3">
                  <Card 
                  className="h-full transition-all hover:shadow-md hover:border-primary/30 hover:translate-y-[-2px] cursor-pointer"
                  onClick={(e) => handleCardClick(item.id, e)}
                >
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
                         item.category === 'publication' && "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                         item.category === 'career' && "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                         item.category === 'general' && "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400"
                       )}>
                         {item.category}
                       </span>
                     </CardDescription>
                   </CardHeader>
                   <CardContent>
                     <p 
                       className="text-sm text-foreground/70 line-clamp-3"
                       dangerouslySetInnerHTML={{ 
                         __html: item.summary.replace(
                           /<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/g, 
                           (match, url, text) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="font-bold text-secondary-purple hover:underline">${text}</a>`
                         ) 
                       }} 
                     />
                   </CardContent>
                   <CardFooter>
                     {/* Keep the Read more button visually, but it's part of the clickable card now */}
                    <Button variant="link" className="p-0 h-auto text-primary justify-start pointer-events-none">
                      Read more <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                   </CardFooter>
                 </Card>
               </CarouselItem>
             ))}
           </CarouselContent>
           
           <div className="flex items-center justify-center mt-4 gap-2">
             <Button 
               variant="outline" 
               size="icon" 
               className="h-8 w-8 rounded-full"
               onClick={() => {
                if (!isRewinding) {
                  api?.scrollPrev();
                }
              }}
              disabled={isRewinding}
             >
               <ChevronRight className="h-4 w-4 rotate-180" />
               <span className="sr-only">Previous slide</span>
             </Button>
             
             <Button
               variant="outline"
               size="sm"
               className={cn(
                 "transition-colors",
                 autoplay ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary"
               )}
               onClick={() => setAutoplay(!autoplay)}
               disabled={isRewinding}
             >
               {autoplay ? "Pause" : "Auto"}
             </Button>
             
             <Button 
               variant="outline" 
               size="icon" 
               className="h-8 w-8 rounded-full"
               onClick={() => {
                if (!isRewinding) {
                  if (!api?.canScrollNext()) {
                    // Manual rewind
                    setIsRewinding(true);
                    let currentIndex = latestNews.length - 1;
                    const rewindInterval = setInterval(() => {
                      currentIndex--;
                      api.scrollTo(currentIndex);
                      
                      if (currentIndex <= 0) {
                        clearInterval(rewindInterval);
                        setIsRewinding(false);
                      }
                    }, 100);
                  } else {
                    api?.scrollNext();
                  }
                }
              }}
              disabled={isRewinding}
>
               <ChevronRight className="h-4 w-4" />
               <span className="sr-only">Next slide</span>
             </Button>
           </div>
         </Carousel>
        
        
      </div>
    </section>
  );
};

export default NewsSection;