import React from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Community = () => {
    const { language } = useLanguage();
    const t = translations[language].community;

    return (
        <section id="community" className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Rules & KYC */}
                    <div>
                        <h2 className="text-4xl font-bold mb-8">{t.rules_title_prefix} <span className="text-bhambola-red">{t.rules_title_highlight}</span></h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl border-l-4 border-bhambola-red shadow-lg hover:shadow-xl transition-all">
                                <h4 className="font-bold text-xl mb-2 text-gray-900">{t.committee.title}</h4>
                                <p className="text-gray-600">{t.committee.desc}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border-l-4 border-bhambola-gold shadow-lg hover:shadow-xl transition-all">
                                <h4 className="font-bold text-xl mb-2 text-gray-900">{t.kyc.title}</h4>
                                <p className="text-gray-600">{t.kyc.desc}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border-l-4 border-gray-800 shadow-lg hover:shadow-xl transition-all">
                                <h4 className="font-bold text-xl mb-2 text-gray-900">{t.age.title}</h4>
                                <p className="text-gray-600">{t.age.desc}</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button variant="glass">{t.read_full}</Button>
                        </div>
                    </div>

                    {/* Events - Green Board */}
                    <div id="events">
                        <h2 className="text-4xl font-bold mb-8">{t.events_title_prefix} <span className="text-green-500">{t.events_title_highlight}</span></h2>

                        <div className="relative p-4 bg-[#1a472a] rounded-xl border-[12px] border-[#5c3a21] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Chalk dust effect */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 pointer-events-none"></div>

                            <div className="h-[400px] flex flex-col items-center justify-center p-6 border border-white/10 text-center font-handwriting">
                                <h3 className="text-3xl text-white/90 font-bold mb-6 font-mono" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                                    {t.offline_meetups}
                                </h3>

                                <div className="space-y-6 w-full">
                                    <div className="border-b border-white/20 pb-2">
                                        <p className="text-bhambola-gold text-xl">{t.event1.name}</p>
                                        <p className="text-white/60 text-sm">{t.event1.time}</p>
                                    </div>
                                    <div className="border-b border-white/20 pb-2">
                                        <p className="text-bhambola-gold text-xl">{t.event2.name}</p>
                                        <p className="text-white/60 text-sm">{t.event2.time}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/40 italic">{t.more_coming}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
