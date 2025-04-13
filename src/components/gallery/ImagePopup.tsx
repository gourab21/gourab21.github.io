
import React, { useEffect, useRef, useState } from 'react';
import { X, ZoomIn, ZoomOut, Hand } from 'lucide-react';
import { GalleryImage } from '@/components/gallery/galleryData';

interface ImagePopupProps {
  image: GalleryImage;
  onClose: () => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.2;

const ImagePopup: React.FC<ImagePopupProps> = ({ image, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    setZoom(prev => {
      const newZoom = Math.max(prev - ZOOM_STEP, MIN_ZOOM);
      // Reset position if zooming back to 1
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Reset position when zoom changes to 1
    if (zoom === 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [zoom]);

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Handle escape key press
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    // Handle click outside
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    // Handle mouse up event even when outside the component
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    
    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div 
        ref={modalRef}
        className="relative max-w-4xl w-full bg-background rounded-lg overflow-hidden shadow-2xl animate-in zoom-in-95"
      >
        <div className="absolute top-2 right-2 flex gap-2 z-10">
          <button 
            onClick={handleZoomIn}
            className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
            aria-label="Zoom In"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button 
            onClick={handleZoomOut}
            className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
            aria-label="Zoom Out"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-1 overflow-hidden" onWheel={handleWheel}>
          <div 
            ref={imageContainerRef}
            className="min-h-[300px] flex items-center justify-center transition-transform duration-200 ease-out"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ 
              cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
          >
            <img 
              src={image.src} 
              alt={image.title} 
              className="object-contain rounded transition-all duration-200 ease-out"
              style={{ 
                transform: `scale(${zoom})`,
                maxHeight: '70vh',
                maxWidth: '100%',
                transformOrigin: 'center',
                translate: zoom > 1 ? `${position.x}px ${position.y}px` : '0 0'
              }} 
              draggable="false"
            />
          </div>
        </div>
        
        <div className="p-4 bg-background">
          <h3 className="text-xl font-semibold text-foreground">{image.title}</h3>
          <p className="text-foreground/70 mt-1">{image.description}</p>
          <div className="mt-2 text-sm text-muted-foreground">
            <span>Zoom: {Math.round(zoom * 100)}% • </span>
            <span>{zoom > 1 ? 'Click and drag to move image • ' : ''}</span>
            <span>Use mouse wheel to zoom in/out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;