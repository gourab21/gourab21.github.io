
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { galleryImages } from '@/components/gallery/galleryData';
import ImageGallery from '@/components/gallery/ImageGallery';

const Gallery = () => {
  useEffect(() => {
    document.title = "Portfolio | Gallery";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-wrapper min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gradient mb-4">
                Gallery
              </h1>
              <p className="text-lg text-foreground/70">
                A collection of photographs showcasing my journey and experiences
              </p>
            </header>
            
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;