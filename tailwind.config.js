/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD976",
        secondary: "#EAA800",
        backgroundColor: "#FEFEF6",
        fillColor: "#FCFAEE",
        lightText: "#FFFEF7",
      },
    },
  },
  plugins: [],
};
