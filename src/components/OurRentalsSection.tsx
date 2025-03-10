'use client';

import React from 'react';
import ContactButton from './ContactButton';

const OurRentalsSection = () => {
  return (
    <div className="w-full min-h-[700px] md:h-[700px] bg-white md:bg-white flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-[#000051] md:mb-25 ">OUR RENTALS</h2>
      <div className="w-full md:w-3/4 h-[1000px] md:h-[400px] bg-[#000051] flex items-center justify-center p-4 md:p-0">
        <div className="w-[350px] md:w-[500px] h-[550px] bg-[#000051] border-7 border-white shadow-[8px_9px_11px_3px_rgba(0,_0,_0,_0.1)] relative mb-[50px] rounded-lg top-[-150px] md:top-0" style={{ backgroundImage: "url('/pattern.svg')" }}>
          <div className="absolute top-8 left-8 text-white space-y-4 pr-8 max-w-full text-center md:text-left md:max-w-[calc(500px*2/3-2rem)]">
            <p>Air conditioning is a great way to stay comfortable on hot summer days whether you're home or at your workplace.</p>
            <p>It is suited for residential homes or buildings and commercial spaces like offices, workshops, and retail outlets where keeping cool, maintaining good air quality, and setting optimal temperatures are important for overall health and productivity.</p>
            <p>Benefit from high performance in hot conditions with our rental cooling products.</p>
          </div>
          <div className="absolute bottom-8 right-[-125px] hidden md:block">
            <img src="/1tonac.avif" alt="1 Ton AC Unit" className="w-auto h-auto" />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
            <img src="/Se-habla-español.avif" alt="Se habla español" className="h-[79px] w-auto" />
          </div>
          <div className="absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 md:hidden scale-200">
            <img src="/1tonac.avif" alt="1 Ton AC Unit" className="w-max h-max" />
          </div>
        </div>
      </div> 
    </div> 
  );
};

export default OurRentalsSection;