/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgColor':'#404eed',
        'buttonColor':'#5865f2',
        'textBold':'#23272a',
        'thirdBg':'#f6f6f6'

      },
      scale: {
        '200': '2',
      },
      fontWeight:{
        '1000':'1000'
      },
    
    },
  },
  plugins: [],
}