/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#030812', // Deep Charcoal Navy - Almost Black
          900: '#0B1729', // Oxford Blue - Primary Dark
          800: '#17253D', // Lighter Oxford - Secondary Dark
          700: '#2A3C5F', // Muted Navy
        },
        slate: {
          50: '#F9FAFB', // Ultra light grey
          100: '#F0F2F4', // Crisp institutional grey
          200: '#E2E8F0', // Border grey
          300: '#CBD5E1', // Muted text
          400: '#94A3B8', // Placeholder text
          500: '#64748B', // Body text
        },
        amber: {
          400: '#F0C05A', // Muted Gold (Readable on dark)
          500: '#D9A136', // Academy Gold
          600: '#B08022', // Bronze
        },
        sage: {
          500: '#7B9C96', // Muted Teal/Sage
        }
      },
    },
  },
  plugins: [],
}

