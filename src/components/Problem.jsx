import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';

const Problem = () => {
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
   });

   const lineProgress = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

   return (
      <section id="problem" ref={containerRef} className="py-32 bg-navy-900 text-white relative overflow-hidden">

         {/* Background Graph Pattern */}
         <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
         </div>

         <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">

               <Reveal>
                  <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-6">The Context</h2>
                  <h3 className="text-5xl md:text-7xl font-sans font-medium text-white mb-8 leading-tight">
                     The gap between a bad day and a bad life is <span className="text-sage-500 italic font-serif">smaller than you think.</span>
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-lg font-light">
                     Without intervention, small social issues don't just go away. They compound. We help schools identify the pivot point before it's too late.
                  </p>
               </Reveal>

               {/* Interactive Sliding Scale */}
               <div className="relative pt-12 pb-12">

                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">
                     <span>Small Issues</span>
                     <span className="text-amber-500">The Pivot Point</span>
                     <span className="text-red-500">Big Issues</span>
                  </div>

                  <div className="relative h-[2px] bg-slate-800 w-full rounded-full">
                     <motion.div
                        style={{ scaleX: lineProgress, transformOrigin: "left" }}
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-400 via-amber-500 to-red-500"
                     />

                     {/* Nodes */}
                     <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-600 rounded-full border-2 border-navy-900" />

                     <motion.div
                        style={{ left: "50%", scale: useTransform(lineProgress, [0.4, 0.6], [0.8, 1.5]) }}
                        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)] z-10"
                     >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-500/10 text-amber-500 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-amber-500/20">
                           Intervention Needed
                        </div>
                     </motion.div>

                     <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-navy-900" />
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-8">
                     <div className="border-l border-slate-700 pl-6">
                        <h4 className="text-slate-300 font-serif italic text-xl mb-2">Starts Here</h4>
                        <ul className="text-slate-500 text-sm space-y-2">
                           <li>• Social Isolation</li>
                           <li>• "Status" Teasing</li>
                           <li>• Impulsive Choices</li>
                        </ul>
                     </div>
                     <div className="border-l border-red-900/50 pl-6 text-right lg:text-left">
                        <h4 className="text-red-400 font-serif italic text-xl mb-2">Ends Here</h4>
                        <ul className="text-red-900/60 text-sm space-y-2">
                           <li>• Violence / Gangs</li>
                           <li>• School Dropouts</li>
                           <li>• Criminal Record</li>
                        </ul>
                     </div>
                  </div>

               </div>

            </div>
         </div>
      </section>
   );
};

export default Problem;
