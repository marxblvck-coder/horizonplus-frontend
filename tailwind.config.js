/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "horizon-dark": "#0B1C2D",
      "horizon-blue": "#1F4FD8",
      "horizon-gold": "#F2C94C",
    },
    },
  },
  plugins: [],
};
