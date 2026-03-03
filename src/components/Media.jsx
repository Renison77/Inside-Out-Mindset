import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Reveal } from './Reveal';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Media = () => {
   const { t } = useTranslation();
   const [activeVideo, setActiveVideo] = useState(null);

   const mediaItems = [
      {
         id: 3,
         type: 'image',
         url: '/assets/images/kids_play_talk.jpg',
         captionKey: 'item3_caption',
         objectPosition: 'object-[center_35%]'
      },
      {
         id: 1,
         type: 'video',
         url: 'https://www.youtube.com/embed/KMoxDbVDGDs',
         thumbnail: 'https://img.youtube.com/vi/KMoxDbVDGDs/maxresdefault.jpg',
         captionKey: 'item1_caption'
      }
   ];

   return (
      <section id="media" className="py-24 md:py-32 bg-white relative border-t border-neutral-200">
         <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">

            <Reveal>
               <div className="text-center mb-16">
                  <h2 className="text-xs font-bold text-secondary-600 uppercase tracking-[0.3em] mb-6">{t("media.kicker")}</h2>
                  <h3 className="text-4xl md:text-5xl font-sans font-medium text-primary-900 mb-6 leading-tight">
                     {t("media.title_part1")} <span className="font-serif italic text-secondary-600">{t("media.title_part2")}</span>
                  </h3>
                  <p className="text-neutral-500 font-light text-lg max-w-2xl mx-auto">
                     {t("media.description")}
                  </p>
               </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
               {mediaItems.map((item, index) => (
                  <Reveal key={item.id} delay={index * 0.1}>
                     <div className="group relative overflow-hidden rounded-sm bg-neutral-100 shadow-md">
                        {item.type === 'video' ? (
                           <div className="relative aspect-video bg-neutral-900 overflow-hidden cursor-pointer" onClick={() => setActiveVideo(item.id)}>
                              {activeVideo === item.id ? (
                                 <iframe
                                    className="w-full h-full absolute inset-0"
                                    src={`${item.url}?autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                 ></iframe>
                              ) : (
                                 <>
                                    <img src={item.thumbnail} alt={t(`media.${item.captionKey}`)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                                    <div className="absolute inset-0 bg-primary-900/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary-900/40">
                                       <motion.div
                                          whileHover={{ scale: 1.1 }}
                                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white"
                                       >
                                          <Play className="w-6 h-6 ml-1" fill="currentColor" />
                                       </motion.div>
                                    </div>
                                 </>
                              )}
                           </div>
                        ) : (
                           <div className="relative aspect-video overflow-hidden bg-neutral-200">
                              <img src={item.url} alt={t(`media.${item.captionKey}`)} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.objectPosition || 'object-center'}`} />
                           </div>
                        )}

                        {/* Caption */}
                        <div className="p-5 bg-white border-t border-neutral-100">
                           <p className="text-sm font-medium text-primary-900 leading-relaxed border-l-2 border-secondary-500 pl-3">
                              {t(`media.${item.captionKey}`)}
                           </p>
                        </div>
                     </div>
                  </Reveal>
               ))}
            </div>

         </div>
      </section>
   );
};

export default Media;
