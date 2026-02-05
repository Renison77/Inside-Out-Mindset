import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
   return (
      <footer className="bg-navy-950 text-slate-500 py-16 border-t border-navy-900">
         <div className="max-w-[1400px] mx-auto px-6">

            <div className="grid md:grid-cols-4 gap-12 mb-12">
               <div className="col-span-2">
                  <h4 className="font-serif font-bold text-white text-2xl tracking-wider mb-6">INSIDE OUT <span className="text-amber-600">MINDSET</span></h4>
                  <p className="text-sm max-w-sm leading-relaxed mb-6">
                     Helping students choose respect, self-control, and better decisions before problems escalate.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                     <MapPin size={14} className="text-amber-600" /> British Columbia, Canada
                  </div>
               </div>

               <div>
                  <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Navigation</h5>
                  <div className="flex flex-col gap-3 text-sm">
                     <a href="#hero" className="hover:text-amber-500 transition-colors">Home</a>
                     <a href="#problem" className="hover:text-amber-500 transition-colors">The Problem</a>
                     <a href="#offer" className="hover:text-amber-500 transition-colors">Talks</a>
                     <a href="#about" className="hover:text-amber-500 transition-colors">About Mindy</a>
                     <a href="#plan" className="hover:text-amber-500 transition-colors">Process</a>
                  </div>
               </div>

               <div>
                  <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contact</h5>
                  <div className="flex flex-col gap-4 text-sm">
                     <a href="mailto:contact@insideoutmindset.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center group-hover:bg-amber-600 transition-colors text-white">
                           <Mail size={14} />
                        </div>
                        <span>Email Us</span>
                     </a>
                     <a href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center group-hover:bg-amber-600 transition-colors text-white">
                           <Phone size={14} />
                        </div>
                        <span>Call Us</span>
                     </a>
                  </div>
               </div>
            </div>

            <div className="pt-8 border-t border-navy-900 text-center text-[10px] text-slate-600 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
               <span>&copy; {new Date().getFullYear()} Inside Out Mindset. All rights reserved.</span>
               <span>Designed with Purpose in BC.</span>
            </div>

         </div>
      </footer>
   );
};

export default Footer;
