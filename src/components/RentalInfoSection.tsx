'use client';

import React from 'react';
import ACImageCard from './ACImageCard';

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
          <ACImageCard 
            imageSrc="/1tonac.avif" 
            altText="1 Ton Air Conditioner"
            tonnage="1 TON"
            details='<span class="text-[#1F23FA]">12,000 </span>BTU <span class="text-[#1F23FA]">| 115 </span>Voltaje'
            coverage="COVERS 400 SQUARE FEET OF COOLING AREA"
          />
          <ACImageCard 
            imageSrc="/2tonac.avif" 
            altText="2 Ton Air Conditioner"
            tonnage="2 TON"
            details='<span class="text-[#1F23FA]">24,000 </span>BTU <span class="text-[#1F23FA]">| 1 </span>Phase <span class="text-[#1F23FA]">| 208/230 </span> Voltaje'
            coverage="COVERS 800 SQUARE FEET OF COOLING AREA"
          />
          <ACImageCard 
            imageSrc="/3tonac.avif" 
            altText="3 Ton Air Conditioner"
            tonnage="3 TON"
            details='<span class="text-[#1F23FA]">36,000 </span>BTU <span class="text-[#1F23FA]">| 1 </span>Phase <span class="text-[#1F23FA]">| 208/230 </span> Voltaje'
            coverage="COVERS 1200 SQUARE FEET OF COOLING AREA"
          />
        </div>

        {/* Desktop Layout */}
        <div 
          className="hidden md:block w-full h-[300px] relative rounded-lg"
          style={{
            backgroundImage: "url('/MarcaAgua.avif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center gap-12 px-16">
            <div className="w-1/3">
              <ACImageCard 
                imageSrc="/1tonac.avif" 
                altText="1 Ton Air Conditioner"
                tonnage="1 TON"
                details='<span class="text-[#1F23FA]">12,000 </span>BTU <span class="text-[#1F23FA]">| 115 </span>Voltaje'
                coverage="COVERS 400 SQUARE FEET OF COOLING AREA"
              />
            </div>
            <div className="w-1/3">
              <ACImageCard 
                imageSrc="/2tonac.avif" 
                altText="2 Ton Air Conditioner"
                tonnage="2 TON"
                details='<span class="text-[#1F23FA]">24,000 </span>BTU <span class="text-[#1F23FA]">| 1 </span>Phase <span class="text-[#1F23FA]">| 208/230 </span> Voltaje'
                coverage="COVERS 800 SQUARE FEET OF COOLING AREA"
              />
            </div>
            <div className="w-1/3">
            <ACImageCard 
                imageSrc="/3tonac.avif" 
                altText="3 Ton Air Conditioner"
                tonnage="3 TON"
                details='<span class="text-[#1F23FA]">36,000 </span>BTU <span class="text-[#1F23FA]">| 1 </span>Phase <span class="text-[#1F23FA]">| 208/230 </span> Voltaje'
                coverage="COVERS 1200 SQUARE FEET OF COOLING AREA"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalInfoSection;
