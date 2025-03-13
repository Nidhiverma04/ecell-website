import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-light text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className=""><img src="" alt="logo" /></span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-lighter">HOME</a>
                <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-lighter">ABOUT US</a>
                <a href="#initiatives" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-lighter">INITIATIVES</a>
                <a href="#gallery" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-lighter">GALLERY</a>
                <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-lighter">CONTACT</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-dark-lighter inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-lighter focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-dark-lighter">HOME</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-dark-lighter">ABOUT US</a>
            <a href="#initiatives" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-dark-lighter">INITIATIVES</a>
            <a href="#gallery" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-dark-lighter">GALLERY</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-dark-lighter">CONTACT</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;