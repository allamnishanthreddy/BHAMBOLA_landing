import React from 'react';
import Button from './ui/Button';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Content */}
                <div className="space-y-6 animate-fade-in-up">
                    <div className="inline-block px-4 py-1 rounded-full border border-bhambola-gold/50 bg-black/20 text-bhambola-gold text-sm font-semibold tracking-wide mb-2 shadow-lg backdrop-blur-md">
                        Full House. Friends. Fun.
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                        Where <span className="text-bhambola-red drop-shadow-sm">Communities</span> Come to Play.
                    </h1>

                    <p className="text-gray-700 text-sm md:text-base max-w-lg leading-relaxed font-medium drop-shadow-sm">
                        Kitty parties, get togethers, Gated Communities, Office Colleagues, Family events. One stop Zone for Fun!
                    </p>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex items-center gap-3 bg-gray-900 text-white border border-white/20 hover:border-bhambola-gold/50 px-5 py-3 rounded-xl transition-all hover:scale-105 shadow-xl">
                            <span className="text-2xl"></span>
                            <div className="text-left">
                                <div className="text-[10px] text-gray-400 leading-tight">Download on the</div>
                                <div className="text-sm font-bold">App Store</div>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 bg-gray-900 text-white border border-white/20 hover:border-bhambola-gold/50 px-5 py-3 rounded-xl transition-all hover:scale-105 shadow-xl">
                            <span className="text-2xl">▶</span>
                            <div className="text-left">
                                <div className="text-[10px] text-gray-400 leading-tight">GET IT ON</div>
                                <div className="text-sm font-bold">Google Play</div>
                            </div>
                        </button>
                    </div>

                    <div className="pt-6">
                        <Button variant="secondary" className="px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-1">
                            Join Game
                        </Button>
                    </div>

                    <div className="pt-4 flex items-center gap-6">
                        {/* Trust/Awards hint */}
                        <div className="flex items-center gap-2 text-gray-800 font-bold bg-white/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-black/5 shadow-sm">
                            <span className="text-2xl">🏆</span>
                            <span>Top Community Platform</span>
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
                            <h3 className="text-2xl font-bold text-white mb-2">Friends Connecting</h3>
                            <p className="text-white/70 italic text-sm">(Place functionality to <br />visualize group play)</p>
                        </div>
                    </div>

                    {/* Floating Casino Chips */}
                    <div className="absolute top-10 right-10 w-28 h-28 rounded-full bg-gradient-to-b from-blue-600 to-blue-800 border-4 border-dashed border-white shadow-2xl animate-float flex items-center justify-center transform rotate-12">
                        <div className="text-center">
                            <div className="text-xs text-white/50">CHIP</div>
                            <div className="text-2xl font-bold text-white">50</div>
                        </div>
                    </div>

                    <div className="absolute bottom-20 left-0 w-32 h-32 rounded-full bg-gradient-to-b from-bhambola-dark to-black border-4 border-dashed border-bhambola-gold shadow-2xl animate-float flex items-center justify-center transform -rotate-12" style={{ animationDelay: '1.5s' }}>
                        <div className="text-center">
                            <div className="text-xs text-bhambola-gold/50">CHIP</div>
                            <div className="text-3xl font-bold text-bhambola-gold">100</div>
                        </div>
                    </div>

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
