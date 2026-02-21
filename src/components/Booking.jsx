import React from 'react';
import { Reveal } from './Reveal';

const Booking = () => {
   return (
      <section id="booking" className="py-24 md:py-32 bg-neutral-50 relative border-t border-neutral-200">
         <div className="max-w-[1000px] mx-auto px-4 md:px-6 relative z-10">

            <Reveal>
               <div className="text-center mb-16">
                  <h2 className="text-xs font-bold text-secondary-600 uppercase tracking-[0.3em] mb-6">Contact</h2>
                  <h3 className="text-4xl md:text-6xl font-sans font-medium text-primary-900 mb-6">Request a Booking</h3>
                  <p className="text-neutral-500 font-light text-lg max-w-2xl mx-auto">
                     Tell us about your audience and goals. We’ll respond with availability and recommended format within 48 hours.
                  </p>
               </div>
            </Reveal>

            <Reveal delay={0.2}>
               <div className="bg-white p-6 md:p-12 border border-neutral-200 rounded-sm shadow-xl relative">

                  <form className="space-y-8">

                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Name</label>
                           <input type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="Full Name" />
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Role / Organization</label>
                           <input type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="Principal, Teacher, etc." />
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Email</label>
                           <input type="email" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="email@school.com" />
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Phone</label>
                           <input type="tel" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="(555) 555-5555" />
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                           <label htmlFor="audience-select" className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Audience</label>
                           <select id="audience-select" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all rounded-sm appearance-none">
                              <option>High School Students</option>
                              <option>Parents</option>
                              <option>Staff / Leadership</option>
                              <option>Organization / Government</option>
                              <option>Other</option>
                           </select>
                        </div>
                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Location</label>
                           <input type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="City, BC" />
                        </div>
                     </div>

                     <div className="space-y-2 group">
                        <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Notes / Goals / Preferred Dates</label>
                        <textarea rows="4" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="Tell us about your needs..."></textarea>
                     </div>

                     <button type="button" className="w-full py-5 bg-primary-900 hover:bg-secondary-600 text-white font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-secondary-500/20 text-xs md:text-sm rounded-sm">
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
