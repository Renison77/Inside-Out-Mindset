import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, Calendar, Users, MessageSquare } from 'lucide-react';

const Process = () => {
   const steps = [
      {
         step: "01",
         title: "Choose the audience",
         desc: "High School, Parents, or Staff/Leadership. We have tailored content for each group.",
         icon: <Users size={24} />
      },
      {
         step: "02",
         title: "Choose the format",
         desc: "Full school assembly, split sessions by grade, or intimate workshops.",
         icon: <MessageSquare size={24} />
      },
      {
         step: "03",
         title: "Confirm date + goals",
         desc: "I tailor the session to your specific challenges and deliver practical takeaways.",
         icon: <Calendar size={24} />
      }
   ];

   return (
      <section id="process" className="py-24 md:py-32 bg-white relative">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6">

            <div className="text-center mb-20 max-w-2xl mx-auto">
               <Reveal>
                  <h2 className="text-xs font-bold text-secondary-600 uppercase tracking-[0.3em] mb-4">Process</h2>
                  <h3 className="text-3xl md:text-5xl font-sans font-medium text-primary-900 mb-6">How booking works</h3>
                  <div className="h-1 w-20 bg-secondary-500 mx-auto rounded-full"></div>
               </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">

               {/* Connector Line (Desktop) */}
               <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-[2px] bg-neutral-100 z-0"></div>

               {steps.map((item, i) => (
                  <Reveal delay={i * 0.2} key={i} fullHeight>
                     <div className="relative p-8 md:p-6 lg:p-10 border border-neutral-100 bg-white shadow-sm hover:shadow-xl hover:-tranneutral-y-2 transition-all duration-300 rounded-sm text-center group z-10 h-full flex flex-col items-center">
                        <div className="w-16 h-16 mx-auto bg-primary-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-8 shadow-lg shadow-primary-900/20 group-hover:scale-110 group-hover:bg-secondary-500 transition-all relative z-20 border-[6px] border-white">
                           {item.step}
                        </div>
                        <h4 className="text-xl font-serif italic text-primary-900 mb-4">{item.title}</h4>
                        <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
                     </div>
                  </Reveal>
               ))}

            </div>

            <Reveal delay={0.6}>
               <div className="mt-20 text-center flex flex-col items-center gap-6">
                  <button
                     onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                     className="inline-flex items-center gap-3 px-10 py-5 bg-primary-900 text-white font-bold uppercase tracking-widest hover:bg-secondary-500 hover:text-white transition-all shadow-xl rounded-sm"
                  >
                     Request Booking <ArrowRight size={18} />
                  </button>
                  <a href="#" className="text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-primary-900 border-b border-transparent hover:border-primary-900 transition-all pb-1">
                     Book a 15-minute call
                  </a>
               </div>
            </Reveal>

         </div>
      </section>
   );
};

export default Process;
