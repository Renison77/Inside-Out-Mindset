import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Users, Shield, ArrowRight, X, Check, Star } from 'lucide-react';

const EditorialCard = ({ item, index }) => {
   const isEven = index % 2 === 0;

   return (
      <motion.div
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 lg:gap-16 items-center group`}
      >
         {/* Image Section */}
         <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] overflow-hidden rounded-sm bg-primary-950">
            {/* Subtle overlay gradient */}
            <div className={`absolute inset-0 z-10 bg-gradient-to-t ${isEven ? 'from-primary-950/80' : 'from-primary-950/60'} via-primary-900/20 to-transparent mix-blend-multiply`}></div>
            <img
               src={item.image}
               alt={item.title}
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            {/* Floating Glassmorphism Badge */}
            <div className={`absolute bottom-8 ${isEven ? 'left-8' : 'right-8'} z-20 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-sm max-w-[80%] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700`}>
               <p className="text-white font-serif italic text-lg leading-snug">"{item.outcomeLine}"</p>
            </div>
         </div>

         {/* Content Section */}
         <div className="w-full lg:w-1/2 pt-10 lg:pt-0 pb-16 lg:pb-0 px-4 lg:px-0 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 bg-neutral-50 border border-neutral-100 rounded-full flex items-center justify-center text-secondary-500 shadow-sm">
                  {item.icon}
               </div>
               <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">{item.cat}</p>
                  {item.badge && <span className="inline-block mt-1 text-[9px] uppercase tracking-widest text-secondary-600 font-bold">{item.badge}</span>}
               </div>
            </div>

            <h3 className="text-3xl lg:text-5xl font-sans font-medium text-primary-900 leading-[1.1] tracking-tight mb-6">
               {item.title.split(': ')[0]}: <br />
               <span className="font-serif italic font-light text-secondary-600">{item.title.split(': ')[1]}</span>
            </h3>

            <p className="text-lg text-neutral-500 leading-relaxed mb-8 font-light">
               {item.oneLiner}
            </p>

            <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-secondary-500 before:to-transparent pl-6">
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary-900 mb-4 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full"></span> Core Focus
                  </h4>
                  <ul className="space-y-3">
                     {item.previewBullets.map((bullet, i) => (
                        <li key={i} className="text-neutral-500 text-sm">{bullet}</li>
                     ))}
                  </ul>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary-900 mb-4 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-primary-900 rounded-full"></span> Deep Dive
                  </h4>
                  <ul className="space-y-2">
                     {item.expandedBullets.map((bullet, i) => (
                        <li key={i} className="text-neutral-400 text-sm font-serif italic">{bullet}</li>
                     ))}
                  </ul>
               </div>
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
         outcomeLine: "Students leave with language to pause, think, and choose better.",
         icon: <Users size={24} />,
         image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" // Premium class/audience placeholder
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
         outcomeLine: "Parents leave with practical tools they can use immediately at home.",
         badge: "Punjabi Sessions Available",
         icon: <Shield size={24} />,
         image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" // Premium connection/parent placeholder
      }
   ];

   return (
      <section id="talks" className="py-24 md:py-32 bg-neutral-50 relative scroll-mt-20">
         {/* Subtle background gradient to break up the solid white */}
         <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent"></div>

         <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">

            <div className="mb-20 md:mb-32 flex flex-col items-center text-center max-w-3xl mx-auto pb-8 relative">
               <Reveal>
                  <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                     <div className="px-4 py-1.5 bg-secondary-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-2 shadow-lg shadow-secondary-500/20">
                        <Star size={10} fill="currentColor" />
                        Not "Scared Straight"
                     </div>
                  </div>
                  <h2 className="text-5xl md:text-7xl lg:text-[80px] font-sans font-medium text-primary-900 tracking-tighter leading-[0.9] mb-8">
                     Speaking<br />
                     <span className="font-serif italic text-secondary-600 font-light pr-4">Engagements</span>
                  </h2>
               </Reveal>
               <Reveal delay={0.2}>
                  <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-light">
                     Keynote talks and workshops focused on prevention, emotional regulation, and decision-making under pressure. <span className="font-medium text-primary-900 border-b border-secondary-400">Not a motivational speech.</span> A lived-experience conversation that interrupts patterns early.
                  </p>
               </Reveal>
            </div>

            <div className="flex flex-col gap-24 lg:gap-40">
               {talks.map((talk, i) => (
                  <EditorialCard key={i} item={talk} index={i} />
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
                     <button onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-primary-900 text-white px-8 lg:px-10 py-4 lg:py-5 text-xs lg:text-sm font-bold uppercase tracking-widest hover:bg-secondary-600 transition-colors duration-300 w-full sm:w-auto text-center cursor-pointer shadow-lg hover:shadow-xl shadow-primary-900/10 hover:-tranneutral-y-0.5">
                        <span className="flex items-center gap-3">Request a Speaking Engagement <ArrowRight size={16} /></span>
                     </button>
                  </div>
               </div>
            </Reveal>

         </div>
      </section>
   );
};

export default Talks;
