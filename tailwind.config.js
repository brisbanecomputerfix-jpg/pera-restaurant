/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F0DC82',
          DEFAULT: '#D4AF37',
          dark: '#AA820A',
        },
        crimson: {
          light: '#9B2834',
          DEFAULT: '#781D26',
        },
        emerald: {
          DEFAULT: '#19533D',
          light: '#2A7B5C',
        },
        palace: {
          black: '#0A0A0D',
          charcoal: '#121217',
          surface: '#181820',
          cream: '#F8F5EE',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
