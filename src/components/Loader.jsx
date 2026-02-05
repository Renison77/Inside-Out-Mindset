import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 2500); // 2.5s loading time
      return () => clearTimeout(timer);
   }, []);

   return (
      <AnimatePresence>
         {isLoading && (
            <motion.div
               className="fixed inset-0 z-[100] bg-navy-950 flex flex-col items-center justify-center p-6 text-white"
               initial={{ opacity: 1 }}
               exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            >
               {/* Conceptual Knot Animation */}
               <svg width="120" height="120" viewBox="0 0 100 100" className="mb-8">
                  <motion.path
                     d="M 20 50 C 20 20, 80 20, 80 50 C 80 80, 20 80, 20 50" // Simple loop
                     fill="none"
                     stroke="#d97706" // Amber-600
                     strokeWidth="4"
                     strokeLinecap="round"
                     initial={{ pathLength: 0, opacity: 0 }}
                     animate={{
                        pathLength: [0, 1, 1, 0],
                        opacity: [0, 1, 1, 0],
                        pathOffset: [0, 0, 1, 1]
                     }}
                     transition={{
                        duration: 2.2,
                        ease: "easeInOut",
                        times: [0, 0.4, 0.6, 1]
                     }}
                  />
                  <motion.path
                     d="M 80 50 C 80 80, 20 80, 20 50" // Other half
                     fill="none"
                     stroke="#fcd34d" // Amber-300
                     strokeWidth="4"
                     strokeLinecap="round"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                     style={{ opacity: 0.5 }}
                  />
               </svg>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
               >
                  <h3 className="font-serif text-2xl italic mb-2 tracking-wide text-amber-500">Unravelling the complex.</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Inside Out Mindset</p>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default Loader;
