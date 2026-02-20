import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = () => {
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 500], [0, 200]);
   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

   return (
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center bg-navy-950 overflow-hidden">

         {/* Cinematic Background */}
         <motion.div
            style={{ y }}
            className="absolute inset-0 z-0"
         >
            <div className="absolute inset-0 bg-navy-900/40 z-10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/30 z-20"></div>
            <video
               autoPlay
               loop
               muted
               playsInline
               poster="https://images.pexels.com/videos/5223126/pictures/preview-0.jpg"
               className="w-full h-full object-cover opacity-30 scale-105"
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

                  <h1 className="text-4xl md:text-7xl lg:text-9xl font-sans font-medium text-white leading-[1.1] md:leading-[1] tracking-tight mb-8 drop-shadow-2xl">
                     Stop the spiral<br />
                     <span className="font-serif italic text-slate-400 font-light opacity-90 block mt-2 md:mt-0">before it starts.</span>
                  </h1>

                  <p className="text-lg md:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed mb-6 font-sans">
                     Prevention-focused talks for <span className="text-white">high school students</span> and <span className="text-white">parents</span>. Inside-out mindset, emotional self-control, and better decisions under pressure.
                  </p>

                  <p className="text-xs md:text-sm text-slate-500 max-w-2xl leading-relaxed mb-10 border-t border-white/10 pt-6 mt-2">
                     Prevention only. Not enforcement, not surveillance, not "catching" anyone.
                     Not "scared straight." Practical tools, not fear. No glorifying crime or violence.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
                     <button
                        onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto px-10 py-4 bg-amber-600 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-navy-950 transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] rounded-sm"
                     >
                        Request Booking
                     </button>
                     <button
                        className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-colors rounded-sm flex items-center justify-center gap-2"
                        onClick={() => document.getElementById('talks').scrollIntoView({ behavior: 'smooth' })}
                     >
                        View Talk Options
                     </button>
                  </div>

                  <div className="mt-8">
                     <button
                        onClick={() => document.getElementById('advisory').scrollIntoView({ behavior: 'smooth' })}
                        className="text-slate-400 text-xs uppercase tracking-widest hover:text-amber-500 transition-colors border-b border-transparent hover:border-amber-500 pb-1"
                     >
                        Advisory / Thought Partnership
                     </button>
                  </div>
               </motion.div>
            </Reveal>
         </div>



      </section>
   );
};

export default Hero;
