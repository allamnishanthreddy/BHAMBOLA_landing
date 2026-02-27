import React from 'react';
import LegalLayout from '../components/LegalLayout';

const AboutUsPage = () => {
    return (
        <LegalLayout
            title="Our Story"
            subtitle="The origin and history of Bhambola."
        >
            <div className="space-y-16 text-gray-200">
                <section className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-bhambola-red to-bhambola-gold rounded-[3rem] blur-xl opacity-25 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative bg-black p-12 rounded-[3rem] border border-white/10 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase italic tracking-tighter font-['Cinzel']">What's in a name?</h2>
                        <p className="text-xl md:text-2xl leading-relaxed mb-8 font-medium italic">
                            <span className="text-bhambola-red font-black font-serif text-6xl leading-none float-left mr-4 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">“</span>
                            Bhambola” is a brand-style mutation, a name designed to pulse with energy and community. It represents a modern, community-focused digital version of a classic game.
                        </p>
                        <div className="grid md:grid-cols-2 gap-10 mt-12">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                                <h4 className="text-bhambola-gold text-2xl font-black uppercase mb-3 tracking-widest underline decoration-bhambola-red">BHAM</h4>
                                <p className="text-lg font-medium">Reflects fun, festive energy, excitement, and playfulness, inspired by Indian phonetic expressions like <strong>Dhamaka</strong> and <strong>Bhandara</strong>.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                                <h4 className="text-bhambola-gold text-2xl font-black uppercase mb-3 tracking-widest underline decoration-bhambola-red">BOLA</h4>
                                <p className="text-lg font-medium">Derived from European traditions of numbered balls and random draws, calling out the numbers that bring the game to life.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter font-['Cinzel'] border-b-2 border-bhambola-gold/30 pb-4">A Global Heritage</h2>
                    <div className="prose prose-invert max-w-none space-y-6 text-xl md:text-2xl leading-relaxed italic font-medium">
                        <p>The number-based recreation game we love today traces its origins back to <strong className="text-bhambola-gold">16th century Europe</strong>, evolving from early lottery-style games built for public entertainment and community fundraising.</p>
                        <p>By the 18th and 19th centuries, it took root in Italy and France, where the simple format—requiring no complex equipment—made it accessible to everyone, regardless of age or skill.</p>
                        <p>During the colonial period, the game spread to India, becoming a staple of clubs, residential communities, and festive gatherings. It became the heart of social activity because of its simple rules and inclusive nature.</p>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-bhambola-red/20 via-white/5 to-bhambola-gold/20 p-12 rounded-[3.5rem] border border-white/10 text-center shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase mb-6 tracking-[0.3em] font-['Cinzel']">BHAMBOLA TODAY</h2>
                    <p className="italic text-xl md:text-2xl font-black text-white leading-relaxed drop-shadow-lg">
                        In the digital age, we've transformed this tradition into a secure, real-time platform that brings families and gated communities together through technology.
                    </p>
                </section>
            </div>
        </LegalLayout>
    );
};

export default AboutUsPage;
