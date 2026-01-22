import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2";

    const variants = {
        primary: "bg-bhambola-red text-white shadow-lg shadow-red-900/20 hover:shadow-red-600/40 border border-red-500",
        secondary: "bg-bhambola-gold text-bhambola-dark shadow-lg shadow-yellow-900/20 hover:shadow-yellow-500/40 border border-yellow-400",
        glass: "glass text-white hover:bg-white/10 border-white/20",
        outline: "border-2 border-bhambola-gold text-bhambola-gold hover:bg-bhambola-gold/10"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
