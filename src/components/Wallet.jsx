import React from 'react';

const ChipsEconomy = () => {
    const items = [
        { title: "Chip Balance", val: "50,000", sub: "Available", icon: "💰", color: "from-blue-600 to-blue-900" },
        { title: "EMI Chips", val: "Active", sub: "Next Pay: 5th Feb", icon: "💳", color: "from-purple-600 to-purple-900" },
        { title: "Enhanced Chips", val: "Gold Tier", sub: "2x Rewards", icon: "⭐", color: "from-bhambola-gold to-yellow-700" },
        { title: "History", val: "View", sub: "Last: -500", icon: "📜", color: "from-gray-700 to-gray-900" },
    ];

    return (
        <section id="chips" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    <span className="text-bhambola-red">Chips</span> Economy
                </h2>

                {/* PlayStation Style Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className={`relative overflow-hidden p-6 rounded-2xl h-48 flex flex-col justify-between 
              bg-gradient-to-br ${item.color} shadow-lg hover:scale-105 transition-transform cursor-pointer border border-white/10 group`}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity text-4xl">
                                {item.icon}
                            </div>

                            <div>
                                <h3 className="text-white/80 font-medium text-lg">{item.title}</h3>
                                <p className="text-3xl font-bold text-white mt-1">{item.val}</p>
                            </div>

                            <div className="text-sm text-white/60 bg-black/20 backdrop-blur-sm self-start px-3 py-1 rounded-lg">
                                {item.sub}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                        <span className="text-bhambola-red">●</span> Payment Methods
                    </h3>
                    <div className="flex flex-wrap gap-8 items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500">
                        <div className="text-xl font-bold border-2 border-gray-300 p-4 rounded-xl text-gray-700">Google Pay</div>
                        <div className="text-xl font-bold border-2 border-gray-300 p-4 rounded-xl text-gray-700">UPI</div>
                        <div className="text-xl font-bold border-2 border-gray-300 p-4 rounded-xl text-gray-700">PhonePe</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChipsEconomy;
