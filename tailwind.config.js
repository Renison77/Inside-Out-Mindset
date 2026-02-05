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
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0a192f', // Deep Navy
          800: '#112240',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706', // Warm Gold
        },
      },
    },
  },
  plugins: [],
}

