import React from 'react';
import { Reveal } from './Reveal';

const Booking = () => {
   return (
      <section id="booking" className="py-24 md:py-32 bg-navy-950 text-white relative border-t border-navy-900">
         <div className="max-w-[1000px] mx-auto px-6 relative z-10">

            <Reveal>
               <div className="text-center mb-16">
                  <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-6">Contact</h2>
                  <h3 className="text-5xl md:text-6xl font-sans font-medium text-white mb-6">Request a Booking</h3>
                  <p className="text-slate-400 font-light text-lg max-w-2xl mx-auto">
                     Tell us about your audience and goals. We’ll respond with availability and recommended format within 48 hours.
                  </p>
               </div>
            </Reveal>

            <Reveal delay={0.2}>
               <div className="bg-navy-900/40 p-8 md:p-12 border border-white/5 backdrop-blur-sm rounded-sm shadow-2xl relative">
                  <div className="absolute top-0 right-0 p-20 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>

                  <form className="space-y-8">

                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Name</label>
                           <input type="text" className="w-full p-4 bg-navy-950/80 border border-slate-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-700 rounded-sm" placeholder="Full Name" />
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Role / Organization</label>
                           <input type="text" className="w-full p-4 bg-navy-950/80 border border-slate-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-700 rounded-sm" placeholder="Principal, Teacher, etc." />
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Email</label>
                           <input type="email" className="w-full p-4 bg-navy-950/80 border border-slate-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-700 rounded-sm" placeholder="email@school.com" />
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Phone</label>
                           <input type="tel" className="w-full p-4 bg-navy-950/80 border border-slate-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-700 rounded-sm" placeholder="(555) 555-5555" />
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Audience</label>
                           <select className="w-full p-4 bg-navy-950/80 border border-slate-800 text-slate-300 focus:outline-none focus:border-amber-500 transition-all rounded-sm appearance-none">
                              <option>High School Students</option>
                              <option>Parents</option>
                              <option>Staff / Leadership</option>
                              <option>Organization / Government</option>
                              <option>Other</option>
                           </select>
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Location</label>
                           <input type="text" className="w-full p-4 bg-navy-950/80 border border-slate-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-700 rounded-sm" placeholder="City, BC" />
                        </div>
                     </div>

                     <div className="space-y-2 group">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Notes / Goals / Preferred Dates</label>
                        <textarea rows="4" className="w-full p-4 bg-navy-950/80 border border-slate-800 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-700 rounded-sm" placeholder="Tell us about your needs..."></textarea>
                     </div>

                     <button type="button" className="w-full py-5 bg-amber-600 hover:bg-white hover:text-navy-950 text-white font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-white/10 text-xs md:text-sm rounded-sm">
                        Send Request
                     </button>

                  </form>
               </div>
            </Reveal>

         </div>
      </section>
   );
};

export default Booking;
