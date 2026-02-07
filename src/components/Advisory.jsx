import React from 'react';
import { Reveal } from './Reveal';
import { Building2, ArrowRight } from 'lucide-react';

const Advisory = () => {
   return (
      <section id="advisory" className="py-24 bg-navy-950 text-white relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <Reveal>
               <div className="w-16 h-16 bg-amber-600 rounded-sm flex items-center justify-center text-white mb-8 shadow-lg shadow-amber-600/20">
                  <Building2 size={32} />
               </div>
               <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">Advisory & Strategy</h2>
               <h3 className="text-4xl md:text-5xl font-sans font-medium text-white mb-6 leading-tight">
                  Advisory for <span className="text-slate-400">Organizations</span> <br />and <span className="text-slate-400">Government</span>
               </h3>
               <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                  I also work as a thought partner for organizations and government teams focused on prevention. This is not enforcement work. It’s a prevention lens: understanding where problems start, what drives behavior, and how to build systems and messaging that support better decisions.
               </p>
               <button
                  onClick={() => window.location.href = "mailto:mindy@insideoutmindset.com?subject=Advisory Inquiry"}
                  className="inline-flex items-center gap-3 text-white border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors uppercase tracking-widest text-sm font-bold"
               >
                  Request an Advisory Call <ArrowRight size={16} />
               </button>
            </Reveal>

            <Reveal delay={0.2}>
               <div className="bg-navy-900/50 border border-white/5 p-8 md:p-10 rounded-sm shadow-2xl relative">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500/10 rounded-full blur-2xl"></div>
                  <ul className="space-y-6">
                     {[
                        "Prevention strategy and program design",
                        "Youth engagement and messaging that lands",
                        "Stakeholder engagement (schools, families, community)",
                        "Cultural insight and Punjabi-language support where helpful",
                        "Practical recommendations grounded in lived experience and accountability"
                     ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                           <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                           <span className="text-slate-200 text-lg font-light leading-relaxed">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </Reveal>

         </div>
      </section>
   );
};

export default Advisory;
