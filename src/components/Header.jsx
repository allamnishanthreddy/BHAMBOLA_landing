import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { translations } from '../translations';
import Button from './ui/Button';
import logo from '../assets/images/logo_final_transparent.png';

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
                    {Object.keys(t.nav).filter(key => key !== 'login' && key !== 'signup' && key !== 'profile').map((key) => {
                        const isHomePage = window.location.pathname === '/';
                        return (
                            <Link
                                key={key}
                                to={isHomePage ? `#${key}` : `/#${key}`}
                                onClick={(e) => {
                                    if (isHomePage) {
                                        e.preventDefault();
                                        const element = document.getElementById(key);
                                        if (element) {
                                            const offset = 80; // Header height
                                            const elementPosition = element.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.pageYOffset - offset;

                                            window.scrollTo({
                                                top: offsetPosition,
                                                behavior: 'smooth'
                                            });
                                        }
                                        window.history.pushState(null, '', `#${key}`);
                                    }
                                }}
                                className="text-white hover:text-bhambola-gold transition-colors font-bold text-sm tracking-wide uppercase"
                            >
                                {t.nav[key]}
                            </Link>
                        );
                    })}
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

                    {/* Login Button or User Profile Dropdown */}
                    {user ? (
                        <div className="relative profile-dropdown-container flex items-center gap-3">
                            {/* User Name on Left */}
                            <span className="text-white font-bold hidden sm:inline text-sm tracking-wide">
                                {user.name}
                            </span>

                            {/* Circular Icon on Right */}
                            <button
                                onClick={() => setShowProfileMenu(!showProfileMenu)}
                                className="w-10 h-10 rounded-full bg-bhambola-red flex items-center justify-center border-2 border-bhambola-gold/50 shadow-lg hover:scale-105 transition-transform relative z-10"
                            >
                                <span className="text-xl">👤</span>
                            </button>

                            {/* Dropdown Menu */}
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
