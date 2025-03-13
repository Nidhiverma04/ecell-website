import React from 'react';
import { Building2, Lightbulb, GraduationCap } from 'lucide-react';

const Stats = () => {
  return (
    <section className="py-16 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">OUR MOTTO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-lighter p-8 rounded-lg shadow-md text-center border border-primary/20">
            <div className="flex justify-center mb-4">
              <Building2 size={48} className="text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-300 font-medium">Events</p>
          </div>
          
          <div className="bg-dark-lighter p-8 rounded-lg shadow-md text-center border border-primary/20">
            <div className="flex justify-center mb-4">
              <Lightbulb size={48} className="text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">20+</h3>
            <p className="text-gray-300 font-medium">Startups</p>
          </div>
          
          <div className="bg-dark-lighter p-8 rounded-lg shadow-md text-center border border-primary/20">
            <div className="flex justify-center mb-4">
              <GraduationCap size={48} className="text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">2000+</h3>
            <p className="text-gray-300 font-medium">Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;