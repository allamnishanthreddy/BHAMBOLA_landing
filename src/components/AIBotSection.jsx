import React from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const AIBotSection = () => {
    const { language } = useLanguage();
    const t = translations[language].ai;

    return (
        <section id="about-ai" className="py-20 relative overflow-hidden bg-black/40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Visual/Bot Representation */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative z-10 p-8 glass-red rounded-3xl border border-red-500/30">
                            <div className="absolute -top-10 -left-10 w-20 h-20 bg-bhambola-gold/20 rounded-full blur-xl animate-pulse"></div>

                            <h3 className="text-2xl font-black mb-6 text-bhambola-gold font-['Cinzel'] tracking-wider uppercase italic">{t.status_title}</h3>

                            <div className="space-y-4 font-['Cinzel']">
                                <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/10">
                                    <span className="text-gray-300 font-bold">{t.status_label_system}</span>
                                    <span className="text-green-400 font-black">{t.status_online}</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/10">
                                    <span className="text-gray-300 font-bold">{t.status_label_fairness}</span>
                                    <span className="text-green-400 font-black">{t.status_verified}</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/10">
                                    <span className="text-gray-300 font-bold">{t.status_label_autoplays}</span>
                                    <span className="text-bhambola-gold font-black">1,245</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-red-500/20 text-center">
                                <p className="text-lg text-white/50 italic font-['Playfair_Display'] font-medium">"{t.quote}"</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 font-['Luckiest_Guy'] tracking-tight italic uppercase drop-shadow-lg">
                            {t.title_prefix} <span className="text-bhambola-red">{t.title_highlight}</span>
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed font-medium">
                            {t.subtitle}
                        </p>

                        <ul className="space-y-4 mb-8 font-medium italic font-['Playfair_Display'] text-lg">
                            {t.features.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-bhambola-gold text-black flex items-center justify-center font-black text-xs">✓</div>
                                    <span className="text-white/80">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button className="font-black font-['Cinzel'] tracking-widest uppercase py-4 px-8" variant="secondary">{t.explain}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIBotSection;
