import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SpeakerCard = ({ name, role, company, imageSrc }) => {
  return (
    <div className="bg-dark-lighter rounded-lg shadow-md overflow-hidden p-4 text-center border border-primary/20">
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold text-white">{name}</h3>
      <p className="text-primary">{role}</p>
      <p className="text-gray-400 text-sm">{company}</p>
    </div>
  );
};

const Speakers = () => {
  const speakers = [
    {
      name: "Ankit Shah",
      role: "Founder, CEO",
      company: "TechInnovate",
      imageSrc: ""
    },
    {
      name: "Shivani Agarwal",
      role: "Co-founder, CTO",
      company: "CloudSolutions",
      imageSrc: ""
     },
    {
      name: "Rahul Kapoor",
      role: "Founder, CEO",
      company: "FinTech Innovations",
      imageSrc: ""
    },
    {
      name: "Ravi Krishnamurthy",
      role: "Co-founder, COO",
      company: "Spark Ventures",
      imageSrc: ""
    },
    {
      name: "Priya Kapoor",
      role: "VP, Investor Capital",
      company: "Sequoia India",
      imageSrc: ""
    }
  ];

  return (
    <section className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">INSPIRATIONAL SPEAKERS</h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Discover the influential speakers who have shared their wisdom and insights at E-Cell events, enriching the entrepreneurial spirit.
        </p>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {speakers.map((speaker, index) => (
              <SpeakerCard 
                key={index}
                name={speaker.name}
                role={speaker.role}
                company={speaker.company}
                imageSrc={speaker.imageSrc}
              />
            ))}
          </div>
          
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-dark-lighter rounded-full p-2 shadow-md text-primary hover:text-primary-light border border-primary/30">
            <ChevronLeft size={24} />
          </button>
          
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-dark-lighter rounded-full p-2 shadow-md text-primary hover:text-primary-light border border-primary/30">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;