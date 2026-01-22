import React from 'react';
import Button from './ui/Button';

const DownloadSection = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white z-0"></div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Play Anywhere, <br />
                        <span className="text-bhambola-red">Anytime.</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-md">
                        The full BHAMBOLA experience is exclusive to our mobile app.
                        Download now to join your community and start winning.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex items-center gap-3 bg-gray-900 border border-white/20 hover:border-bhambola-gold/50 px-6 py-3 rounded-xl transition-all hover:scale-105">
                            <span className="text-2xl"></span>
                            <div className="text-left">
                                <div className="text-xs text-gray-400">Download on the</div>
                                <div className="text-sm font-bold">App Store</div>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 bg-gray-900 border border-white/20 hover:border-bhambola-gold/50 px-6 py-3 rounded-xl transition-all hover:scale-105">
                            <span className="text-2xl">▶</span>
                            <div className="text-left">
                                <div className="text-xs text-gray-400">GET IT ON</div>
                                <div className="text-sm font-bold">Google Play</div>
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
                                <div className="w-16 h-16 bg-bhambola-red rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-bhambola-gold">
                                    <span className="text-xl font-bold text-bhambola-gold">B</span>
                                </div>
                                <p className="text-gray-400 text-sm">App Interface Preview</p>
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
