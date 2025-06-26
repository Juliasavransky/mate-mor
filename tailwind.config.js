module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // או הנתיב שלך
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
  plugins: [],
}
