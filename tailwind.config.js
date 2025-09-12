/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-color": "rgba(3, 12, 19, 1)",
        primary: "#1A75BC",
        secondary: "#8DC640",
      },
    },
  },
  plugins: [],
};
