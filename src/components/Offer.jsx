import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { Heart, Users, Shield, ArrowRight } from 'lucide-react';

const Card = ({ item, index }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: index * 0.1 }}
         className="group relative h-[450px] w-full perspective-1000 cursor-pointer"
      >
         <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

            {/* Front Face */}
            <div
               className="absolute w-full h-full backface-hidden bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm group-hover:shadow-xl transition-shadow rounded-sm overflow-hidden"
               style={{ transform: "translateZ(1px)" }}
            >
               <div className="absolute top-0 right-0 p-32 bg-amber-50/50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-full flex items-center justify-center mb-8 text-amber-600 shadow-sm">
                     {item.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{item.cat}</p>
                  <h3 className="text-3xl font-serif text-navy-900 leading-tight">{item.title}</h3>
               </div>

               <div className="flex justify-between items-center border-t border-slate-100 pt-6 relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-navy-900">View Outcomes</span>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition-colors">
                     <ArrowRight size={16} />
                  </div>
               </div>
            </div>

            {/* Back Face */}
            <div
               className="absolute w-full h-full backface-hidden rotate-y-180 bg-navy-900 text-white p-8 flex flex-col justify-center shadow-xl rounded-sm"
               style={{ transform: "rotateY(180deg) translateZ(1px)" }}
            >
               <h4 className="text-2xl font-serif italic text-amber-500 mb-6">{item.outcomesTitle}</h4>
               <ul className="space-y-4 mb-8">
                  {item.outcomes.map((outcome, i) => (
                     <li key={i} className="flex items-start gap-3 text-base text-slate-100">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="leading-relaxed">{outcome}</span>
                     </li>
                  ))}
               </ul>
               <p className="text-sm leading-relaxed text-slate-300 border-t border-navy-800 pt-6 italic font-light">
                  "{item.desc}"
               </p>
            </div>

         </div>
      </motion.div>
   );
};

const Offer = () => {
   const talks = [
      {
         cat: "Elementary",
         title: "Confidence & Kindness",
         outcomesTitle: "Building Empathy",
         outcomes: ["Recognizing bullying vs. conflict", "Simple scripts for setting boundaries", "The power of the bystander"],
         desc: "A gentle but practical session on understanding feelings and building a safe classroom culture.",
         icon: <Heart size={24} />
      },
      {
         cat: "High School",
         title: "Identity & Pressure",
         outcomesTitle: "Real-World Tools",
         outcomes: ["Navigating social media pressure", "Decision making under stress", "Understanding consequences"],
         desc: "Direct talk on insecurity, image, and the pivot point between a mistake and a life-altering choice.",
         icon: <Users size={24} />
      },
      {
         cat: "Parents",
         title: "Raising Confident Kids",
         outcomesTitle: "Prevention Strategy",
         outcomes: ["Connection as protection", "Recognizing early warning signs", "Moving from fear to conversation"],
         desc: "How to build a relationship strong enough that they come to you when things go wrong.",
         icon: <Shield size={24} />
      }
   ];

   return (
      <section id="offer" className="py-32 bg-slate-50 relative">
         <div className="max-w-[1400px] mx-auto px-6">

            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
               <div className="max-w-2xl">
                  <Reveal>
                     <h2 className="text-5xl md:text-7xl font-sans font-medium text-navy-900 tracking-tight leading-[0.9]">
                        Three Core <br />
                        <span className="font-serif italic text-amber-600 font-light">Conversations</span>
                     </h2>
                  </Reveal>
               </div>
               <Reveal delay={0.2}>
                  <p className="text-right text-slate-500 text-sm max-w-xs leading-relaxed">
                     Tailored by audience. Built for impact.
                     <br /><span className="text-xs font-bold uppercase tracking-widest text-navy-900 mt-2 block opacity-50">Hover cards to explore</span>
                  </p>
               </Reveal>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
               {talks.map((talk, i) => (
                  <Card key={i} item={talk} index={i} />
               ))}
            </div>

         </div>
      </section>
   );
};

export default Offer;
