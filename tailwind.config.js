/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Protest Riot', 'sans-serif'],
        
        'broken': ['Headline', 'sans-serif'],
        'text': ['Courier Prime', 'sans-serif']
      },
      colors: {
        'primary':'#F5DB01',
        'secondary': '#C2B227'
      }
    },
  },
  plugins: [tailwindScrollbar],
}

