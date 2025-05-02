/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#060606',
        card: '#0d0f14',
        dark: {
          DEFAULT: '#060606',
          50: '#0d0f14',
          100: '#111417',
          200: '#1a1d22',
          300: '#22262c',
          400: '#2b3038',
          500: '#363b44',
          600: '#4a505c',
          700: '#5d6575',
          800: '#717a8e',
          900: '#8590a8'
        },
        primary: {
          DEFAULT: '#00ff9c',
          50: '#e6fff6',
          100: '#b3ffdf',
          200: '#80ffc9',
          300: '#4dffb2',
          400: '#1aff9c',
          500: '#00ff9c',
          600: '#00cc7d',
          700: '#00995e',
          800: '#00663e',
          900: '#00331f'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(0, 255, 156, 0.15)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.25)',
        'card-hover': '0 8px 30px rgba(0, 255, 156, 0.1)'
      },
      borderRadius: {
        DEFAULT: '12px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(to bottom right, var(--tw-gradient-stops))'
      }
    },
  },
  plugins: [],
};