import React from 'react';
import { Reveal } from './Reveal';
import { Trophy, ShieldCheck, Users2, Zap, BrainCircuit, HeartHandshake, ArrowRight } from 'lucide-react';

const Outcomes = () => {
   const benefits = [
      {
         icon: <Zap size={24} />,
         title: "Engagement Without Glorification",
         text: "Students stay engaged without crime being romanticized. The message is honest, accountable, and grounded."
      },
      {
         icon: <ShieldCheck size={24} />,
         title: "Clear Decision-Making Language",
         text: "Students leave with practical language around pressure, ego, belonging, and consequences they can use immediately."
      },
      {
         icon: <BrainCircuit size={24} />,
         title: "Recognizing the Signs",
         text: "Students and parents learn how small patterns escalate over time — and how to interrupt them early."
      },
      {
         icon: <Trophy size={24} />,
         title: "Accountability, Not Shame",
         text: "Real behavioral change begins when we replace fear and shame with genuine responsibility."
      },
      {
         icon: <HeartHandshake size={24} />,
         title: "Bridging the Gap",
         text: "Creates a stronger, more authentic connection between students, parents, and educators in schools."
      },
      {
         icon: <Users2 size={24} />,
         title: "Actionable Frameworks",
         text: "Provides a clear early-intervention path to address and redirect troubling behavior before issues escalate."
      }
   ];

   return (
      <section id="outcomes" className="py-24 md:py-32 bg-neutral-50 relative overflow-hidden border-t border-neutral-200">
         {/* Atmospheric Light Glow */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-500/5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">

            {/* Header Section */}
            <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
               <Reveal>
                  <h2 className="text-xs font-bold text-secondary-600 uppercase tracking-[0.3em] mb-4">The Impact</h2>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-primary-900 leading-[1.1] tracking-tight mb-6">
                     Outcomes Schools <span className="font-serif italic text-secondary-600 font-light">Care About</span>
                  </h3>
                  <div className="w-16 h-px bg-secondary-500 mx-auto mb-6"></div>
                  <p className="text-neutral-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                     Measurable shifts in school culture. Accountability without shame, and students equipped to handle real-world pressure.
                  </p>
               </Reveal>
            </div>

            {/* Flawless Symmetric Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
               {benefits.map((item, i) => (
                  <Reveal delay={i * 0.1} key={i} fullHeight={true}>
                     <div className="relative group p-10 md:p-12 h-full bg-white border border-neutral-200 rounded-sm hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] hover:border-secondary-500/30 transition-all duration-500 flex flex-col justify-between z-10 overflow-hidden">

                        {/* Subtle gradient hover background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 text-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>

                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary-500 to-transparent scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700 ease-out"></div>

                        <div>
                           <div className="w-14 h-14 bg-neutral-50 border border-neutral-100 rounded-full flex items-center justify-center text-secondary-500 mb-8 group-hover:bg-secondary-500 group-hover:text-white group-hover:border-secondary-500 transition-all duration-300 relative shadow-sm">
                              {item.icon}
                           </div>
                           <h4 className="text-2xl font-sans font-medium text-primary-900 mb-4 leading-tight">{item.title}</h4>
                           <p className="text-base font-light text-neutral-500 leading-relaxed">
                              {item.text}
                           </p>
                        </div>
                     </div>
                  </Reveal>
               ))}
            </div>

         </div>
      </section>
   );
};

export default Outcomes;
