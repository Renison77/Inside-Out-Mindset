import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const navLinks = [
      { name: "Context", href: "#problem" },
      { name: "Talks", href: "#offer" },
      { name: "About", href: "#about" },
      { name: "Process", href: "#plan" },
   ];

   const scrollTo = (id) => {
      setIsOpen(false);
      const element = document.querySelector(id);
      if (element) {
         // Offset for sticky header
         const y = element.getBoundingClientRect().top + window.scrollY - 80;
         window.scrollTo({ top: y, behavior: 'smooth' });
      }
   };

   return (
      <>
         <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-slate-100 text-navy-900" : "bg-transparent py-8 text-white"}`}>
            <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">

               <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('#hero')}>
                  <div className={`w-10 h-10 flex items-center justify-center font-serif font-bold text-xl rounded-sm transition-all duration-300 ${scrolled ? "bg-navy-900 text-white" : "bg-white text-navy-900"}`}>I</div>
                  <div className="font-serif text-lg tracking-wider font-light flex flex-col leading-none">
                     <span className="font-bold">INSIDE OUT</span>
                     <span className="text-xs uppercase tracking-[0.3em] text-amber-500">Mindset</span>
                  </div>
               </div>

               {/* Desktop Nav */}
               <div className="hidden md:flex items-center space-x-10">
                  {navLinks.map((link) => (
                     <button
                        key={link.name}
                        onClick={() => scrollTo(link.href)}
                        className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors relative group ${scrolled ? "text-slate-500 hover:text-amber-600" : "text-white/80 hover:text-amber-400"}`}
                     >
                        {link.name}
                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                     </button>
                  ))}
                  <button
                     onClick={() => scrollTo('#booking')}
                     className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${scrolled ? 'border-navy-900 hover:bg-navy-900 hover:text-white' : 'bg-white border-white hover:bg-slate-50'}`}
                  >
                     Book Now
                  </button>
               </div>

               {/* Mobile Toggle */}
               <div className="md:hidden">
                  <button onClick={() => setIsOpen(true)} className="text-navy-900 p-2">
                     <Menu size={24} />
                  </button>
               </div>
            </div>
         </nav>

         {/* Mobile Menu Overlay */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="fixed inset-0 bg-navy-900 z-[60] flex flex-col justify-center items-center"
               >
                  <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white p-2 hover:rotate-90 transition-transform duration-300">
                     <X size={32} />
                  </button>

                  <div className="flex flex-col gap-8 text-center">
                     {navLinks.map((link) => (
                        <button
                           key={link.name}
                           onClick={() => scrollTo(link.href)}
                           className="text-3xl font-serif text-white hover:text-amber-500 font-light transition-colors"
                        >
                           {link.name}
                        </button>
                     ))}
                     <button
                        onClick={() => scrollTo('#booking')}
                        className="mt-8 px-10 py-4 bg-white text-navy-900 font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-colors"
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
