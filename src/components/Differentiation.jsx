import React from 'react';
import { Reveal } from './Reveal';

const Differentiation = () => {
   return (
      <section className="py-24 bg-white border-y border-slate-100 flex items-center justify-center relative overflow-hidden">

         {/* Decor text */}
         <span className="absolute -left-20 top-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-serif text-slate-50 opacity-40 pointer-events-none select-none leading-none">
            Real
         </span>

         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Reveal>
               <div className="inline-block p-4 bg-slate-50 border border-slate-100 rounded-full mb-8">
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-widest px-2">
                     How this is different
                  </span>
               </div>

               <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-8 leading-tight">
                  Not <span className="text-amber-600 italic">"scared straight."</span> <br />
                  Real, practical, and responsible.
               </h2>

               <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                  This work is not about fear, shock, or shame. It’s about helping people understand where trouble starts,
                  how it quietly builds over time, and how different choices change outcomes. <br /><br />
                  <strong className="text-navy-900 font-medium">Real-life stories are used responsibly</strong> to teach early warning signs, decision points,
                  and practical tools that protect students and strengthen families.
               </p>
            </Reveal>
         </div>
      </section>
   );
};

export default Differentiation;
