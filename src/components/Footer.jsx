import React from 'react';

const Footer = () => {
   return (
      <footer className="bg-primary-950 text-neutral-300 border-t border-primary-900 pt-20 pb-10 text-sm">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6">

            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
               <div className="max-w-xs">
                  <div className="font-serif font-bold text-xl text-white mb-6 uppercase tracking-tight">
                     INSIDE <span className="text-secondary-600 italic">OUT</span> MINDSET
                  </div>
                  <p className="leading-relaxed mb-6 font-light">
                     Prevention-focused talks for students, parents, and organizations. Building better decisions from the inside out.
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 w-full md:w-auto">
                  <div>
                     <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Navigation</h4>
                     <ul className="space-y-3">
                        <li><a href="#talks" className="hover:text-secondary-500 transition-colors">Speaking</a></li>
                        <li><a href="#outcomes" className="hover:text-secondary-500 transition-colors">Outcomes</a></li>
                        <li><a href="#about" className="hover:text-secondary-500 transition-colors">About</a></li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
                     <ul className="space-y-3">
                        <li><a href="#booking" className="hover:text-secondary-500 transition-colors">Contact</a></li>
                        <li><a href="mailto:mindy@insideoutmindset.com" className="hover:text-secondary-500 transition-colors">Email Us</a></li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="border-t border-primary-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

               <p className="text-xs max-w-2xl text-center md:text-left leading-relaxed opacity-90 text-neutral-200">
                  <span className="font-bold text-white block mb-2">Disclaimer</span>
                  Inside Out Mindset talks are educational and prevention-focused. Mindy Bhandher is not a registered counselor, therapist, or mental health clinician. If a student or parent is experiencing distress or needs support, please connect with your school counselor, local mental health services, or emergency services as appropriate.
                  <br /><br />
                  <span className="italic">Is this counseling? No. This is an educational prevention talk. For mental health support, please use school or community services.</span>
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
