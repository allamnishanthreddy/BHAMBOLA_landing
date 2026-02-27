import React from 'react';
import LegalLayout from '../components/LegalLayout';

const LegalPolicyPage = () => {
    return (
        <LegalLayout
            title="Legal Policy"
            subtitle="We are Legal! Compliance & Responsible Gaming."
        >
            <div className="space-y-20 text-gray-200">
                {/* Hero Section - GenZ Style */}
                <section className="relative text-center p-16 rounded-[5rem] overflow-hidden border-4 border-white/10 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-bhambola-red/40 via-purple-900/40 to-bhambola-gold/40 opacity-50 blur-3xl animate-pulse-slow"></div>
                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-bounce-subtle">
                            <span className="text-bhambola-gold">Pure</span> Vibe. <br /> <span className="text-bhambola-red">Zero</span> Risks.
                        </h2>
                        <p className="text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto font-black italic bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                            "No cap, we’re strictly for fun. No money, no gambling, just pure gaming energy."
                        </p>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Safety Section */}
                    <section className="space-y-10 group">
                        <h2 className="text-4xl font-black text-bhambola-gold uppercase italic tracking-widest border-l-8 border-bhambola-red pl-6 py-2">01. Safe AF</h2>
                        <ul className="space-y-8">
                            <li className="p-8 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border-2 border-white/10 shadow-2xl hover:border-bhambola-red/50 transition-all hover:scale-105 active:scale-95 cursor-default">
                                <span className="block font-black text-white mb-3 text-2xl md:text-3xl uppercase tracking-tighter decoration-bhambola-red underline-offset-8 underline decoration-8">Real Talk</span>
                                <span className="text-xl text-gray-300 font-bold italic leading-relaxed">We’re all about that responsible gaming life. Play smart, stay hype.</span>
                            </li>
                            <li className="p-8 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border-2 border-white/10 shadow-2xl hover:border-bhambola-red/50 transition-all hover:scale-105 active:scale-95 cursor-default">
                                <span className="block font-black text-white mb-3 text-2xl md:text-3xl uppercase tracking-tighter decoration-bhambola-red underline-offset-8 underline decoration-8">Data Guarded</span>
                                <span className="text-xl text-gray-300 font-bold italic leading-relaxed">Encrypted like a boss. IT Act compliant (Sec 43A, 66, 79).</span>
                            </li>
                        </ul>
                    </section>

                    {/* Regulation Section */}
                    <section className="space-y-10 group">
                        <h2 className="text-4xl font-black text-bhambola-gold uppercase italic tracking-widest border-l-8 border-bhambola-red pl-6 py-2">02. Legit</h2>
                        <ul className="space-y-8">
                            <li className="p-8 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border-2 border-white/10 shadow-2xl hover:border-bhambola-gold/50 transition-all hover:scale-105 active:scale-95 cursor-default">
                                <span className="block font-black text-white mb-3 text-2xl md:text-3xl uppercase tracking-tighter decoration-bhambola-gold underline-offset-8 underline decoration-8">Law Compliant</span>
                                <span className="text-xl text-gray-300 font-bold italic leading-relaxed">Fully aligned with the 2025 Gaming Act. 100% legal business.</span>
                            </li>
                            <li className="p-8 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border-2 border-white/10 shadow-2xl hover:border-bhambola-gold/50 transition-all hover:scale-105 active:scale-95 cursor-default">
                                <span className="block font-black text-white mb-3 text-2xl md:text-3xl uppercase tracking-tighter decoration-bhambola-gold underline-offset-8 underline decoration-8">State Verified</span>
                                <span className="text-xl text-gray-300 font-bold italic leading-relaxed">Following every state rule in the book. Integrity is key.</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Entry Model Section */}
                <section className="relative bg-white/5 p-12 rounded-[5rem] border-4 border-bhambola-gold/20 shadow-[0_0_50px_rgba(255,215,0,0.1)] overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-bhambola-gold/20 blur-[100px] rounded-full"></div>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-10 text-center tracking-tighter drop-shadow-lg">Recreational Only</h2>
                    <div className="space-y-10 text-gray-300">
                        <p className="text-2xl font-black uppercase tracking-[0.2em] text-center text-bhambola-gold">Payments = Admission.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <li className="p-10 rounded-[3rem] bg-black/80 border-2 border-white/20 text-xl font-black text-center italic hover:border-bhambola-red transition-all transform hover:-translate-y-2 shadow-2xl">Full Community Access</li>
                            <li className="p-10 rounded-[3rem] bg-black/80 border-2 border-white/20 text-xl font-black text-center italic hover:border-bhambola-red transition-all transform hover:-translate-y-2 shadow-2xl">Epic Social Vibe</li>
                            <li className="p-10 rounded-[3rem] bg-black/80 border-2 border-white/20 text-xl font-black text-center italic hover:border-bhambola-red transition-all transform hover:-translate-y-2 shadow-2xl">Digital Fun Pass</li>
                        </ul>
                        <p className="mt-12 font-black text-white bg-bhambola-red px-10 py-8 rounded-[3rem] uppercase tracking-[0.2em] text-center text-2xl md:text-4xl shadow-[0_0_40px_rgba(214,0,0,0.4)] animate-pulse-subtle">
                            No Financial Risk. Just Big Dubs.
                        </p>
                    </div>
                </section>
            </div>
        </LegalLayout>
    );
};

export default LegalPolicyPage;
