import React from 'react';
import { Reveal } from './Reveal';
import { Trophy, Star, ShieldCheck, HeartHandshake, Users2, Zap } from 'lucide-react';

const Success = () => {
   const benefits = [
      { icon: <Zap size={24} />, text: "A prevention message students actually listen to" },
      { icon: <Star size={24} />, text: "Reduced tolerance for bullying and “status games”" },
      { icon: <ShieldCheck size={24} />, text: "Better emotional self-control and decision-making language" },
      { icon: <Trophy size={24} />, text: "Accountability without shame" },
      { icon: <HeartHandshake size={24} />, text: "Stronger connection between students, parents, and educators" },
      { icon: <Users2 size={24} />, text: "A clear framework for early intervention before issues escalate" }
   ];

   return (
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-800/50 skew-x-12 translate-x-32 pointer-events-none"></div>

         <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <Reveal>
                  <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">The Impact</h2>
                  <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">What your school or organization gets</h3>
                  <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
               </Reveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {benefits.map((item, i) => (
                  <Reveal delay={i * 0.1} key={i} width="100%" fullHeight>
                     <div className="bg-navy-800/50 border border-navy-700/50 p-8 rounded-sm hover:bg-navy-800 transition-colors hover:border-amber-500/30 group h-full">
                        <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/20">
                           {item.icon}
                        </div>
                        <p className="text-lg font-medium text-slate-200 leading-relaxed">
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

export default Success;
