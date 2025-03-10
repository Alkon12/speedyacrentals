import React from 'react';
import ContactButton from './ContactButton';
import { Clock, Thermometer, Award } from 'lucide-react';

const ACFeaturesSection = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Main Features Panel */}
        <div className="relative max-w-5xl mx-auto mb-12 shadow-xl rounded-lg overflow-hidden">
          {/* Dark Blue Background with Grid */}
          <div className="absolute inset-0 bg-[#001457]"></div>
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-repeat" 
        style={{ backgroundImage: "url('/pattern.svg')" }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10 text-white grid grid-cols-1 md:grid-cols-3 gap-4 p-8">            {/* Feature 1 */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-blue-700 flex flex-col items-start">
              <h3 className="text-xl font-bold mb-2">
                Perfect choice if you need to{' '}
                <span className="text-[#1F23FA]">regulate temperatures {' '}</span>
                in specific areas or rooms.
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-blue-700 flex flex-col items-start">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-[#1F23FA]">Fast installation</span> completed 
                by our expert technicians.
              </h3>
            </div>

            {/* Feature 3 */}
            <div className="p-8 flex flex-col items-start">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-[#1F23FA]">Quiet and efficient</span> with
                broad temperature ranges
              </h3>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <ContactButton />

        
      </div>
    </div>
  );
};

export default ACFeaturesSection;
