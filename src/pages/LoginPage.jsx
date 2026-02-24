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
                    <h2 className="text-3xl font-bold text-white mb-2">{t.login_welcome}</h2>
                    <p className="text-gray-400">{t.login_subtitle}</p>
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
                            <span className="text-xl group-hover:scale-110 transition-transform">🌐</span>
                        </button>
                        <button
                            onClick={() => handleSocialLogin('Apple')}
                            className="flex items-center justify-center py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                            title={t.social_apple}
                        >
                            <span className="text-xl group-hover:scale-110 transition-transform">🍎</span>
                        </button>
                        <button
                            onClick={() => handleSocialLogin('Microsoft')}
                            className="flex items-center justify-center py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                            title={t.social_microsoft}
                        >
                            <span className="text-xl group-hover:scale-110 transition-transform">🪟</span>
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    {t.no_account}
                    <Link to="/signup" className="text-bhambola-gold hover:text-white font-bold ml-1 transition-colors">
                        {t.signup_link}
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

export default LoginPage;
