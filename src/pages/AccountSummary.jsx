import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';

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

    const handleJoinGame = () => {
        // Redirect to store logic
        window.open('https://play.google.com/store', '_blank');
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-bhambola-red">
            <Header />
            <main className="container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* Hero Section: Welcome & Join Game */}
                    <div className="flex flex-col md:flex-row justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl gap-6">
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-bhambola-gold mb-2">
                                {t.nav.profile.summary}
                            </h1>
                            <p className="text-gray-400">Welcome, <span className="text-white font-bold">{user.name}</span></p>
                            <p className="text-xs text-gray-500 mt-1">{user.email}</p>
                        </div>
                        <Button onClick={handleJoinGame} className="px-8 py-4 text-lg font-bold shadow-xl border-2 border-bhambola-gold animate-pulse">
                            🎮 {t.account.join_game}
                        </Button>
                    </div>

                    {/* Chip Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Chip Balance */}
                        <div className="bg-gradient-to-br from-red-950 to-black border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-bhambola-gold/20 rounded-full flex items-center justify-center mb-4 border border-bhambola-gold/30">
                                <span className="text-2xl">💰</span>
                            </div>
                            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">{t.account.balance}</h3>
                            <p className="text-3xl font-black text-bhambola-gold tracking-tighter">{user.balance.toLocaleString()}</p>
                            <Button variant="secondary" className="mt-4 py-2 px-6 text-sm">
                                {t.account.buy_chips}
                            </Button>
                        </div>

                        {/* Purchased Chips */}
                        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 border border-blue-500/30">
                                <span className="text-2xl">🛍️</span>
                            </div>
                            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">{t.account.purchased}</h3>
                            <p className="text-3xl font-black text-white tracking-tighter">{user.purchasedChips.toLocaleString()}</p>
                            <p className="text-xs text-blue-400 mt-2 font-bold uppercase tracking-widest">Real Money Purchase</p>
                        </div>

                        {/* Daily Usage */}
                        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                                <span className="text-2xl">📈</span>
                            </div>
                            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">{t.account.daily_usage}</h3>
                            <p className="text-3xl font-black text-white tracking-tighter">{user.dailyUsage.toLocaleString()}</p>
                            <p className="text-xs text-green-400 mt-2 font-bold uppercase tracking-widest">Game Activity</p>
                        </div>
                    </div>

                    {/* Transaction History */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-2xl">📜</span>
                            <h2 className="text-2xl font-bold">{t.account.history}</h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-gray-400 text-sm uppercase">
                                        <th className="py-4 px-2">{t.account.col_date}</th>
                                        <th className="py-4 px-2">{t.account.col_type}</th>
                                        <th className="py-4 px-2">{t.account.col_amount}</th>
                                        <th className="py-4 px-2">{t.account.col_status}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.transactions.map((tx) => (
                                        <tr key={tx.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-2 text-sm text-gray-300 font-mono">{tx.date}</td>
                                            <td className="py-4 px-2 text-sm font-bold">{tx.type}</td>
                                            <td className={`py-4 px-2 text-sm font-black ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()}
                                            </td>
                                            <td className="py-4 px-2 text-xs">
                                                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 font-bold uppercase tracking-widest">
                                                    {tx.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AccountSummary;
