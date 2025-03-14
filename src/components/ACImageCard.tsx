'use client';

import Image from 'next/image';

interface ACImageCardProps {
  imageSrc: string;
  altText: string;
  tonnage: string;
  details: string; // Aquí podrás incluir spans con un formato especial
  coverage: string;
}

export default function ACImageCard({
  imageSrc,
  altText,
  tonnage,
  details,
  coverage,
}: ACImageCardProps) {
  return (
    <div className="flex flex-col items-center p-6">
      {/* Imagen centrada */}
      <div className="w-full max-w-xs flex justify-center">
        <Image 
          src={imageSrc}
          alt={altText}
          width={225}  
          height={225} 
          className="rounded-lg object-contain mx-auto"
        />
      </div>

      {/* Texto */}
      <div className="text-center mt-1 leading-snug">
        <p className="text-2xl font-bold text-[#000051] dark:text-white">{tonnage}</p>
        <p className="text-lg font-bold text-[#000051] dark:text-white mt-[-5px]" dangerouslySetInnerHTML={{ __html: details }} />
        <p className="text-sm text-gray-500 mt-[-5px] uppercase font-semibold">
          {coverage}
        </p>
      </div>
    </div>
  );
}
