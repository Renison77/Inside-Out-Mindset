import React from 'react';
import { Reveal } from './Reveal';

const About = () => {
   return (
      <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6">

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">

               {/* Image Side */}
               <div className="lg:col-span-5 relative order-2 lg:order-1">
                  <Reveal>
                     <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                        <div className="absolute inset-0 bg-navy-900/10 z-10"></div>
                        <img
                           src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" // Placeholder Headshot
                           alt="Mindy Bhandher"
                           className="w-full h-full object-cover grayscale contrast-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-navy-950/90 to-transparent z-20">
                           <p className="text-white font-serif italic text-lg opacity-90">"Prevention isn't soft. It's protection."</p>
                        </div>
                     </div>

                     {/* Decorative Element */}
                     <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500/10 -z-10 rounded-full blur-2xl"></div>
                  </Reveal>
               </div>

               {/* Text Side */}
               <div className="lg:col-span-7 order-1 lg:order-2">
                  <Reveal delay={0.2}>
                     <div className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-6">
                        About Mindy
                     </div>
                     <h2 className="text-4xl md:text-7xl font-sans font-medium text-navy-900 mb-8 leading-[0.95] tracking-tight">
                        I Lived the <br />
                        <span className="font-serif italic text-amber-600 font-light">Consequences.</span>
                     </h2>

                     <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                        <p>
                           At 30 years old, I was convicted of second-degree murder and spent 12.5 years in prison. I take full responsibility for my actions.
                        </p>
                        <p>
                           That outcome did not begin with one moment. It began years earlier.
                        </p>
                        <p>
                           As a teenager, I was searching for belonging. I felt abandoned, disconnected, and angry. I gravitated toward people who made me feel accepted. Over time, my belief system shifted. Loyalty, ego, and reputation became more important than reflection, regulation, or long-term thinking.
                        </p>
                        <p>
                           Small decisions built on top of each other. The lifestyle hardened. The thinking narrowed. And eventually, it culminated in irreversible consequences.
                        </p>
                        <p>
                           Prison forced me to confront the patterns behind my choices. I began studying trauma, emotional regulation, and identity. I saw how unmet needs, distorted beliefs, and unregulated emotion can quietly shape a life.
                        </p>
                        <p>
                           Today, I speak to students, parents, and organizations about where these patterns begin. Not from theory — but from lived experience.
                        </p>
                        <p>
                           This is not about fear. It is about awareness. It is about understanding how belonging, ego, and external validation can pull young people toward destructive paths — and how emotional regulation, accountability, and clear identity can pull them back.
                        </p>
                        <p>
                           Prevention isn’t soft. It’s protection.
                        </p>
                        <p>
                           I share my story so others can recognize the warning signs earlier than I did.
                        </p>

                        <div className="pt-6 border-t border-slate-200 mt-8">
                           <span className="text-amber-600 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                              Punjabi-language parent sessions available
                           </span>
                        </div>
                     </div>
                  </Reveal>
               </div>

            </div>

         </div>
      </section>
   );
};

export default About;
