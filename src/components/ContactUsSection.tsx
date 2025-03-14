'use client';

import React from 'react';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const ContactUsSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full min-h-[700px] py-10 md:h-[700px] bg-white dark:bg-black flex flex-col items-center justify-center">
        {/* Header */}
        <div className="w-full max-w-6xl px-6 md:px-12 md:mb-[-50px] z-10">
          <h2 className={`text-7xl md:text-8xl font-bold text-[#0037DE] text-center md:text-left md:ml-15 ${bebasNeue.className}`}>
            CONTACT US
          </h2>
        </div>

        {/* Main Content (Blue Section) */}
        <div className="h-[700px] bg-[#001457] grid grid-cols-1 md:grid-cols-3 items-center justify-center p-8 md:p-16">
          <div className="flex flex-col space-y-6 text-white max-w-md mx-auto md:mx-0 md:pl-30 md:mt-[-100px]">
            {/* Teléfono */}
            <div className="flex items-center space-x-4">
              <Image src="/Phone.avif" alt="Phone" width={70} height={70} />
              <p className="text-xl font-semibold whitespace-nowrap">(626) 422-2271</p>
            </div>

            {/* Horario */}
            <div className="flex items-center space-x-4">
              <Image src="/Schedule.avif" alt="Schedule" width={75} height={75} />
              <div className="whitespace-nowrap">
                <p className="text-lg font-semibold">Mon - Fri 6:00 am – 3:00 pm</p>
                <p className="text-lg font-semibold">Sat - Sun Emergency Rentals</p>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-center space-x-4">
              <Image src="/Adress.avif" alt="Location" width={75} height={75} />
              <div className="whitespace-nowrap">
                <p className="text-lg font-semibold">
                  1504 Bonnie Cove Ave,
                </p>
                <p className="text-lg font-semibold">
                  Glendora, CA, 91740
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - ContactUs Image (2/3 de la pantalla) */}
          <div className="col-span-2 flex justify-center items-center md:ml-15">
            <Image
              src="/ContactUs.png"
              alt="Contact Us Image"
              width={550}  // Ajusta el tamaño según necesites
              height={250} // Ajusta el tamaño según necesites
              className="object-contain"
            />
          </div>  
        </div> 
      </div>
    </div>
  );
};

export default ContactUsSection;
