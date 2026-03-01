import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Users, Shield, ArrowRight, X, Check, Star } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const EditorialCard = ({ item, index, t }) => {
   const isEven = index % 2 === 0;

   return (
      <motion.div
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         className="flex flex-col gap-0 lg:gap-8 group bg-white border border-neutral-100 p-6 lg:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 h-full justify-between"
      >
         {/* Content Section */}
         <div className="w-full flex flex-col justify-center">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-50 border border-neutral-100 rounded-full flex items-center justify-center text-secondary-500 shadow-sm">
                     {item.icon}
                  </div>
                  <div>
                     <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">{t(`talks.${item.id}_cat`)}</p>
                     {item.badge && <span className="inline-block mt-1 text-[9px] uppercase tracking-widest text-secondary-600 font-bold">{t(`talks.${item.id}_badge`)}</span>}
                  </div>
               </div>
               {/* Outcome line moved to header as a badge style element */}
               <div className="hidden lg:block bg-secondary-50/50 border border-secondary-100 px-4 py-2 rounded-sm">
                  <p className="text-secondary-700 font-serif italic text-sm">"{t(`talks.${item.id}_outcome`)}"</p>
               </div>
            </div>

            <h3 className="text-3xl lg:text-4xl font-sans font-medium text-primary-900 leading-[1.1] tracking-tight mb-6">
               {t(`talks.${item.id}_title`).split(': ')[0]}: <br />
               <span className="font-serif italic font-light text-secondary-600 block mt-2">{t(`talks.${item.id}_title`).split(': ')[1]}</span>
            </h3>

            <p className="text-lg text-neutral-500 leading-relaxed mb-8 font-light max-w-3xl">
               {t(`talks.${item.id}_oneLiner`)}
            </p>

            <div className="flex flex-col gap-8">
               <div className="relative pl-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary-900 mb-6 flex items-center gap-3">
                     <span className="w-6 h-px bg-secondary-500 block"></span> {t("talks.core_focus")}
                  </h4>
                  <ul className="space-y-4">
                     {item.previewBullets.map((_, i) => (
                        <li key={i} className="text-neutral-500 text-sm flex items-start gap-3">
                           <Check size={16} className="mt-0.5 text-secondary-400 shrink-0" />
                           <span className="leading-relaxed">{t(`talks.${item.id}_preview_bullets.${i}`, { returnObjects: true })}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="relative pl-4 border-t border-neutral-100 pt-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary-900 mb-6 flex items-center gap-3">
                     <span className="w-6 h-px bg-primary-900 block"></span> {t("talks.deep_dive")}
                  </h4>
                  <ul className="space-y-4">
                     {item.expandedBullets.map((_, i) => (
                        <li key={i} className="text-neutral-500 text-sm flex items-start gap-3">
                           <ArrowRight size={16} className="mt-0.5 text-primary-400 shrink-0" />
                           <span className="leading-relaxed font-serif italic">{t(`talks.${item.id}_expanded_bullets.${i}`, { returnObjects: true })}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Outcome line for mobile */}
            <div className="lg:hidden mt-8 pt-6 border-t border-neutral-100">
               <p className="text-secondary-700 font-serif italic text-sm text-center">"{t(`talks.${item.id}_outcome`)}"</p>
            </div>
         </div>
      </motion.div>
   );
};

const Talks = () => {
   const { t } = useTranslation();
   const talks = [
      {
         id: "talk1",
         previewBullets: [1, 2, 3, 4],
         expandedBullets: [1, 2, 3],
         icon: <Users size={24} />,
         image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" // Premium class/audience placeholder
      },
      {
         id: "talk2",
         previewBullets: [1, 2, 3, 4],
         expandedBullets: [1, 2, 3],
         badge: true,
         icon: <Shield size={24} />,
         image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" // Premium connection/parent placeholder
      }
   ];

   const formatOptionsLength = t("talks.format_options", { returnObjects: true }).length;
   const formatOptionsArray = Array.from({ length: formatOptionsLength });

   const expectationsLength = t("talks.expectations", { returnObjects: true }).length;
   const expectationsArray = Array.from({ length: expectationsLength });

   return (
      <section id="talks" className="py-24 md:py-32 bg-neutral-50 relative scroll-mt-20">
         {/* Subtle background gradient to break up the solid white */}
         <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent"></div>

         <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">

            <div className="mb-20 md:mb-32 flex flex-col items-center text-center max-w-3xl mx-auto pb-8 relative">
               <Reveal>
                  <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                     <div className="px-4 py-1.5 bg-secondary-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-2 shadow-lg shadow-secondary-500/20">
                        <Star size={10} fill="currentColor" />
                        {t("talks.kicker")}
                     </div>
                  </div>
                  <h2 className="text-5xl md:text-7xl lg:text-[80px] font-sans font-medium text-primary-900 tracking-tighter leading-[0.9] mb-8">
                     {t("talks.title_part1")}<br />
                     <span className="font-serif italic text-secondary-600 font-light pr-4">{t("talks.title_part2")}</span>
                  </h2>
               </Reveal>
               <Reveal delay={0.2}>
                  <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-light">
                     {t("talks.description_1")}<span className="font-medium text-primary-900 border-b border-secondary-400">{t("talks.description_highlight")}</span>{t("talks.description_2")}
                  </p>
               </Reveal>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
               {talks.map((talk, i) => (
                  <EditorialCard key={i} item={talk} index={i} t={t} />
               ))}
            </div>

            {/* Additional Info Sections */}
            <div className="mt-20 md:mt-32 grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
               {/* Format Options */}
               <Reveal fullHeight={true}>
                  <div className="bg-neutral-50 p-8 md:p-10 border border-neutral-100 rounded-sm hover:-tranneutral-y-1 transition-transform duration-500 h-full">
                     <h3 className="text-xl md:text-2xl font-sans font-medium text-primary-900 mb-6 flex items-center gap-3">
                        <span className="w-6 h-px bg-secondary-500 block"></span>
                        {t("talks.format_options_title")}
                     </h3>
                     <ul className="space-y-4">
                        {formatOptionsArray.map((_, i) => (
                           <li key={i} className="flex items-start gap-3 text-neutral-600">
                              <Check size={18} className="mt-0.5 text-secondary-500 shrink-0" />
                              <span className="leading-relaxed">{t(`talks.format_options.${i}`)}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </Reveal>

               {/* What Organizations Can Expect */}
               <Reveal delay={0.1} fullHeight={true}>
                  <div className="bg-neutral-50 p-8 md:p-10 border border-neutral-100 rounded-sm hover:-tranneutral-y-1 transition-transform duration-500 h-full">
                     <h3 className="text-xl md:text-2xl font-sans font-medium text-primary-900 mb-6 flex items-center gap-3">
                        <span className="w-6 h-px bg-secondary-500 block"></span>
                        {t("talks.expectations_title")}
                     </h3>
                     <ul className="space-y-4">
                        {expectationsArray.map((_, i) => (
                           <li key={i} className="flex items-start gap-3 text-neutral-600">
                              <Check size={18} className="mt-0.5 text-secondary-500 shrink-0" />
                              <span className="leading-relaxed">{t(`talks.expectations.${i}`)}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </Reveal>
            </div>

            {/* CTA Section */}
            <Reveal delay={0.2}>
               <div className="mt-20 md:mt-32 text-center border-t border-neutral-200 pt-16 md:pt-24 space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-primary-900">
                     {t("talks.cta_title_part1")} <span className="font-serif italic text-secondary-600 font-light">{t("talks.cta_title_part2")}</span>
                  </h2>
                  <p className="text-neutral-500 md:text-lg max-w-md mx-auto">
                     {t("talks.cta_desc")}
                  </p>
                  <div className="pt-6">
                     <button onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-primary-900 text-white px-8 lg:px-10 py-4 lg:py-5 text-xs lg:text-sm font-bold uppercase tracking-widest hover:bg-secondary-600 transition-colors duration-300 w-full sm:w-auto text-center cursor-pointer shadow-lg hover:shadow-xl shadow-primary-900/10 hover:-tranneutral-y-0.5">
                        <span className="flex items-center gap-3">{t("talks.cta_button")} <ArrowRight size={16} /></span>
                     </button>
                  </div>
               </div>
            </Reveal>

         </div>
      </section>
   );
};

export default Talks;
