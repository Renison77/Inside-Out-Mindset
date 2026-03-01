import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ isMobile }) => {
   const { i18n } = useTranslation();

   const handleLanguageChange = (e) => {
      i18n.changeLanguage(e.target.value);
   };

   return (
      <select
         onChange={handleLanguageChange}
         value={i18n.resolvedLanguage}
         className={`bg-transparent text-sm font-bold uppercase tracking-widest px-2 py-1 rounded-sm focus:outline-none cursor-pointer transition-colors ${isMobile
               ? "text-white border border-white/20 focus:border-white"
               : "text-primary-900 border border-primary-900/20 focus:border-primary-900"
            }`}
         aria-label="Select Language"
      >
         <option value="en" className={isMobile ? "text-primary-900" : ""}>English</option>
         <option value="pa" className={isMobile ? "text-primary-900" : ""}>ਪੰਜਾਬੀ</option>
      </select>
   );
};

export default LanguageSwitcher;
