import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [isMobileLogin, setIsMobileLogin] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState('');
    const { login, loginWithPhone, verifyOTP, socialLogin } = useAuth();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const t = translations[language].auth;

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (isMobileLogin) {
            if (!otpSent) {
                if (loginWithPhone(phone)) {
                    setOtpSent(true);
                } else {
                    setError(t.failed_login);
                }
            } else {
                if (verifyOTP(phone, otp)) {
                    navigate('/intro');
                } else {
                    setError(t.failed_login);
                }
            }
        } else {
            if (login(email, password)) {
                navigate('/intro');
            } else {
                setError(t.failed_login);
            }
        }
    };

    const handleSocialLogin = (provider) => {
        if (socialLogin(provider)) {
            navigate('/intro');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-950 via-red-900 to-black p-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-bhambola-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10 animate-fade-in-up">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-2 font-['Cinzel'] tracking-tight uppercase italic">{t.login_welcome}</h2>
                    <p className="text-gray-400 font-['Playfair_Display'] italic font-medium text-base">{t.login_subtitle}</p>
                </div>

                {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-4 text-center text-sm">{error}</div>}

                {/* Login Method Toggle */}
                <div className="flex bg-white/5 p-1 rounded-xl mb-6">
                    <button
                        onClick={() => { setIsMobileLogin(false); setOtpSent(false); setError(''); }}
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isMobileLogin ? 'bg-bhambola-red text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        {t.login_email}
                    </button>
                    <button
                        onClick={() => { setIsMobileLogin(true); setOtpSent(false); setError(''); }}
                        className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isMobileLogin ? 'bg-bhambola-red text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        {t.login_mobile}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {!isMobileLogin ? (
                        <>
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
                                    placeholder={t.password_placeholder}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">{t.mobile_label}</label>
                                <input
                                    type="tel"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-bhambola-gold/50 focus:ring-1 focus:ring-bhambola-gold/50 transition-all"
                                    placeholder={t.mobile_placeholder}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    disabled={otpSent}
                                    required
                                />
                            </div>
                            {otpSent && (
                                <div className="animate-fade-in-up">
                                    <label className="block text-gray-300 text-sm font-medium mb-2">{t.otp_label}</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-bhambola-gold/50 focus:ring-1 focus:ring-bhambola-gold/50 transition-all"
                                        placeholder={t.otp_placeholder}
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                    <p className="text-xs text-bhambola-gold mt-2">Hint: Use 123456</p>
                                </div>
                            )}
                        </>
                    )}

                    <Button className="w-full py-4 text-lg font-bold shadow-xl hover:shadow-red-500/20">
                        {isMobileLogin ? (otpSent ? t.verify_otp : t.send_otp) : t.login_btn}
                    </Button>
                </form>

                {/* Social Logins */}
                <div className="mt-8">
                    <div className="relative flex items-center justify-center mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <span className="relative px-4 bg-transparent text-gray-500 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">Or continue with</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <button
                            onClick={() => handleSocialLogin('Google')}
                            className="flex items-center justify-center py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                            title={t.social_google}
                        >
                            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.26 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </button>
                        <button
                            onClick={() => handleSocialLogin('Apple')}
                            className="flex items-center justify-center py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                            title={t.social_apple}
                        >
                            <svg className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                        </button>
                        <button
                            onClick={() => handleSocialLogin('Microsoft')}
                            className="flex items-center justify-center py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                            title={t.social_microsoft}
                        >
                            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#f3f3f3" d="M0 0h11v11H0z" />
                                <path fill="#f3f3f3" d="M12 0h11v11H12z" />
                                <path fill="#f3f3f3" d="M0 12h11v11H0z" />
                                <path fill="#f3f3f3" d="M12 12h11v11H12z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    {t.no_account}
                    <Link to="/signup" className="text-bhambola-gold hover:text-white font-bold ml-1 transition-colors">
                        {t.link_signup}
                    </Link>
                </div>

                <div className="mt-6 flex flex-col gap-2 items-center">
                    <Link to="/rules" className="text-bhambola-gold/80 hover:text-bhambola-gold text-xs transition-colors font-medium">
                        {translations[language].nav.rules}
                    </Link>
                    <Link to="/" className="text-gray-500 hover:text-white text-xs transition-colors">
                        {t.back_home}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
