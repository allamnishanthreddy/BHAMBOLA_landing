import React from 'react';
import Button from './ui/Button';

const AIBotSection = () => {
    return (
        <section id="about-ai" className="py-20 relative overflow-hidden bg-black/40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Visual/Bot Representation */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative z-10 p-8 glass-red rounded-3xl border border-red-500/30">
                            <div className="absolute -top-10 -left-10 w-20 h-20 bg-bhambola-gold/20 rounded-full blur-xl animate-pulse"></div>

                            <h3 className="text-2xl font-bold mb-6 text-bhambola-gold">AI Guardian Status</h3>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/10">
                                    <span className="text-gray-300">System Status</span>
                                    <span className="text-green-400 font-mono">ONLINE</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/10">
                                    <span className="text-gray-300">Fairness Check</span>
                                    <span className="text-green-400 font-mono">VERIFIED</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-red-500/10">
                                    <span className="text-gray-300">Active Autoplays</span>
                                    <span className="text-bhambola-gold font-mono">1,245</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-red-500/20 text-center">
                                <p className="text-sm text-gray-400 italic">"Ensuring fair play when you need to step away."</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">Never Miss a Turn with <span className="text-bhambola-red">AI-Bot</span></h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Life happens. Whether it's a door bell or a quick call, our AI Bot steps in to play for you.
                            It ensures the game doesn't stop and your friends aren't invalidly waiting.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Automatically activates when inactive",
                                "Limited to 3 turns per game to prevent abuse",
                                "Transparent actions visible to all players",
                                "Dedicated auto-play UI section"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-bhambola-gold text-black flex items-center justify-center font-bold text-xs">✓</div>
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button variant="secondary">Explain How It Works</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIBotSection;
