import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">E-CELL, UIET</h3>
            <p className="mt-4 text-gray-300">
              Get connected with us on social networks:
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-300 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">OUR INITIATIVES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary">E-Summit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Ideathon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Udyami</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Others</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">USEFUL LINKS</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="#" className="text-gray-300 hover:text-primary">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary">About Us</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-primary">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary">Contact Us</a></li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 text-primary">CONTACT</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-primary" />
                <span>UIET, Chandigarh, 160014</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary" />
                <a href="mailto:secelluiet@substack.com" className="hover:text-primary">ecelluiet@substack.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>© 2025 Copyright: E-Cell UIET</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;