import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LightboxModal({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onNavigate,
  title = '',
}) {
  const currentImage = images[currentIndex] || '';
  const totalImages = images.length;

  const handlePrev = useCallback(() => {
    if (totalImages <= 1) return;
    const prevIdx = (currentIndex - 1 + totalImages) % totalImages;
    onNavigate(prevIdx);
  }, [currentIndex, totalImages, onNavigate]);

  const handleNext = useCallback(() => {
    if (totalImages <= 1) return;
    const nextIdx = (currentIndex + 1) % totalImages;
    onNavigate(nextIdx);
  }, [currentIndex, totalImages, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery lightbox"
      >
        {/* Top Header Bar */}
        <div 
          className="absolute top-0 left-0 right-0 p-4 sm:px-8 flex items-center justify-between text-white z-50 bg-gradient-to-b from-black/80 to-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-base font-semibold text-[#DDD6FE]">
              {title || 'Architectural Gallery'}
            </span>
            <span className="text-xs text-[#888888]">
              Image {currentIndex + 1} of {totalImages}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[#A855F7] hover:text-white transition-all text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
            aria-label="Close lightbox modal (Press Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        {totalImages > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#A855F7] hover:text-white text-white transition-all z-50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
            aria-label="Previous image (Left arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Main Image Container */}
        <div
          className="relative max-w-5xl max-h-[80vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentImage}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            src={currentImage}
            alt={`${title} - View ${currentIndex + 1}`}
            className="max-h-[78vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
          />
        </div>

        {/* Next Button */}
        {totalImages > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#A855F7] hover:text-white text-white transition-all z-50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
            aria-label="Next image (Right arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
