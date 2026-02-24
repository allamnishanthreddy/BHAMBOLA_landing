import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';

const ChangePassword = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('success');
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Header />
            <main className="container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <h1 className="text-3xl font-bold mb-8 text-bhambola-gold text-center">
                        {t.nav.profile.change_password}
                    </h1>

                    {status === 'success' && (
                        <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-xl mb-6 text-center text-sm">
                            Password changed successfully!
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Current Password</label>
                            <input
                                type="password"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bhambola-gold/50 transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">New Password</label>
                            <input
                                type="password"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bhambola-gold/50 transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Confirm New Password</label>
                            <input
                                type="password"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bhambola-gold/50 transition-all"
                                required
                            />
                        </div>

                        <Button className="w-full py-4 text-lg font-bold shadow-xl">
                            Update Password
                        </Button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ChangePassword;
