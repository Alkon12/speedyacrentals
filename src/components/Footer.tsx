import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1F23FA] text-white text-center py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="Portable AC Rentals Logo"
              width={247}
              height={96}
              className="h-auto w-48 md:w-56"
            />
          </Link>
        </div>

        {/* Info */}
        <p className="text-lg md:text-xl font-medium">
          Proudly serving in Los Angeles County and <br />surrounding areas for over 5 years.<br />
          Emergency Rentals Available
        </p>

        {/* Contacto */}
        <h3 className="text-2xl font-bold mt-4">Contact Us</h3>
        <p className="text-xl">(626) 422-2271</p>
        <p className="text-lg">Mon - Fri 6:00 am – 3:00 pm</p>
        <p className="text-lg">Sat - Sun Emergency Rentals</p>

        {/* Copyright */}
        <p className="text-sm mt-6">© Portable A/C Rentals by Wolfe</p>
      </div>
    </footer>
  );
}
