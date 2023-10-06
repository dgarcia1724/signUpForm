/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "400px",
    },
    extend: {
      colors: {
        brightRed: "#FF7979",
        brightGreen: "#38CC8B",
        brightPurple: "#5E54A4",
        darkColor: "#3D3B48",
      },
    },
  },
  plugins: [],
};
