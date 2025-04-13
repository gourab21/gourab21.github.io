
import React, { useState } from 'react';
import { GalleryImage } from '@/components/gallery/galleryData';
import ImagePopup from './ImagePopup';
import { useIsMobile } from '@/hooks/use-mobile';

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <div 
        className={`grid gap-6 ${
          isMobile 
            ? 'grid-cols-1' 
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}
      >
        {images.map((image) => (
          <div 
            key={image.id} 
            className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer border border-border"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square overflow-hidden bg-secondary/30">
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-lg text-foreground">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <ImagePopup image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default ImageGallery;