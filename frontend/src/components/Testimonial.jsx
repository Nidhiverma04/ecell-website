import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-16 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">TESTIMONIAL</h2>
        
        <div className="max-w-4xl mx-auto bg-dark-lighter rounded-lg shadow-xl p-8 text-white border border-primary/20">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary">
              <img 
                src=""
                alt="Prof" 
                className="w-full h-full object-cover"
              
              />
            </div>
            <h3 className="text-xl font-bold">Prof. Sanjeev Puri</h3>
            <p className="text-primary">Director, UIET</p>
          </div>
          
          <div className="text-center">
            <p className="text-lg italic mb-6 text-gray-300">
              "The power to think differently, the power to innovate, the power for the betterment of mankind is what sets entrepreneurs apart. India's young generation today has that power and potential to make a difference. In recent years, the entrepreneurial ecosystem in India has encouraged entrepreneurs have grown at a faster pace. Entrepreneurial mindset opportunities, investor pitch, creative thinking, and exposure to entrepreneurship at an early age, helping many students realize their potential as innovators and problem-solvers."
            </p>
            <div className="text-4xl font-serif text-primary">"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;