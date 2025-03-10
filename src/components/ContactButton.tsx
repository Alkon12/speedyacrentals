'use client';

import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <button
        onClick={onClick}
        className="bg-[#1F23FA] hover:bg-white text-white hover:text-black border-[3px] border-transparent hover:border-black font-bold px-8 rounded-full text-md transition-all transform hover:scale-105 shadow-lg"
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactButton;
