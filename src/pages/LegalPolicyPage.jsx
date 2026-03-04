import React, { useState } from 'react';
import LegalLayout from '../components/LegalLayout';
import LegalModal from '../components/ui/LegalModal';

const LegalPolicyPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const professionalLegalContent = (
        <div className="space-y-12 pr-4 text-gray-300 font-medium leading-relaxed">
            <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h4 className="text-xl font-black text-bhambola-gold mb-6 uppercase tracking-widest border-b border-bhambola-gold/20 pb-4">Legal Disclaimer</h4>
                <p>Bhambola complies with the Promotion and Regulation of Online Gaming Act, 2025, the Information Technology Act, 2000, the IT Rules, 2021 (as amended), and all relevant state laws applicable in the Union of India for online games. Bhambola does not operate any kind of money or gambling related games, does not offer monetary rewards, and is not at all a gambling or betting platform.</p>
            </section>

            <section className="space-y-6">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">WE ARE LEGAL – Compliance & Responsible Gaming Policy</h3>
                <p>Bhambola operates as a community-based digital recreation platform and is committed to following all applicable Indian laws and responsible gaming practices. Our platform is designed for entertainment and social engagement, not for gambling or financial gain.</p>
            </section>

            <section className="space-y-6">
                <h4 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-bhambola-red pl-4">1. Responsible Gaming & User Safety</h4>
                <p>Bhambola promotes healthy and responsible participation in line with:</p>
                <ul className="list-disc pl-8 space-y-2">
                    <li>Information Technology Act, 2000</li>
                    <li>IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 (Amended 2023 – Rule 3, Rule 4, Rule 9)</li>
                </ul>
                <p>We discourage addictive behaviour and ensure transparent gameplay.</p>
            </section>

            <section className="space-y-6">
                <h4 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-bhambola-gold pl-4">2. Compliance with the Promotion and Regulation of Online Gaming Act, 2025</h4>
                <p>Bhambola complies with all the Promotion and Regulation of Online Gaming Act, 2025, including but not limited to :</p>
                <ul className="list-disc pl-8 space-y-2">
                    <li><strong>Section 2</strong> – Definition of online games and online money games</li>
                    <li><strong>Section 5</strong> – Prohibition of online money games</li>
                    <li><strong>Section 6</strong> – Ban on promotion of money games</li>
                    <li><strong>Section 7</strong> – Restriction on financial transfers for money games</li>
                    <li><strong>Section 8</strong> – Oversight by the Online Gaming Authority</li>
                    <li><strong>Sections 9–12</strong> – Penalties for violations</li>
                    <li><strong>Section 14</strong> – Blocking of illegal gaming platforms</li>
                </ul>
                <p>Bhambola does not operate any online money or gambling related games as defined under Section 5 of this Act.</p>
            </section>

            <section className="space-y-6">
                <h4 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-bhambola-red pl-4">3. Entry-Based Participation Model</h4>
                <p>All payments collected on Bhambola are strictly for:</p>
                <ul className="list-disc pl-8 space-y-2">
                    <li>Entry into community-based recreational games</li>
                    <li>Participation in social and networking events</li>
                    <li>Access to digital entertainment services</li>
                </ul>
                <p>These payments are not bets, stakes, or wagers. There is no financial risk or reward linked to game outcomes.</p>
            </section>

            <section className="space-y-6">
                <h4 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-bhambola-gold pl-4">4. No Winnings, Rewards, or Prizes</h4>
                <p>Bhambola does not provide:</p>
                <ul className="list-disc pl-8 space-y-2">
                    <li>Cash prizes</li>
                    <li>Digital money</li>
                    <li>Redeemable credits</li>
                    <li>Gift vouchers</li>
                    <li>Transferable rewards</li>
                </ul>
                <p>No participant can earn money or monetary value through gameplay. This ensures compliance with Section 5 of the Online Gaming Act, 2025 and avoids gambling classification.</p>
            </section>

            <section className="space-y-6">
                <h4 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-bhambola-red pl-4">5. Private Community-Based Participation</h4>
                <p>Participation is limited to verified members of approved gated communities. Players must join official community WhatsApp groups for:</p>
                <ul className="list-disc pl-8 space-y-2">
                    <li>Game updates</li>
                    <li>Announcements</li>
                    <li>Community guidelines</li>
                    <li>Coordination</li>
                </ul>
                <p>All monthly community events are open to registered members, regardless of winning or losing. No user is excluded based on performance.</p>
            </section>

            <section className="space-y-6">
                <h4 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-bhambola-gold pl-4">6. Non-Gambling Nature of the Platform</h4>
                <p>Bhambola is not a gambling, betting, or casino platform under:</p>
                <ul className="list-disc pl-8 space-y-2">
                    <li>Public Gambling Act, 1867</li>
                    <li>Relevant State Gaming Laws (including Telangana, Andhra Pradesh, Tamil Nadu, Karnataka, Kerala, Sikkim, Mizoram, Nagaland, Meghalaya, Assam, and other applicable state regulations)</li>
                </ul>
                <p>We do not allow betting between users, pooling of money, two-way cash transfers, or outcome-based payouts. The visual design and interface are only for entertainment purposes.</p>
            </section>

            <section className="space-y-6">
                <h4 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-bhambola-red pl-4">7. Information Technology Act, 2000 Compliance</h4>
                <p>Bhambola follows key provisions of the IT Act, including:</p>
                <ul className="list-disc pl-8 space-y-2">
                    <li><strong>Section 43A</strong> – Protection of user data</li>
                    <li><strong>Section 66</strong> – Prevention of cyber offences</li>
                    <li><strong>Section 79</strong> – Intermediary liability with due diligence</li>
                </ul>
                <p>We take reasonable steps to protect user information and platform security.</p>
            </section>

            <section className="space-y-6">
                <h4 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-bhambola-gold pl-4">8. Merchandise Policy</h4>
                <p>Any merchandise available on Bhambola:</p>
                <ul className="list-disc pl-8 space-y-2">
                    <li>Can only be purchased directly</li>
                    <li>Cannot be won or earned through gameplay</li>
                    <li>Is not linked to performance</li>
                </ul>
                <p>Merchandise is treated as a normal commercial product.</p>
            </section>

            <section className="space-y-6">
                <h4 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-bhambola-red pl-4">9. Regulatory Cooperation</h4>
                <p>Bhambola cooperates with Government authorities, regulatory bodies, and law enforcement agencies as required under applicable Indian laws.</p>
            </section>
        </div>
    );

    return (
        <LegalLayout
            title="Legal Policy"
            subtitle="We are Legal! Compliance & Responsible Gaming."
        >
            <div className="space-y-20 text-gray-200">
                {/* Hero Section - GenZ Style */}
                <section className="relative text-center p-16 rounded-[5rem] overflow-hidden border-4 border-white/10 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-bhambola-red/40 via-purple-900/40 to-bhambola-gold/40 opacity-50 blur-3xl animate-pulse-slow"></div>
                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-bounce-subtle">
                            <span className="text-bhambola-gold">Pure</span> Vibe. <br /> <span className="text-bhambola-red">Zero</span> Risks.
                        </h2>
                        <p className="text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto font-black italic bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                            "No cap, we’re strictly for fun. No Money rewards, no gambling, just pure gaming energy."
                        </p>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Safety Section */}
                    <section className="space-y-10 group">
                        <h2 className="text-4xl font-black text-bhambola-gold uppercase italic tracking-widest border-l-8 border-bhambola-red pl-6 py-2">01. Safe</h2>
                        <ul className="space-y-8">
                            <li className="p-8 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border-2 border-white/10 shadow-2xl hover:border-bhambola-red/50 transition-all hover:scale-105 active:scale-95 cursor-default">
                                <span className="block font-black text-white mb-3 text-2xl md:text-3xl uppercase tracking-tighter decoration-bhambola-red underline-offset-8 underline decoration-8">Real Talk</span>
                                <span className="text-xl text-gray-300 font-bold italic leading-relaxed">We’re all about that responsible gaming life. Play smart, stay hype.</span>
                            </li>
                            <li className="p-8 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border-2 border-white/10 shadow-2xl hover:border-bhambola-red/50 transition-all hover:scale-105 active:scale-95 cursor-default">
                                <span className="block font-black text-white mb-3 text-2xl md:text-3xl uppercase tracking-tighter decoration-bhambola-red underline-offset-8 underline decoration-8">Data Guarded</span>
                                <span className="text-xl text-gray-300 font-bold italic leading-relaxed">Encrypted like a boss. IT Act compliant (Sec 43A, 66, 79).</span>
                            </li>
                        </ul>
                    </section>

                    {/* Regulation Section */}
                    <section className="space-y-10 group">
                        <h2 className="text-4xl font-black text-bhambola-gold uppercase italic tracking-widest border-l-8 border-bhambola-red pl-6 py-2">02. Legit</h2>
                        <ul className="space-y-8">
                            <li className="p-8 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border-2 border-white/10 shadow-2xl hover:border-bhambola-gold/50 transition-all hover:scale-105 active:scale-95 cursor-default">
                                <span className="block font-black text-white mb-3 text-2xl md:text-3xl uppercase tracking-tighter decoration-bhambola-gold underline-offset-8 underline decoration-8">Law Compliant</span>
                                <span className="text-xl text-gray-300 font-bold italic leading-relaxed">Fully aligned with the Online Gaming Act 2025. 100% legal business.</span>
                            </li>
                            <li
                                onClick={() => setIsModalOpen(true)}
                                className="p-8 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border-2 border-white/10 shadow-2xl hover:border-bhambola-gold/50 transition-all hover:scale-105 active:scale-95 cursor-pointer group/modal"
                            >
                                <span className="block font-black text-white mb-3 text-2xl md:text-3xl uppercase tracking-tighter decoration-bhambola-gold underline-offset-8 underline decoration-8 group-hover/modal:text-bhambola-gold transition-colors">Detailed Policy</span>
                                <span className="text-xl text-gray-300 font-bold italic leading-relaxed">
                                    For detailed Legal policy, <span className="text-bhambola-gold underline cursor-pointer">refer here</span> or <span className="text-bhambola-gold underline cursor-pointer">click here</span>.
                                </span>
                            </li>
                        </ul>
                    </section>
                </div>

                <LegalModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Professional Legal Policy"
                    content={professionalLegalContent}
                />

                {/* Entry Model Section */}
                <section className="relative bg-white/5 p-12 rounded-[5rem] border-4 border-bhambola-gold/20 shadow-[0_0_50px_rgba(255,215,0,0.1)] overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-bhambola-gold/20 blur-[100px] rounded-full"></div>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-10 text-center tracking-tighter drop-shadow-lg">Recreational Only</h2>
                    <div className="space-y-10 text-gray-300">
                        <p className="text-2xl font-black uppercase tracking-[0.2em] text-center text-bhambola-gold">Payments = Admission.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <li className="p-10 rounded-[3rem] bg-black/80 border-2 border-white/20 text-xl font-black text-center italic hover:border-bhambola-red transition-all transform hover:-translate-y-2 shadow-2xl">Full Community Access</li>
                            <li className="p-10 rounded-[3rem] bg-black/80 border-2 border-white/20 text-xl font-black text-center italic hover:border-bhambola-red transition-all transform hover:-translate-y-2 shadow-2xl">Epic Social Vibe</li>
                            <li className="p-10 rounded-[3rem] bg-black/80 border-2 border-white/20 text-xl font-black text-center italic hover:border-bhambola-red transition-all transform hover:-translate-y-2 shadow-2xl">Digital Fun Pass</li>
                        </ul>
                        <p className="mt-12 font-black text-white bg-bhambola-red px-10 py-8 rounded-[3rem] uppercase tracking-[0.2em] text-center text-2xl md:text-4xl shadow-[0_0_40px_rgba(214,0,0,0.4)] animate-pulse-subtle">
                            No Financial Risk. Just Big Dubs.
                        </p>
                    </div>
                </section>
            </div>
        </LegalLayout>
    );
};

export default LegalPolicyPage;
