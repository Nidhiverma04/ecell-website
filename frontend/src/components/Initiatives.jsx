import React from 'react';

const InitiativeCard = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-dark-lighter rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 border border-primary/20">
      <div className="p-6 text-center">
        <img src={imageSrc} alt={title} className="w-24 h-24 mx-auto mb-4 filter invert opacity-80" />
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Initiatives = () => {
  const initiatives = [
    {
      title: "E-Summit",
      description: "Annual flagship event bringing together entrepreneurs, investors, and students",
      imageSrc: "https://img.icons8.com/fluency/96/conference.png"
    },
    {
      title: "Ideathon",
      description: "Business idea competition for aspiring entrepreneurs",
      imageSrc: "https://img.icons8.com/fluency/96/idea.png"
    },
    {
      title: "Udyami",
      description: "Entrepreneurship event",
      imageSrc: "https://img.icons8.com/fluency/96/student-male.png"
    }
  ];

  return (
    <section id="initiatives" className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">OUR INITIATIVES</h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          We at E-Cell at UIET believe that entrepreneurship is the key to India's development. To fulfill this vision, we have conceptualized & successfully implemented various initiatives to help students, young entrepreneurs & professionals in their entrepreneurial journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <InitiativeCard 
              key={index}
              title={initiative.title}
              description={initiative.description}
              imageSrc={initiative.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;