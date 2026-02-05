import React from 'react';
import { Reveal } from './Reveal';

const About = () => {
   return (
      <section id="about" className="py-24 md:py-32 bg-amber-50 text-navy-900 relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">

               <div className="order-2 lg:order-1">
                  <Reveal>
                     <div className="inline-block px-4 py-2 bg-white text-navy-900 text-[10px] font-bold uppercase tracking-widest mb-6 border border-amber-200">
                        The Guide
                     </div>
                     <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-none text-navy-900">
                        Meet Mindy Bhandher
                     </h2>
                  </Reveal>

                  <div className="space-y-6 text-slate-700 leading-relaxed font-light">
                     <Reveal delay={0.2}>
                        <p>
                           My name is Mindy Bhandher. I was raised in Surrey, BC, and I’ve lived both sides of the choices that can either build a life or destroy it.
                           <strong className="font-medium text-navy-900"> I take full responsibility for my past.</strong> I was convicted of second-degree murder and spent 12.5 years incarcerated.
                           I know what poor decision-making looks like from the inside.
                        </p>
                     </Reveal>
                     <Reveal delay={0.3}>
                        <p>
                           I’ve worked hard to understand what leads to that behaviour, how it escalates, and how we can interrupt it early before more lives are ruined.
                           Through Inside Out Mindset, I deliver prevention-focused, age-appropriate talks. <br />
                           <span className="italic text-navy-500">The goal isn’t fear, shock, or shame. The goal is understanding and change.</span>
                        </p>
                     </Reveal>
                     <Reveal delay={0.4}>
                        <p>
                           I’m also a father of two, including a four-year-old daughter. My purpose is to help build a world where she and other kids grow up feeling safe, supported, and hopeful.
                           I believe emotional needs being met is not “soft.” It’s protection.
                        </p>
                     </Reveal>
                  </div>

                  <Reveal delay={0.6}>
                     <div className="mt-10 pt-8 border-t border-amber-200 flex items-center gap-4">
                        <div className="h-12 w-[2px] bg-amber-500"></div>
                        <p className="font-serif italic text-xl text-navy-800">
                           "Small choices, made early, change everything."
                        </p>
                     </div>
                  </Reveal>
               </div>

               <div className="order-1 lg:order-2">
                  <Reveal delay={0.2}>
                     <div className="relative">
                        <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                           <img
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                              alt="Mindy Bhandher"
                              className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                           />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-r-2 border-b-2 border-amber-500 -z-10 hidden md:block"></div>
                     </div>
                  </Reveal>
               </div>

            </div>
         </div>
      </section>
   );
};

export default About;
