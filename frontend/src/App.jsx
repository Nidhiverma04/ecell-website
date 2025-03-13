import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Initiatives from './components/Initiatives';
import Speakers from './components/Speakers';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Initiatives />
      <Speakers />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;