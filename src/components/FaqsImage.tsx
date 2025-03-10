import React from 'react';
import Image from 'next/image';

interface FaqsImageProps {
  desktopSrc: string;
  mobileSrc: string;
  desktopHeight?: string;
  mobileHeight?: string;
}

const FaqsImage: React.FC<FaqsImageProps> = ({
  desktopSrc,
  mobileSrc,
  desktopHeight = "h-[500px]",
  mobileHeight = "h-[300px]",
}) => {
  return (
    <div className="w-full flex justify-center bg-gray-100">
      {/* Desktop Image */}
      <div className={`w-full relative ${desktopHeight} hidden sm:block`}>
        <div className="relative w-full h-full">
          <Image
            src={desktopSrc}
            alt="FAQ Desktop Hero Image"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Mobile Image */}
      <div className={`w-full relative ${mobileHeight} block sm:hidden`}>
        <div className="relative w-full h-full">
          <Image
            src={mobileSrc}
            alt="FAQ Mobile Hero Image"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FaqsImage;
