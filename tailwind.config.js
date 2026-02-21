/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Lora"', 'serif'],
        sans: ['"Outfit"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          950: '#020617', // Deep slate 
          900: '#0f172a', // Navy slate
          800: '#1e293b',
          700: '#334155',
        },
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24', // Warm Sunrise/Amber
          500: '#f59e0b', // Mild Hope Amber
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        neutral: {
          50: '#fafaf9', // Warm stone white
          100: '#f5f5f4', // Soft stone
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
        },
        sage: {
          500: '#8b9d83', // Warm muted sage
        }
      },
    },
  },
  plugins: [],
}


