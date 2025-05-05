import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="z-10">
            <Logo size="md" />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <a href="#contact" className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md transition-all">
              <Phone size={18} />
              <span className="font-medium">Get a Quote</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle Menu">
              {isMenuOpen ? (
                <X size={28} className="text-navy-900" />
              ) : (
                <Menu size={28} className="text-navy-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-md transition-all"
            >
              <Phone size={18} />
              <span className="font-medium">Get a Quote</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks: React.FC = () => {
  return (
    <>
      <a href="#home" className="text-navy-900 hover:text-orange-600 font-medium transition-colors">
        Home
      </a>
      <a href="#services" className="text-navy-900 hover:text-orange-600 font-medium transition-colors">
        Services
      </a>
      <a href="#projects" className="text-navy-900 hover:text-orange-600 font-medium transition-colors">
        Projects
      </a>
      <a href="#about" className="text-navy-900 hover:text-orange-600 font-medium transition-colors">
        About
      </a>
      <a href="#testimonials" className="text-navy-900 hover:text-orange-600 font-medium transition-colors">
        Testimonials
      </a>
    </>
  );
};

const MobileNavLinks: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  return (
    <>
      <a href="#home" onClick={closeMenu} className="text-navy-900 hover:text-orange-600 font-medium py-2 transition-colors">
        Home
      </a>
      <a href="#services" onClick={closeMenu} className="text-navy-900 hover:text-orange-600 font-medium py-2 transition-colors">
        Services
      </a>
      <a href="#projects" onClick={closeMenu} className="text-navy-900 hover:text-orange-600 font-medium py-2 transition-colors">
        Projects
      </a>
      <a href="#about" onClick={closeMenu} className="text-navy-900 hover:text-orange-600 font-medium py-2 transition-colors">
        About
      </a>
      <a href="#testimonials" onClick={closeMenu} className="text-navy-900 hover:text-orange-600 font-medium py-2 transition-colors">
        Testimonials
      </a>
    </>
  );
};

export default Navbar;