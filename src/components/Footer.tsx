import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo size="lg" />
            <p className="mt-4 text-gray-400">
              Professional demolition and junk removal services for commercial and residential properties. Over 20 years of industry experience.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#home" text="Home" />
              <FooterLink href="#services" text="Our Services" />
              <FooterLink href="#projects" text="Recent Projects" />
              <FooterLink href="#about" text="About Us" />
              <FooterLink href="#testimonials" text="Testimonials" />
              <FooterLink href="#contact" text="Contact Us" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <FooterLink href="#services" text="Commercial Demolition" />
              <FooterLink href="#services" text="Residential Demolition" />
              <FooterLink href="#services" text="Commercial Junk Removal" />
              <FooterLink href="#services" text="Residential Junk Removal" />
              <FooterLink href="#services" text="Consulting Services" />
              <FooterLink href="#contact" text="Free Estimates" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="text-orange-500 mr-3 mt-1" size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-orange-500 mr-3 mt-1" size={18} />
                <span>info@allinonedemo.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-orange-500 mr-3 mt-1" size={18} />
                <span>123 Demolition Way,<br />City, ST 12345</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-orange-500 mr-3 mt-1" size={18} />
                <div>
                  <p>Mon-Fri: 7AM-6PM</p>
                  <p>Sat: 8AM-2PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} All in One Demolition & Junk Removal. All rights reserved.
          </p>
          <div className="flex space-x-4 items-center">
            <button 
              onClick={scrollToTop}
              className="bg-navy-800 hover:bg-navy-700 rounded-full p-2 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-orange-500 transition-colors"
      >
        {text}
      </a>
    </li>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="bg-navy-800 hover:bg-orange-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;