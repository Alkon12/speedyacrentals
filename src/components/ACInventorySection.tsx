import React from 'react';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});


const ACInventorySection = () => {
  return (
    <div className="w-full bg-white dark:bg-black pb-1">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 relative inline-block">
            <span className={`text-[#013BDD] ${bebasNeue.className}`}>WE HAVE A BIG</span>
            <div className={`text-black dark:text-white drop-shadow-md ${bebasNeue.className}`}>INVENTORY</div>
            <div className="absolute -inset-1 border-4 border-black rounded-lg -z-10 translate-y-2 translate-x-2"></div>
          </h2> 
        </div>

        {/* AC Units Display - Exactly as shown in the image */}
        <div className="flex flex-wrap justify-center items-center ">
          {/* 1 TON Unit - First AC image with its label */}
          <div className="w-full md:w-auto flex justify-center">
            <div className="relative">
              <img 
                src="/1tonac.webp" 
                alt="1 Ton AC Unit - MovinCool" 
                className="h-auto max-h-60"
              />
              <img 
                src="/1.avif" 
                alt="1 TON" 
                className="absolute left-0 bottom-1/2 h-auto md:h-auto"
                style={{ transform: 'translateX(-5%)' }}
              />
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <div className="relative">
              <img 
                src="/2tonac.webp" 
                alt="2 Ton AC Unit - MovinCool" 
                className="h-auto max-h-60"
              />
              <img 
                src="/2.avif" 
                alt="2 TON" 
                className="absolute left-0 bottom-1/2 h-auto md:h-auto"
                style={{ transform: 'translateX(5%)' }}
              />
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <div className="relative">
              <img 
                src="/3tonac.webp" 
                alt="3 Ton AC Unit" 
                className="h-auto max-h-60"
              />
              <img 
                src="/3.avif" 
                alt="3 TON" 
                className="absolute left-[-25px] bottom-1/2 h-auto md:h-auto"
                style={{ transform: 'translateX(20%)' }}
              />
            </div>
          </div>
        </div>

        {/* High Quality Badge - Positioned to overflow to the section below */}
        <div className="relative mb-8">
          {/* Quality Badge with negative margin to overflow */}
          <div className="absolute left-8 bottom-0 w-32 md:w-40 transform -rotate-12 transition-all hover:rotate-0 duration-300 translate-y-35 z-20">
            <img 
              src="/High.avif" 
              alt="High Quality Service Badge" 
              className="w-full h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};export default ACInventorySection;
