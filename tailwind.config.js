/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        product:{
          'grey-700':"#F7F8F8",
          "green-400":"#43A548",
        }
      },
      padding:{
        "13":"52px",
        "15":"60px",
        "30":"120px",
      },
      margin:{
        "3.5":"14px",
        "15":"60px"
      },
      borderRadius:{
        "10" : "40px",
        "5" : "20px",
      },
      colors:{
        product:{
          "green-400":"#43A548",
          "grey-300":"#838684",
          "grey-400":"#6F7973",
          "grey-500":"#3D4641",
          "grey-600":"#F7F8F8",
          "black-400":"#2C2B35"
        }
      },
      borderColor:{
        product:{
          "green-400":"#43A548"
        }
      },
      lineHeight:{
        "5.5":"22px",
        "11":"44px",
      },
      fontSize:{
        "28":"28px",
        "26":"26px",
        "32":"32px",
      }
    },
  },
  plugins: [],
}

