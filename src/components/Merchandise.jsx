import React from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import logo from '../assets/images/logo_final_transparent.png';

const ProductCard = ({ name, price, description, color, delay }) => (
    <div
        className="group relative bg-white/5 backdrop-blur-2xl border-2 border-bhambola-gold rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center hover:border-white/40 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_80px_-20px_rgba(255,215,0,0.3)] overflow-hidden"
        style={{ transitionDelay: `${delay}ms` }}
    >
        {/* Animated Background Glow */}
        <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-${color}-500`}></div>

        {/* Product Visual Container */}
        <div className="relative w-full aspect-square mb-10 flex items-center justify-center rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 group-hover:border-white/10 transition-colors overflow-hidden">
            {/* Abstract Premium Visuals */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                <img src={logo} alt="" className="w-1/2 rotate-12 group-hover:rotate-0 transition-transform duration-1000 grayscale inverse" />
            </div>

            {/* Main Product "Icon" representing the GenZ item */}
            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-700 ease-out">
                {name.includes('Hoodie') && (
                    <div className="text-8xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">👕</div>
                )}
                {name.includes('Cap') && (
                    <div className="text-8xl filter drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">🧢</div>
                )}
                {name.includes('Mug') && (
                    <div className="text-8xl filter drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]">☕</div>
                )}
            </div>

            {/* Premium Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-bhambola-gold">Elite Series</span>
            </div>
        </div>

        <div className="text-center w-full space-y-3">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter group-hover:text-bhambola-gold transition-colors font-['Bodoni_Moda']">
                {name}
            </h3>
            <p className="text-white/40 text-sm font-medium leading-relaxed px-4">
                Exclusive drops for the Bhambola collective. Made for the grind.
            </p>
            <div className="pt-6 flex flex-col gap-4">
                <div className="text-3xl font-black text-bhambola-red flex items-center justify-center gap-2">
                    <span className="text-sm opacity-50 font-bold">COST:</span>
                    {price.split(' ')[0]}
                    <span className="text-xs text-white/40 font-black tracking-widest uppercase">CHIPS</span>
                </div>
                <button
                    className="w-full py-4 text-sm font-black uppercase tracking-[0.2em] rounded-2xl bg-white text-black hover:bg-bhambola-gold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 transform"
                >
                    {translations[useLanguage().language].merchandise.buy_now}
                </button>
            </div>
        </div>
    </div>
);

const Merchandise = () => {
    const { language } = useLanguage();
    const t = translations[language].merchandise;
    const [currentPage, setCurrentPage] = React.useState(0);

    const products = [
        { id: 1, name: t.products.hoodie, price: "2000 Chips", color: "white", delay: 0 },
        { id: 2, name: t.products.cap, price: "800 Chips", color: "yellow", delay: 100 },
        { id: 3, name: t.products.mug, price: "500 Chips", color: "red", delay: 200 },
        { id: 4, name: "Premium T-Shirt", price: "1200 Chips", color: "blue", delay: 0 },
        { id: 5, name: "Gold Chain", price: "5000 Chips", color: "yellow", delay: 100 },
        { id: 6, name: "Gaming Mousepad", price: "600 Chips", color: "purple", delay: 200 },
        { id: 7, name: "Bhambola Backpack", price: "2500 Chips", color: "green", delay: 0 },
        { id: 8, name: "Metal Water Bottle", price: "900 Chips", color: "gray", delay: 100 },
        { id: 9, name: "Desk Mat (Large)", price: "1500 Chips", color: "red", delay: 200 },
    ];

    const totalPages = Math.ceil(products.length / 3);
    const visibleProducts = products.slice(currentPage * 3, (currentPage + 1) * 3);

    return (
        <section id="merchandise" className="py-32 relative overflow-hidden bg-[#1A0000]">
            {/* Massive Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bhambola-red/5 rounded-full blur-[150px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-bhambola-red/20 border border-bhambola-red/30 mb-2">
                        <span className="text-xs font-black text-bhambola-red uppercase tracking-[0.3em] font-['Cinzel'] italic">Official Drop // 2024</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter font-['Cinzel']">
                        {t.title_prefix} <span className="text-bhambola-gold underline decoration-bhambola-red/30 underline-offset-8">{t.title_highlight}</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg font-medium pt-2 font-['Playfair_Display'] italic">
                        {t.subtitle}
                    </p>
                </div>

                {/* Carousel Navigation Top */}
                <div className="flex justify-end gap-4 mb-8 max-w-7xl mx-auto">
                    <button
                        onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-bhambola-red hover:border-bhambola-red transition-all"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-bhambola-red hover:border-bhambola-red transition-all"
                    >
                        →
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto transition-all duration-500 ease-in-out">
                    {visibleProducts.map((p) => (
                        <ProductCard key={p.id} {...p} />
                    ))}
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-16">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            className={`h-2 rounded-full transition-all duration-500 ${currentPage === i ? 'w-12 bg-bhambola-gold' : 'w-3 bg-white/20'}`}
                        ></button>
                    ))}
                </div>

                {/* Bottom decorative line */}
                <div className="mt-32 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
        </section>
    );
};

export default Merchandise;
