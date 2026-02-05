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
          950: '#030812', // Deep Charcoal Navy
          900: '#0B1729', // Oxford Blue
          800: '#17253D', // Lighter Oxford
        },
        slate: {
          50: '#F9FAFB',
          100: '#F0F2F4', // Crisp institutional grey
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

