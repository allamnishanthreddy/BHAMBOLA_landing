import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AccountSummary = () => {
    const { user } = useAuth();
    const { language } = useLanguage();
    const t = translations[language];

    if (!user) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                Please log in to view this page.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Header />
            <main className="container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h1 className="text-4xl font-bold mb-8 text-bhambola-gold">
                        {t.nav.profile.summary}
                    </h1>

                    <div className="space-y-6">
                        <div className="border-b border-white/10 pb-4">
                            <label className="text-gray-400 text-sm block mb-1">User Name</label>
                            <p className="text-xl font-medium">{user.name}</p>
                        </div>

                        <div className="border-b border-white/10 pb-4">
                            <label className="text-gray-400 text-sm block mb-1">Email Address</label>
                            <p className="text-xl font-medium">{user.email}</p>
                        </div>

                        <div className="border-b border-white/10 pb-4">
                            <label className="text-gray-400 text-sm block mb-1">Membership</label>
                            <p className="text-xl font-medium text-bhambola-gold">Verified Community Member</p>
                        </div>

                        <div>
                            <label className="text-gray-400 text-sm block mb-1">Status</label>
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold border border-green-500/30">
                                Active
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AccountSummary;
