import React from 'react';
import { Reveal, FadeIn } from './Reveal';
import { AlertCircle } from 'lucide-react';

const Problem = () => {
   return (
      <section id="problem" className="py-24 md:py-32 bg-slate-50 relative border-t border-slate-100">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

               {/* Text Content */}
               <div className="order-2 md:order-1">
                  <Reveal>
                     <h2 className="text-xs font-bold text-amber-600 uppercase tracking-[0.3em] mb-4">The Problem</h2>
                     <h3 className="text-4xl md:text-5xl font-serif text-navy-900 mb-8 leading-tight">
                        Why schools and families <br /><span className="italic text-slate-400">bring this in.</span>
                     </h3>

                     <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                        Many communities are watching small issues turn into bigger issues.
                        The earlier we interrupt the pattern, the better the outcome.
                     </p>
                  </Reveal>

                  <div className="space-y-6">
                     {[
                        "Bullying and “status” behaviour that spreads quickly",
                        "Students making impulsive choices under pressure",
                        "Parents and educators feeling worried, reactive, and out of options",
                        "A prevention message that needs to land without shame, fear, or lectures"
                     ].map((item, i) => (
                        <Reveal delay={i * 0.1} key={i}>
                           <div className="flex items-start gap-4">
                              <div className="mt-1 min-w-[20px]">
                                 <AlertCircle size={20} className="text-amber-500" />
                              </div>
                              <p className="text-navy-900 font-medium leading-relaxed">{item}</p>
                           </div>
                        </Reveal>
                     ))}
                  </div>

                  <Reveal delay={0.6}>
                     <div className="mt-12 pt-8 border-t border-slate-200">
                        <p className="text-xl md:text-2xl font-serif italic text-navy-800">
                           "Kids deserve to feel safe at school, and families deserve support before things spiral."
                        </p>
                     </div>
                  </Reveal>
               </div>

               {/* Visual Side */}
               <div className="order-1 md:order-2 relative">
                  <FadeIn delay={0.2}>
                     <div className="relative z-10">
                        <div className="aspect-[4/5] bg-slate-200 overflow-hidden rounded-sm shadow-2xl">
                           <img
                              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop"
                              alt="School hallway shadows"
                              className="w-full h-full object-cover grayscale opacity-90 hover:scale-105 transition-transform duration-700"
                           />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-amber-500/20 -z-10 hidden md:block"></div>
                        <div className="absolute top-10 -right-10 bg-white p-6 shadow-xl max-w-[200px] hidden md:block">
                           <span className="text-4xl font-serif text-amber-500 block mb-2">90%</span>
                           <span className="text-xs uppercase tracking-widest text-slate-500">of intervention is timing.</span>
                        </div>
                     </div>
                  </FadeIn>
               </div>

            </div>
         </div>
      </section>
   );
};

export default Problem;
