import React from 'react';
import { Reveal } from './Reveal';
import { Globe2 } from 'lucide-react';

const Punjabi = () => {
   return (
      <section className="py-20 bg-navy-900 border-t border-navy-800 text-white">
         <div className="max-w-[1400px] mx-auto px-6">
            <Reveal>
               <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden">

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                     <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                        <Globe2 size={48} className="text-white" />
                     </div>

                     <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">Punjabi-language parent sessions available</h3>
                        <p className="text-amber-100 leading-relaxed max-w-2xl text-lg">
                           Fluent in Punjabi and understanding the nuances of immigrant culture, Mindy speaks directly to families in the language and context that lands.
                           This cultural bridge is often missing and makes the difference.
                        </p>
                     </div>

                     <div className="flex-shrink-0">
                        <span className="inline-block px-6 py-2 border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest text-white/90">
                           Cultural Connection
                        </span>
                     </div>
                  </div>
               </div>
            </Reveal>
         </div>
      </section>
   );
};

export default Punjabi;
