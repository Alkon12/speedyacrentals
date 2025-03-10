'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/slider1.webp',
  '/lider2.webp',
  '/slider3.webp',
  '/slider4.webp',
  '/slider5.webp',
  '/slider6.webp',
  '/slider7.webp',
  '/slider8.webp',
];

const GallerySlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setImagesPerPage(window.innerWidth >= 768 ? 4 : 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = currentPage * imagesPerPage;
  const visibleImages = images.slice(startIndex, startIndex + imagesPerPage);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      setSlideDirection(null);
      setIsAnimating(false);
    }, 300);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
      setSlideDirection(null);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000051] text-center mb-8 md:mb-12">
          WE HAVE A BIG INVENTORY
        </h2>

        {/* Main Gallery Section */}
        <div className="relative px-4 md:px-12 max-w-[1400px] mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious}
            disabled={isAnimating}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-black hover:text-blue-300 z-10 transition-colors"
          >
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>
          <button 
            onClick={goToNext}
            disabled={isAnimating}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-black hover:text-blue-300 z-10 transition-colors"
          >
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>

          {/* Image Slider */}
          <div 
            className={`flex gap-3 md:gap-4 items-center justify-center transition-all duration-500 ease-out transform
              ${slideDirection === 'left' ? '-translate-x-full opacity-0' : ''}
              ${slideDirection === 'right' ? 'translate-x-full opacity-0' : ''}
              ${!slideDirection ? 'translate-x-0 opacity-100' : ''}
            `}
          >
            {visibleImages.map((image, index) => (
              <div 
                key={startIndex + index}
                className="w-full"
                style={{ maxWidth: imagesPerPage === 4 ? '300px' : '340px' }}
              >
                <div 
                  className={`aspect-[3/2] relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl 
                    transition-all duration-500 group border border-gray-100 transform
                    ${isAnimating ? 'scale-95 opacity-90' : 'scale-100 opacity-100'}
                    hover:scale-[1.02]`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent group-hover:from-transparent transition-all duration-300" />
                  <img
                    src={image}
                    alt={`AC Unit ${startIndex + index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
