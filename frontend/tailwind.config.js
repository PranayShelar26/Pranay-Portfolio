/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Mukta:['"Mukta"','Mukta'],
        NotoSans:['"Noto Sans"','Noto Sans'],
        Raleway:['"Raleway"','Raleway']
      },
    },
  },
  plugins: [],
}