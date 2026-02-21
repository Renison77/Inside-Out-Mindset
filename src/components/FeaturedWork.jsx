import React from 'react';
import { Reveal } from './Reveal';
import { Play } from 'lucide-react';

const FeaturedWork = () => {
   const media = [
      {
         title: "Surrey RCMP Prevention Video",
         desc: "End Gang Life Campaign",
         image: "https://images.pexels.com/photos/305221/pexels-photo-305221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Placeholder: Police/Community
      },
      {
         title: "Omni Interview",
         desc: "With Surrey RCMP Leadership",
         image: "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Placeholder: Interview
      },
      {
         title: "CTV Feature",
         desc: "Prevention & Youth Decision-Making",
         image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Placeholder: News
      }
   ];

   return (
      <section className="py-24 bg-neutral-50 relative">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6">

            <Reveal>
               <h2 className="text-xs font-bold text-primary-900 uppercase tracking-[0.3em] mb-12 border-b border-neutral-200 pb-4">Featured Work & Media</h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
               {media.map((item, i) => (
                  <Reveal delay={i * 0.2} key={i}>
                     <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-sm aspect-video mb-4 bg-primary-900 shadow-xl">
                           <div className="absolute inset-0 bg-primary-900/40 group-hover:bg-primary-900/20 transition-all z-10"></div>
                           <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                           />
                           <div className="absolute inset-0 flex items-center justify-center z-20">
                              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-secondary-500 group-hover:border-secondary-500 transition-all">
                                 <Play size={24} className="text-white ml-1" fill="currentColor" />
                              </div>
                           </div>
                        </div>
                        <h4 className="text-lg font-bold text-primary-900 group-hover:text-secondary-600 transition-colors">{item.title}</h4>
                        <p className="text-sm text-neutral-500">{item.desc}</p>
                     </div>
                  </Reveal>
               ))}
            </div>

            <p className="mt-12 text-center text-xs text-neutral-400 italic">
               Full media links available upon request.
            </p>

         </div>
      </section>
   );
};

export default FeaturedWork;
