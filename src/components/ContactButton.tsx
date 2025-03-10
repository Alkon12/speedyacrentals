'use client';

import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  sizeClass?: string;
  phoneNumber?: string; // Optional prop to customize the phone number
}

const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  sizeClass = '',
  phoneNumber = '(626) 422-2271', // Default phone number
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Execute the provided onClick function
    } else {
      window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`; // Default to opening phone dialer
    }
  };

  return (
    <div className={`text-center ${className}`}>
      <button
        onClick={handleClick}
        className={`bg-[#1F23FA] hover:bg-white text-white hover:text-black 
          border-[3px] border-transparent hover:border-black font-bold 
          rounded-full text-md transition-all transform hover:scale-105 shadow-lg px-8
          ${sizeClass}`} // Apply dynamic width and padding
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactButton;
