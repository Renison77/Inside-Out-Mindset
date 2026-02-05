import React from 'react';
import { Reveal } from './Reveal';

const Booking = () => {
   return (
      <section id="booking" className="py-32 bg-navy-900 text-white relative">
         <div className="max-w-4xl mx-auto px-6 relative z-10">

            <Reveal>
               <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Request a Booking</h2>
                  <p className="text-slate-400 font-light text-lg">Tell us what you’re planning and we’ll respond within 48 hours.</p>
               </div>
            </Reveal>

            <Reveal delay={0.2}>
               <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm rounded-sm shadow-2xl">
                  <form className="space-y-8">

                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Name</label>
                           <input type="text" className="w-full p-4 bg-navy-950/50 border border-slate-700 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600" placeholder="Full Name" />
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Role / Organization</label>
                           <input type="text" className="w-full p-4 bg-navy-950/50 border border-slate-700 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600" placeholder="Principal, Teacher, etc." />
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Email</label>
                           <input type="email" className="w-full p-4 bg-navy-950/50 border border-slate-700 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600" placeholder="email@school.com" />
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Phone</label>
                           <input type="tel" className="w-full p-4 bg-navy-950/50 border border-slate-700 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600" placeholder="(555) 555-5555" />
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Audience</label>
                           <select className="w-full p-4 bg-navy-950/50 border border-slate-700 text-slate-300 focus:outline-none focus:border-amber-500 transition-all">
                              <option>Elementary Students</option>
                              <option>High School Students</option>
                              <option>Parents (English)</option>
                              <option>Parents (Punjabi)</option>
                              <option>Staff / Leadership</option>
                              <option>Other</option>
                           </select>
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Location</label>
                           <input type="text" className="w-full p-4 bg-navy-950/50 border border-slate-700 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600" placeholder="City, BC" />
                        </div>
                     </div>

                     <div className="space-y-2 group">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-focus-within:text-amber-500 transition-colors">Notes / Goals / Preferred Dates</label>
                        <textarea rows="4" className="w-full p-4 bg-navy-950/50 border border-slate-700 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600" placeholder="Tell us about your needs..."></textarea>
                     </div>

                     <button type="button" className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-white font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-amber-500/20 text-sm">
                        Request Booking
                     </button>

                  </form>
               </div>
            </Reveal>

         </div>
      </section>
   );
};

export default Booking;
