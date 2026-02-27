import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const initialRatings = [
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
    },
    {
        id: 4,
        name: "Sneha Reddy",
        rating: 5,
        content: "The AI Bot feature is a lifesaver! I can step away for a second without worrying about ruining the game for others.",
        role: "Gated Community Member"
    }
];

const RatingCard = ({ name, role, content, rating }) => (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl h-full flex flex-col justify-between hover:border-bhambola-gold/30 transition-all duration-500 group">
        <div>
            <div className="flex text-bhambola-gold mb-6 text-2xl group-hover:scale-110 transition-transform origin-left">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < rating ? "opacity-100" : "opacity-20"}>★</span>
                ))}
            </div>
            <p className="text-white/90 italic mb-8 leading-relaxed text-lg lg:text-xl font-['Playfair_Display'] font-medium">"{content}"</p>
        </div>
        <div className="flex items-center gap-4 border-t border-white/10 pt-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-bhambola-red to-red-900 flex items-center justify-center text-white font-black text-xl border-2 border-bhambola-gold shadow-lg group-hover:rotate-6 transition-transform">
                {name.charAt(0)}
            </div>
            <div>
                <h4 className="text-white font-bold text-lg font-['Cinzel'] tracking-tight">{name}</h4>
                <p className="text-bhambola-gold/60 text-[10px] uppercase tracking-[0.2em] font-black font-['Cinzel']">{role}</p>
            </div>
        </div>
    </div>
);

const RatingsSection = () => {
    const [testimonials, setTestimonials] = useState(initialRatings);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', role: '', rating: 5, content: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            const newFeedback = {
                id: Date.now(),
                ...formData
            };
            setTestimonials([newFeedback, ...testimonials]);
            setIsModalOpen(false);
            setFormData({ name: '', role: '', rating: 5, content: '' });
            setIsSubmitting(false);
            setCurrentIndex(0);
        }, 1000);
    };

    return (
        <section className="py-24 relative bg-[#4D0000] overflow-hidden">
            {/* Dynamic background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bhambola-red/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bhambola-gold/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-bhambola-gold font-black uppercase tracking-[0.3em] text-sm font-['Cinzel']">Voices of Bhambola</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic font-['Cinzel']">
                        Player <span className="text-bhambola-gold drop-shadow-lg">Testimonials</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg pt-2 font-medium font-['Playfair_Display'] italic">
                        Real vibes from our community. Join the elite club of Bhambola players.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto group">
                    <div className="overflow-hidden rounded-[2.5rem]">
                        <div
                            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 768 ? 2 : 1))}%)` }}
                        >
                            {testimonials.map((rating) => (
                                <div key={rating.id} className="w-full md:w-1/2 flex-shrink-0 px-4">
                                    <RatingCard {...rating} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-bhambola-red hover:border-bhambola-red transition-all duration-300 backdrop-blur-md z-20 group/btn"
                    >
                        <span className="text-2xl group-hover/btn:-translate-x-1 transition-transform">←</span>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-bhambola-red hover:border-bhambola-red transition-all duration-300 backdrop-blur-md z-20 group/btn"
                    >
                        <span className="text-2xl group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-12">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-12 bg-bhambola-gold' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                            ></button>
                        ))}
                    </div>
                </div>

                {/* Give Feedback Button */}
                <div className="mt-20 text-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
                    >
                        <div className="absolute inset-0 bg-bhambola-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10">Drop Feedback</span>
                        <span className="relative z-10 text-xl group-hover:rotate-12 transition-transform">✍️</span>
                    </button>
                </div>
            </div>

            {/* Feedback Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => !isSubmitting && setIsModalOpen(false)}></div>
                    <div className="relative w-full max-w-lg bg-[#2D0000] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-fade-in-up">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                        >
                            <span className="text-2xl font-light">✕</span>
                        </button>

                        <h3 className="text-3xl font-black text-white uppercase italic mb-2">Your <span className="text-bhambola-gold">Voice</span></h3>
                        <p className="text-white/50 mb-8 text-sm uppercase tracking-widest font-bold">Help us improve the Bhambola vibe</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-bhambola-gold mb-2 pl-2">Rating</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            className={`text-3xl transition-all ${formData.rating >= star ? 'text-bhambola-gold scale-110' : 'text-white/10 hover:text-white/30'}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-bhambola-gold mb-2 pl-2">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. Yash"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bhambola-red transition-colors placeholder:text-white/20"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-bhambola-gold mb-2 pl-2">Role</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. Player"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bhambola-red transition-colors placeholder:text-white/20"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-bhambola-gold mb-2 pl-2">Your Experience</label>
                                <textarea
                                    required
                                    rows="4"
                                    placeholder="Tell the community how you feel..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bhambola-red transition-colors placeholder:text-white/20 resize-none"
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                className="w-full py-5 text-lg shadow-2xl shadow-bhambola-red/20"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Drop Feedback'}
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default RatingsSection;
