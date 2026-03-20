/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        verde: '#2fa56a',
        ciano: '#308d95',
        'azzurro-intenso': '#0c6393',
        'azzurro-chiaro': '#34b6d7',
        'azzurro-bg': '#f0f9ff',
        'testo-scuro': '#1a1a2e',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        //sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cardReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.97)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        pulseVerde: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(47,165,106,0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(47,165,106,0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease forwards',
        cardReveal: 'cardReveal 0.5s ease-out forwards',
        pulseVerde: 'pulseVerde 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

