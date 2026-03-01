import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
   const { i18n } = useTranslation();

   const handleLanguageChange = (e) => {
      i18n.changeLanguage(e.target.value);
   };

   return (
      <select
         onChange={handleLanguageChange}
         value={i18n.resolvedLanguage}
         className="bg-transparent text-primary-900 border border-primary-900/20 text-sm font-bold uppercase tracking-widest px-2 py-1 rounded-sm focus:outline-none focus:border-primary-900 cursor-pointer transition-colors"
         aria-label="Select Language"
      >
         <option value="en">English</option>
         <option value="pa">ਪੰਜਾਬੀ</option>
      </select>
   );
};

export default LanguageSwitcher;
