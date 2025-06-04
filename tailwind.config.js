/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        tech: {
          cyan: '#00e5ff',
          neon: '#00ff41',
          purple: '#7c3aed',
          orange: '#ff6b35',
          blue: '#0066ff',
          pink: '#ff0080',
          electric: '#00ffff',
        },
        surface: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'pulse-tech': 'pulse-tech 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-tech': 'bounce-tech 1s infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'ping-tech': 'ping-tech 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #00e5ff, 0 0 10px #00e5ff, 0 0 15px #00e5ff',
            textShadow: '0 0 10px #00e5ff'
          },
          '100%': { 
            boxShadow: '0 0 10px #00e5ff, 0 0 20px #00e5ff, 0 0 30px #00e5ff',
            textShadow: '0 0 20px #00e5ff'
          },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-tech': {
          '0%, 100%': { 
            transform: 'scale(1)',
            filter: 'brightness(1) drop-shadow(0 0 10px #00e5ff)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            filter: 'brightness(1.2) drop-shadow(0 0 20px #00e5ff)'
          },
        },
        'bounce-tech': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'ping-tech': {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-grid': 'linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)',
        'tech-mesh': 'radial-gradient(circle at 25% 25%, rgba(0,229,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(124,58,237,0.15) 0%, transparent 50%)',
        'circuit-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300e5ff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3Cpath d="M30 1v28M1 30h28m30 0h28M30 31v28"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      backgroundSize: {
        'grid': '40px 40px',
        'circuit': '60px 60px',
      },
      boxShadow: {
        'tech': '0 0 20px rgba(0,229,255,0.3), 0 0 40px rgba(0,229,255,0.1)',
        'tech-lg': '0 0 30px rgba(0,229,255,0.4), 0 0 60px rgba(0,229,255,0.2)',
        'neon': '0 0 20px rgba(124,58,237,0.3), 0 0 40px rgba(124,58,237,0.1)',
        'glow-white': '0 4px 20px rgba(255,255,255,0.1)',
      }
    },
  },
  plugins: [],
} 