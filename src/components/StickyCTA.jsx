import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

const StickyCTA = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         // Show after Hero section (approx 80vh)
         if (window.scrollY > window.innerHeight * 0.8) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const scrollToBooking = () => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <AnimatePresence>
         {isVisible && (
            <motion.button
               initial={{ opacity: 0, y: -20, scale: 0.9 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: -20, scale: 0.9 }}
               transition={{ duration: 0.3 }}
               onClick={scrollToBooking}
               className="fixed top-24 right-6 z-40 bg-amber-600 hover:bg-navy-900 text-white shadow-xl shadow-amber-900/20 rounded-full px-5 py-3 flex items-center gap-3 transition-colors group hidden md:flex"
            >
               <span className="text-xs font-bold uppercase tracking-widest group-hover:text-amber-400 transition-colors">Book Now</span>
               <div className="bg-white/20 p-1 rounded-full group-hover:bg-amber-500 group-hover:text-navy-900 transition-colors">
                  <Calendar size={14} />
               </div>
            </motion.button>
         )}
      </AnimatePresence>
   );
};

export default StickyCTA;
