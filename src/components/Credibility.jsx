import React from 'react';
import { Reveal } from './Reveal';
import { CheckCircle2 } from 'lucide-react';

const Credibility = () => {
   return (
      <section className="py-20 bg-white border-b border-neutral-100">
         <div className="max-w-[1000px] mx-auto px-4 md:px-6 text-center">

            <Reveal>
               <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.3em] mb-10">Trusted Experience</h2>

               <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 text-left max-w-3xl mx-auto">
                  {[
                     "Guest speaker: Kwantlen Polytechnic University (Criminology) — 12 class sessions (invited by Dr. Alana Abramson)",
                     "Guest speaker: Justice Institute of BC — multiple sessions (via Dr. Sunny Mangat / associated cohorts)",
                     "Featured in a Surrey RCMP prevention video used in youth education programming (End Gang Life)",
                     "Community talks delivered with KidsPlay Foundation (Cal Dosanjh)"
                  ].map((item, i) => (
                     <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-primary-900 mt-1 shrink-0" />
                        <span className="text-primary-900 font-medium leading-relaxed text-sm">{item}</span>
                     </div>
                  ))}
               </div>

               <p className="mt-12 text-xs text-neutral-400 uppercase tracking-widest">
                  References and links available upon request.
               </p>
            </Reveal>

         </div>
      </section>
   );
};

export default Credibility;
