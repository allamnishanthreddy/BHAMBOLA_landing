import React from 'react';
import LegalLayout from '../components/LegalLayout';

const GameRulesPage = () => {
    return (
        <LegalLayout
            title="Gaming Rules"
            subtitle="Fair play, clear rules. Here is how we play Bhambola."
        >
            <div className="space-y-12 text-gray-300">
                <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h2 className="text-2xl font-black text-white uppercase italic mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-bhambola-red flex items-center justify-center text-sm not-italic">1</span>
                        The Basics
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex gap-4">
                            <span className="text-bhambola-red font-bold">●</span>
                            Bhambola is an online number-based game where numbers from 1 to 90 are drawn randomly by the system.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-bhambola-red font-bold">●</span>
                            Each ticket contains 15 numbers arranged in 3 rows and 9 columns.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-bhambola-red font-bold">●</span>
                            Numbers are generated automatically and are non-repeatable during a game.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-bhambola-red font-bold">●</span>
                            Players must mark the called numbers on their digital tickets.
                        </li>
                    </ul>
                </section>

                <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h2 className="text-2xl font-black text-white uppercase italic mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-bhambola-gold flex items-center justify-center text-sm not-italic text-black">2</span>
                        Winning Patterns
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {['Early Five', 'Top Line', 'Middle Line', 'Bottom Line', 'Full House', 'Corners'].map((item) => (
                            <div key={item} className="p-4 rounded-xl bg-black/40 border border-white/5 text-center font-bold text-bhambola-gold">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h2 className="text-2xl font-black text-white uppercase italic mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-bhambola-red flex items-center justify-center text-sm not-italic">3</span>
                        Claims & Verification
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex gap-4">
                            <span className="text-bhambola-red font-bold">●</span>
                            Winners must submit claims using the “Claim” button within the given time.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-bhambola-red font-bold">●</span>
                            All claims are verified by the system. Incorrect or late claims will be rejected.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-bhambola-red font-bold">●</span>
                            Each winning pattern can be claimed only once, unless stated otherwise.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-bhambola-red font-bold">●</span>
                            In case of multiple valid claims, the system decision shall be final.
                        </li>
                    </ul>
                </section>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-red-950/30 border border-bhambola-red/20">
                        <h4 className="font-bold text-white mb-2">Prohibited Practices</h4>
                        <p className="text-sm text-gray-400">Use of bots, automation, or multiple accounts is strictly forbidden and results in permanent suspension.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-yellow-950/30 border border-bhambola-gold/20">
                        <h4 className="font-bold text-white mb-2">Refund Policy</h4>
                        <p className="text-sm text-gray-400">Ticket purchases and game entries are non-refundable, unless stated otherwise.</p>
                    </div>
                </div>
            </div>
        </LegalLayout>
    );
};

export default GameRulesPage;
