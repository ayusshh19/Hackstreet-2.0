/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
     fillcomp:"#097F4D",
     darkbg:"#201F1F",
     white:"#FFFFFF",
     innercol:"#22FF53",
     outercol:"#22FF95",
     deletebutton:"#E93131",
     profilebg:"#282C34",
     graytext:"#6B6B6B"
    },
    extend: {},
  },
  plugins: [],
}