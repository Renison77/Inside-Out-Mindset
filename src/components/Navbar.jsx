import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const navLinks = [
      { name: "Speaking", href: "#talks" },
      { name: "Outcomes", href: "#outcomes" },
      { name: "About", href: "#about" },
   ];

   const scrollTo = (id) => {
      setIsOpen(false);
      const element = document.querySelector(id);
      if (element) {
         const y = element.getBoundingClientRect().top + window.scrollY - 100;
         window.scrollTo({ top: y, behavior: 'smooth' });
      }
   };

   return (
      <>
         <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-slate-200" : "bg-transparent py-4 md:py-6 border-transparent"}`}>
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex justify-between items-center">

               {/* Logo */}
               <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('#hero')}>
                  <div className={`flex items-center justify-center font-serif font-bold rounded-sm transition-all duration-300 ${scrolled ? "text-navy-900" : "text-white"}`}>
                     {/* Logo Placeholder or SVG - Using Text as placeholder for now, ensuring size constraints */}
                     <span className="text-[20px] md:text-[24px] uppercase tracking-tight leading-none">
                        INSIDE <span className="text-amber-600 italic">OUT</span> MINDSET
                     </span>
                  </div>
               </div>

               {/* Desktop Nav */}
               <div className="hidden lg:flex items-center space-x-8">
                  {navLinks.map((link) => (
                     <button
                        key={link.name}
                        onClick={() => scrollTo(link.href)}
                        className={`text-[13px] font-bold uppercase tracking-[0.15em] transition-colors relative group py-2 ${scrolled ? "text-slate-500 hover:text-navy-900" : "text-white/90 hover:text-white"}`}
                     >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                     </button>
                  ))}
                  <button
                     onClick={() => scrollTo('#booking')}
                     className="ml-4 px-6 py-3 text-[13px] font-bold uppercase tracking-widest bg-navy-900 text-white border border-navy-900 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 rounded-sm"
                  >
                     Book Now
                  </button>
               </div>

               {/* Mobile Toggle */}
               <div className="lg:hidden">
                  <button onClick={() => setIsOpen(true)} className={`p-2 transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}>
                     <Menu size={24} />
                  </button>
               </div>
            </div>

         </nav>

         {/* Mobile Menu Overlay - Move entirely outside the nav element to prevent inheritance issues */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="fixed inset-0 bg-navy-900 z-[100] flex flex-col justify-center items-center isolate"
               >
                  <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white p-2 hover:rotate-90 transition-transform duration-300">
                     <X size={32} />
                  </button>

                  <div className="flex flex-col gap-6 text-center">
                     {navLinks.map((link) => (
                        <button
                           key={link.name}
                           onClick={() => scrollTo(link.href)}
                           className="text-2xl font-serif text-white hover:text-amber-500 font-light transition-colors"
                        >
                           {link.name}
                        </button>
                     ))}
                     <button
                        onClick={() => scrollTo('#booking')}
                        className="mt-6 px-10 py-4 bg-amber-500 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-colors rounded-sm"
                     >
                        Book Now
                     </button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default Navbar;
