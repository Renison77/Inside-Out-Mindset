import React from 'react';
import { Reveal } from './Reveal';
import { Quote } from 'lucide-react';

const Testimonials = () => {
   const quotes = [
      { text: "Powerful message that really hit home.", author: "KPU Criminology Student" },
      { text: "The honesty and practical tools were exactly what our students needed.", author: "Educator / Instructor" },
      { text: "Not the usual lecture. Real, raw, and helpful.", author: "High School Student" },
      { text: "Changed my perspective on how small touches matter.", author: "Justice Institute Student" },
      { text: "Finally, a prevention talk that doesn't just scare us.", author: "Student" },
      { text: "Students were engaged from start to finish.", author: "High School Teacher" },
      { text: "Understanding the 'why' behind choices was an eye-opener.", author: "Parent" },
      { text: "Mindy's story and method are unforgettable.", author: "Community Leader" }
   ];

   return (
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6">

            <div className="text-center mb-16">
               <Reveal>
                  <Quote size={32} className="text-amber-500 mx-auto mb-6 opacity-80" />
                  <h2 className="text-3xl md:text-5xl font-serif text-navy-900 mb-6">What people are saying</h2>
               </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
               {quotes.map((quote, i) => (
                  <Reveal delay={i * 0.1} key={i} fullHeight>
                     <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 hover:shadow-lg transition-all h-full flex flex-col justify-between">
                        <p className="text-slate-600 font-light italic text-sm leading-relaxed mb-4">"{quote.text}"</p>
                        <p className="text-xs font-bold uppercase tracking-widest text-amber-600 border-t border-slate-200 pt-4">{quote.author}</p>
                     </div>
                  </Reveal>
               ))}
            </div>

         </div>
      </section>
   );
};

export default Testimonials;
