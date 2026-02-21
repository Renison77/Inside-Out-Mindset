import React, { useState, useEffect, useRef } from 'react';
// Force HMR update
import { ArrowDown } from 'lucide-react';

// Image Imports
import imgBulliedStudent from '../assets/bullied_student.png';
import imgBullies from '../assets/bullies.png';
import imgFamilyConflict from '../assets/family_conflict.png';
import imgGuideFigure from '../assets/guide_figure.png';

const ScrollyNarrative = () => {
   const [scrollProgress, setScrollProgress] = useState(0);
   const containerRef = useRef(null);

   // Constants for scroll range (in pixels)
   // We want the section to be roughly 300vh tall to allow for enough scroll time
   // 0% - 33%: Intro (Student + Bullies)
   // 33% - 66%: Middle (Running away + Family Context)
   // 66% - 100%: End (Meeting the Guide)

   const handleScroll = () => {
      if (containerRef.current) {
         const rect = containerRef.current.getBoundingClientRect();
         const height = rect.height - window.innerHeight;
         const progress = Math.max(0, Math.min(1, -rect.top / height));
         setScrollProgress(progress);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   // -- Dynamic Styles based on scrollProgress --

   // 1. Student Movement
   // Moves from left to right as we scroll.
   // Starts stationary, then runs.
   const studentLeftPos = Math.min(60, scrollProgress * 100); // Max 60% across screen

   // 2. Bullies Visibility
   // Visible at start, fade out by 20%
   const bulliesOpacity = Math.max(0, 1 - scrollProgress * 5);

   // 3. Family Context
   // Fades in around 30%, stays until 60%, then fades out
   let familyOpacity = 0;
   if (scrollProgress > 0.25 && scrollProgress < 0.65) {
      if (scrollProgress < 0.35) familyOpacity = (scrollProgress - 0.25) * 10; // Fade in
      else if (scrollProgress > 0.55) familyOpacity = 1 - (scrollProgress - 0.55) * 10; // Fade out
      else familyOpacity = 1; // Stay
   }

   // 3b. First Scene Text (Bullies/Intro)
   // Visible at start, fades out by 20%
   const introTextOpacity = Math.max(0, 1 - scrollProgress * 5);

   // 4. Guide Visibility
   // Fades in from 60% onwards, stays till end
   const guideOpacity = Math.max(0, (scrollProgress - 0.6) * 5);
   // Guide Intro Text ("Real Hope") - visible 0.6 to 0.8
   let guideTextOpacity = 0;
   if (scrollProgress > 0.6 && scrollProgress < 0.85) {
      if (scrollProgress < 0.7) guideTextOpacity = (scrollProgress - 0.6) * 10;
      else guideTextOpacity = 1 - (scrollProgress - 0.8) * 20;
   }

   // 5. Talks Section ("Core Conversations") - visible 0.85 to 1.0
   const talksOpacity = Math.max(0, (scrollProgress - 0.82) * 10);
   const talksPointerEvents = scrollProgress > 0.8 ? 'auto' : 'none';

   // 6. Background Color transitions
   let bgColor = "bg-neutral-50";
   if (scrollProgress > 0.25 && scrollProgress < 0.6) bgColor = "bg-neutral-200";
   if (scrollProgress >= 0.6) bgColor = "bg-secondary-50";

   return (
      <div
         ref={containerRef}
         className={`relative h-[450vh] transition-colors duration-1000 ${bgColor}`}
      >
         <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center">

            {/* --- NARRATIVE ELEMENTS --- */}

            {/* 1. SCENE: BULLIES (Left Background) */}
            <div
               className="absolute left-[10%] top-[40%] transition-opacity duration-300 pointer-events-none"
               style={{ opacity: bulliesOpacity }}
            >
               <img
                  src={imgBullies}
                  alt="Bullies silhouetted"
                  className="h-64 md:h-96 object-contain mix-blend-multiply opacity-80"
               />
            </div>

            {/* 1b. SCENE: INTRO TEXT */}
            <div
               className="absolute top-[20%] md:top-[25%] left-[10%] md:left-[15%] max-w-md pointer-events-none z-10"
               style={{ opacity: introTextOpacity }}
            >
               <h2 className="text-5xl md:text-7xl font-serif text-neutral-900 font-light mb-4">
                  The weight of <br /> <span className="italic text-neutral-400">expectations.</span>
               </h2>
               <p className="text-lg text-neutral-600 font-light">
                  Students navigate a complex social landscape every day.
                  One wrong step can feel like the end of the world.
               </p>
            </div>

            {/* 2. SCENE: FAMILY CONFLICT (Background) */}
            <div
               className="absolute inset-0 flex items-center justify-center pointer-events-none"
               style={{ opacity: familyOpacity }}
            >
               <div className="text-center px-4 max-w-4xl mx-auto">
                  <img
                     src={imgFamilyConflict}
                     alt="Family conflict"
                     className="h-48 md:h-64 mx-auto object-contain mix-blend-multiply opacity-80 mb-6"
                  />
                  <h2 className="text-2xl md:text-5xl font-serif text-neutral-800 font-light tranneutral-y-4 mb-8">
                     Why schools & families <span className="italic text-neutral-500">need this.</span>
                  </h2>

                  {/* points */}
                  <div className="grid md:grid-cols-3 gap-8 text-left text-neutral-700">
                     <div className="bg-white/60 p-6 backdrop-blur-sm rounded-sm border border-neutral-200">
                        <span className="text-secondary-600 font-bold text-xl block mb-2">01.</span>
                        <h4 className="font-bold text-sm uppercase tracking-wide mb-2">Escalating Behaviour</h4>
                        <p className="text-xs leading-relaxed">Small issues turn into bigger legal and social issues if not addressed early.</p>
                     </div>
                     <div className="bg-white/60 p-6 backdrop-blur-sm rounded-sm border border-neutral-200" style={{ transitionDelay: '100ms' }}>
                        <span className="text-secondary-600 font-bold text-xl block mb-2">02.</span>
                        <h4 className="font-bold text-sm uppercase tracking-wide mb-2">Reactive vs. Proactive</h4>
                        <p className="text-xs leading-relaxed">We provide a framework to get ahead of the problem before it starts.</p>
                     </div>
                     <div className="bg-white/60 p-6 backdrop-blur-sm rounded-sm border border-neutral-200" style={{ transitionDelay: '200ms' }}>
                        <span className="text-secondary-600 font-bold text-xl block mb-2">03.</span>
                        <h4 className="font-bold text-sm uppercase tracking-wide mb-2">The "Scared Straight" Trap</h4>
                        <p className="text-xs leading-relaxed">We replace shame and lectures with understanding and connection.</p>
                     </div>
                  </div>
               </div>
            </div>


            {/* 3. HERO: THE STUDENT (Moving Character) */}
            {/* Fades out at the end so he doesn't clutter the Talks section */}
            <div
               className="absolute bottom-0 transition-all duration-100 ease-linear z-20 pointer-events-none"
               style={{
                  left: `${10 + studentLeftPos}%`,
                  transform: `translateX(-50%) scale(${1 - scrollProgress * 0.2})`,
                  opacity: 1 - Math.max(0, (scrollProgress - 0.75) * 5)
               }}
            >
               <img
                  src={imgBulliedStudent}
                  alt="Student figure"
                  className="h-[50vh] md:h-[70vh] object-contain drop-shadow-2xl mix-blend-multiply"
               />
            </div>


            {/* 4. SCENE: THE GUIDE (Right Side, appears at end) */}
            <div
               className="absolute right-[5%] md:right-[15%] bottom-0 z-10 transition-opacity duration-500 flex flex-col items-end pointer-events-none"
               style={{ opacity: guideOpacity }}
            >
               {/* 4a. Intro Text "Real Hope" */}
               <div className="text-right mb-8 mr-4 md:mr-12">
                  <div style={{ opacity: guideOpacity > 0.5 ? 1 : 0, transition: 'opacity 1s, transform 1s', transform: guideOpacity > 0.5 ? 'translateY(0)' : 'translateY(20px)' }}>
                     <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-600 mb-2">The Solution</h2>
                     <h1 className="text-5xl md:text-8xl font-serif text-secondary-600 font-bold">
                        Real Hope.
                     </h1>
                  </div>
                  <p className="text-neutral-500 text-lg md:text-xl max-w-sm mt-4 ml-auto" style={{ opacity: guideOpacity > 0.8 ? 1 : 0, transition: 'opacity 1s 0.2s' }}>
                     Guidance that understands where they come from. <br />
                     <span className="font-bold text-primary-900 border-b border-secondary-300">Connection over correction.</span>
                  </p>

                  {/* Transition Prompt to Next Section */}
                  <div
                     className="flex justify-end mt-8 items-center gap-2 text-neutral-400 text-xs font-bold uppercase tracking-widest animate-pulse"
                     style={{ opacity: guideOpacity > 0.9 ? 1 : 0, transition: 'opacity 1s 1s' }}
                  >
                     Explore the Talks <ArrowDown size={16} />
                  </div>
               </div>

               <img
                  src="/assets/guide_figure.png"
                  alt="Mindy the Guide"
                  className="h-[60vh] md:h-[75vh] object-contain drop-shadow-xl mix-blend-multiply tranneutral-x-12"
               />
            </div>

            {/* 5. TALKS CONTENT (Appears alongside guide) */}
            <div
               className="absolute left-[5%] md:left-[10%] top-[15%] bottom-[15%] w-[60%] z-30 flex flex-col justify-center"
               style={{ opacity: talksOpacity, pointerEvents: talksPointerEvents }}
            >
               <h2 className="text-4xl md:text-6xl font-serif text-primary-900 mb-8 leading-tight">
                  Three Core <br /> Conversations
               </h2>

               <div className="grid gap-4">
                  {[
                     { title: "Elementary", subtitle: "Confidence & Belonging", desc: "Understanding bullying and building empathy." },
                     { title: "High School", subtitle: "Identity & Pressure", desc: "Direct talk on insecurity and decision-making." },
                     { title: "Parents", subtitle: "Raising Confident Kids", desc: "How strong relationships reduce vulnerability." }
                  ].map((talk, i) => (
                     <div key={i} className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-secondary-500 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                           <div>
                              <h3 className="text-xs font-bold uppercase tracking-widest text-secondary-600 mb-1">{talk.title}</h3>
                              <h4 className="text-xl font-serif text-primary-900 mb-2">{talk.subtitle}</h4>
                              <p className="text-sm text-neutral-500">{talk.desc}</p>
                           </div>
                           <ArrowDown className="-rotate-90 text-neutral-300" size={20} />
                        </div>
                     </div>
                  ))}
               </div>

               {/* Transition Prompt */}
               <div className="mt-8 text-neutral-400 text-xs font-bold uppercase tracking-widest animate-pulse flex items-center gap-2">
                  Meet Mindy <ArrowDown size={16} />
               </div>
            </div>

            {/* --- SCROLL PROMPTS --- */}
            {scrollProgress < 0.1 && (
               <div className="absolute bottom-8 left-1/2 -tranneutral-x-1/2 text-neutral-400 animate-bounce text-sm uppercase tracking-widest">
                  Scroll for the story
               </div>
            )}

         </div>
      </div>
   );
};



export default ScrollyNarrative;
