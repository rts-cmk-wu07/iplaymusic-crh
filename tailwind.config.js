/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF1168",
        secondary: "#341931",
        additional: "#111625",
        gradientL: "#EE0979",
        gradientR: "#FF6400",
      },
      boxShadow: {
        top: "0 0px 15px 2px rgba(0, 0, 0, 0.1)",
        bottom: "0 0px 5px 2px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
