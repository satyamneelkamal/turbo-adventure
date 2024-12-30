/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1.08rem': '1.08rem',
        '0.7rem': '0.7rem',
      },
      fontSize: {
        '1.8rem': '1.8rem',
        '1.6rem': '1.6rem',
        '2.2rem': '2.2rem',
      },
      width: {
        '101%': '101%',
      },
      margin: {
        '-0.5%': '-0.5%',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(-25deg)' },
          '50%, 100%': { transform: 'translateX(100%) rotate(-25deg)' }
        }
      }
    },
  },
  plugins: [],
}