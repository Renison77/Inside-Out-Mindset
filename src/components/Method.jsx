import React from 'react';
import { Reveal } from './Reveal';

const Method = () => {
   return (
      <section className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="max-w-[1000px] mx-auto px-4 md:px-6 text-center">
            <Reveal>
               <h2 className="text-sm font-bold text-navy-900 uppercase tracking-[0.2em] mb-6">The Method</h2>
               <p className="text-xl md:text-2xl font-serif italic text-slate-500 leading-relaxed max-w-4xl mx-auto">
                  "Inside Out Mindset is built on a <span className="text-navy-900">prevention framework</span> that helps people move from survival mode into clarity and better decisions. The approach is informed by <span className="text-navy-900">Groundworkxyz</span> (which changed my life and gave me a repeatable way to reset under pressure), along with ongoing training in communication, performance, and mindset (Tony Robbins programs, Landmark Forum)."
               </p>
            </Reveal>
         </div>
      </section>
   );
};

export default Method;
