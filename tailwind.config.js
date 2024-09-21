/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#363636",
        bgColor: "#6BE6A8",
        box1: "#C02424",
        box2: "#146FE8",
        box3: "#E76666",
        box4: "#A0FCD9",
        squire1:"#0FA958",
        squire2:"#BE92FB",
        squire3:"#FFACAC",
        squire4:"#2E4E3E",
        squire5:"#26DBDB",
        squire6:"#B126DB",
        squire7:"#DB4126",
        bgColor2:"#6BE6A8",
      },
      boxShadow: {
        // shadowCol: "rgb(38, 57, 77) 0px 20px 30px -10px",
      },
    },
  },
  plugins: [],
};
