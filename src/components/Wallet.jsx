import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import Button from './ui/Button';

const Wallet = () => {
    const { language } = useLanguage();
    const { user } = useAuth();
    const t = translations[language];
    const pt = t.pricing;

    // Payment Methods Icons (Mock)
    const paymentMethods = [
        {
            name: "Cards",
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                    <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            name: "UPI",
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            name: "GPay",
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.5,50.1V65c0,0.3,0.1,0.5,0.3,0.7c0.2,0.2,0.4,0.3,0.7,0.3h4.4c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7V50.1h10.9 c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7v-4.4c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.3-0.7-0.3H51.9V28.8h11.7 c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7v-4.4c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.3-0.7-0.3H46.5c-0.3,0-0.5,0.1-0.7,0.3 c-0.2,0.2-0.3,0.4-0.3,0.7v41.9h-0.1c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.4-0.3,0.7v4.4c0,0.3,0.1,0.5,0.3,0.7c0.2,0.2,0.4,0.3,0.7,0.3 H45.5z" fill="#fff" />
                    <path d="M78.6,41.9c0-9.4-7.6-17.1-17-17.1c-9.4,0-17,7.6-17,17.1c0,9.4,7.6,17,17,17C71,58.9,78.6,51.3,78.6,41.9z M61.6,51.7 c-5.4,0-9.8-4.4-9.8-9.8c0-5.4,4.4-9.8,9.8-9.8c5.4,0,9.8,4.4,9.8,9.8C71.3,47.3,66.9,51.7,61.6,51.7z" fill="#4285F4" />
                    <path d="M21.4,41.9c0,9.4,7.6,17,17,17c9.4,0,17.1-7.6,17.1-17c0-9.4-7.7-17.1-17.1-17.1C29.1,24.8,21.4,32.5,21.4,41.9z M38.4,32.1 c5.4,0,9.8,4.4,9.8,9.8c0,5.4-4.4,9.8-9.8,9.8c-5.4,0-9.8-4.4-9.8-9.8C28.6,36.5,33,32.1,38.4,32.1z" fill="#34A853" />
                </svg>
            )
        },
        {
            name: "PhonePe",
            icon: (
                <svg className="w-10 h-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="20" fill="#5f259f" />
                    <path d="M30 30h40v40h-40z" fill="none" />
                    <path d="M50 20c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm-5-30h10v20h-10z" fill="#fff" />
                </svg>
            )
        }
    ];

    return (
        <section id="chips" className="py-24 relative overflow-hidden bg-[#800000]">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-bhambola-gold/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter font-['Luckiest_Guy'] italic uppercase drop-shadow-2xl">
                            <span className="text-bhambola-gold">{pt.title_highlight}</span>
                            <br />
                            <span className="text-white">{pt.title_suffix}</span>
                        </h2>
                        <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto font-medium font-['Playfair_Display'] italic drop-shadow-md">
                            {pt.subtitle}
                        </p>
                    </div>

                    {!user ? (
                        /* LOGGED OUT: Advertising Page Style */
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-bhambola-red via-bhambola-gold to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-[#800000]/80 backdrop-blur-3xl border border-white/10 rounded-3xl p-12 text-center space-y-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70 transition-all duration-700">
                                    <div className="p-4 border border-white/10 rounded-2xl bg-white/5 font-black text-white italic">FAST</div>
                                    <div className="p-4 border border-white/10 rounded-2xl bg-white/5 font-black text-white italic">SECURE</div>
                                    <div className="p-4 border border-white/10 rounded-2xl bg-white/5 font-black text-white italic">GENZ</div>
                                    <div className="p-4 border border-white/10 rounded-2xl bg-white/5 font-black text-white italic">LIT</div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold text-white uppercase tracking-widest">{pt.cta_login}</h3>
                                    <div className="flex justify-center gap-4">
                                        <Link to="/login">
                                            <Button className="px-12 py-4 text-xl">LOGIN</Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="pt-12 flex flex-wrap justify-center gap-12 items-center grayscale opacity-50">
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
                                <div className="bg-gradient-to-br from-bhambola-red to-[#800000] p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <h4 className="text-red-100 text-sm font-black uppercase tracking-[0.3em] mb-2 font-['Cinzel']">{t.account.balance}</h4>
                                        <p className="text-5xl md:text-6xl font-black text-white tracking-widest mb-4 font-['Luckiest_Guy'] italic drop-shadow-lg">{user.balance.toLocaleString()}</p>
                                        <div className="flex items-center gap-2 text-red-100 text-xs font-black bg-black/20 self-start px-4 py-1.5 rounded-full w-fit font-['Cinzel'] tracking-widest">
                                            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></span>
                                            LIVE CHIPS
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 text-[180px] opacity-10 font-black group-hover:rotate-12 transition-transform duration-700">₿</div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col justify-center">
                                    <h4 className="text-gray-400 text-sm font-black uppercase tracking-[0.3em] mb-4 font-['Cinzel']">{pt.last_tx}</h4>
                                    {user.transactions && user.transactions[0] ? (
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-center bg-black/40 p-6 rounded-2xl border border-white/5">
                                                <div>
                                                    <p className="font-black text-white text-xl font-['Cinzel'] uppercase tracking-tight">{user.transactions[0].type}</p>
                                                    <p className="text-xs text-gray-500 font-bold">{user.transactions[0].date}</p>
                                                </div>
                                                <p className={`text-3xl font-black font-['Luckiest_Guy'] tracking-widest ${user.transactions[0].amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                    {user.transactions[0].amount > 0 ? '+' : ''}{user.transactions[0].amount.toLocaleString()}
                                                </p>
                                            </div>
                                            <Button variant="secondary" className="w-full justify-center text-sm font-black uppercase tracking-[0.3em] py-4 font-['Cinzel']">
                                                {pt.buy_more}
                                            </Button>
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 italic font-['Playfair_Display'] text-lg">No recent activity</p>
                                    )}
                                </div>
                            </div>

                            {/* The 5 Main Principles & Payment Methods */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                                {/* Rules */}
                                <div className="space-y-8">
                                    <h3 className="text-3xl font-black text-bhambola-gold flex items-center gap-4 font-['Cinzel'] tracking-[0.2em] uppercase italic">
                                        <span className="w-12 h-[3px] bg-bhambola-gold"></span>
                                        {pt.rules_title}
                                    </h3>
                                    <div className="space-y-4">
                                        {[pt.rule1, pt.rule2, pt.rule3, pt.rule4, pt.rule5].map((rule, i) => (
                                            <div key={i} className="flex gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-default group">
                                                <div className="w-10 h-10 rounded-xl bg-bhambola-red/20 flex items-center justify-center text-bhambola-red font-black text-xl shrink-0 group-hover:bg-bhambola-red group-hover:text-white transition-colors font-['Luckiest_Guy'] tracking-tighter">
                                                    {i + 1}
                                                </div>
                                                <p className="text-white/80 text-lg leading-relaxed font-['Playfair_Display'] italic font-medium">{rule}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Payment Methods */}
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 space-y-10">
                                    <h3 className="text-3xl font-black text-white flex items-center gap-3 font-['Cinzel'] tracking-[0.2em] uppercase italic">
                                        {t.wallet.payment_methods}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-6">
                                        {paymentMethods.map((method, i) => (
                                            <div key={i} className="flex items-center gap-4 p-6 bg-black/40 border border-white/5 rounded-2xl hover:border-bhambola-gold/50 cursor-pointer transition-all hover:-translate-y-1 group">
                                                <div className="group-hover:scale-125 transition-transform duration-500 text-bhambola-gold">
                                                    {method.icon}
                                                </div>
                                                <span className="font-black text-gray-200 group-hover:text-white font-['Cinzel'] uppercase tracking-widest text-sm">{method.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-8 bg-bhambola-gold/10 border border-bhambola-gold/20 rounded-2xl text-center transform hover:scale-[1.02] transition-transform">
                                        <p className="text-bhambola-gold font-black text-2xl font-['Luckiest_Guy'] tracking-[0.2em]">{pt.min_chips}</p>
                                        <p className="text-bhambola-gold/60 text-xs mt-2 uppercase tracking-[0.4em] font-black font-['Cinzel']">{pt.chip_rate}</p>
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
