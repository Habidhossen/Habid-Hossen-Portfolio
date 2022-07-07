module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // customize the screen size
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  // add daisyUI
  plugins: [require("daisyui")],
  // dark theme false and apply default light theme
  daisyui: {
    themes: false,
  },
};
