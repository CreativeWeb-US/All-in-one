import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg text-white opacity-90 mb-8">
            Whether you're planning a major demolition project or need junk removal services, our team of experts is ready to help. Contact us today for a free, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-navy-900 font-medium px-8 py-3 rounded-md transition-all flex items-center justify-center gap-2 group"
            >
              Get a Free Estimate
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:5551234567" 
              className="border-2 border-white hover:bg-white hover:text-navy-900 text-white font-medium px-8 py-3 rounded-md transition-all"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;