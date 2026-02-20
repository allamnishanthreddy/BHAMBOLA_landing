import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const t = translations[language].auth;

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            return setError(t.passwords_mismatch);
        }

        if (login(email, password)) {
            navigate('/');
        } else {
            setError(t.failed_signup);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-950 via-red-900 to-black p-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-bhambola-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10 animate-fade-in-up">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">{t.signup_title}</h2>
                    <p className="text-gray-400">{t.signup_subtitle}</p>
                </div>

                {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-4 text-center text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">{t.email_label}</label>
                        <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-bhambola-gold/50 focus:ring-1 focus:ring-bhambola-gold/50 transition-all"
                            placeholder={t.email_placeholder}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">{t.password_label}</label>
                        <input
                            type="password"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-bhambola-gold/50 focus:ring-1 focus:ring-bhambola-gold/50 transition-all"
                            placeholder={t.password_create_placeholder}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">{t.confirm_password_label}</label>
                        <input
                            type="password"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-bhambola-gold/50 focus:ring-1 focus:ring-bhambola-gold/50 transition-all"
                            placeholder={t.confirm_password_placeholder}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <Button className="w-full py-4 text-lg font-bold shadow-xl hover:shadow-red-500/20 mt-2">
                        {t.signup_btn}
                    </Button>
                </form>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    {t.has_account}
                    <Link to="/login" className="text-bhambola-gold hover:text-white font-bold ml-1 transition-colors">
                        {t.login_link}
                    </Link>
                </div>

                <div className="mt-6 text-center">
                    <Link to="/" className="text-gray-500 hover:text-white text-xs transition-colors">
                        {t.back_home}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
