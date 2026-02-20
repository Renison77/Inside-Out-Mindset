import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';

const Context = () => {
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
   });

   const lineProgress = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

   return (
      <section id="context" ref={containerRef} className="py-24 md:py-32 bg-slate-50 relative overflow-hidden text-navy-900 border-t border-slate-200">

         <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">

               <Reveal>
                  <h2 className="text-xs font-bold text-amber-600 uppercase tracking-[0.3em] mb-6">The Context</h2>
                  <h3 className="text-3xl md:text-6xl font-sans font-medium text-navy-900 mb-8 leading-[1.1] tracking-tight">
                     The gap between a bad day and a bad life is <span className="text-sage-500 italic font-serif">smaller than you think.</span>
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                     Without intervention, small social issues don't just go away. They compound. We help schools identify the pivot point before it's too late.
                  </p>
                  <p className="mt-8 text-navy-900 font-medium text-lg border-l-4 border-amber-500 pl-4 py-1 italic font-serif">
                     We focus on early warning signs, belonging, and decision points that change outcomes.
                  </p>
               </Reveal>

               {/* Interactive Sliding Scale */}
               <div className="relative pt-12 pb-12">
                  <Reveal delay={0.2}>
                     <div className="flex justify-between text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
                        <span>Small Issues</span>
                        <span className="text-amber-600 font-extrabold translate-y-[-2px] inline-block text-center px-2">The Pivot Point</span>
                        <span className="text-red-500">Critical Issues</span>
                     </div>

                     <div className="relative h-[2px] bg-slate-200 w-full rounded-full">
                        <motion.div
                           style={{ scaleX: lineProgress, transformOrigin: "left" }}
                           className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-slate-400 via-amber-500 to-red-500"
                        />

                        {/* Nodes */}
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-slate-300 rounded-full" />

                        <motion.div
                           style={{ left: "50%", scale: useTransform(lineProgress, [0.4, 0.6], [0.8, 1.2]) }}
                           className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.4)] z-10"
                        >
                           <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-amber-600 px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest border border-slate-200 shadow-sm">
                              Intervention Needed
                           </div>
                        </motion.div>

                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-400 rounded-full" />
                     </div>

                     <div className="mt-16 grid grid-cols-2 gap-4 md:gap-8">
                        <div className="border-l border-slate-300 pl-6">
                           <h4 className="text-navy-900 font-serif italic text-xl mb-2">Starts Here</h4>
                           <ul className="text-slate-500 text-sm space-y-2 font-medium">
                              <li>• Social Isolation</li>
                              <li>• "Status" Teasing</li>
                              <li>• Impulsive Choices</li>
                           </ul>
                        </div>
                        <div className="border-r border-red-200 pr-6 text-right">
                           <h4 className="text-red-500 font-serif italic text-xl mb-2">Ends Here</h4>
                           <ul className="text-red-400 text-sm space-y-2 font-medium">
                              <li>High-Risk Peer Groups •</li>
                              <li>School Disengagement •</li>
                              <li>Violence / Exploitation •</li>
                           </ul>
                        </div>
                     </div>
                  </Reveal>
               </div>

            </div>
         </div>
      </section>
   );
};

export default Context;
