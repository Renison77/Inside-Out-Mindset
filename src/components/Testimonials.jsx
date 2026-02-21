import React from 'react';
import { Reveal } from './Reveal';
import { Quote } from 'lucide-react';

const Testimonials = () => {
   const quotes = [
      {
         text: "Mindy’s approach is exactly what our district needs. He doesn't just share a tragic story; he provides students with the vocabulary to understand their own emotional triggers.",
         author: "High School Principal",
         location: "Surrey School District",
         image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
         text: "As law enforcement, we see the end result of bad decisions. Mindy gets to them before we do. His credibility with youth is unmatched because he speaks their language without glorifying the lifestyle.",
         author: "Youth Liaison Officer",
         location: "RCMP",
         image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
         text: "Our parent evening was packed, and the feedback was overwhelmingly positive. Having sessions available in Punjabi bridged a massive gap in our community.",
         author: "PAC President",
         location: "Burnaby",
         image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
         text: "He connects with the kids who normally tune out. The way he breaks down 'ego' vs. 'identity' completely shifted the culture in our senior classes.",
         author: "Guidance Counselor",
         location: "Langley District",
         image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
         text: "Not scared straight. Real education. He gives them the tools to pause when they are triggered. It’s trauma-informed and highly effective.",
         author: "Vice Principal",
         location: "Vancouver",
         image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
      },
   ];

   return (
      <section id="proof" className="py-24 md:py-32 bg-white border-t border-neutral-100 relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">

            <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
               <Reveal>
                  <div className="px-4 py-1.5 bg-neutral-100 text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-2 mb-6 border border-neutral-200">
                     The De-Risking Wall
                  </div>
                  <h2 className="text-4xl md:text-6xl lg:text-[72px] font-sans font-medium text-primary-900 mb-6 leading-[0.9] tracking-tighter">
                     Safe, Effective, <span className="font-serif italic text-secondary-600 font-light block mt-2">Professional.</span>
                  </h2>
               </Reveal>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
               {quotes.map((quote, i) => (
                  <Reveal delay={i * 0.15} key={i}>
                     <div className="bg-neutral-50 p-8 rounded-sm border border-neutral-200 hover:border-secondary-300 hover:shadow-xl transition-all break-inside-avoid">
                        <Quote size={28} className="text-secondary-400 mb-6 opacity-50" />
                        <p className="text-neutral-600 font-light text-lg xl:text-xl leading-relaxed mb-8">"{quote.text}"</p>
                        <div className="flex items-center gap-4 pt-6 border-t border-neutral-200/60">
                           <img src={quote.image} alt={quote.author} className="w-12 h-12 rounded-full object-cover" />
                           <div>
                              <p className="text-sm font-bold text-primary-900">{quote.author}</p>
                              <p className="text-[10px] uppercase tracking-widest text-secondary-600 mt-1">{quote.location}</p>
                           </div>
                        </div>
                     </div>
                  </Reveal>
               ))}
            </div>

         </div>
      </section>
   );
};

export default Testimonials;
