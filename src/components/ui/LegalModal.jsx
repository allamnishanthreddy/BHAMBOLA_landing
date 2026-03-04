import React from 'react';

const LegalModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose}></div>
            <div className="relative w-full max-w-4xl max-h-[80vh] bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] flex flex-col shadow-2xl animate-fade-in-up">
                {/* Header */}
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#242424] rounded-t-[2.5rem]">
                    <h3 className="text-2xl font-black text-bhambola-gold uppercase tracking-widest font-['Cinzel']">{title}</h3>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all transform hover:rotate-90"
                    >
                        <span className="text-2xl font-light">✕</span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                    <div className="prose prose-invert prose-yellow max-w-none text-gray-300 font-medium leading-relaxed space-y-6">
                        {content}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/5 text-center bg-[#242424] rounded-b-[2.5rem]">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] font-['Cinzel']">© 2025 Bhambola Gaming. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
