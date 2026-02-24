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

                            <h3 className="text-2xl font-bold mb-6 text-bhambola-gold">{t.status_title}</h3>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/10">
                                    <span className="text-gray-300">{t.status_label_system}</span>
                                    <span className="text-green-400 font-mono">{t.status_online}</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/10">
                                    <span className="text-gray-300">{t.status_label_fairness}</span>
                                    <span className="text-green-400 font-mono">{t.status_verified}</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/10">
                                    <span className="text-gray-300">{t.status_label_autoplays}</span>
                                    <span className="text-bhambola-gold font-mono">1,245</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-red-500/20 text-center">
                                <p className="text-sm text-gray-400 italic">"{t.quote}"</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">{t.title_prefix} <span className="text-bhambola-red">{t.title_highlight}</span></h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {t.subtitle}
                        </p>

                        <ul className="space-y-4 mb-8">
                            {t.features.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-bhambola-gold text-black flex items-center justify-center font-bold text-xs">✓</div>
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button variant="secondary">{t.explain}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIBotSection;
