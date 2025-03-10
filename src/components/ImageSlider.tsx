'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Sample images for demonstration
  const images = [
    {
      src: "/slider1.webp",
    },
    {
      src: "/lider2.webp",
    },
    {
      src: "/slider3.webp",
    },
    {
      src: "/slider4.webp",
    },
    {
      src: "/slider5.webp",
    },
    {
      src: "/slider6.webp",
    },
    {
      src: "/slider7.webp",
    },
    {
      src: "/slider8.webp",
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning || slideIndex === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(slideIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-[600px] border-b-1 border-white"> {/* Increased height from h-96 to h-[600px] */}
      {/* Dark blue background frame */}
      <div className="absolute inset-0 bg-[#001457]"></div>
      
      {/* Main slider container */}
      <div className="relative w-full h-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <div className="relative w-full h-full p-4"> {/* Reduced padding for more image space */}
                <img 
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows - Removed background circle and positioned in corners */}
        <button 
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-blue-300 z-10 transition-colors"
          disabled={isTransitioning}
        >
          <ChevronLeft size={40} strokeWidth={1.5} /> {/* Larger arrow size */}
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-blue-300 z-10 transition-colors"
          disabled={isTransitioning}
        >
          <ChevronRight size={40} strokeWidth={1.5} /> {/* Larger arrow size */}
        </button>
        
        
      </div>
    </div>
  );
};

export default ImageSlider;
