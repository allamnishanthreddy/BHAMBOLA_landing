import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { translations } from '../translations';
import Button from './ui/Button';
import logo from '../assets/images/logo_final_transparent.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];
    const { user, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Language toggle is now handled by Context

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-red-950/90 backdrop-blur-md shadow-lg py-2' : 'py-4 bg-transparent'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo - Left Corner */}
                <div className="flex items-center gap-2">
                    {/* Logo with removed white background technique */}
                    {/* Logo - White transparent version */}
                    <div className="relative">
                        <img src={logo} alt="Bhambola Logo" className="h-20 md:h-28 w-auto object-contain" />
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-16">
                    {Object.keys(t.nav).filter(key => key !== 'login' && key !== 'signup').map((key) => (
                        <a
                            key={key}
                            href={`#${key}`}
                            className="text-white hover:text-bhambola-gold transition-colors font-bold text-sm tracking-wide uppercase"
                        >
                            {t.nav[key]}
                        </a>
                    ))}
                </nav>

                {/* Actions - Right */}
                <div className="flex items-center gap-4">
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-xs font-bold hover:bg-white/10 transition-colors text-white"
                        title="Switch Language"
                    >
                        {language}
                    </button>

                    {/* FAQs Icon */}
                    <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-bhambola-gold transition-colors">
                        <span className="text-xl text-bhambola-red">❓</span>
                    </button>

                    {/* Login Button or User Profile */}
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-black font-bold hidden sm:inline">Hi, {user.name}</span>
                            <button
                                onClick={logout}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-bhambola-red shadow-lg hover:scale-105 transition-transform group"
                                title="User Profile / Logout"
                            >
                                <span className="text-2xl group-hover:hidden">👤</span>
                                <span className="text-sm font-bold hidden group-hover:block text-red-600">X</span>
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link to="/login">
                                <button className="hidden sm:block px-6 py-2 text-sm font-bold text-white hover:text-bhambola-gold transition-colors border-2 border-transparent hover:border-bhambola-gold/30 rounded-lg">
                                    {t.nav.login}
                                </button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="secondary" className="hidden sm:block px-6 py-2 text-sm font-bold shadow-lg">
                                    {t.nav.signup}
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
