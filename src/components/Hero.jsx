import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = () => {
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 500], [0, 150]);

   const scrollToBooking = () => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
   };

   const scrollToTalks = () => {
      document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <section id="hero" className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
         {/* Background with Parallax */}
         <motion.div
            style={{ y }}
            className="absolute inset-0 z-0"
         >
            <img
               src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
               alt="Students in a classroom"
               className="w-full h-full object-cover opacity-20 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white"></div>
         </motion.div>

         <div className="relative max-w-[1400px] mx-auto px-6 w-full z-10 pt-20">
            <div className="max-w-4xl">
               <Reveal delay={0.2}>
                  <div className="flex items-center gap-4 mb-6">
                     <div className="h-[2px] w-12 bg-amber-500"></div>
                     <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">
                        Prevention • Compassion • Accountability
                     </span>
                  </div>
               </Reveal>

               <Reveal delay={0.4}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-navy-900 leading-[1.1] tracking-tight mb-8">
                     Help students choose respect, self-control, and <span className="italic text-amber-600">better decisions.</span>
                  </h1>
               </Reveal>

               <Reveal delay={0.6}>
                  <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-light leading-relaxed mb-10">
                     Age-appropriate talks for elementary students, high school students, and parents.
                     Practical, prevention-focused, and built on compassion and accountability.
                     <br />
                     <span className="font-semibold text-navy-900 mt-2 block">Not a "scared straight" approach.</span>
                  </p>
               </Reveal>

               <Reveal delay={0.8}>
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                     <button
                        onClick={scrollToBooking}
                        className="px-10 py-4 bg-navy-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors duration-300 shadow-xl shadow-navy-900/10"
                     >
                        Request a Booking
                     </button>
                     <button
                        onClick={scrollToBooking}
                        className="px-10 py-4 border border-navy-900 text-navy-900 text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors duration-300"
                     >
                        Book a Call
                     </button>
                  </div>
                  <p className="mt-6 text-xs text-slate-400 font-medium uppercase tracking-wide">
                     Real choices. Real consequences. Delivered responsibly.
                  </p>
               </Reveal>
            </div>
         </div>
      </section>
   );
};

export default Hero;
