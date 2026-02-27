import React from 'react';
import LegalLayout from '../components/LegalLayout';

const FAQPage = () => {
    const faqs = [
        { q: "What is Bhambola?", a: "Bhambola is an online platform that allows users to play Tambola (Housie) digitally in real time." },
        { q: "Who can join Bhambola games?", a: "Only members of approved gated communities are eligible to participate in Bhambola games." },
        { q: "Is registration mandatory?", a: "Yes. Registration is required to participate and track your game activity." },
        { q: "Is joining a WhatsApp group mandatory?", a: "Yes. All players must join their respective official WhatsApp community group to participate." },
        { q: "Why is the WhatsApp group required?", a: "The group is used for game announcements, number calling alerts, player communication, community coordination, and important updates." },
        { q: "What happens if I do not join the WhatsApp group?", a: "Players who are not part of the official community group may not be allowed to participate." },
        { q: "Are WhatsApp groups moderated?", a: "Yes. All groups are monitored by administrators to ensure discipline and fair play." },
        { q: "What are the community guidelines?", a: "Players must maintain respectful communication, avoid spam or abuse, follow admin instructions, and respect other members." },
        { q: "What happens if I violate group rules?", a: "Violation may result in warning, removal from group, game disqualification, or account suspension." },
        { q: "How do I join a game?", a: "Register on the platform, log in, select an available game, and purchase a ticket if required." },
        { q: "How are numbers generated?", a: "Numbers are generated randomly by the system to ensure fair play." },
        { q: "How many tickets can I buy?", a: "The maximum number of tickets per user may vary by game and will be displayed before joining." },
        { q: "What are the winning patterns?", a: "Common patterns include Early Five, Lines, Full House, Corners, and custom patterns announced before each game." },
        { q: "How do I claim a prize?", a: "Click the \"Claim\" button within the given time after completing a winning pattern." },
        { q: "What happens if I miss claiming?", a: "Late or missed claims will not be accepted." },
        { q: "How are winners verified?", a: "All claims are automatically verified by the system." },
        { q: "Are games fair?", a: "Yes. The system uses automated random number generation to ensure unbiased results." },
        { q: "Is there any entry fee?", a: "Some games may be free, while others may require payment. Details are shown before joining." },
        { q: "How do I make payments?", a: "Payments are processed through authorized payment gateways." },
        { q: "Are payments secure?", a: "Yes. Payment information is encrypted and handled by certified processors." },
        { q: "Do you store my card details?", a: "No. Bhambola does not store card or banking information." },
        { q: "Are refunds available?", a: "Entries are generally non-refundable unless stated otherwise." },
        { q: "What if my payment fails?", a: "If payment fails, the ticket will not be issued. Any deducted amount will be refunded as per gateway policy." },
        { q: "What if I lose internet during a game?", a: "Bhambola is not responsible for connectivity issues. Ensure stable internet access." },
        { q: "Is multiple account creation allowed?", a: "No. Creating multiple accounts is prohibited." },
        { q: "Can I use bots or automation?", a: "No. Automated tools are strictly forbidden and may result in permanent suspension." },
        { q: "How do I reset my password?", a: "Use the \"Forgot Password\" option on the login screen." },
        { q: "How do I update my profile?", a: "Profile details can be updated from the account settings section." },
        { q: "Is my personal data safe?", a: "We use reasonable security measures to protect user information; however, no system is completely secure." },
        { q: "Do you share my data with others?", a: "Data may be shared only with trusted partners for payments, hosting, analytics, or legal compliance." },
        { q: "Can I delete my account?", a: "Yes. You may request account deletion through support." },
        { q: "Are prizes guaranteed?", a: "Prizes are subject to valid participation and compliance with rules." },
        { q: "How are prizes distributed?", a: "Prizes are distributed as per the announced method after verification." },
        { q: "Can games be cancelled?", a: "Yes. Games may be cancelled due to technical or operational issues." },
        { q: "What happens if a game is cancelled?", a: "Refunds or adjustments will be processed as per policy." },
        { q: "Are minors allowed to play?", a: "No. Users must be at least 18 years old." },
        { q: "Is Bhambola legal in India?", a: "Users are responsible for ensuring participation complies with applicable local laws." },
        { q: "Are screenshots accepted as proof?", a: "No. Only system records are considered valid." },
        { q: "Can I transfer tickets?", a: "Tickets are non-transferable." },
        { q: "Who makes final decisions in disputes?", a: "Bhambola’s management and system records are final in case of disputes." },
        { q: "How do I contact support?", a: "For queries or support, contact: support@bhambola.com" },
        { q: "Can rules change?", a: "Yes. Rules may be updated periodically. Continued participation implies acceptance of revised rules." }
    ];

    return (
        <LegalLayout
            title="FAQs"
            subtitle="Everything you need to know about playing Bhambola."
        >
            <div className="space-y-8">
                {faqs.map((faq, index) => (
                    <div key={index} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-bhambola-red/30 transition-all shadow-xl hover:shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-black mb-4 flex gap-4 text-white group-hover:text-bhambola-gold transition-colors font-['Cinzel']">
                            <span className="text-bhambola-red font-black italic">{index + 1}.</span>
                            {faq.q}
                        </h3>
                        <p className="text-gray-300 pl-10 leading-relaxed text-lg md:text-xl font-medium font-['Playfair_Display'] italic">
                            {faq.a}
                        </p>
                    </div>
                ))}
            </div>
        </LegalLayout>
    );
};

export default FAQPage;
