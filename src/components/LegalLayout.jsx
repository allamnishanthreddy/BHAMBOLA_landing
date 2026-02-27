import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LegalLayout = ({ children, title, subtitle }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-bhambola-red selection:text-white">
            <Header />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Back Button */}
                    <a
                        href="/"
                        className="group inline-flex items-center gap-2 text-gray-400 hover:text-bhambola-gold mb-8 transition-colors relative z-20 cursor-pointer font-['Cinzel']"
                    >
                        <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="text-sm font-bold uppercase tracking-widest ">Back to Home</span>
                    </a>

                    {/* Header Section */}
                    <div className="mb-12 border-b border-white/10 pb-12">
                        <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-bhambola-gold to-bhambola-red bg-clip-text text-transparent uppercase tracking-tighter italic font-['Bodoni_Moda']">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-2xl text-gray-400 font-medium font-['Playfair_Display'] italic">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="glass-morphism p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                        {/* Subtle background glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-bhambola-red/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-bhambola-gold/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>

                        <div className="prose prose-invert prose-red max-w-none relative z-10">
                            {children}
                        </div>
                    </div>

                    {/* Quick Support */}
                    <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-bhambola-red/20 to-transparent border border-bhambola-red/20 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h3 className="text-xl font-bold mb-1">Still have questions?</h3>
                            <p className="text-gray-400">Our support team is here to help 24/7.</p>
                        </div>
                        <a
                            href="https://wa.me/yournumber"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-bhambola-red hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-bhambola-red/20 flex items-center gap-2"
                        >
                            <span>Chat with us</span>
                            <span className="text-xl">💬</span>
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LegalLayout;
