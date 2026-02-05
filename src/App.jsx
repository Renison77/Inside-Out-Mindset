import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Offer from './components/Offer';
import Success from './components/Success';
import Plan from './components/Plan';
import Differentiation from './components/Differentiation';
import About from './components/About';
import Punjabi from './components/Punjabi';
import Formats from './components/Formats';
import Booking from './components/Booking';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Loader from './components/Loader';
import StickyCTA from './components/StickyCTA';

const App = () => {
  return (
    <SmoothScroll>
      <Loader />
      <StickyCTA />
      <div className="font-sans antialiased text-navy-900 selection:bg-amber-200 selection:text-navy-900 bg-white">
        <Navbar />
        <Hero />
        <Problem />
        <Offer />
        <Success />
        <Plan />
        <Differentiation />
        <About />
        <Punjabi />
        <Formats />
        <Booking />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;

