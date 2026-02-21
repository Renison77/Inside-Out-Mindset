import React from 'react';
import { Reveal } from './Reveal';
import { Check, Clock, Users, School } from 'lucide-react';

const Formats = () => {
   const formats = [
      { label: "Assembly talk: 45–60 minutes", icon: <Clock size={16} /> },
      { label: "Two-session option (split by grade)", icon: <School size={16} /> },
      { label: "Classroom / small group workshop", icon: <Users size={16} /> },
      { label: "Staff or leadership session", icon: <Check size={16} /> },
      { label: "Parent session (English or Punjabi)", icon: <Check size={16} /> },
      { label: "Available across BC (travel by request)", icon: <Check size={16} /> },
   ];

   return (
      <section className="py-24 bg-white">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">

               <Reveal>
                  <div className="bg-neutral-50 p-10 border border-neutral-100 rounded-sm">
                     <h3 className="font-serif text-3xl text-primary-900 mb-8">Formats & Logistics</h3>
                     <ul className="space-y-4">
                        {formats.map((item, i) => (
                           <li key={i} className="flex items-center gap-4 text-neutral-700">
                              <span className="text-secondary-500 bg-secondary-50 p-2 rounded-full">{item.icon}</span>
                              <span className="font-medium">{item.label}</span>
                           </li>
                        ))}
                     </ul>
                     <div className="mt-8 pt-6 border-t border-neutral-200">
                        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                           AV Needs: Microphone recommended, projector optional.
                        </p>
                     </div>
                  </div>
               </Reveal>

               <Reveal delay={0.2}>
                  <div className="relative h-full flex flex-col justify-center">
                     <h3 className="text-2xl font-serif italic text-primary-800 mb-6">"Easy to work with from start to finish."</h3>
                     <p className="text-neutral-600 mb-8">
                        We handle the scheduling coordination so you can focus on your students.
                     </p>
                     <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="self-start text-xs font-bold uppercase tracking-widest text-secondary-600 border-b-2 border-secondary-600 pb-1 hover:text-primary-900 hover:border-primary-900 transition-all">
                        Check Availability
                     </button>
                  </div>
               </Reveal>

            </div>
         </div>
      </section>
   );
};

export default Formats;
