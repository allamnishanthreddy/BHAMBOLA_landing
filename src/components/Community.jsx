import React from 'react';
import Button from './ui/Button';

const Community = () => {
    return (
        <section id="rules" className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Rules & KYC */}
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Community <span className="text-bhambola-red">Rules</span></h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl border-l-4 border-bhambola-red shadow-lg hover:shadow-xl transition-all">
                                <h4 className="font-bold text-xl mb-2 text-gray-900">Committee Exclusivity</h4>
                                <p className="text-gray-600">You can only belong to ONE committee. Verified members unlock access for others.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border-l-4 border-bhambola-gold shadow-lg hover:shadow-xl transition-all">
                                <h4 className="font-bold text-xl mb-2 text-gray-900">KYC Verification</h4>
                                <p className="text-gray-600">Aadhaar verification is mandatory. Trust is our currency.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border-l-4 border-gray-800 shadow-lg hover:shadow-xl transition-all">
                                <h4 className="font-bold text-xl mb-2 text-gray-900">Age Eligibility</h4>
                                <p className="text-gray-600">Open to everyone from 18 to 99 years. Inclusive for all genders.</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button variant="glass">Read Full Handout</Button>
                        </div>
                    </div>

                    {/* Events - Green Board */}
                    <div id="events">
                        <h2 className="text-4xl font-bold mb-8">Upcoming <span className="text-green-500">Meets</span></h2>

                        <div className="relative p-4 bg-[#1a472a] rounded-xl border-[12px] border-[#5c3a21] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Chalk dust effect */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 pointer-events-none"></div>

                            <div className="h-[400px] flex flex-col items-center justify-center p-6 border border-white/10 text-center font-handwriting">
                                <h3 className="text-3xl text-white/90 font-bold mb-6 font-mono" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                                    OFFLINE MEETUPS
                                </h3>

                                <div className="space-y-6 w-full">
                                    <div className="border-b border-white/20 pb-2">
                                        <p className="text-bhambola-gold text-xl">Hyderabad Social</p>
                                        <p className="text-white/60 text-sm">Feb 15th • 4:00 PM</p>
                                    </div>
                                    <div className="border-b border-white/20 pb-2">
                                        <p className="text-bhambola-gold text-xl">Bangalore Kitty Party</p>
                                        <p className="text-white/60 text-sm">Feb 20th • 12:00 PM</p>
                                    </div>
                                    <div>
                                        <p className="text-white/40 italic">More events coming soon...</p>
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
