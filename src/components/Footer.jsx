import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import logo from '../assets/images/logo_final_transparent.png';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="bg-black py-16 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="relative">
                            <img src={logo} alt="Bhambola Logo" className="h-20 md:h-28 w-auto object-contain" />
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            {t.enterprise_of} <span className="text-white font-bold">{t.group_name}</span>.
                        </p>
                        <p className="text-gray-500 text-sm">
                            {t.tagline}
                        </p>
                        <div className="flex gap-4 pt-4">
                            <button className="p-2 glass rounded-lg hover:bg-white/10">{t.download_android}</button>
                            <button className="p-2 glass rounded-lg hover:bg-white/10">{t.download_ios}</button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-bhambola-gold">{t.legal_title}</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">{t.privacy}</a></li>
                            <li><a href="#" className="hover:text-white">{t.legal}</a></li>
                            <li><a href="#" className="hover:text-white">{t.agreement}</a></li>
                            <li><a href="#" className="hover:text-white">{t.careers}</a></li>
                            <li><a href="#" className="hover:text-white">{t.about}</a></li>
                        </ul>
                    </div>
                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-bhambola-gold">{t.support_title}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>{t.help}</li>
                            <li>{t.contact}</li>
                            <li className="flex items-center gap-2 text-green-400">
                                <span>{t.whatsapp}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Certifications / Trust */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">{t.rights}</p>
                    <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                        {/* Certificates Placeholders */}
                        <div className="border border-white/30 px-2 py-1 text-xs rounded">SSL SECURE</div>
                        <div className="border border-white/30 px-2 py-1 text-xs rounded">GLI CERTIFIED</div>
                        <div className="border border-white/30 px-2 py-1 text-xs rounded">RNG VERIFIED</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
