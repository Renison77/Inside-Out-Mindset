import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = () => {
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 500], [0, 200]);

   return (
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center bg-navy-950 overflow-hidden">

         {/* Cinemagraph Background (Video Loop) */}
         <motion.div
            style={{ y }}
            className="absolute inset-0 z-0"
         >
            <div className="absolute inset-0 bg-navy-950/60 z-10"></div>
            <video
               autoPlay
               loop
               muted
               playsInline
               className="w-full h-full object-cover opacity-50 scale-105"
            >
               {/* Placeholder for School Hallway Blur */}
               <source src="https://videos.pexels.com/video-files/5223126/5223126-sd_640_360_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent z-20"></div>
         </motion.div>

         <div className="relative z-30 max-w-[1400px] mx-auto px-6 w-full text-center md:text-left pt-20 pb-32">
            <Reveal>
               <div className="flex flex-col md:flex-row gap-6 md:items-center mb-8">
                  <div className="h-[2px] w-12 bg-amber-500 hidden md:block"></div>
                  <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">
                     <span className="text-white">Respect</span> • <span className="text-white">Self-Control</span> • <span className="text-amber-500">Better Decisions</span>
                  </span>
               </div>

               <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans font-medium text-white leading-[0.9] tracking-tight mb-8">
                  Stop the spiral<br />
                  <span className="font-serif italic text-sage-500 font-light opacity-90">before it starts.</span>
               </h1>

               <p className="text-lg md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed my-10 font-sans">
                  Equip students with the tools to choose <span className="text-white">respect and self-control.</span> Practical prevention, not fear.
               </p>

               <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start relative z-50">
                  <button
                     onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                     className="px-8 py-4 bg-amber-600 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-navy-950 transition-all duration-300 shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
                  >
                     Request Booking
                  </button>
                  <button
                     className="group flex items-center gap-4 text-white uppercase tracking-widest text-xs font-bold hover:text-amber-500 transition-colors"
                     onClick={() => document.getElementById('offer').scrollIntoView({ behavior: 'smooth' })}
                  >
                     <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
                        <Play size={14} fill="currentColor" />
                     </div>
                     See How It Works
                  </button>
               </div>
            </Reveal>
         </div>

         {/* Trust Ticker - Pinned to Bottom */}
         <div className="absolute bottom-0 w-full z-30 border-t border-white/10 bg-navy-950/50 backdrop-blur-sm">
            <div className="max-w-[1400px] mx-auto">
               <div className="flex flex-col md:flex-row items-center">
                  <div className="py-4 md:py-6 px-6 md:border-r border-white/10 text-xs font-bold uppercase tracking-widest text-slate-500 shrink-0">
                     Trusted By
                  </div>
                  <div className="flex-1 overflow-hidden relative group">
                     {/* Marquee Animation */}
                     <div className="flex gap-12 py-4 px-6 md:animate-marquee whitespace-nowrap">
                        {["School District 36", "RCMP", "KidsPlay", "City of Surrey", "United Way", "YMCA", "Boys & Girls Club"].map((partner, i) => (
                           <span key={i} className="text-slate-400 font-serif italic text-lg opacity-60 hover:opacity-100 transition-opacity cursor-default">{partner}</span>
                        ))}
                        {/* Duplicate for infinite loop */}
                        {["School District 36", "RCMP", "KidsPlay", "City of Surrey", "United Way", "YMCA", "Boys & Girls Club"].map((partner, i) => (
                           <span key={`dup-${i}`} className="text-slate-400 font-serif italic text-lg opacity-60 hover:opacity-100 transition-opacity cursor-default hidden md:inline">{partner}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </section>
   );
};

export default Hero;
