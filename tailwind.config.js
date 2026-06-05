/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cinema: {
          black: '#0A0A0F',
          dark: '#11111A',
          neon: '#00F3FF',
          purple: '#B026FF',
          gray: '#1A1A24',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #00F3FF, 0 0 10px #00F3FF' },
          '100%': { textShadow: '0 0 20px #00F3FF, 0 0 30px #B026FF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'cinema-gradient': 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 100%)',
        'neon-gradient': 'linear-gradient(90deg, #00F3FF 0%, #B026FF 100%)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}