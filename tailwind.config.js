const withMT = require("@material-tailwind/react/utils/withMT");

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extends: {},
    screens: {
      xs: "100px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
});
