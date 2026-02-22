import React from 'react';
import { Reveal } from './Reveal';
import mindyImage from '../assets/5E26CDBF-FFFE-4C59-89EF-687DE6CFEF39.jpg';

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
                              src={mindyImage}
                              alt="Mindy Bhandher"
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
                           />

                           {/* Overlay Quote */}
                           <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-primary-950/95 via-primary-950/60 to-transparent z-20">
                              <p className="text-white font-playfair italic font-bold tracking-wide text-2xl md:text-3xl leading-snug group-hover:-translate-y-2 transition-transform duration-700">"You Don't Get to Rewind Life"</p>
                           </div>
                        </div>
                     </div>
                  </Reveal>
               </div>

               {/* Text Side */}
               <div className="lg:col-span-7 order-1 lg:order-2 pl-0 md:pl-8">
                  <Reveal delay={0.2}>
                     <div className="inline-block px-4 py-1.5 bg-neutral-100 text-neutral-500 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-neutral-200">
                        Behind the Message
                     </div>
                     <h2 className="text-5xl md:text-6xl lg:text-[72px] font-sans font-medium text-primary-900 mb-10 leading-[0.9] tracking-tighter">
                        I Lived the <br />
                        <span className="font-serif italic text-secondary-600 font-light">Consequences.</span>
                     </h2>

                     <div className="space-y-6 text-neutral-500 text-lg leading-relaxed font-light relative">
                        {/* Drop Cap for first paragraph */}
                        <p className="first-letter:text-5xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-primary-900 first-letter:float-left first-letter:mr-4 first-letter:leading-[0.8] first-letter:mt-2">
                           At 30 years old, I was convicted of second-degree murder and spent 12.5 years in prison. I take full responsibility for my actions.
                        </p>
                        <p>
                           That outcome did not begin with one moment. It began years earlier. As a teenager, I was searching for belonging. I felt abandoned, disconnected, and angry. I gravitated toward people who made me feel accepted.
                        </p>

                        <div className="py-6 my-8 border-y border-neutral-100 pl-6 border-l-2 border-l-secondary-500 ml-4 bg-neutral-50/50">
                           <p className="text-primary-900 font-serif italic text-xl">
                              "Over time, my belief system shifted. Loyalty, ego, and reputation became more important than reflection, regulation, or long-term thinking."
                           </p>
                        </div>

                        <p>
                           Small decisions built on top of each other. The lifestyle hardened. The thinking narrowed. And eventually, it culminated in irreversible consequences. Prison forced me to confront the patterns behind my choices. I began studying trauma, emotional regulation, and identity. I saw how unmet needs, distorted beliefs, and unregulated emotion can quietly shape a life.
                        </p>
                        <p>
                           Today, I speak to students, parents, and organizations about where these patterns begin. Not from theory — but from lived experience.
                        </p>
                        <p className="text-primary-900 font-medium">
                           This is not about fear. It is about awareness. It is about understanding how belonging, ego, and external validation can pull young people toward destructive paths — and how emotional regulation, accountability, and clear identity can pull them back.
                        </p>
                        <p>
                           I share my story so others can recognize the warning signs earlier than I did.
                        </p>

                        <div className="pt-8 mt-10">
                           <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-sm text-secondary-600 font-bold text-[10px] uppercase tracking-widest shadow-sm">
                              <span className="w-1.5 h-1.5 bg-secondary-600 rounded-full animate-pulse"></span>
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
