/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  plugins: [require("tailwind-scrollbar-hide")],
  theme: {
    extend: {
      colors: {
        primary: "#e35d76", // cherry rose — brand, buttons, nav
        secondary: "#5c4953", // warm body text
        tertiary: "#f5ebe8", // warm panel
        accent: "#ff8ca0", // light cherry — the spark (name, highlights)
        "accent-deep": "#e35d76", // cherry gradient end
        ground: "#fbf7f5", // warm off-white page background
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // Warm neutral scale (restrained plum bias) — replaces Tailwind's cool gray
        gray: {
          50: "#f8f5f3",
          100: "#f1ebe8",
          200: "#e6ddd8",
          300: "#d4c8c2",
          400: "#b3a69f",
          500: "#94877f",
          600: "#6f635d",
          700: "#574b47",
          800: "#33292c",
          900: "#2a2326", // warm near-black — headings
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
