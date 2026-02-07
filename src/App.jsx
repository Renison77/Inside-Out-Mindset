import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Context from './components/Context';
import Talks from './components/Talks';
import Outcomes from './components/Outcomes';
import Process from './components/Process';
import Method from './components/Method';
import Advisory from './components/Advisory';
import Credibility from './components/Credibility';
import Testimonials from './components/Testimonials';
import FeaturedWork from './components/FeaturedWork';
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
        <Context />
        <Talks />
        <Outcomes />
        <Process />
        <Method />
        <Advisory />
        <Credibility />
        <Testimonials />
        <FeaturedWork />
        <About />
        <Booking />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;

