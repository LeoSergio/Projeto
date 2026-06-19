/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#0a0a0f',
          card: 'rgba(255,255,255,0.04)',
          border: 'rgba(255,255,255,0.10)',
        },
      },
      animation: {
        'pulse-slow': 'pulse 2.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
