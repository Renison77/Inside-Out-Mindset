import React from 'react';
import { Reveal } from './Reveal';
import { Heart, Users, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

const Offer = () => {
   const talks = [
      {
         audience: "Elementary Students",
         title: "Confidence, Kindness, and Belonging",
         description: "A practical, age-appropriate session that helps kids understand bullying, build empathy, and learn what to do when problems start.",
         outcomes: [
            "Simple language and interactive delivery",
            "Clear “what to do” scripts kids can use",
            "Builds respect and belonging in the classroom"
         ],
         icon: <Heart size={24} className="text-amber-500" />,
         image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
      },
      {
         audience: "High School Students",
         title: "Identity, Pressure, and Real-World Consequences",
         description: "A direct talk on insecurity, image, peer pressure, and decision-making under stress, with tools students can use immediately.",
         outcomes: [
            "Understand how insecurity fuels bullying",
            "Spot blind spots before they escalate",
            "Learn tools to pause, think, and choose better"
         ],
         icon: <Users size={24} className="text-amber-500" />,
         image: "https://images.unsplash.com/photo-1427504494785-3a9ca28497b1?q=80&w=2070&auto=format&fit=crop"
      },
      {
         audience: "Parents of Young Children",
         title: "Raising Confident Kids Without Fear or Shame",
         description: "A prevention-focused talk on connection, boundaries, and communication, and how strong relationships reduce vulnerability.",
         outcomes: [
            "Practical communication tools parents can use",
            "Builds confidence and accountability at home",
            "Helps parents create a relationship where kids tell the truth"
         ],
         icon: <Shield size={24} className="text-amber-500" />,
         image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=1925&auto=format&fit=crop"
      }
   ];

   return (
      <section id="offer" className="py-24 md:py-32 bg-white text-navy-900 relative">
         <div className="max-w-[1400px] mx-auto px-6 relative z-10">

            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-100 pb-8">
               <Reveal>
                  <h2 className="text-4xl md:text-6xl font-serif text-navy-900 leading-none">
                     Three talks, <br />
                     <span className="italic text-amber-600">tailored by audience</span>
                  </h2>
               </Reveal>
               <Reveal delay={0.2}>
                  <p className="text-slate-500 max-w-xs text-sm font-medium leading-relaxed mb-2 text-right">
                     Not shock value. Not fear-based. <br />
                     The goal is understanding and tools.
                  </p>
               </Reveal>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
               {talks.map((talk, i) => (
                  <Reveal delay={i * 0.2} key={i}>
                     <div className="group h-full flex flex-col bg-white border border-slate-100 hover:border-amber-200 hover:shadow-2xl hover:shadow-navy-900/5 transition-all duration-500 rounded-sm overflow-hidden">

                        {/* Image Header */}
                        <div className="relative h-64 overflow-hidden">
                           <img
                              src={talk.image}
                              alt={talk.audience}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors"></div>
                           <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md">
                              {talk.icon}
                           </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                           <div className="mb-4">
                              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">{talk.audience}</span>
                              <h3 className="text-2xl font-serif font-bold text-navy-900 leading-tight mb-4 group-hover:text-amber-600 transition-colors">
                                 {talk.title}
                              </h3>
                              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                 {talk.description}
                              </p>
                           </div>

                           <div className="mt-auto space-y-3 pt-6 border-t border-slate-50">
                              {talk.outcomes.map((outcome, idx) => (
                                 <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 size={16} className="text-amber-500 mt-1 min-w-[16px]" />
                                    <span className="text-xs text-navy-800 font-medium">{outcome}</span>
                                 </div>
                              ))}
                           </div>

                           <div className="mt-8 pt-4">
                              <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy-900 group-hover:gap-4 transition-all group-hover:text-amber-600">
                                 Book This Talk <ArrowRight size={14} />
                              </button>
                           </div>
                        </div>

                     </div>
                  </Reveal>
               ))}
            </div>

         </div>
      </section>
   );
};

export default Offer;
