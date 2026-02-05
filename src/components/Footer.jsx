import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="bg-navy-950 text-slate-500 py-16 border-t border-navy-900">
         <div className="max-w-[1400px] mx-auto px-6">

            <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
               <div className="text-center md:text-left">
                  <h4 className="font-serif font-bold text-white text-2xl tracking-wider mb-2">INSIDE OUT <span className="text-amber-600">MINDSET</span></h4>
                  <p className="text-xs uppercase tracking-[0.2em] font-medium text-slate-600">British Columbia, Canada</p>
               </div>

               <div className="text-center">
                  <p className="font-serif italic text-2xl text-slate-400 mb-2">Let's interrupt the pattern.</p>
                  <button onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} className="text-amber-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                     Book a Talk
                  </button>
               </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-navy-900 text-[10px] uppercase tracking-widest">
               <div className="flex gap-8">
                  <a href="#hero" className="hover:text-white transition-colors">Home</a>
                  <a href="#offer" className="hover:text-white transition-colors">Talks</a>
                  <a href="#about" className="hover:text-white transition-colors">About</a>
               </div>

               <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition-colors"><Mail size={16} /></a>
                  <a href="#" className="hover:text-white transition-colors"><Phone size={16} /></a>
                  <a href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
               </div>

               <div>
                  &copy; {currentYear} Inside Out Mindset.
               </div>
            </div>

         </div>
      </footer>
   );
};

export default Footer;
