/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f7ff",
          100: "#e4edff",
          200: "#c7d8ff",
          300: "#a5c0ff",
          400: "#7c9dff",
          500: "#5678ff",
          600: "#415be6",
          700: "#3448b4",
          800: "#2c3f8c",
          900: "#283a71"
        }
      }
    }
  },
  plugins: []
};
