
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setCurrentImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (currentImageIndex === null) return;
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (currentImageIndex === null) return;
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div 
            key={index}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => openImage(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="text-white p-4">
                <p className="font-medium">{image.alt}</p>
                {image.caption && <p className="text-sm text-gray-200">{image.caption}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-screen image viewer */}
      <AnimatePresence>
        {currentImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeImage}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 z-50"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 z-50"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 z-50"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>

            <AnimatePresence initial={false} mode="wait">
              {currentImageIndex !== null && (
                <motion.div
                  key={currentImageIndex}
                  className="relative max-w-5xl max-h-[80vh]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                  {images[currentImageIndex].caption && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <p className="font-medium text-lg">{images[currentImageIndex].alt}</p>
                      <p className="text-gray-200">{images[currentImageIndex].caption}</p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
