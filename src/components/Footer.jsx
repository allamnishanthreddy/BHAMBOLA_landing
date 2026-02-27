import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import logo from '../assets/images/logo_official_2024.png';
import TransparentLogo from './ui/TransparentLogo';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="bg-[#800000] py-16 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex justify-start -ml-8">
                            <TransparentLogo
                                src={logo}
                                className="h-24 md:h-32 w-auto"
                            />
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
                        <h4 className="text-lg font-black text-bhambola-gold font-['Cinzel'] tracking-widest uppercase italic">{t.legal_title}</h4>
                        <ul className="space-y-2 text-gray-400 text-sm font-['Cinzel'] font-bold">
                            <li><Link to="/terms" className="hover:text-white uppercase tracking-wider">{t.privacy}</Link></li>
                            <li><Link to="/legal-policy" className="hover:text-white uppercase tracking-wider">{t.legal}</Link></li>
                            <li><Link to="/faqs" className="hover:text-white uppercase tracking-wider">FAQs</Link></li>
                            <li><Link to="/about" className="hover:text-white uppercase tracking-wider">{t.about}</Link></li>
                            <li><Link to="/legal-policy" className="hover:text-white uppercase tracking-wider">CERTIFICATIONS</Link></li>
                        </ul>
                    </div>
                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-black text-bhambola-gold font-['Cinzel'] tracking-widest uppercase italic">{t.support_title}</h4>
                        <ul className="space-y-2 text-gray-400 font-medium font-['Playfair_Display'] italic">
                            <li>{t.help}</li>
                            <li>{t.contact}</li>
                            <li className="flex items-center gap-2 text-green-400 font-bold">
                                <span>{t.whatsapp}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Certifications / Trust */}
                <div className="mt-16 pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-400 text-base md:text-lg font-medium">{t.rights}</p>
                    <div className="flex flex-wrap justify-center gap-6 opacity-80 grayscale-0 transition-all">
                        {/* Certificates Placeholders */}
                        <div className="border-2 border-bhambola-gold/50 px-4 py-2 text-sm md:text-base font-black rounded-xl bg-black/40 text-bhambola-gold shadow-[0_0_15px_rgba(255,215,0,0.1)]">SSL SECURE</div>
                        <div className="border-2 border-bhambola-gold/50 px-4 py-2 text-sm md:text-base font-black rounded-xl bg-black/40 text-bhambola-gold shadow-[0_0_15px_rgba(255,215,0,0.1)]">GLI CERTIFIED</div>
                        <div className="border-2 border-bhambola-gold/50 px-4 py-2 text-sm md:text-base font-black rounded-xl bg-black/40 text-bhambola-gold shadow-[0_0_15px_rgba(255,215,0,0.1)]">RNG VERIFIED</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
