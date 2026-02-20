import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Users, Shield, ArrowRight, X, Check, Star } from 'lucide-react';

const Card = ({ item, index }) => {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      <motion.div
         layout
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: index * 0.1 }}
         onClick={() => setIsExpanded(!isExpanded)}
         className={`relative w-full cursor-pointer transition-all duration-500 ease-in-out bg-white border border-slate-200 shadow-sm hover:shadow-xl rounded-sm overflow-hidden flex flex-col ${isExpanded ? 'ring-2 ring-amber-500 ring-offset-4 ring-offset-slate-50' : 'min-h-[420px] md:min-h-[480px]'}`}
      >

         {/* Header Content - Always Visible */}
         <div className="p-6 md:p-10 relative z-10 bg-white">
            <div className="flex justify-between items-start mb-6">
               <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-navy-900 shadow-sm p-3">
                  {item.icon}
               </div>
               {item.badge && (
                  <span className="bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                     {item.badge}
                  </span>
               )}
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">{item.cat}</p>
            <h3 className="text-2xl md:text-3xl font-sans font-medium text-navy-900 leading-tight mb-4">{item.title}</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-6 border-l-2 border-amber-500 pl-4">
               {item.oneLiner}
            </p>

            {/* Preview Bullets (Fade out when expanded) */}
            <AnimatePresence>
               {!isExpanded && (
                  <motion.ul
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                     className="space-y-3 mb-8"
                  >
                     {item.previewBullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
                           <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                           {bullet}
                        </li>
                     ))}
                  </motion.ul>
               )}
            </AnimatePresence>
         </div>

         {/* Expanded Content */}
         <AnimatePresence>
            {isExpanded && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-navy-900 text-white flex-1 px-6 pt-6 pb-6 md:px-10 md:pt-10 md:pb-8 flex flex-col justify-center relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 p-32 bg-navy-800 rounded-bl-full -mr-16 -mt-16 z-0 opacity-50"></div>
                  <div className="relative z-10">
                     <h4 className="text-lg font-serif italic text-amber-500 mb-4">{item.expandedTitle}</h4>
                     <ul className="space-y-3 mb-6">
                        {item.expandedBullets.map((bullet, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                              <Check size={14} className="mt-1 text-amber-500 shrink-0" />
                              {bullet}
                           </li>
                        ))}
                     </ul>
                     <p className="text-sm text-slate-400 border-t border-navy-700 pt-4 font-light italic">
                        {item.outcomeLine}
                     </p>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         {/* Bottom Interaction Strip - always at bottom via flex + mt-auto when collapsed */}
         <div className={`mt-auto w-full py-4 px-6 md:px-10 border-t transition-colors duration-300 flex justify-between items-center ${isExpanded ? 'bg-navy-950 border-navy-900 text-white' : 'bg-slate-50 border-slate-100 text-slate-500'}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest">
               {isExpanded ? 'Close Outcomes' : 'View Outcomes'}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 ${isExpanded ? 'bg-navy-800 rotate-180' : 'bg-white border border-slate-200'}`}>
               {isExpanded ? <X size={14} /> : <ArrowRight size={14} />}
            </div>
         </div>

      </motion.div>
   );
};

const Talks = () => {
   const talks = [
      {
         cat: "High School",
         title: "Identity & Pressure",
         oneLiner: "Peer pressure, status, and decision-making tools for real-life moments.",
         previewBullets: ["Tools for emotional regulation under stress", "How small choices become big consequences", "Accountability without shame"],
         expandedTitle: "Real-World Tools",
         expandedBullets: ["Pressure, image, and status dynamics", "Decision-making under stress", "The real cost of one bad choice"],
         outcomeLine: "Students leave with language and tools to pause, think, and choose better.",
         icon: <Users size={28} />
      },
      {
         cat: "Parents",
         title: "Raising Confident Kids",
         oneLiner: "Connection, boundaries, and communication that protects kids as pressure increases.",
         previewBullets: ["Connection as protection", "Recognizing early warning signs", "Moving from fear to conversation"],
         expandedTitle: "Prevention Strategy",
         expandedBullets: ["How to build trust so kids tell the truth", "Early intervention before problems escalate", "Boundaries with warmth and consistency"],
         outcomeLine: "Parents leave with practical tools they can use immediately.",
         badge: "Punjabi Sessions Available",
         icon: <Shield size={28} />
      }
   ];

   return (
      <section id="talks" className="py-24 md:py-32 bg-slate-50 relative scroll-mt-20">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6">

            <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-16 border-b border-slate-200 pb-8 md:pb-10">
               <div className="max-w-2xl">
                  <Reveal>
                     <div className="mb-4 md:mb-6 flex items-center gap-3">
                        <div className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded-sm flex items-center gap-2">
                           <Star size={10} fill="currentColor" />
                           Not "Scared Straight"
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Prevention First</span>
                     </div>
                     <h2 className="text-3xl md:text-6xl font-sans font-medium text-navy-900 tracking-tight leading-[1.1]">
                        Choose Your <br />
                        <span className="font-serif italic text-amber-600 font-light">Audience</span>
                     </h2>
                  </Reveal>
               </div>
               <Reveal delay={0.2}>
                  <p className="text-left md:text-right text-slate-500 text-sm max-w-xs leading-relaxed md:ml-auto">
                     Two signature talks for students and parents. Tailored by audience. Built for impact.
                     <br /><span className="text-xs font-bold uppercase tracking-widest text-navy-900 mt-3 block opacity-50">Tap cards to view outcomes</span>
                  </p>
               </Reveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
               {talks.map((talk, i) => (
                  <Card key={i} item={talk} index={i} />
               ))}
            </div>

         </div>
      </section>
   );
};

export default Talks;
