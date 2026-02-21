import React from 'react';
import { Reveal } from './Reveal';
import { Download, ArrowRight } from 'lucide-react';

const LeadCapture = () => {
   return (
      <section className="py-24 bg-primary-950 relative overflow-hidden">
         {/* Decorative element */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

         <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10">
            <div className="bg-primary-900/50 border border-primary-800 rounded-sm p-8 md:p-16 text-center shadow-2xl backdrop-blur-sm">
               <Reveal>
                  <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-secondary-500/20">
                     <Download size={28} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-sans font-medium text-white mb-6">
                     Not ready to book?
                  </h2>
                  <p className="text-neutral-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                     Download the <span className="text-white font-medium">Educator's Pre-Session Guide</span>. Get an outline of the core concepts Mindy teaches, his requirements, and sample student takeaways to share with your committee.
                  </p>

                  <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4" onSubmit={(e) => { e.preventDefault(); alert("Lead capture functional in production!"); }}>
                     <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        className="flex-grow px-6 py-4 bg-primary-950 border border-primary-800 text-white placeholder-neutral-500 focus:outline-none focus:border-secondary-500 rounded-sm transition-colors"
                     />
                     <button
                        type="submit"
                        className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-sm uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-3 rounded-sm whitespace-nowrap"
                     >
                        Get the Guide <ArrowRight size={16} />
                     </button>
                  </form>
               </Reveal>
            </div>
         </div>
      </section>
   );
};

export default LeadCapture;
