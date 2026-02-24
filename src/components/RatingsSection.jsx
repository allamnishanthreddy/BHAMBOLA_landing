import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ratingsData = [
    {
        id: 1,
        name: "Rahul Sharma",
        rating: 5,
        content: "Bhambola is the perfect addition to our weekend get-togethers. The interface is stunning and it brings our whole community together!",
        role: "Community Organizer"
    },
    {
        id: 2,
        name: "Priya Patel",
        rating: 5,
        content: "Love the new look and feel. The red and gold theme is so premium. Playing with friends has never been easier or more fun.",
        role: "Verified Player"
    },
    {
        id: 3,
        name: "Amit Kumar",
        rating: 4,
        content: "Great app for managing our kitty party game chips. Very secure and the merchandise store is a fantastic bonus.",
        role: "Event Host"
    }
];

const RatingCard = ({ name, role, content, rating }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
        <div className="flex text-bhambola-gold mb-4 text-xl">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < rating ? "opacity-100" : "opacity-30"}>★</span>
            ))}
        </div>
        <p className="text-white/80 italic mb-6 leading-relaxed">"{content}"</p>
        <div className="flex items-center gap-4 border-t border-white/10 pt-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-bhambola-red to-red-900 flex items-center justify-center text-white font-bold text-lg border-2 border-bhambola-gold">
                {name.charAt(0)}
            </div>
            <div>
                <h4 className="text-white font-bold">{name}</h4>
                <p className="text-white/50 text-xs uppercase tracking-wider">{role}</p>
            </div>
        </div>
    </div>
);

const RatingsSection = () => {
    return (
        <section className="py-24 relative bg-bhambola-dark overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-bhambola-red/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-bhambola-gold/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Player <span className="text-bhambola-gold">Testimonials</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg pt-2">
                        See what our community members have to say about their experience with Bhambola.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {ratingsData.map((rating) => (
                        <RatingCard key={rating.id} {...rating} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RatingsSection;
