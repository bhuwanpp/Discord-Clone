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
        'buttonHover':'#6570eb',
        'textBold':'#23272a',
        'thirdBg':'#f6f6f6',
        'blackButton':'#23272a',
        'hoverBlack':'#2c2f33',
        // grid 
        'grid1blue':'#007cc2',
        'grid1indigo':'#5865f2',
      
        'grid2purple':'#8547c6',
        'grid2pink':'#b845c1',
        'grid2indigo':'#ab5d8a',

        

    
      },
      scale: {
        '175': '1.75',
      },
      fontWeight:{
        '1000':'1000'
      },
    
    },
  },
  plugins: [],
}