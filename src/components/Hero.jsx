import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = () => {
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 500], [0, 200]);
   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

   return (
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center bg-primary-950 overflow-hidden">

         {/* Cinematic Background - Enhanced Gradients & Noise */}
         <motion.div
            style={{ y }}
            className="absolute inset-0 z-0 bg-primary-950"
         >
            {/* Base color overlay */}
            <div className="absolute inset-0 bg-primary-950/60 z-10 mix-blend-multiply"></div>

            {/* Dynamic Radial Gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-primary-950/80 to-primary-950 z-20"></div>

            <video
               autoPlay
               loop
               muted
               playsInline
               poster="https://images.pexels.com/videos/5223126/pictures/preview-0.jpg"
               className="w-full h-full object-cover opacity-40 scale-105"
            >
               <source src="https://videos.pexels.com/video-files/5223126/5223126-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
         </motion.div>

         <div className="relative z-30 max-w-[1200px] mx-auto px-4 md:px-6 w-full text-center pt-24 md:pt-32">
            <Reveal>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center mb-8"
               >

                  <h1 className="text-5xl md:text-7xl lg:text-[110px] xl:text-[130px] font-sans font-medium text-white leading-[0.95] tracking-tighter mb-8 drop-shadow-2xl antialiased relative">
                     <span className="relative z-10 block bg-gradient-to-b from-white via-white to-neutral-400 bg-clip-text text-transparent pb-4">Stop the spiral</span>
                     {/* Subtle glow behind text */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary-500/10 blur-[100px] z-0 pointer-events-none rounded-full"></div>
                  </h1>

                  <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl font-light leading-relaxed mb-10 font-sans tracking-wide">
                     Prevention-focused talks for <span className="text-white font-medium">high school students</span> and <span className="text-white font-medium">parents</span>. Inside-out mindset, emotional self-control, and better decisions under pressure.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full relative z-20">
                     <div className="relative group w-full sm:w-auto">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-sm blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <button
                           onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                           className="relative w-full sm:w-auto px-10 py-4 bg-primary-950 text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-primary-950 transition-all duration-300 rounded-sm border border-secondary-500/50 hover:border-transparent flex items-center justify-center gap-3"
                        >
                           Bring this to your organization
                           <ArrowRight size={16} className="text-secondary-500 group-hover:text-primary-950 transition-colors" />
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
