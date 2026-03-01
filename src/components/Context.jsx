import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';
import { useTranslation } from 'react-i18next';

const Context = () => {
   const { t } = useTranslation();
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
   });

   const lineProgress = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

   return (
      <section id="context" ref={containerRef} className="py-24 md:py-32 bg-neutral-50 relative overflow-hidden text-primary-900 border-t border-neutral-200">

         <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">

               <Reveal>
                  <h2 className="text-xs font-bold text-secondary-600 uppercase tracking-[0.3em] mb-6">{t("context.kicker")}</h2>
                  <h3 className="text-3xl md:text-6xl font-sans font-medium text-primary-900 mb-8 leading-[1.1] tracking-tight">
                     {t("context.title_part1")} <span className="text-sage-500 italic font-serif">{t("context.title_part2")}</span>
                  </h3>
                  <p className="text-neutral-500 text-lg leading-relaxed max-w-lg">
                     {t("context.p1")}
                  </p>
                  <p className="mt-8 text-primary-900 font-medium text-lg border-l-4 border-secondary-500 pl-4 py-1 italic font-serif">
                     {t("context.p2")}
                  </p>
               </Reveal>

               {/* Interactive Sliding Scale */}
               <div className="relative pt-12 pb-12">
                  <Reveal delay={0.2}>
                     <div className="flex justify-between text-[9px] md:text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 md:mb-8">
                        <span>{t("context.scale_small")}</span>
                        <span className="text-secondary-600 font-extrabold tranneutral-y-[-2px] inline-block text-center px-1 md:px-2">{t("context.scale_pivot")}</span>
                        <span className="text-rose-500">{t("context.scale_critical")}</span>
                     </div>

                     <div className="relative h-[2px] bg-neutral-200 w-full rounded-full">
                        <motion.div
                           style={{ scaleX: lineProgress, transformOrigin: "left" }}
                           className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-neutral-400 via-secondary-500 to-rose-500"
                        />

                        {/* Nodes */}
                        <div className="absolute top-1/2 left-0 -tranneutral-x-1/2 -tranneutral-y-1/2 w-2.5 md:w-3 h-2.5 md:h-3 bg-neutral-300 rounded-full" />

                        <motion.div
                           style={{ left: "50%", scale: useTransform(lineProgress, [0.4, 0.6], [0.8, 1.2]) }}
                           className="absolute top-1/2 -tranneutral-x-1/2 -tranneutral-y-1/2 w-3.5 md:w-4 h-3.5 md:h-4 bg-secondary-500 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.4)] z-10"
                        >
                           <div className="absolute top-7 md:top-8 left-1/2 -tranneutral-x-1/2 whitespace-nowrap bg-white text-secondary-600 px-2 md:px-3 py-1 md:py-1.5 rounded-sm text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-neutral-200 shadow-sm">
                              {t("context.scale_intervention")}
                           </div>
                        </motion.div>

                        <div className="absolute top-1/2 right-0 tranneutral-x-1/2 -tranneutral-y-1/2 w-2.5 md:w-3 h-2.5 md:h-3 bg-rose-400 rounded-full" />
                     </div>

                     <div className="mt-14 md:mt-16 grid grid-cols-2 gap-3 md:gap-8">
                        <div className="border-l-2 border-neutral-200 pl-4 md:pl-6">
                           <h4 className="text-primary-900 font-serif italic text-base md:text-xl mb-2">{t("context.start_title")}</h4>
                           <ul className="text-neutral-500 text-xs md:text-sm space-y-1.5 md:space-y-2 font-medium">
                              <li>• {t("context.start_li1")}</li>
                              <li>• {t("context.start_li2")}</li>
                              <li>• {t("context.start_li3")}</li>
                           </ul>
                        </div>
                        <div className="border-r-2 border-rose-200 pr-4 md:pr-6 text-right">
                           <h4 className="text-rose-500 font-serif italic text-base md:text-xl mb-2">{t("context.end_title")}</h4>
                           <ul className="text-rose-400 text-xs md:text-sm space-y-1.5 md:space-y-2 font-medium">
                              <li>{t("context.end_li1")} •</li>
                              <li>{t("context.end_li2")} •</li>
                              <li>{t("context.end_li3")} •</li>
                           </ul>
                        </div>
                     </div>
                  </Reveal>
               </div>

            </div>
         </div>
      </section>
   );
};

export default Context;
