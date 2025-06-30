module.exports = {
   content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slidebg: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        slidebg: 'slidebg 5s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
}
// tailwind.config.js
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // הרחבות אישיות כאן
    },
  },
  plugins: [
    typography,
    // פלאגינים נוספים אם יש
  ],
};

export default config;
