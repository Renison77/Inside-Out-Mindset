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


const App = () => {
  return (
    <SmoothScroll>
      <Loader />

      <div className="font-sans antialiased text-navy-900 selection:bg-amber-200 selection:text-navy-900 bg-white">
        <Navbar />
        <Hero />
        <Talks />
        <Outcomes />
        <About />
        <Booking />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;

