import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { Users, Shield, BookOpen, ArrowRight, Star } from 'lucide-react';

const ProgramCard = ({ item, index }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-50px" }}
         transition={{ duration: 0.6, delay: index * 0.1 }}
         className="bg-white border border-neutral-200 rounded-sm p-8 flex flex-col h-full hover:shadow-2xl hover:border-secondary-300 transition-all duration-500 group relative overflow-hidden"
      >
         {/* Subtle hover background shift */}
         <div className="absolute inset-0 bg-gradient-to-br from-secondary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

         <div className="relative z-10 flex-col flex h-full">
            <div className="w-14 h-14 bg-neutral-50 border border-neutral-100 rounded-full flex items-center justify-center text-secondary-500 shadow-sm mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
               {item.icon}
            </div>

            <h3 className="text-2xl font-sans font-medium text-primary-900 mb-2 leading-tight">
               {item.title}
            </h3>
            <p className="text-neutral-500 font-light mb-6 flex-grow">
               <span className="font-medium text-primary-900 block mb-2">Focus:</span>
               {item.focus}
            </p>

            {item.badge && (
               <div className="mb-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-50 border border-secondary-200 rounded-sm text-secondary-600 font-bold text-[10px] uppercase tracking-widest">
                     <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full animate-pulse"></span>
                     {item.badge}
                  </span>
               </div>
            )}

            <button
               onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
               className="mt-auto w-full py-4 text-xs font-bold uppercase tracking-[0.15em] text-primary-900 border border-neutral-200 hover:border-secondary-500 hover:bg-secondary-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
            >
               See Curriculum & Pricing
               <ArrowRight size={14} />
            </button>
         </div>
      </motion.div>
   );
};

const Talks = () => {
   const programs = [
      {
         title: "High School Keynote",
         focus: "Identity, peer pressure, choices, and irreversible consequences.",
         icon: <Users size={24} />,
      },
      {
         title: "Parent Session",
         focus: "Connection, warning signs, and bridging the communication gap.",
         icon: <Shield size={24} />,
         badge: "Punjabi-Language Available"
      },
      {
         title: "Deep-Dive Workshops",
         focus: "Smaller groups, interactive Q&A, and practical emotional regulation.",
         icon: <BookOpen size={24} />,
      }
   ];

   return (
      <section id="programs" className="py-24 md:py-32 bg-neutral-50 relative scroll-mt-20">
         <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">

            <div className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-3xl mx-auto relative">
               <Reveal>
                  <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                     <div className="px-4 py-1.5 bg-secondary-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-2 shadow-lg shadow-secondary-500/20">
                        <Star size={10} fill="currentColor" />
                        Core Programs
                     </div>
                  </div>
                  <h2 className="text-5xl md:text-7xl lg:text-[80px] font-sans font-medium text-primary-900 tracking-tighter leading-[0.9] mb-8">
                     Speaking<br />
                     <span className="font-serif italic text-secondary-600 font-light pr-4">Offerings</span>
                  </h2>
               </Reveal>
               <Reveal delay={0.2}>
                  <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-light">
                     Tailored formats designed to reach students before the spiral begins, and equip parents to recognize the warning signs.
                  </p>
               </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
               {programs.map((prog, i) => (
                  <ProgramCard key={i} item={prog} index={i} />
               ))}
            </div>

         </div>
      </section>
   );
};

export default Talks;
