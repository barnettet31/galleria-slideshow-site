/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["18px", "22px"],
        lg: ["24px", "29px"],
        xl: ["56px", "64px"],
      },
      colors: {
        "dark-grey": "#7D7D7D",
        "med-grey": "#e5e5e5",
        "light-grey": "#f3f3f3",
      },
    },
  },
  plugins: [],
};
