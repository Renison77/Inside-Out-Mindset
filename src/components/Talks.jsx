import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Users, Shield, ArrowRight, X, Check, Star } from 'lucide-react';

const Card = ({ item, index }) => {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: index * 0.1, duration: 0.5 }}
         onClick={() => setIsExpanded(!isExpanded)}
         className={`relative w-full cursor-pointer transition-all duration-500 ease-in-out bg-white border border-neutral-200 shadow-sm hover:shadow-xl rounded-sm overflow-hidden flex flex-col ${isExpanded ? 'ring-2 ring-secondary-500 ring-offset-4 ring-offset-neutral-50' : 'min-h-[420px] md:min-h-[480px]'}`}
      >

         {/* Header Content - Always Visible */}
         <div className="p-6 md:p-10 relative z-10 bg-white">
            <div className="flex justify-between items-start mb-6">
               <div className="w-14 h-14 bg-neutral-50 border border-neutral-100 rounded-full flex items-center justify-center text-primary-900 shadow-sm p-3">
                  {item.icon}
               </div>
               {item.badge && (
                  <span className="bg-secondary-100 text-secondary-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                     {item.badge}
                  </span>
               )}
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">{item.cat}</p>
            <h3 className="text-2xl md:text-3xl font-sans font-medium text-primary-900 leading-tight mb-4">{item.title}</h3>
            <p className="text-sm font-medium text-neutral-500 leading-relaxed mb-6 border-l-2 border-secondary-500 pl-4">
               {item.oneLiner}
            </p>

            {/* Preview Bullets - Always Visible */}
            <ul className="space-y-3 mb-6">
               {item.previewBullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-500">
                     <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                     {bullet}
                  </li>
               ))}
            </ul>
         </div>

         {/* Expanded Content */}
         <AnimatePresence>
            {isExpanded && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-primary-900 text-white flex-1 px-6 pt-6 pb-6 md:px-10 md:pt-10 md:pb-8 flex flex-col justify-center relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 p-32 bg-primary-800 rounded-bl-full -mr-16 -mt-16 z-0 opacity-50"></div>
                  <div className="relative z-10">
                     <h4 className="text-lg font-serif italic text-secondary-500 mb-4">{item.expandedTitle}</h4>
                     <ul className="space-y-3 mb-6">
                        {item.expandedBullets.map((bullet, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                              <Check size={14} className="mt-1 text-secondary-500 shrink-0" />
                              {bullet}
                           </li>
                        ))}
                     </ul>
                     <p className="text-sm text-neutral-400 border-t border-primary-700 pt-4 font-light italic">
                        {item.outcomeLine}
                     </p>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         {/* Bottom Interaction Strip - always at bottom via flex + mt-auto when collapsed */}
         <div className={`mt-auto w-full py-4 px-6 md:px-10 border-t transition-colors duration-300 flex justify-between items-center ${isExpanded ? 'bg-primary-950 border-primary-900 text-white' : 'bg-neutral-50 border-neutral-100 text-neutral-500'}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest">
               {isExpanded ? 'Close Outcomes' : 'View Outcomes'}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 ${isExpanded ? 'bg-primary-800 rotate-180' : 'bg-white border border-neutral-200'}`}>
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
         title: "High School Keynote: Identity Under Pressure",
         oneLiner: "Peer pressure, status, and decision-making tools for real-life moments.",
         previewBullets: [
            "Emotional regulation tools for real-life pressure",
            "How small decisions become major consequences",
            "Accountability without shame",
            "Recognizing early warning signs"
         ],
         expandedTitle: "Real-World Tools",
         expandedBullets: ["Pressure, image, and status dynamics", "Decision-making under stress", "The real cost of one bad choice"],
         outcomeLine: "Students leave with language and tools to pause, think, and choose better.",
         icon: <Users size={28} />
      },
      {
         cat: "Parents",
         title: "Parent Session: Connection as Protection",
         oneLiner: "Connection, boundaries, and communication that protects kids as pressure increases.",
         previewBullets: [
            "Building connection before crisis",
            "Recognizing early warning signs",
            "Moving from fear to productive conversation",
            "Boundaries that protect without pushing away"
         ],
         expandedTitle: "Prevention Strategy",
         expandedBullets: ["How to build trust so kids tell the truth", "Early intervention before problems escalate", "Boundaries with warmth and consistency"],
         outcomeLine: "Parents leave with practical tools they can use immediately.",
         badge: "Punjabi Sessions Available",
         icon: <Shield size={28} />
      }
   ];

   return (
      <section id="talks" className="py-24 md:py-32 bg-white relative scroll-mt-20 border-t border-neutral-200">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6">

            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-16 pb-8">
               <div className="w-full md:w-1/2">
                  <Reveal>
                     <div className="mb-6 flex flex-wrap items-center gap-3">
                        <div className="px-3 py-1 bg-secondary-100/80 text-secondary-700 text-[10px] font-bold uppercase tracking-widest rounded-sm flex items-center gap-2">
                           <Star size={10} fill="currentColor" />
                           Not "Scared Straight"
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Prevention First</span>
                     </div>
                     <h2 className="text-4xl md:text-6xl lg:text-[72px] font-sans font-medium text-primary-900 tracking-tight leading-[0.9] mb-4">
                        Speaking<br />
                        <span className="font-serif italic text-secondary-600 font-light">Engagements</span>
                     </h2>
                  </Reveal>
               </div>
               <div className="w-full md:w-1/2 md:flex md:flex-col md:items-end md:text-right mt-4 md:mt-0">
                  <Reveal delay={0.2}>
                     <div className="flex flex-col gap-6 max-w-lg ml-auto">
                        <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                           Keynote talks and workshops for high schools,
                           parent communities, and organizations focused on
                           prevention, emotional regulation, and decision-
                           making under pressure.
                        </p>
                        <p className="font-medium text-primary-900 text-sm md:text-base leading-relaxed">
                           Not a motivational speech. A lived-experience
                           conversation that teaches students how small
                           decisions build toward real consequences — and
                           how to interrupt the pattern early.
                        </p>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-2 block w-full text-right">
                           Tap cards to view outcomes
                        </span>
                     </div>
                  </Reveal>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
               {talks.map((talk, i) => (
                  <Card key={i} item={talk} index={i} />
               ))}
            </div>

            {/* Additional Info Sections */}
            <div className="mt-20 md:mt-32 grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
               {/* Format Options */}
               <Reveal fullHeight={true}>
                  <div className="bg-neutral-50 p-8 md:p-10 border border-neutral-100 rounded-sm hover:-tranneutral-y-1 transition-transform duration-500 h-full">
                     <h3 className="text-xl md:text-2xl font-sans font-medium text-primary-900 mb-6 flex items-center gap-3">
                        <span className="w-6 h-px bg-secondary-500 block"></span>
                        Format Options
                     </h3>
                     <ul className="space-y-4">
                        {[
                           "45–60 minute keynote",
                           "Half-day workshop",
                           "Parent evening session",
                           "Combined student + parent programming",
                           "Punjabi-language sessions available"
                        ].map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-neutral-600">
                              <Check size={18} className="mt-0.5 text-secondary-500 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </Reveal>

               {/* What Organizations Can Expect */}
               <Reveal delay={0.1} fullHeight={true}>
                  <div className="bg-neutral-50 p-8 md:p-10 border border-neutral-100 rounded-sm hover:-tranneutral-y-1 transition-transform duration-500 h-full">
                     <h3 className="text-xl md:text-2xl font-sans font-medium text-primary-900 mb-6 flex items-center gap-3">
                        <span className="w-6 h-px bg-secondary-500 block"></span>
                        What Schools and Organizations Can Expect
                     </h3>
                     <ul className="space-y-4">
                        {[
                           "Professional, structured delivery",
                           "Age-appropriate content",
                           "No glorification of crime or violence",
                           "Trauma-informed approach",
                           "Clear follow-up resources if needed"
                        ].map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-neutral-600">
                              <Check size={18} className="mt-0.5 text-secondary-500 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </Reveal>
            </div>

            {/* CTA Section */}
            <Reveal delay={0.2}>
               <div className="mt-20 md:mt-32 text-center border-t border-neutral-200 pt-16 md:pt-24 space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-primary-900">
                     Bring This to Your <span className="font-serif italic text-secondary-600 font-light">Organization</span>
                  </h2>
                  <p className="text-neutral-500 md:text-lg max-w-md mx-auto">
                     Let’s discuss your audience, goals, and format.
                  </p>
                  <div className="pt-6">
                     <a href="#contact" className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-primary-900 text-white px-8 lg:px-10 py-4 lg:py-5 text-xs lg:text-sm font-bold uppercase tracking-widest hover:bg-secondary-600 transition-colors duration-300 w-full sm:w-auto text-center cursor-pointer shadow-lg hover:shadow-xl shadow-primary-900/10 hover:-tranneutral-y-0.5">
                        <span className="flex items-center gap-3">Request a Speaking Engagement <ArrowRight size={16} /></span>
                     </a>
                  </div>
               </div>
            </Reveal>

         </div>
      </section>
   );
};

export default Talks;
