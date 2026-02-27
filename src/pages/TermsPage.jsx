import React from 'react';
import LegalLayout from '../components/LegalLayout';

const TermsPage = () => {
    return (
        <LegalLayout
            title="Terms & Policies"
            subtitle="Last updated: 02 April 2026"
        >
            <div className="space-y-16 text-gray-200">
                <section>
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase italic mb-8 border-b-2 border-bhambola-red/30 pb-2">Legal Summary</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-xl">
                            <h3 className="text-xl md:text-2xl font-black text-white mb-4 underline decoration-bhambola-red decoration-4 transition-all hover:decoration-bhambola-gold">Nature of Platform</h3>
                            <p className="text-lg md:text-xl leading-relaxed italic">Bhambola is a community-based recreational gaming platform. Entry fees are charged only for participation. No monetary rewards, winnings, betting, or wagering are offered.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 shadow-xl">
                            <h3 className="text-xl md:text-2xl font-black text-white mb-4 underline decoration-bhambola-red decoration-4 transition-all hover:decoration-bhambola-gold">Eligibility</h3>
                            <p className="text-lg md:text-xl leading-relaxed italic">Users must be 18+ years old and legally capable of entering agreements.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase italic mb-8 border-b-2 border-bhambola-red/30 pb-2">1. Terms & Conditions</h2>
                    <ul className="list-disc pl-8 space-y-4 text-lg md:text-xl leading-relaxed font-medium">
                        <li>Users must be 18 years old and legally capable.</li>
                        <li>Registration is mandatory and users are responsible for account security.</li>
                        <li>Bhambola is a community-based recreational platform.</li>
                        <li>Entry fees are for participation only. No monetary rewards or winnings.</li>
                        <li>Payments are processed via authorized gateways. Card details are not stored.</li>
                        <li>Misuse, bots, or manipulation will result in suspension.</li>
                        <li>Platform is provided 'as is'. Liability is limited to last 6 months fees paid.</li>
                        <li>These terms are governed by Indian law.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase italic mb-8 border-b-2 border-bhambola-red/30 pb-2">2. Privacy Policy</h2>
                    <ul className="list-disc pl-8 space-y-4 text-lg md:text-xl leading-relaxed font-medium">
                        <li>We collect names, mobile numbers, email, device data, and transaction references.</li>
                        <li>Data is used for account management, payments, security, and compliance.</li>
                        <li>Reasonable security measures are implemented.</li>
                        <li>We are not liable for cyber incidents beyond reasonable control.</li>
                        <li>Data may be shared with payment processors and authorities if required.</li>
                        <li>Users may request access, correction, or deletion.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase italic mb-8 border-b-2 border-bhambola-red/30 pb-2">3. Cookie Policy</h2>
                    <ul className="list-disc pl-8 space-y-4 text-lg md:text-xl leading-relaxed font-medium">
                        <li>Cookies maintain sessions, enable payments, and improve performance.</li>
                        <li>Some cookies are essential and cannot be disabled.</li>
                        <li>Third-party payment providers may use cookies.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase italic mb-8 border-b-2 border-bhambola-red/30 pb-2">4. Legal & Regulatory</h2>
                    <ul className="list-disc pl-8 space-y-4 text-lg md:text-xl leading-relaxed font-black tracking-tight uppercase">
                        <li>Promotion and Regulation of Online Gaming Act, 2025 (Sections 2, 5, 6, 7, 8, 9–12, 14)</li>
                        <li>Information Technology Act, 2000 (Sections 43A, 66, 79)</li>
                        <li>IT Rules 2021 (Amended 2023 – Rules 3, 4, 9)</li>
                        <li>Public Gambling Act, 1867</li>
                        <li>Applicable State Gaming Laws (Telangana, Andhra Pradesh, Tamil Nadu, Karnataka, Kerala, Sikkim, Mizoram, Nagaland, Meghalaya, Assam)</li>
                    </ul>
                </section>

                <div className="p-10 rounded-[2.5rem] bg-bhambola-red/20 border border-bhambola-red/40 text-center italic shadow-2xl">
                    <p className="text-xl md:text-2xl font-black text-white leading-relaxed">
                        "Bhambola does not operate gambling, betting, or wagering services. Participation is for entertainment and community engagement only."
                    </p>
                </div>
            </div>
        </LegalLayout>
    );
};

export default TermsPage;
