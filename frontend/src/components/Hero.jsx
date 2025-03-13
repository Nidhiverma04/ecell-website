import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative h-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">ENTREPRENEURSHIP AND DEVELOPOMENT CELL</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">UIET CHANDIGARH</h2>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            THINK | BUILD | INSPIRE
          </p>
          <p className="text-lg mb-8 text-gray-300">
            The Entrepreneurship Cell (E-Cell) of UIET has been fostering entrepreneurship and innovation. We are one of India's largest student-run entrepreneurship-promoting body as recognized by leading institutions.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md flex items-center">
            Know More
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={36} />
      </div>
    </div>
  );
};

export default Hero;