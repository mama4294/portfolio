module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        default: "rgb(56, 56, 56)",
        primary: "rgb(106, 152, 240)",
        dark: "rgb(71 85 105);",
        light: "rgb(241 245 249)",
        muted: "rgb(73, 97, 220)",
        inverted: "rgb(199, 208, 255)",
      },
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
