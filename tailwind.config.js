module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#FCF6F5FF",
      },
      width: {
        350: "87.5rem",
      },
      maxHeight: {},
      minHeight: {
        "80v": "80vh",
      },
      screens: {
        smp: "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
