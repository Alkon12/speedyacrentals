'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ContactButton from './ContactButton';

const NAV_ITEMS = [
  { label: 'Our Rentals', href: '/our-rentals' },
  { label: "FAQ's", href: '/faq-s' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.avif"
            alt="Portable AC Rentals Logo"
            width={226}
            height={88}
            className="h-auto w-40 md:w-56"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-black hover:text-[#1F23FA] transition">
              {item.label}
            </Link>
          ))}
          <ContactButton />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute w-full left-0 top-20 flex flex-col items-center space-y-4 z-50">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-black hover:text-blue-600 transition text-lg">
              {item.label}
            </Link>
          ))}
          <ContactButton />
        </div>
      )}
    </header>
  );
}
