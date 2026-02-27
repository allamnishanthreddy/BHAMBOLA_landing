import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { translations } from '../translations';
import Button from './ui/Button';
import logo from '../assets/images/logo_official_2024.png';
import TransparentLogo from './ui/TransparentLogo';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];
    const { user, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const handleClickOutside = (event) => {
            if (showProfileMenu && !event.target.closest('.profile-dropdown-container')) {
                setShowProfileMenu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showProfileMenu]);

    // Language toggle is now handled by Context

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-red-950 via-red-900 to-black shadow-lg py-1' : 'py-3 bg-transparent'}`}>
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center h-full">
                {/* Logo - Left Corner */}
                <div className="flex-shrink-0">
                    {/* Logo - Clickable to Home */}
                    <a href="/" className="relative z-20 hover:scale-110 transition-transform duration-300 block -ml-4">
                        <TransparentLogo
                            src={logo}
                            className="h-20 md:h-28 w-auto"
                        />
                    </a>
                </div>

                {/* Desktop Nav - Centered Spacing */}
                <nav className="hidden xl:flex items-center gap-12">
                    {Object.keys(t.nav).filter(key => key !== 'login' && key !== 'signup' && key !== 'profile').map((key) => {
                        const isHomePage = window.location.pathname === '/';

                        // Special handling for the "WE ARE LEGAL!" button
                        if (key === 'legal') {
                            return (
                                <Link
                                    key={key}
                                    to="/legal-policy"
                                    className="px-6 py-2 bg-gradient-to-r from-bhambola-gold to-yellow-600 text-black font-black rounded-lg text-xs tracking-widest uppercase hover:scale-105 transition-all shadow-lg hover:shadow-bhambola-gold/40 font-['Cinzel']"
                                >
                                    {t.nav[key]}
                                </Link>
                            );
                        }

                        return (
                            <a
                                key={key}
                                href={isHomePage ? `#${key}` : `/#${key}`}
                                className="text-white hover:text-bhambola-gold transition-all duration-300 text-sm font-black tracking-widest uppercase py-2 relative group font-['Cinzel']"
                                onClick={(e) => {
                                    if (isHomePage) {
                                        e.preventDefault();
                                        const element = document.getElementById(key);
                                        element?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                {t.nav[key]}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bhambola-gold transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"></span>
                            </a>
                        );
                    })}
                </nav>

                {/* Account Section */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        <Link
                            to="/faqs"
                            className="w-10 h-10 flex items-center justify-center bg-bhambola-gold hover:bg-white text-black font-black rounded-full transition-all shadow-lg hover:scale-110"
                        >
                            <span className="text-xl">?</span>
                        </Link>
                    </div>

                    {user ? (
                        <div className="relative profile-dropdown-container flex items-center gap-3">
                            <span className="text-white font-bold hidden sm:inline text-sm tracking-wide">
                                {user.name}
                            </span>
                            <button
                                onClick={() => setShowProfileMenu(!showProfileMenu)}
                                className="w-10 h-10 rounded-full bg-bhambola-red flex items-center justify-center border-2 border-bhambola-gold/50 shadow-lg hover:scale-105 transition-transform relative z-10"
                            >
                                <span className="text-xl">👤</span>
                            </button>

                            {showProfileMenu && (
                                <div className="absolute right-0 top-full mt-3 w-56 bg-red-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up py-2 z-20">
                                    <Link
                                        to="/account"
                                        className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors border-b border-white/5"
                                        onClick={() => setShowProfileMenu(false)}
                                    >
                                        <span className="text-lg">📋</span>
                                        {t.nav.profile.summary}
                                    </Link>
                                    <Link
                                        to="/change-password"
                                        className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors border-b border-white/5"
                                        onClick={() => setShowProfileMenu(false)}
                                    >
                                        <span className="text-lg">🔑</span>
                                        {t.nav.profile.change_password}
                                    </Link>
                                    <button
                                        onClick={() => {
                                            logout();
                                            setShowProfileMenu(false);
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-white/10 transition-colors text-left"
                                    >
                                        <span className="text-lg">🚪</span>
                                        {t.nav.profile.logout}
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 flex-nowrap shrink-0">
                            <Link to="/signup">
                                <button className="px-6 py-2 text-sm font-bold text-white hover:text-bhambola-gold transition-colors border-2 border-transparent hover:border-bhambola-gold/30 rounded-lg whitespace-nowrap">
                                    {t.nav.signup}
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="px-6 py-2 text-sm font-bold text-white hover:text-bhambola-gold transition-colors border-2 border-transparent hover:border-bhambola-gold/30 rounded-lg whitespace-nowrap">
                                    {t.nav.login}
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
