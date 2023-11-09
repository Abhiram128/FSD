/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter, sans-serif"],
      },
      colors: {
        maroon: "#800000", // Define maroon color
        "dark-green": "#006400", // Define dark green color with quotes
        "darker-green": "#004200", // Define a darker green color with quotes
      },
    },
  },
  plugins: [],
};
