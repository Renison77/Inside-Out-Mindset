import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe } from 'lucide-react';

const About = () => {
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
   });

   // Scene Opacities
   const scene1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
   const scene2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
   const scene3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);

   // Background Colors/Images
   const bgColor = useTransform(scrollYProgress,
      [0, 0.3, 0.6, 1],
      ["#020C1B", "#112240", "#F8FAF9", "#F8FAF9"] // Dark Navy -> Navy -> Off White
   );

   return (
      <section id="about" ref={containerRef} className="relative h-[300vh]">

         {/* Sticky Container */}
         <motion.div
            className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center p-6"
            style={{ backgroundColor: bgColor }}
         >

            {/* SCENE 1: The Dark Past */}
            <motion.div
               style={{ opacity: scene1Opacity }}
               className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
               <div className="max-w-2xl text-center px-6">
                  <h2 className="text-4xl md:text-6xl font-serif text-slate-400 mb-8 leading-tight">
                     "I was convicted of second-degree murder and spent <span className="text-white border-b border-red-900">12.5 years</span> incarcerated."
                  </h2>
               </div>
            </motion.div>

            {/* SCENE 2: The Realization */}
            <motion.div
               style={{ opacity: scene2Opacity }}
               className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
               <div className="max-w-3xl text-center px-6">
                  <h2 className="text-4xl md:text-5xl font-sans font-light text-slate-300 mb-8 leading-tight">
                     I know what poor decisions look like.
                     <br /><span className="text-amber-500 font-serif italic">But I also know how to interrupt them.</span>
                  </h2>
               </div>
            </motion.div>

            {/* SCENE 3: The Redemption (Light Mode) */}
            <motion.div
               style={{ opacity: scene3Opacity }}
               className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
               <div className="max-w-[1400px] w-full px-6 grid lg:grid-cols-12 gap-12 items-center">

                  {/* Image Side */}
                  <div className="lg:col-span-5 relative">
                     <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                        <img
                           src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                           alt="Mindy Bhandher"
                           className="w-full h-full object-cover grayscale contrast-125"
                        />
                     </div>
                     {/* Cultural Badge */}
                     <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl border border-slate-100 hidden md:flex items-center gap-4 max-w-xs">
                        <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                           <Globe size={24} />
                        </div>
                        <div>
                           <h4 className="font-serif text-navy-900 text-lg">Punjabi Fluent</h4>
                           <p className="text-xs text-slate-500">Culturally relevant delivery.</p>
                        </div>
                     </div>
                  </div>

                  {/* Text Side */}
                  <div className="lg:col-span-7">
                     <div className="inline-block px-3 py-1 border border-navy-900/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-navy-900 mb-6">
                        The Guide
                     </div>
                     <h2 className="text-6xl md:text-8xl font-serif text-navy-900 mb-10 leading-[0.9]">
                        Real Experience.<br />
                        <span className="text-amber-600 italic">Responsible Delivery.</span>
                     </h2>
                     <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                        <p>
                           My name is Mindy Bhandher. I take full responsibility for my past. But I use that experience to help students today.
                        </p>
                        <p>
                           The goal isn't to scare them. It's to help them build the safety I didn't have, and the emotional tools I didn't know existed.
                        </p>
                        <p className="font-medium text-navy-900 pt-4 border-t border-slate-200">
                           Now, I help students build a world where they don't have to make the same mistakes.
                        </p>
                     </div>
                  </div>

               </div>
            </motion.div>

         </motion.div>
      </section>
   );
};

export default About;
