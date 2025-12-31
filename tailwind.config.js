/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        horizon: {
          dark: "#1E2A38",
          blue: "#1B5EAA",
          gold: "#C9A227",
        },
      },
    },
  },
  plugins: [],
};
