/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#FF7A2B",
        "main-bg": "#1E1D2A",
        "special-color": "#FFEFE8",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
