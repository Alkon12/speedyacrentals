'use client';

import { useState, useEffect } from 'react';
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar si el navegador está en modo oscuro
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    // Escuchar cambios en el modo del sistema
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <header className=" w-full bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center h-20">
        {/* Logo dinámico */}
        <Link href="/">
          <Image
    src="/logo.avif"
    alt="Portable AC Rentals Logo"
    width={226}
    height={88}
    className="h-auto w-40 md:w-56 dark:hidden"
  />
  <Image
    src="/logo2.png"
    alt="Portable AC Rentals Logo"
    width={226}
    height={88}
    className="h-auto w-40 md:w-56 hidden dark:block"
  />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-black dark:text-white hover:text-[#1F23FA] transition">{item.label}</Link>
          ))}
          <ContactButton />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-white dark:bg-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-lg py-4 absolute w-full left-0 top-20 flex flex-col items-center space-y-4 z-50">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-600 transition text-lg">
              {item.label}
            </Link>
          ))}
          <ContactButton />
        </div>
      )}
    </header>
  );
}
