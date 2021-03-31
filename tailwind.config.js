/* 
    secondary: #e0d8d2
    primary: #b9d2d5 
    accent: #c6c0b9 
  */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#b9d2d5",
        secondary: "#dbd3cd",
        accent: "#b06b33",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
