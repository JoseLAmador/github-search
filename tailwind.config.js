/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "DEFAULT": "#002355",
          50: "#e6e9ee",
          100: "#ccd3dd",
          200: "#99a7bb",
          300: "#667b99",
          400: "#334f77",
          500: "#002355",
          600: "#001c44",
          700: "#001533",
          800: "#000e22",
          900: "#000711",
          950: "#000409"
        }
      }
    },
  },
  plugins: [],
}
