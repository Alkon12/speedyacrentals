import React from 'react';
import OurRentalsSection from '@/components/OurRentalsSection';
import ContactButton from '@/components/ContactButton';
import RentalInfoSection from '@/components/RentalInfoSection';
import GallerySlider from '@/components/GallerySlider';

export const metadata = {
  title: 'Our Rentals | Speedy AC Rentals',
  description: 'Explore our air conditioning rental options for residential, commercial, and industrial applications.',
};

export default function OurRentalsPage() {
  return (
    <main>
      <OurRentalsSection />
      <div className="py-5 bg-white">
        <ContactButton />
      </div>
      <RentalInfoSection />
      <GallerySlider />
      <div className="py-5 bg-white">
        <ContactButton />
      </div>
    </main>
  );
}
