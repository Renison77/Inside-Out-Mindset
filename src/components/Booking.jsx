import React, { useState } from 'react';
import { Reveal } from './Reveal';

const Booking = () => {
   const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

   const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('submitting');

      const form = e.target;
      const formData = new FormData(form);
      const url = import.meta.env.VITE_GOOGLE_WEB_APP_URL;

      if (!url) {
         console.error("VITE_GOOGLE_WEB_APP_URL is not defined in the environment.");
         setStatus('error');
         return;
      }

      try {
         // Using fetch with no-cors because Google Apps Script always redirects
         // on success which causes CORS errors in the browser.
         // An opaque response is returned, so we assume success if no network error occurred.
         await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: formData,
         });

         setStatus('success');
         form.reset();
         // Reset status after a few seconds
         setTimeout(() => setStatus('idle'), 5000);
      } catch (error) {
         console.error("Form submission error:", error);
         setStatus('error');
      }
   };

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

                  {status === 'success' ? (
                     <div className="text-center py-12">
                        <h4 className="text-2xl font-bold text-primary-900 mb-4">Request Sent Successfully!</h4>
                        <p className="text-neutral-600">Thank you for reaching out. We will get back to you within 48 hours.</p>
                        <button
                           onClick={() => setStatus('idle')}
                           className="mt-8 px-8 py-3 bg-neutral-100 hover:bg-neutral-200 text-primary-900 text-sm font-bold uppercase tracking-widest transition-colors rounded-sm"
                        >
                           Send Another Request
                        </button>
                     </div>
                  ) : (
                     <form className="space-y-8" onSubmit={handleSubmit}>

                        {status === 'error' && (
                           <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-sm">
                              There was an error sending your request. Please try again or ensure the Google Web App URL is correctly configured.
                           </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Name *</label>
                              <input required name="Name" type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="Full Name" />
                           </div>
                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Role / Organization *</label>
                              <input required name="Role" type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="Principal, Teacher, etc." />
                           </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Email *</label>
                              <input required name="Email" type="email" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="email@school.com" />
                           </div>
                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Phone</label>
                              <input name="Phone" type="tel" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="(555) 555-5555" />
                           </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2 group">
                              <label htmlFor="audience-select" className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Audience</label>
                              <select name="Audience" id="audience-select" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all rounded-sm appearance-none">
                                 <option value="High School Students">High School Students</option>
                                 <option value="Parents">Parents</option>
                                 <option value="Staff / Leadership">Staff / Leadership</option>
                                 <option value="Organization / Government">Organization / Government</option>
                                 <option value="Other">Other</option>
                              </select>
                           </div>
                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Location</label>
                              <input name="Location" type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="City, BC" />
                           </div>
                        </div>

                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Notes / Goals / Preferred Dates *</label>
                           <textarea required name="Notes" rows="4" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="Tell us about your needs..."></textarea>
                        </div>

                        <button
                           type="submit"
                           disabled={status === 'submitting'}
                           className="w-full py-5 bg-primary-900 hover:bg-secondary-600 disabled:bg-neutral-400 disabled:cursor-not-allowed text-white font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-secondary-500/20 text-xs md:text-sm rounded-sm"
                        >
                           {status === 'submitting' ? 'Sending...' : 'Send Request'}
                        </button>

                     </form>
                  )}
               </div>
            </Reveal>

         </div>
      </section>
   );
};

export default Booking;
