import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';
import heroVideo from '../assets/5234909-hd_1920_1080_25fps.mp4';

const Hero = () => {
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 500], [0, 200]);
   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

   return (
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center bg-neutral-50 overflow-hidden">

         {/* Cinematic Background - Enhanced Gradients & Noise */}
         <motion.div
            style={{ y }}
            className="absolute inset-0 z-0 bg-neutral-50"
         >
            <video
               autoPlay
               loop
               muted
               playsInline
               className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 scale-105"
            >
               <source src={heroVideo} type="video/mp4" />
            </video>
            {/* Base color overlay */}
            <div className="absolute inset-0 bg-white/10 z-10"></div>

            {/* Dynamic Radial Gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-neutral-50/40 to-neutral-50/80 z-20"></div>
         </motion.div>

         <div className="relative z-30 max-w-[1200px] mx-auto px-4 md:px-6 w-full text-center pt-24 md:pt-32">
            <Reveal>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center mb-8"
               >

                  <h1 className="flex flex-col items-center text-center font-sans font-medium text-primary-900 leading-[0.95] tracking-tighter mb-8 drop-shadow-sm antialiased relative">
                     <span className="text-sm md:text-xl font-bold uppercase tracking-widest text-secondary-600 mb-6 block">Youth Prevention Keynote Speaker</span>
                     <span className="relative text-5xl md:text-7xl lg:text-[90px] xl:text-[110px] z-10 block bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 bg-clip-text text-transparent pb-4">From Prison to Purpose</span>
                  </h1>

                  <p className="text-lg md:text-2xl text-neutral-600 max-w-3xl font-light leading-relaxed mb-10 font-sans tracking-wide">
                     I have lived the consequences of many poor decisions and now I share the tools that helped rebuild my life so that others can build something better.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full relative z-20">
                     <div className="relative group w-full sm:w-auto">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-sm blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <button
                           onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                           className="relative w-full sm:w-auto px-10 py-4 bg-primary-900 text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-secondary-500 hover:text-white transition-all duration-300 rounded-sm border border-transparent flex items-center justify-center gap-3"
                        >
                           Bring this to your organization
                           <ArrowRight size={16} className="text-secondary-400 group-hover:text-white transition-colors" />
                        </button>
                     </div>
                  </div>
               </motion.div>
            </Reveal>
         </div>



      </section>
   );
};

export default Hero;
