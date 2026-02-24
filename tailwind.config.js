/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bhambola-red': '#E60000',
        'bhambola-dark': '#0D0202',
        'bhambola-gold': '#FFD700',
        'bhambola-paper': '#ffffff',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'flower-fall': 'flowerFall 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flowerFall: {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '50%': { transform: 'translateY(40vh) translateX(40px) rotate(180deg)' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) translateX(-40px) rotate(360deg)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}

