import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Talks from './components/Talks';
import Outcomes from './components/Outcomes';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Loader from './components/Loader';
import Testimonials from './components/Testimonials';
import LeadCapture from './components/LeadCapture';


const App = () => {
  return (
    <SmoothScroll>
      <Loader />

      <div className="font-sans antialiased text-primary-900 selection:bg-secondary-200 selection:text-primary-900 bg-white relative">
        <div className="bg-noise fixed inset-0 z-[100] mix-blend-overlay pointer-events-none opacity-[0.03]"></div>
        <Navbar />
        <Hero />
        <About />
        <Talks />
        <Testimonials />
        <Outcomes />
        <LeadCapture />
        <Booking />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
