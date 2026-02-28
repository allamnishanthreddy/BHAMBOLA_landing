import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

import chipRed from '../assets/images/chip-red-premium.png';
import chipBlue from '../assets/images/chip-blue-premium.png';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;
    const t_dl = translations[language].download;

    // Using Red asset for both to ENSURE perfect transparency (Blue generated via CSS filter)
    const chipAssets = [chipRed, chipRed];
    const chipFilters = [
        'drop-shadow-[0_0_20px_rgba(230,0,0,0.5)]', // Red: No rotation
        'hue-rotate-[240deg] drop-shadow-[0_0_20px_rgba(0,102,255,0.5)]', // Blue: Rotated 240 deg
    ];

    // Dashboard Animation State
    const [players, setPlayers] = useState(0);
    const [tables, setTables] = useState(0);
    const [showJoinNotif, setShowJoinNotif] = useState(false);
    const [isLevelUp, setIsLevelUp] = useState(false);
    const [loopStep, setLoopStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoopStep((prev) => (prev + 1) % 100); // 0-99 loop for ~6s
        }, 60);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Step 0-40: Players Join (0 -> 20)
        if (loopStep >= 0 && loopStep <= 40) {
            setPlayers(Math.floor((loopStep / 40) * 20));
            // Small pop at 10, 25
            if (loopStep === 10 || loopStep === 25) {
                setShowJoinNotif(true);
                setTimeout(() => setShowJoinNotif(false), 800);
            }
        }

        // Step 40-60: Active Tables (0 -> 3)
        if (loopStep >= 40 && loopStep <= 60) {
            setTables(Math.floor(((loopStep - 40) / 20) * 3));
        }

        // Step 70: Community Level Up!
        if (loopStep === 70) {
            setIsLevelUp(true);
            setTimeout(() => setIsLevelUp(false), 2000);
        }

        // Reset
        if (loopStep === 0) {
            setPlayers(0);
            setTables(0);
            setIsLevelUp(false);
        }
    }, [loopStep]);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
            {/* Background Texture - Restored to cube pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Content */}
                <div className="space-y-6 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-lg font-['Luckiest_Guy'] tracking-wider italic">
                        {t.tagline_part1} <span className="text-bhambola-red drop-shadow-sm">{t.tagline_part2}</span> {t.tagline_part3}
                    </h1>

                    <p className="text-white text-base md:text-lg max-w-lg leading-relaxed font-['Playfair_Display'] italic drop-shadow-sm">
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
                        <div className="flex items-center gap-2 text-gray-800 font-bold bg-white/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-black/5 shadow-sm">
                            <span className="text-2xl">🏆</span>
                            <span>{t.trust}</span>
                        </div>
                    </div>
                </div>

                {/* Visuals - Dash + Chips */}
                <div className="relative h-[600px] hidden md:block perspective-1000">



                    {/* Dashboard Card - Gen Z Black style softened */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[400px] bg-black/70 rounded-[3rem] p-7 backdrop-blur-3xl border-4 border-bhambola-gold shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] transform rotate-3 hover:rotate-0 transition-all duration-700 flex flex-col justify-between overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-bhambola-red/10 via-transparent to-transparent z-0 opacity-40"></div>

                        {/* Card Header */}
                        <div className="relative z-10 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Live Activity</span>
                            </div>
                        </div>

                        {/* Metrics Section */}
                        <div className="relative z-10 space-y-6 mt-4">
                            <div className="relative">
                                <div className="text-white/40 text-[10px] font-medium mb-1">Players Joined</div>
                                <div className="text-5xl font-black text-white flex items-end gap-1 leading-none drop-shadow-md">
                                    {players}
                                    <span className="text-bhambola-red text-xl mb-1">+</span>
                                    {showJoinNotif && (
                                        <div className="absolute -top-6 right-0 bg-bhambola-gold text-black text-[8px] font-black px-1.5 py-0.5 rounded animate-bounce-subtle">
                                            +1 JOINED
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="text-white/40 text-[10px] font-medium mb-1">Active Tables</div>
                                <div className="text-3xl font-bold text-white flex items-center gap-2">
                                    <span className="flex gap-1">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className={`w-2.5 h-6 rounded-sm transition-all duration-500 ${i < tables ? 'bg-bhambola-gold shadow-[0_0_10px_rgba(255,215,0,0.5)]' : 'bg-white/10'}`}></div>
                                        ))}
                                    </span>
                                    {tables}
                                </div>
                            </div>
                        </div>

                        {/* Level Up Achievement */}
                        <div className="relative z-10 mt-auto pt-6 border-t border-white/10">
                            {isLevelUp ? (
                                <div className="flex flex-col items-center animate-fade-in text-center">
                                    <div className="text-bhambola-gold text-[9px] font-black uppercase tracking-widest mb-1">Unlocked</div>
                                    <div className="text-lg font-black text-white italic tracking-wide uppercase leading-tight">Level Up!</div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-bhambola-gold animate-ping opacity-0"></div>
                                </div>
                            ) : (
                                <div className="flex justify-center opacity-40">
                                    <div className="text-[8px] text-white font-bold uppercase tracking-[0.3em] text-center">
                                        Syncing Live Data...
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* High-Impact Red & Blue Falling Chips - Fixed Transparency & Density */}
                    {[...Array(12)].map((_, i) => {
                        const styleIdx = i % 2; // Alternating Red and Blue
                        const size = 64 + (i % 4) * 12; // 64px to 100px (Bold & Modern)
                        return (
                            <div
                                key={i}
                                className="absolute top-[-150px] animate-flower-fall transform z-30 opacity-0"
                                style={{
                                    left: `${(i * 8) % 92}%`,
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    animationDelay: `${i * 0.6}s`,
                                    animationDuration: `${5 + (i % 3) * 2}s`,
                                }}
                            >
                                <img
                                    src={chipAssets[styleIdx]}
                                    alt=""
                                    className={`w-full h-full object-contain ${chipFilters[styleIdx]}`}
                                />
                            </div>
                        );
                    })}


                </div>
            </div>
        </section>
    );
};

export default Hero;
