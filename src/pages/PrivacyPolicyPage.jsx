import React from 'react';
import LegalLayout from '../components/LegalLayout';

const PrivacyPolicyPage = () => {
    return (
        <LegalLayout
            title="Privacy Policy"
            subtitle="Last updated: 04 March 2026"
        >
            <div className="space-y-16 text-gray-200">
                <section>
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase italic mb-8 border-b-2 border-bhambola-red/30 pb-2">Information We Collect</h2>
                    <ul className="list-disc pl-8 space-y-4 text-lg md:text-xl leading-relaxed font-medium">
                        <li><strong>Personal Identification:</strong> Names, mobile numbers, and email addresses provided during registration.</li>
                        <li><strong>Verification Data:</strong> KYC documents (e.g., Aadhaar) as required for community trust.</li>
                        <li><strong>Technical Data:</strong> Device identifiers, IP addresses, and platform usage statistics.</li>
                        <li><strong>Transaction Data:</strong> Transaction references and payment status (card details are never stored by us).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase italic mb-8 border-b-2 border-bhambola-red/30 pb-2">How We Use Your Data</h2>
                    <ul className="list-disc pl-8 space-y-4 text-lg md:text-xl leading-relaxed font-medium">
                        <li>To manage your account and provide recreational gaming services.</li>
                        <li>To facilitate secure transactions through authorized payment gateways.</li>
                        <li>To communicate game updates, security alerts, and community announcements.</li>
                        <li>To ensure compliance with the Information Technology Act, 2000 and other legal obligations.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase italic mb-8 border-b-2 border-bhambola-red/30 pb-2">Data Security</h2>
                    <p className="text-lg md:text-xl leading-relaxed font-medium">
                        We implement industry-standard security measures including encryption and secure servers to protect your information.
                        In accordance with Section 43A of the IT Act, we maintain reasonable security practices to prevent unauthorized access
                        or disclosure.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase italic mb-8 border-b-2 border-bhambola-red/30 pb-2">Data Sharing & Disclosure</h2>
                    <p className="text-lg md:text-xl leading-relaxed font-medium">
                        We do not sell your personal data. Data may be shared with:
                    </p>
                    <ul className="list-disc pl-8 mt-4 space-y-2 text-lg md:text-xl font-medium">
                        <li>Payment processors to enable secure entry fee payments.</li>
                        <li>Law enforcement agencies or regulatory bodies when mandated by Indian law.</li>
                        <li>Verified community administrators for coordination and safety.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl md:text-4xl font-black text-bhambola-gold uppercase italic mb-8 border-b-2 border-bhambola-red/30 pb-2">Your Rights</h2>
                    <p className="text-lg md:text-xl leading-relaxed font-medium">
                        Users have the right to access, correct, or request the deletion of their personal information.
                        For any privacy-related concerns, please contact our support team.
                    </p>
                </section>

                <div className="p-10 rounded-[2.5rem] bg-bhambola-red/20 border border-bhambola-red/40 text-center italic shadow-2xl">
                    <p className="text-xl md:text-2xl font-black text-white leading-relaxed">
                        "Your privacy is our priority. We are committed to protecting your data while you enjoy the BHAMBOLA experience."
                    </p>
                </div>
            </div>
        </LegalLayout>
    );
};

export default PrivacyPolicyPage;
