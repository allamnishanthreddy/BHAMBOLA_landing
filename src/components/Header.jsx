import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import logo from '../assets/images/logo.jpg';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [lang, setLang] = useState('EN');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages = ['EN', 'HI', 'TE'];

    const toggleLang = () => {
        setLang(prevLang => {
            const currentIndex = languages.indexOf(prevLang);
            const nextIndex = (currentIndex + 1) % languages.length;
            return languages[nextIndex];
        });
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2' : 'py-4 bg-transparent'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo - Left Corner */}
                <div className="flex items-center gap-2">
                    {/* Logo with improved blending */}
                    <img src={logo} alt="Bhambola Logo" className="h-20 w-auto object-contain mix-blend-multiply opacity-90" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Home', 'Merchandise', 'Rules', 'Chips', 'Events'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-black hover:text-bhambola-red transition-colors font-bold text-sm tracking-wide uppercase"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Actions - Right */}
                <div className="flex items-center gap-4">
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLang}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold hover:bg-black/5 transition-colors text-gray-700"
                        title="Switch Language"
                    >
                        {lang}
                    </button>

                    {/* FAQs Icon */}
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-bhambola-red transition-colors">
                        <span className="text-xl">❓</span>
                        <span className="hidden sm:inline">FAQs</span>
                    </button>

                    {/* Login Button */}
                    <Button variant="secondary" className="hidden sm:block px-6 py-2 text-sm font-bold shadow-lg">
                        Login
                    </Button>

                    {/* User Icon */}
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-bhambola-red shadow-lg hover:scale-105 transition-transform" title="User Profile">
                        <span className="text-2xl">👤</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
