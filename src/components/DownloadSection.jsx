import React from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import logoB from '../assets/images/logo_official_2024.png';
import logoReal from '../assets/images/logo_final_transparent.png';
import TransparentLogo from './ui/TransparentLogo';

const DownloadSection = () => {
    const { language } = useLanguage();
    const t = translations[language].download;

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-black">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bhambola-red/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-bhambola-gold/10 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                    <h2 className="text-6xl md:text-8xl font-black text-white font-['Luckiest_Guy'] tracking-tight italic uppercase leading-[0.85]">
                        {t.title_part1} <br />
                        <span className="text-bhambola-red drop-shadow-[0_0_20px_rgba(214,0,0,0.6)]">{t.title_part2}</span>
                    </h2>
                    <p className="text-red-100/90 text-xl md:text-2xl max-w-xl mx-auto lg:mx-0 font-['Playfair_Display'] italic font-semibold leading-relaxed">
                        {t.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start">
                        <button className="flex items-center gap-4 bg-black border-2 border-white/10 hover:border-bhambola-red/50 px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-2xl group">
                            <span className="text-3xl transition-transform group-hover:scale-110"></span>
                            <div className="text-left">
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t.apple_subtitle}</div>
                                <div className="text-lg font-black font-['Cinzel'] tracking-tighter">{t.apple_title}</div>
                            </div>
                        </button>
                        <button className="flex items-center gap-4 bg-black border-2 border-white/10 hover:border-bhambola-gold/50 px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-2xl group">
                            <span className="text-3xl transition-transform group-hover:scale-110">▶</span>
                            <div className="text-left">
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t.google_subtitle}</div>
                                <div className="text-lg font-black font-['Cinzel'] tracking-tighter">{t.google_title}</div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Staggered Phone Mockups */}
                <div className="lg:w-1/2 relative flex justify-center items-center h-[600px] w-full">
                    {/* Left Phone (Legacy "B" Logo) */}
                    <div className="absolute left-4 lg:left-10 z-10 transform -rotate-12 -translate-x-8 translate-y-12 sm:-translate-x-12 opacity-80 scale-90 sm:scale-100">
                        <div className="relative w-56 h-[460px] border-[6px] border-gray-800 bg-black rounded-[2.5rem] shadow-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-red-950 to-black flex flex-col items-center justify-center p-6">
                                <div className="w-20 h-20 mb-6 bg-white/5 rounded-2xl flex items-center justify-center p-3 animate-pulse">
                                    <span className="text-5xl font-black text-bhambola-red drop-shadow-lg">B</span>
                                </div>
                                <div className="h-1 w-20 bg-white/10 rounded-full mb-3"></div>
                                <div className="h-1 w-12 bg-white/5 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Phone (Primary - Real Logo) */}
                    <div className="relative z-20 transform rotate-3 translate-x-8 -translate-y-4 sm:translate-x-16 hover:rotate-0 transition-transform duration-700 active:scale-95 group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-bhambola-red to-bhambola-gold rounded-[3rem] blur-lg opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative w-64 h-[520px] border-[8px] border-gray-900 bg-black rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                            {/* Screen Header */}
                            <div className="h-6 w-1/3 bg-gray-900 rounded-b-xl mx-auto mb-4 border-x border-b border-white/5"></div>

                            {/* App Content Preview */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-black flex flex-col items-center justify-center p-8 text-center pt-12">
                                <div className="w-40 h-40 mb-8 flex items-center justify-center">
                                    <TransparentLogo
                                        src={logoReal}
                                        className="w-full h-full drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                                    />
                                </div>
                                <div className="space-y-4 w-full">
                                    <div className="h-3 w-3/4 bg-white/20 rounded-full mx-auto animate-pulse"></div>
                                    <div className="h-3 w-1/2 bg-white/10 rounded-full mx-auto animate-pulse"></div>
                                    <div className="pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="bg-bhambola-red py-3 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg">Play Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Gift Icon */}
                    <div className="absolute -bottom-4 right-0 lg:-right-4 z-30 animate-bounce duration-[3000ms]">
                        <div className="w-20 h-20 bg-gradient-to-br from-bhambola-gold to-yellow-600 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white/20 transform rotate-12 backdrop-blur-sm">
                            <span className="text-4xl filter drop-shadow-md">🎁</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
