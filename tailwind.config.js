/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        zamaGreen: "#38E394", // example Zama green
        zamaBlue: "#1A232B", // example Zama dark blue
      },
    },
  },
  plugins: [],
};
