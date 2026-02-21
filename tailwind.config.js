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
        primary: {
          950: '#09090b', // True onyx
          900: '#18181b', // Deep charcoal
          800: '#27272a',
          700: '#3f3f46',
        },
        secondary: {
          400: '#34d399', // Electric Sage/Mint
          500: '#10b981', // Pattern-interrupt Green
          600: '#059669',
        },
        neutral: {
          50: '#fafafa', // Pure white
          100: '#f4f4f5', // Cool grey
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
        },
        sage: {
          500: '#7B9C96', // Muted Teal/Sage
        }
      },
    },
  },
  plugins: [],
}


