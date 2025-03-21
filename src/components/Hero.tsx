import React from 'react';
import { Phone } from 'lucide-react';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const ACServiceHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image as actual img element */}
      <img
        src="/Hero.png"
        alt="AC Service Background"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-40" />
      
      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="mb-6">
            <h1 className={`text-5xl md:text-7xl font-extrabold text-white mb-2 ${bebasNeue.className}`}>
              THE QUICKEST SERVICE
            </h1>
            <h2 className={`text-5xl md:text-7xl font-black text-[#001457] mb-4 drop-shadow-lg ${bebasNeue.className}`}>
              IN LOS ANGELES
            </h2>
          </div>
          
          {/* Subheading */}
          <div className="mb-8">
            <h3 className={`text-4xl md:text-6xl font-bold text-white mb-2 ${bebasNeue.className}`}>
              NEED AN A/C
            </h3>
            <h3 className={`text-4xl md:text-6xl font-black text-[#001457] drop-shadow-lg ${bebasNeue.className}`}>
              QUICKLY??
            </h3>
          </div>
          
          {/* Hire Us Seal - Positioned to the right */}
          <div className="absolute right-4 md:right-16 top-1/3 transform -rotate-12 z-30">
            <div className="w-28 h-28 md:w-40 md:h-40 animate-pulse">
              <img
                src="/ETIQUETAS/1.png"
                alt="Hire Us Seal"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>
          
          {/* Call to action */}
          <p className="text-xl md:text-3xl text-white font-bold mb-6 ">
            For delivery and set up within a few hours give us a call!
          </p>
          
          {/* Phone number */}
          <div className="inline-flex items-center justify-center bg-[#001457] text-white text-3xl md:text-4xl font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            <Phone className="mr-2 h-8 w-8" />
            <span>(626) 422-2271</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACServiceHero;