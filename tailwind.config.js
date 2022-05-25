module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
