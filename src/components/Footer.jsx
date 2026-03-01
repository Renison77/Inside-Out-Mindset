import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
   const { t } = useTranslation();
   return (
      <footer className="bg-primary-950 text-neutral-300 border-t border-primary-900 pt-20 pb-10 text-sm">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6">

            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
               <div className="max-w-xs">
                  <div className="font-serif font-bold text-xl text-white mb-6 uppercase tracking-tight">
                     INSIDE <span className="text-secondary-600 italic">OUT</span> MINDSET
                  </div>
                  <p className="leading-relaxed mb-6 font-light">
                     {t("footer.description")}
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 w-full md:w-auto">
                  <div>
                     <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">{t("footer.nav_title")}</h4>
                     <ul className="space-y-3">
                        <li><a href="#talks" className="hover:text-secondary-500 transition-colors">{t("footer.nav_speaking")}</a></li>
                        <li><a href="#outcomes" className="hover:text-secondary-500 transition-colors">{t("footer.nav_outcomes")}</a></li>
                        <li><a href="#about" className="hover:text-secondary-500 transition-colors">{t("footer.nav_about")}</a></li>
                        <li><a href="#media" className="hover:text-secondary-500 transition-colors">{t("footer.nav_media")}</a></li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">{t("footer.connect_title")}</h4>
                     <ul className="space-y-3">
                        <li><a href="#booking" className="hover:text-secondary-500 transition-colors">{t("footer.connect_contact")}</a></li>
                        <li><a href="mailto:contact@insideoutmindset.com" className="hover:text-secondary-500 transition-colors">{t("footer.connect_email")}</a></li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="border-t border-primary-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

               <p className="text-xs max-w-2xl text-center md:text-left leading-relaxed opacity-90 text-neutral-200">
                  <span className="font-bold text-white block mb-2">{t("footer.disclaimer_title")}</span>
                  {t("footer.disclaimer_text")}
                  <br /><br />
                  <span className="italic">{t("footer.disclaimer_italic")}</span>
               </p>

               <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  © {new Date().getFullYear()} Inside Out Mindset
               </div>
            </div>

         </div>
      </footer>
   );
};

export default Footer;
