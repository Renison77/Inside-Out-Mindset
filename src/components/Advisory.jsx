import React from 'react';
import { Reveal } from './Reveal';
import { Building2, ArrowRight } from 'lucide-react';

const Advisory = () => {
   return (
      <section id="advisory" className="py-24 bg-blue-50 relative overflow-hidden border-t border-neutral-200">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

            <Reveal>
               <div className="w-16 h-16 bg-white border border-neutral-100 rounded-sm flex items-center justify-center text-secondary-600 mb-8 shadow-sm">
                  <Building2 size={32} />
               </div>
               <h2 className="text-xs font-bold text-secondary-600 uppercase tracking-[0.3em] mb-4">Advisory & Strategy</h2>
               <h3 className="text-3xl md:text-5xl font-sans font-medium text-primary-900 mb-6 leading-tight">
                  Advisory for <span className="text-neutral-500 italic font-serif">Organizations</span> <br />and <span className="text-neutral-500 italic font-serif">Government</span>
               </h3>
               <p className="text-neutral-600 text-lg leading-relaxed mb-8 font-light">
                  I also work as a thought partner for organizations and government teams focused on prevention. This is not enforcement work. It’s a prevention lens: understanding where problems start, what drives behavior, and how to build systems and messaging that support better decisions.
               </p>
               <button
                  onClick={() => window.location.href = "mailto:mindy@insideoutmindset.com?subject=Advisory Inquiry"}
                  className="inline-flex items-center gap-3 text-primary-900 border-b border-secondary-600 pb-1 hover:text-secondary-600 transition-colors uppercase tracking-widest text-sm font-bold"
               >
                  Request an Advisory Call <ArrowRight size={16} />
               </button>
            </Reveal>

            <Reveal delay={0.2}>
               <div className="bg-white border border-neutral-100 p-8 md:p-10 rounded-sm shadow-xl relative">
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-500/10 rounded-full blur-2xl"></div>
                  <ul className="space-y-6">
                     {[
                        "Prevention strategy and program design",
                        "Youth engagement and messaging that lands",
                        "Stakeholder engagement (schools, families, community)",
                        "Cultural insight and Punjabi-language support where helpful",
                        "Practical recommendations grounded in lived experience and accountability"
                     ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                           <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2.5 shrink-0" />
                           <span className="text-neutral-600 text-lg font-light leading-relaxed">{item}</span>
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
