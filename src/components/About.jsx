import React from 'react';
import { Reveal } from './Reveal';

const About = () => {
   return (
      <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6">

            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative">

               {/* Decorative Background Element */}
               <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-50/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

               {/* Image Side */}
               <div className="lg:col-span-5 relative order-2 lg:order-1 pt-10 lg:pt-0">
                  <Reveal>
                     <div className="relative">
                        {/* Offset Frame / Accent Block */}
                        <div className="absolute -inset-4 md:-inset-6 bg-primary-950 rounded-sm transform translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-8 z-0 opacity-10"></div>
                        <div className="absolute -inset-4 md:-inset-6 border border-secondary-200 rounded-sm transform -translate-x-2 md:-translate-x-4 -translate-y-2 md:-translate-y-4 z-0"></div>

                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl z-10 group bg-neutral-100">
                           <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                           <img
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" // Placeholder Headshot
                              alt="Mindy Bhandher"
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
                           />

                           {/* Overlay Quote */}
                           <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-primary-950/90 via-primary-950/40 to-transparent z-20">
                              <p className="text-white font-serif italic text-xl md:text-2xl leading-snug group-hover:-translate-y-2 transition-transform duration-700">"Prevention isn't soft. It's protection."</p>
                           </div>
                        </div>
                     </div>
                  </Reveal>
               </div>

               {/* Text Side */}
               <div className="lg:col-span-7 order-1 lg:order-2 pl-0 md:pl-8">
                  <Reveal delay={0.2}>
                     <div className="inline-block px-4 py-1.5 bg-neutral-100 text-neutral-500 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-neutral-200">
                        The Elephant in the Room
                     </div>
                     <h2 className="text-5xl md:text-6xl lg:text-[72px] font-sans font-medium text-primary-900 mb-10 leading-[0.9] tracking-tighter">
                        Not Scared Straight. <br />
                        <span className="font-serif italic text-secondary-600 font-light">Real Talk.</span>
                     </h2>

                     <div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-light relative">
                        <p className="first-letter:text-5xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-primary-900 first-letter:float-left first-letter:mr-4 first-letter:leading-[0.8] first-letter:mt-2">
                           At 30 years old, I was convicted of second-degree murder and spent 12.5 years in prison. I take full responsibility for my past, but my programs involve <span className="font-medium text-primary-900 text-rose-500">no glorification of violence</span> and do not use fear as a deterrent.
                        </p>
                        <p>
                           Instead, my methodology is deeply <span className="font-medium text-primary-900">trauma-informed</span> and purely educational. I pivot away from the shock value of prison and focus entirely on the psychology of decision-making, identifying early warning signs, and building <span className="font-medium text-primary-900">actionable frameworks</span> for emotional regulation.
                        </p>
                     </div>
                  </Reveal>
               </div>

            </div>

            {/* Trust Badges */}
            <div className="mt-20 pt-16 border-t border-neutral-200 text-center">
               <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">Trusted by Educators and Communities</p>
               <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60 grayscale filter">
                  {/* Placeholder logos for schools/districts */}
                  <div className="flex items-center gap-2 font-serif text-xl md:text-2xl font-bold px-6 py-3"><span className="text-primary-900">SD</span><span className="text-secondary-600">36</span></div>
                  <div className="flex items-center font-sans text-lg md:text-xl font-bold px-6 py-3 uppercase tracking-widest text-primary-900 border-l border-neutral-300">Surrey Schools</div>
                  <div className="flex items-center gap-2 font-serif text-xl md:text-2xl font-bold px-6 py-3 border-l border-neutral-300"><span className="text-primary-900">SD</span><span className="text-secondary-600">41</span></div>
                  <div className="flex items-center font-sans text-lg md:text-xl font-bold px-6 py-3 uppercase tracking-widest text-primary-900 border-l border-neutral-300">Burnaby</div>
               </div>
            </div>

         </div>
      </section>
   );
};

export default About;
