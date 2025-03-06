/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/sections/home_sections/HeroSection.tsx","./src/components/sections/home_sections/WhoWeSection.tsx","./src/components/layout/Header.tsx", "./src/components/layout/Footer.tsx","./src/components/common/DropdownMenu.tsx","./src/components/common/SectionHeader.tsx", "./src/components/common/ContactForm.tsx", "./src/components/common/NavLinkCustom.tsx", "./src/components/common/logo.tsx"],
  theme: {
    extend: {
      colors:{
        lightBlue: '#1b69f8',
        bgBlack: '#141516',
        purpleHeading: '#97bcff',
        goldHover: "#E9C26B",
        grayOverlay: '#22283170',
        lightGray: '#EBEDEF'
      },
      backgroundImage: {
        'hero-pattern': "url('https://kit.sociolib.com//consulto//wp-content//uploads//sites//25//2025//01//02.webp')",
      }
    },
  },
  plugins: [],
}

