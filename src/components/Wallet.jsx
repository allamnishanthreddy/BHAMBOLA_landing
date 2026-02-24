import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { translations } from '../translations';
import Button from './ui/Button';

const Wallet = () => {
    const { language } = useLanguage();
    const { user } = useAuth();
    const t = translations[language];
    const pt = t.pricing;

    // Payment Methods Icons (Mock)
    const paymentMethods = [
        { name: "Cards", icon: "💳" },
        { name: "UPI", icon: "📱" },
        { name: "G-Pay", icon: "🅿️" },
        { name: "PhonePe", icon: "🟣" }
    ];

    return (
        <section id="chips" className="py-24 relative overflow-hidden bg-black">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-bhambola-red rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-bhambola-gold rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                            <span className="text-bhambola-gold uppercase">{pt.title_highlight}</span>
                            <br />
                            <span className="text-white uppercase">{pt.title_suffix}</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                            {pt.subtitle}
                        </p>
                    </div>

                    {!user ? (
                        /* LOGGED OUT: Advertising Page Style */
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-bhambola-red via-bhambola-gold to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-12 text-center space-y-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                                    <div className="p-4 border border-white/5 rounded-2xl bg-white/5 font-black text-white italic">FAST</div>
                                    <div className="p-4 border border-white/5 rounded-2xl bg-white/5 font-black text-white italic">SECURE</div>
                                    <div className="p-4 border border-white/5 rounded-2xl bg-white/5 font-black text-white italic">GENZ</div>
                                    <div className="p-4 border border-white/5 rounded-2xl bg-white/5 font-black text-white italic">LIT</div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold text-white uppercase tracking-widest">{pt.cta_login}</h3>
                                    <div className="flex justify-center gap-4">
                                        <Button className="px-12 py-4 text-xl" href="/login">LOGIN</Button>
                                    </div>
                                </div>

                                <div className="pt-12 flex flex-wrap justify-center gap-12 items-center grayscale opacity-30">
                                    <span className="text-2xl font-black text-white opacity-20">VISA</span>
                                    <span className="text-2xl font-black text-white opacity-20">MASTERCARD</span>
                                    <span className="text-2xl font-black text-white opacity-20">UPI</span>
                                    <span className="text-2xl font-black text-white opacity-20">NETBANKING</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* LOGGED IN: Dashboard View */
                        <div className="space-y-12">
                            {/* User Stats Card */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-br from-bhambola-red to-red-950 p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <h4 className="text-red-200 text-sm font-bold uppercase tracking-widest mb-2">{t.account.balance}</h4>
                                        <p className="text-5xl font-black text-white tracking-tighter mb-4">{user.balance.toLocaleString()}</p>
                                        <div className="flex items-center gap-2 text-red-200 text-xs font-bold bg-black/20 self-start px-3 py-1 rounded-full w-fit">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                                            LIVE CHIPS
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 text-[180px] opacity-10 font-black group-hover:rotate-12 transition-transform duration-700">₿</div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                                    <h4 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">{pt.last_tx}</h4>
                                    {user.transactions && user.transactions[0] ? (
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center bg-black/40 p-4 rounded-2xl border border-white/5">
                                                <div>
                                                    <p className="font-bold text-white">{user.transactions[0].type}</p>
                                                    <p className="text-xs text-gray-500">{user.transactions[0].date}</p>
                                                </div>
                                                <p className={`text-xl font-black ${user.transactions[0].amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                    {user.transactions[0].amount > 0 ? '+' : ''}{user.transactions[0].amount.toLocaleString()}
                                                </p>
                                            </div>
                                            <Button variant="secondary" className="w-full justify-center text-sm uppercase tracking-widest py-3">
                                                {pt.buy_more}
                                            </Button>
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 italic">No recent activity</p>
                                    )}
                                </div>
                            </div>

                            {/* The 5 Main Principles & Payment Methods */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                                {/* Rules */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-bhambola-gold flex items-center gap-3">
                                        <span className="w-8 h-[2px] bg-bhambola-gold"></span>
                                        {pt.rules_title}
                                    </h3>
                                    <div className="space-y-4">
                                        {[pt.rule1, pt.rule2, pt.rule3, pt.rule4, pt.rule5].map((rule, i) => (
                                            <div key={i} className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-default group">
                                                <div className="w-8 h-8 rounded-lg bg-bhambola-red/20 flex items-center justify-center text-bhambola-red font-black shrink-0 group-hover:bg-bhambola-red group-hover:text-white transition-colors">
                                                    {i + 1}
                                                </div>
                                                <p className="text-gray-300 text-sm leading-relaxed">{rule}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Payment Methods */}
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 space-y-8">
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                        {t.wallet.payment_methods}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        {paymentMethods.map((method, i) => (
                                            <div key={i} className="flex items-center gap-4 p-6 bg-black/40 border border-white/5 rounded-2xl hover:border-bhambola-gold/50 cursor-pointer transition-all hover:-translate-y-1 group">
                                                <span className="text-3xl group-hover:scale-110 transition-transform">{method.icon}</span>
                                                <span className="font-bold text-gray-200 group-hover:text-white">{method.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-6 bg-bhambola-gold/10 border border-bhambola-gold/20 rounded-2xl text-center">
                                        <p className="text-bhambola-gold font-black text-lg">MINIMUM: 50 CHIPS</p>
                                        <p className="text-bhambola-gold/60 text-xs mt-1 uppercase tracking-widest">(₹1 = 1 CHIP)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Wallet;
