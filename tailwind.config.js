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
    extend: {
      colors: {
        primary: "#f52225",
        green: "#1cbe59",
        bgColor: "#f9f9ff",
        headingBlack: "#0f172a",
      },
    },
  },
  // add daisyUI
  plugins: [require("daisyui")],
  // dark theme false and apply default light theme
  daisyui: {
    themes: false,
  },
};
