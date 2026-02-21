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
          950: '#0F172A', // Slate 900 - Keep distinct from black for premium look
          900: '#1E3A8A', // Deep Royal - Richer blue
          800: '#1E40AF', // Bright Royal
          700: '#3B82F6', // Blue 500 equivalent - Hopeful blue
        },
        neutral: {
          50: '#F9FAFB', // Ultra light grey
          100: '#F0F2F4', // Crisp institutional grey
          200: '#E2E8F0', // Border grey
          300: '#CBD5E1', // Muted text
          400: '#94A3B8', // Placeholder text
          500: '#64748B', // Body text
        },
        secondary: {
          400: '#FBBF24', // Sunny Gold
          500: '#F59E0B', // Vibrant Amber
          600: '#D97706', // Deep Gold - Contrast
        },
        sage: {
          500: '#7B9C96', // Muted Teal/Sage
        }
      },
    },
  },
  plugins: [],
}


