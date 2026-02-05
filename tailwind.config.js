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
          950: '#020C1B', // Darkest Navy (Pivot Start)
          900: '#0a192f',
          800: '#112240',
        },
        slate: {
          50: '#F8FAF9',
          100: '#E8ECEB', // Institutional grey
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        sage: {
          500: '#84A59D', // Safety/Calm
        }
      },
    },
  },
  plugins: [],
}

