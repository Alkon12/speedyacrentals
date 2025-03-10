'use client';

import React from 'react';

const RentalInfoSection = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#000051] text-center mb-12">
          GOOD TO KNOW
        </h2>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <img 
            src="/1-Naturally-Vain-PMax-Rentals.avif" 
            alt="Naturally Vain PMax Rentals 1" 
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
          <img 
            src="/2-Naturally-Vain-PMax-Rentals.avif" 
            alt="Naturally Vain PMax Rentals 2" 
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
          <img 
            src="/3-Naturally-Vain-PMax-Rentals.avif" 
            alt="Naturally Vain PMax Rentals 3" 
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Desktop Layout */}
        <div 
          className="hidden md:block w-full h-[300px] relative overflow-hidden rounded-lg"
          style={{
            backgroundImage: "url('/MarcaAgua.avif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center gap-12 px-16">
            <div className="w-1/3">
              <img 
                src="/1-Naturally-Vain-PMax-Rentals.avif" 
                alt="Naturally Vain PMax Rentals 1" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-1/3">
              <img 
                src="/2-Naturally-Vain-PMax-Rentals.avif" 
                alt="Naturally Vain PMax Rentals 2" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-1/3">
              <img 
                src="/3-Naturally-Vain-PMax-Rentals.avif" 
                alt="Naturally Vain PMax Rentals 3" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalInfoSection;
