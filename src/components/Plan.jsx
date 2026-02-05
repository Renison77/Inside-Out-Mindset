import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';

const Plan = () => {
   return (
      <section id="plan" className="py-24 md:py-32 bg-slate-50 relative">
         <div className="max-w-[1400px] mx-auto px-6">

            <div className="text-center mb-16">
               <Reveal>
                  <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">A simple 3-step process</h2>
                  <p className="text-slate-500">Easy scheduling, clear expectations, and age-appropriate delivery.</p>
               </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">

               {/* Connector Line (Desktop) */}
               <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-200 -z-0"></div>

               {[
                  {
                     step: "01",
                     title: "Choose the audience",
                     desc: "Elementary, High School, or Parents. We have tailored content for each."
                  },
                  {
                     step: "02",
                     title: "Choose the format",
                     desc: "Assembly, split sessions, classroom workshop, or staff session."
                  },
                  {
                     step: "03",
                     title: "Confirm date & goals",
                     desc: "I tailor the session and deliver practical takeaways for your group."
                  }
               ].map((item, i) => (
                  <Reveal delay={i * 0.2} key={i}>
                     <div className="relative bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-sm text-center group z-10 h-full">
                        <div className="w-16 h-16 mx-auto bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform relative z-20 border-4 border-slate-50">
                           {item.step}
                        </div>
                        <h3 className="text-xl font-bold text-navy-900 mb-4">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                     </div>
                  </Reveal>
               ))}

            </div>

            <Reveal delay={0.6}>
               <div className="mt-16 text-center">
                  <button
                     onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                     className="inline-flex items-center gap-3 px-10 py-5 bg-navy-900 text-white font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors shadow-xl"
                  >
                     Start Planning <ArrowRight size={18} />
                  </button>
               </div>
            </Reveal>

         </div>
      </section>
   );
};

export default Plan;
