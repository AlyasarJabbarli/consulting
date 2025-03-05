/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/layout/Header.tsx", "./src/components/layout/Footer.tsx","./src/components/common/DropdownMenu.tsx", "./src/components/common/NavLinkCustom.tsx", "./src/components/common/logo.tsx"],
  theme: {
    extend: {
      colors:{
        lightBlue: '#1b69f8',
        bgBlack: '#141516',
        purpleHeading: '#97bcff',
        goldHover: "#E9C26B"
      }
    },
  },
  plugins: [],
}

