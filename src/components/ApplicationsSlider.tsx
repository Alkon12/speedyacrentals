'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ApplicationCard {
  title: string;
  points: string[];
}

const ApplicationsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Sample application cards
  const applications: ApplicationCard[] = [
    {
      title: "INDUSTRIAL",
      points: [
        "Spot cool without the huge expense of air conditioning an entire facility.",
        "Prevent product defects (warping and condensation) due to heat and humidity.",
        "Reduce risks of human error and worker disability (heat exhaustion).",
        "Support employee morale, work quality, and productivity."
      ]
    },
    {
      title: "HEALTHCARE",
      points: [
        "Control temperatures around heat-generating medical equipment to keep your healthcare facility running smoothly.",
        "Temporary cooling when emergency and waiting areas become hot and over-crowded.",
        "Spot cooling for energy-intensive areas, such as labs, imaging centers, and computer rooms.",
      ]
    },
    {
      title: "CONSTRUCTION",
      points: [
        "Get fast cooling for people-and fast drying for materials. Portable AC Rentals spot coolers provide quick relief for:",
        "Workers in construction trailers, tents, and temporary offices.",
        "Building occupants when central HVAC is down or off.",
        "Heat-intensive work processes, such as welding."
      ]
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
    const newIndex = isFirstSlide ? applications.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const isLastSlide = currentIndex === applications.length - 1;
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
    <div className="w-full py-16 bg-[#001457] overflow-hidden">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center text-blue-500 mb-10">APPLICATIONS</h2>
      
      {/* Slider container */}
      <div className="relative max-w-4xl mx-auto px-10">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {applications.map((app, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-[#001457] border-2 border-white rounded-lg p-8 min-h-[320px] flex flex-col justify-center" style={{ backgroundImage: "url('/pattern.svg')" }}>
                  <h3 className="text-4xl font-bold text-white text-center mb-6">{app.title}</h3>
                  <div className="space-y-5 mt-4">
                    {app.points.map((point, idx) => (
                      <p key={idx} className="text-white text-center text-lg">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-15 top-1/2 -translate-y-1/2 text-white hover:text-blue-300 z-10 transition-colors"
          disabled={isTransitioning}
          aria-label="Previous slide"
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-15 top-1/2 -translate-y-1/2 text-white hover:text-blue-300 z-10 transition-colors"
          disabled={isTransitioning}
          aria-label="Next slide"
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>
        
        
      </div>
    </div>
  );
};

export default ApplicationsSlider;
