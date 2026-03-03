import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { useTranslation } from 'react-i18next';

const Booking = () => {
   const { t } = useTranslation();
   const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

   const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('submitting');

      const form = e.target;
      const formData = new FormData(form);

      // 1. Honeypot check (Tier 1 protection)
      // If the hidden 'bot_check' field has a value, silently reject or fake success
      if (formData.get('bot_check')) {
         console.log("Bot detected (honeypot field filled).");
         setStatus('success'); // Fake success so the bot doesn't know it failed
         form.reset();
         setTimeout(() => setStatus('idle'), 5000);
         return;
      }

      // 2. Rudimentary Input Validation (Tier 3 on client side)
      // Check for links in the Notes field (common bot spam tactic)
      const notes = formData.get('Notes') || "";
      const urlPattern = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
      if (urlPattern.test(notes)) {
         console.warn("Spam detected: Links are not allowed in the notes field.");
         // We can show a regular error or just silently block it too
         setStatus('error');
         return;
      }
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
                  <h2 className="text-xs font-bold text-secondary-600 uppercase tracking-[0.3em] mb-6">{t("booking.kicker")}</h2>
                  <h3 className="text-4xl md:text-6xl font-sans font-medium text-primary-900 mb-6">{t("booking.title")}</h3>
                  <p className="text-neutral-500 font-light text-lg max-w-2xl mx-auto">
                     {t("booking.description")}
                  </p>
               </div>
            </Reveal>

            <Reveal delay={0.2}>
               <div className="bg-white p-6 md:p-12 border border-neutral-200 rounded-sm shadow-xl relative">

                  {status === 'success' ? (
                     <div className="text-center py-12">
                        <h4 className="text-2xl font-bold text-primary-900 mb-4">{t("booking.success_title")}</h4>
                        <p className="text-neutral-600">{t("booking.success_message")}</p>
                        <button
                           onClick={() => setStatus('idle')}
                           className="mt-8 px-8 py-3 bg-neutral-100 hover:bg-neutral-200 text-primary-900 text-sm font-bold uppercase tracking-widest transition-colors rounded-sm"
                        >
                           {t("booking.send_another")}
                        </button>
                     </div>
                  ) : (
                     <form className="space-y-8" onSubmit={handleSubmit}>

                        {status === 'error' && (
                           <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-sm">
                              {t("booking.error_message")}
                           </div>
                        )}

                        {/* Honeypot field - Hidden from real users, visible to dumb bots */}
                        <div style={{ display: 'none' }} aria-hidden="true">
                           <label htmlFor="bot_check">Leave this field empty</label>
                           <input type="text" name="bot_check" id="bot_check" tabIndex="-1" autoComplete="off" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">{t("booking.label_name")}</label>
                              <input required name="Name" type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder={t("booking.placeholder_name")} />
                           </div>
                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">{t("booking.label_role")}</label>
                              <input required name="Role" type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder={t("booking.placeholder_role")} />
                           </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">{t("booking.label_email")}</label>
                              <input required name="Email" type="email" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder={t("booking.placeholder_email")} />
                           </div>
                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">{t("booking.label_phone")}</label>
                              <input name="Phone" type="tel" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder={t("booking.placeholder_phone")} />
                           </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2 group">
                              <label htmlFor="audience-select" className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">{t("booking.label_audience")}</label>
                              <select name="Audience" id="audience-select" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all rounded-sm appearance-none">
                                 <option value="High School Students">{t("booking.audience_hs")}</option>
                                 <option value="Parents">{t("booking.audience_parents")}</option>
                                 <option value="Staff / Leadership">{t("booking.audience_staff")}</option>
                                 <option value="Organization / Government">{t("booking.audience_org")}</option>
                                 <option value="Other">{t("booking.audience_other")}</option>
                              </select>
                           </div>
                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">{t("booking.label_location")}</label>
                              <input name="Location" type="text" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder={t("booking.placeholder_location")} />
                           </div>
                        </div>

                        <div className="space-y-2 group">
                           <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">{t("booking.label_notes")}</label>
                           <textarea required name="Notes" rows="4" className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder={t("booking.placeholder_notes")}></textarea>
                        </div>

                        <button
                           type="submit"
                           disabled={status === 'submitting'}
                           className="w-full py-5 bg-primary-900 hover:bg-secondary-600 disabled:bg-neutral-400 disabled:cursor-not-allowed text-white font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-secondary-500/20 text-xs md:text-sm rounded-sm"
                        >
                           {status === 'submitting' ? t("booking.btn_sending") : t("booking.btn_send")}
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
