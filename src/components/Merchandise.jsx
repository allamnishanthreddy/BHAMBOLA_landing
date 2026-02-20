import React from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Merchandise = () => {
    const { language } = useLanguage();
    const t = translations[language].merchandise;

    const products = [
        { id: 1, name: t.products.hoodie, price: "2000 Chips", img: "👕" },
        { id: 2, name: t.products.cap, price: "800 Chips", img: "🧢" },
        { id: 3, name: t.products.mug, price: "500 Chips", img: "☕" },
    ];

    return (
        <section id="merchandise" className="py-20 relative overflow-hidden bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.title_prefix} <span className="text-bhambola-red">{t.title_highlight}</span></h2>
                    <p className="text-gray-600">{t.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((p) => (
                        <div key={p.id} className="bg-white p-8 rounded-2xl flex flex-col items-center hover:shadow-xl transition-all group border border-gray-100 shadow-lg">
                            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-6xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                                {p.img}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                            <p className="text-bhambola-red font-mono font-bold mb-6">{p.price}</p>
                            <Button variant="outline" className="w-full justify-center">{t.buy_now}</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Merchandise;
