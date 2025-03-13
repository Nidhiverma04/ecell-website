import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">ABOUT US</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            "E-Cell at UIET helps the budding startups and young professionals via dynamic workshops, thought-provoking speaker sessions, high-stakes business plan competitions, and numerous other game-changing initiatives throughout the year to create a crucible for innovation. We stand on pillars of support for budding entrepreneurs, providing them with personalized guidance from experienced mentors, crucial funding opportunities, and a robust network that can change the course of their entrepreneurial journey."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;