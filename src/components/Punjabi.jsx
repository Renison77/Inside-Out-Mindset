import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

const Punjabi = () => {
   return (
      <section className="py-24 bg-white relative overflow-hidden">

         {/* Background Pattern (Abstract Geometric - South Asian inspired modern) */}
         <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%">
               <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-primary-900" />
                  <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="currentColor" strokeWidth="0.5" className="text-secondary-500" />
               </pattern>
               <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
         </div>

         <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-sm p-8 md:p-16 shadow-2xl relative overflow-hidden text-white">

               {/* Decorative Overlay */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

               <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">

                  <div className="lg:w-1/3 flex justify-center">
                     <div className="relative">
                        <div className="absolute inset-0 bg-secondary-500 rounded-full opacity-20 animate-ping"></div>
                        <div className="relative w-24 h-24 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.4)]">
                           <Globe size={40} className="text-white" />
                        </div>
                     </div>
                  </div>

                  <div className="lg:w-2/3 text-center lg:text-left">
                     <div className="inline-block px-3 py-1 bg-secondary-500/20 text-secondary-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-secondary-500/20">
                        Connection
                     </div>
                     <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                        Reaching families in <br /><span className="text-secondary-500 italic">the language of home.</span>
                     </h3>
                     <p className="text-neutral-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                        Mindy speaks fluent Punjabi, allowing him to bridge the gap between schools and parents who might otherwise feel disconnected.
                     </p>
                     <button
                        onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center gap-3 text-white border-b border-secondary-500 pb-1 hover:text-secondary-500 transition-colors uppercase tracking-widest text-xs font-bold"
                     >
                        Book a Punjabi Session <ArrowRight size={16} />
                     </button>
                  </div>

               </div>
            </div>
         </div>
      </section>
   );
};

export default Punjabi;
