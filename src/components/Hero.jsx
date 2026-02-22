import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = () => {
   const { scrollY } = useScroll();
   const y = useTransform(scrollY, [0, 500], [0, 200]);
   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

   return (
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center bg-neutral-50 overflow-hidden">

         {/* Clean Minimal Background */}
         <motion.div
            style={{ y }}
            className="absolute inset-0 z-0 bg-white"
         >
         </motion.div>

         <div className="relative z-30 max-w-[1200px] mx-auto px-4 md:px-6 w-full text-center pt-24 md:pt-32">
            <Reveal>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center mb-8"
               >

                  <div className="flex flex-col items-center text-center mb-8">
                     <span className="font-montserrat font-medium tracking-[0.05em] sm:tracking-[0.1em] text-[#D97904] text-sm md:text-base mb-6 block uppercase">
                        Youth Prevention Keynote Speaker
                     </span>
                     <h1 className="font-playfair font-black text-[#0F1B2D] leading-[1.1] sm:leading-[1] flex flex-col items-center">
                        <span className="text-5xl md:text-7xl lg:text-[80px] xl:text-[90px] block">
                           From Prison
                        </span>
                        <span className="text-[55px] md:text-[80px] lg:text-[90px] xl:text-[105px] block mt-1 sm:mt-0">
                           to <span className="text-[#D97904]">Purpose</span>
                        </span>
                     </h1>
                  </div>

                  <p className="font-inter font-normal text-[#6E7781] text-lg md:text-xl max-w-2xl leading-[1.6] mb-12">
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
