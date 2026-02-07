import React from 'react';
import { Reveal } from './Reveal';
import { Trophy, ShieldCheck, Users2, Zap, BrainCircuit, HeartHandshake } from 'lucide-react';

const Outcomes = () => {
   const benefits = [
      {
         icon: <Zap size={24} />,
         title: "Message That Lands",
         text: "A prevention message students actually listen to."
      },
      {
         icon: <ShieldCheck size={24} />,
         title: "Culture Shift",
         text: "Reduced bullying and 'status games' in the hallway."
      },
      {
         icon: <BrainCircuit size={24} />,
         title: "Emotional Intelligence",
         text: "Better emotional self-control and decision-making language."
      },
      {
         icon: <Trophy size={24} />,
         title: "Real Accountability",
         text: "Accountability without shame. Responsibility without fear."
      },
      {
         icon: <HeartHandshake size={24} />,
         title: "Stronger Connection",
         text: "Stronger connection between students, parents, and educators."
      },
      {
         icon: <Users2 size={24} />,
         title: "Early Intervention",
         text: "A clear early-intervention framework before issues escalate."
      }
   ];

   return (
      <section id="outcomes" className="py-24 bg-navy-900 text-white relative overflow-hidden border-t border-navy-800">
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-2/3 h-full bg-navy-800/20 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

         <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <Reveal>
                  <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">The Impact</h2>
                  <h3 className="text-4xl md:text-5xl font-sans font-medium text-white mb-6">What your school or organization gets</h3>
                  <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
               </Reveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
               {benefits.map((item, i) => (
                  <Reveal delay={i * 0.1} key={i}>
                     <div className="bg-navy-800/40 border border-white/5 p-8 rounded-sm hover:bg-navy-800 hover:border-amber-500/20 transition-all duration-300 group h-full hover:-translate-y-1">
                        <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-navy-900 transition-colors shadow-lg">
                           {item.icon}
                        </div>
                        <h4 className="text-xl font-serif italic text-white mb-3">{item.title}</h4>
                        <p className="text-base font-light text-slate-300 leading-relaxed">
                           {item.text}
                        </p>
                     </div>
                  </Reveal>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Outcomes;
