/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    
    extend: {},
    keyframes:{
      move: {
        "50%": { transform: "translateY(-1rem)" }
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" }
      },
    },
    animation:{
      movingY: "move 3s linear infinite",
      rotating: "rotate 10s linear infinite"
    },

    fontFamily:{
      Jost: ["Jost", "sans-serif"],
      PTSerif: ["PT Serif", "sans-serif"],

    },
    container:{
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px"
      }
    }
  },
  plugins: [],
}

