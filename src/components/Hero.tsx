import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-navy-900 pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute left-1/2 bottom-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Your Trusted <span className="text-orange-500">Demolition</span> & <span className="text-orange-500">Junk Removal</span> Facilitators
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              With over 20 years of experience, we facilitate seamless demolition and junk removal solutions for both commercial and residential properties, ensuring efficient project management from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#contact" 
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3 rounded-md transition-all text-center"
              >
                Request a Quote
              </a>
              <a 
                href="#services" 
                className="border border-gray-400 hover:border-white text-white font-medium px-8 py-3 rounded-md transition-all flex items-center justify-center gap-2 group"
              >
                Our Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="md:w-5/12 relative">
            <div className="w-full h-80 md:h-96 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Demolition services" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-95 p-4 rounded-md shadow-lg">
                <p className="font-semibold text-navy-900">Expert Project Facilitation</p>
                <p className="text-sm text-gray-700">End-to-End Project Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;