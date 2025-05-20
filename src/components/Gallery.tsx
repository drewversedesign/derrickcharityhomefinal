
import React, { useState } from 'react';
import InteractiveImage from '@/components/InteractiveImage';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title = "Photo Gallery", className }) => {
  const [currentImage, setCurrentImage] = useState<GalleryImage | null>(null);

  const handleImageClick = (image: GalleryImage) => {
    setCurrentImage(image);
  };

  const handleCloseModal = () => {
    setCurrentImage(null);
  };

  return (
    <section className={cn("py-12 md:py-16 bg-yellow-50", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">{title}</h2>
        {images && images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2"
                style={{ paddingTop: '100%' }} // For 1:1 aspect ratio
                onClick={() => handleImageClick(image)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick(image)}
                tabIndex={0}
                role="button"
                aria-label={`View image: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No images to display in the gallery yet.</p>
        )}
      </div>

      <Dialog open={!!currentImage} onOpenChange={(isOpen) => !isOpen && handleCloseModal()}>
        <DialogContent 
          className="max-w-4xl w-[90vw] p-0 bg-transparent border-none shadow-none !rounded-lg overflow-hidden"
          onInteractOutside={(e) => e.preventDefault()} // Prevent closing on clicking InteractiveImage controls
        >
          {currentImage && (
            <div className="relative">
              <InteractiveImage 
                src={currentImage.src} 
                alt={currentImage.alt} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <DialogClose asChild>
                <button
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/60 hover:bg-black/80 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xl font-semibold z-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                  aria-label="Close image viewer"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
