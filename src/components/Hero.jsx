import React from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;
    const t_dl = translations[language].download;
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Content */}
                <div className="space-y-6 animate-fade-in-up">

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                        {t.tagline_part1} <span className="text-bhambola-red drop-shadow-sm">{t.tagline_part2}</span> {t.tagline_part3}
                    </h1>

                    <p className="text-white text-sm md:text-base max-w-lg leading-relaxed font-medium drop-shadow-sm">
                        {t.subtitle}
                    </p>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex items-center gap-3 bg-gray-900 text-white border border-white/20 hover:border-bhambola-gold/50 px-5 py-3 rounded-xl transition-all hover:scale-105 shadow-xl">
                            <span className="text-2xl"></span>
                            <div className="text-left">
                                <div className="text-[10px] text-gray-400 leading-tight">{t_dl.apple_subtitle}</div>
                                <div className="text-sm font-bold">{t_dl.apple_title}</div>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 bg-gray-900 text-white border border-white/20 hover:border-bhambola-gold/50 px-5 py-3 rounded-xl transition-all hover:scale-105 shadow-xl">
                            <span className="text-2xl">▶</span>
                            <div className="text-left">
                                <div className="text-[10px] text-gray-400 leading-tight">{t_dl.google_subtitle}</div>
                                <div className="text-sm font-bold">{t_dl.google_title}</div>
                            </div>
                        </button>
                    </div>



                    <div className="pt-4 flex items-center gap-6">
                        {/* Trust/Awards hint */}
                        <div className="flex items-center gap-2 text-gray-800 font-bold bg-white/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-black/5 shadow-sm">
                            <span className="text-2xl">🏆</span>
                            <span>{t.trust}</span>
                        </div>
                    </div>
                </div>

                {/* Visuals - Casino Chips & Friends */}
                <div className="relative h-[600px] hidden md:block perspective-1000">

                    {/* Decorative Circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-bhambola-gold/30 animate-spin-slow shadow-[0_0_50px_rgba(255,215,0,0.2)]"></div>

                    {/* Main Visual Placeholder */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glass-red rounded-3xl flex items-center justify-center backdrop-blur-xl overflow-hidden border-2 border-bhambola-gold/50 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/80 to-transparent z-0"></div>
                        <div className="relative z-10 text-center p-6">
                            <div className="text-6xl mb-4">🎲 ✨</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t.visual_title}</h3>
                            <p className="text-white/70 italic text-sm">{t.visual_desc}</p>
                        </div>
                    </div>

                    {/* Flower-falling Casino Chips - Replacing static chips */}
                    {/* Chip 1 */}
                    <div className="absolute top-0 right-10 w-32 h-32 rounded-full bg-gradient-to-b from-bhambola-red to-red-900 border-[6px] border-dashed border-bhambola-gold shadow-2xl animate-flower-fall flex items-center justify-center transform hover:scale-105 transition-transform z-20">
                        <div className="text-center">
                            <div className="text-xs text-bhambola-gold/80 font-bold uppercase tracking-widest">Chip</div>
                            <div className="text-3xl font-bold text-white drop-shadow-md">50</div>
                        </div>
                    </div>
                    {/* Chip 2 */}
                    <div className="absolute top-0 left-20 w-32 h-32 rounded-full bg-gradient-to-b from-bhambola-red to-red-900 border-[6px] border-dashed border-bhambola-gold shadow-2xl animate-flower-fall flex items-center justify-center transform hover:scale-105 transition-transform z-20" style={{ animationDelay: '2s', animationDuration: '9s' }}>
                        <div className="text-center">
                            <div className="text-xs text-bhambola-gold/80 font-bold uppercase tracking-widest">Chip</div>
                            <div className="text-3xl font-bold text-white drop-shadow-md">50</div>
                        </div>
                    </div>
                    {/* Chip 3 */}
                    <div className="absolute top-0 right-1/3 w-32 h-32 rounded-full bg-gradient-to-b from-bhambola-red to-red-900 border-[6px] border-dashed border-bhambola-gold shadow-2xl animate-flower-fall flex items-center justify-center transform hover:scale-105 transition-transform z-20" style={{ animationDelay: '5s', animationDuration: '10s' }}>
                        <div className="text-center">
                            <div className="text-xs text-bhambola-gold/80 font-bold uppercase tracking-widest">Chip</div>
                            <div className="text-3xl font-bold text-white drop-shadow-md">50</div>
                        </div>
                    </div>

                    {/* Additional Background 3D Elements */}
                    <div className="absolute top-1/4 left-[-50px] w-20 h-20 rounded-full bg-gradient-to-b from-red-600 to-red-800 border-2 border-dashed border-white/50 shadow-xl animate-float blur-[2px] opacity-60 transform rotate-45" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-gradient-to-b from-bhambola-gold to-yellow-600 border-2 border-dashed border-white/50 shadow-xl animate-float blur-[1px] opacity-70 transform -rotate-12" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-20 left-1/3 w-12 h-12 rounded-full bg-gradient-to-b from-green-600 to-green-800 border-2 border-dashed border-white/50 shadow-xl animate-float blur-[3px] opacity-40 transform rotate-90" style={{ animationDelay: '1s' }}></div>

                    {/* Animated Gift */}
                    <div className="absolute top-1/2 -right-4 w-20 h-20 glass rounded-xl animate-float flex items-center justify-center border border-white/40 shadow-lg bg-bhambola-gold/20 backdrop-blur-md" style={{ animationDelay: '2.5s' }}>
                        <span className="text-4xl filter drop-shadow-md">🎁</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
