import React from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import logo from '../assets/images/logo_official_2024.png';

const DownloadSection = () => {
    const { language } = useLanguage();
    const t = translations[language].download;

    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-red-950 via-red-900 to-black">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bhambola-red/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-5xl md:text-7xl font-black text-white font-['Luckiest_Guy'] tracking-tight italic uppercase leading-[0.9]">
                        {t.title_part1} <br />
                        <span className="text-bhambola-red drop-shadow-[0_0_15px_rgba(214,0,0,0.5)]">{t.title_part2}</span>
                    </h2>
                    <p className="text-red-100/80 text-lg md:text-xl max-w-md font-['Playfair_Display'] italic font-semibold leading-relaxed">
                        {t.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex items-center gap-3 bg-gray-900 border border-white/20 hover:border-bhambola-gold/50 px-6 py-3 rounded-xl transition-all hover:scale-105">
                            <span className="text-2xl"></span>
                            <div className="text-left">
                                <div className="text-xs text-gray-400">{t.apple_subtitle}</div>
                                <div className="text-sm font-bold">{t.apple_title}</div>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 bg-gray-900 border border-white/20 hover:border-bhambola-gold/50 px-6 py-3 rounded-xl transition-all hover:scale-105">
                            <span className="text-2xl">▶</span>
                            <div className="text-left">
                                <div className="text-xs text-gray-400">{t.google_subtitle}</div>
                                <div className="text-sm font-bold">{t.google_title}</div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Visual Mockup Placeholder */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-[500px] border-4 border-gray-800 bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden glass">
                        {/* Screen Content Mockup */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black flex items-center justify-center">
                            <div className="text-center p-4">
                                <div className="w-24 h-24 bg-transparent rounded-full mx-auto mb-4 flex items-center justify-center p-2">
                                    <img src={logo} alt="Bhambola Logo" className="w-full h-full object-contain filter brightness-110 drop-shadow-lg" />
                                </div>
                                <p className="text-gray-400 text-sm">{t.preview_text}</p>
                            </div>
                        </div>
                    </div>
                    {/* Floating Gift Icon for "Animated Gifts" requirement */}
                    <div className="absolute bottom-10 right-10 md:right-1/4 animate-bounce duration-[3000ms]">
                        <div className="w-20 h-20 bg-gradient-to-br from-bhambola-gold to-yellow-600 rounded-xl shadow-lg flex items-center justify-center border-2 border-white transform rotate-12">
                            <span className="text-4xl">🎁</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
