/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //gray: "#b3b3b3"
      },
      fontFamily: {
        primary: "Alata",
        secondary: "Josefin-sans"
      } 
    },
  },
  plugins: [],
}

