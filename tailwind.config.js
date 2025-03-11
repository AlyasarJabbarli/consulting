/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/sections/home_sections/SuccessStoriesSection.tsx", 
    "./src/components/sections/home_sections/HeroSection.tsx",
    "./src/components/sections/common/WhoWeSection.tsx",
    "./src/components/sections/common/OurServicesSection.tsx",
    "./src/components/sections/common/SolutionsSection.tsx",
    "./src/components/sections/common/HowItWorksSection.tsx",
    "./src/components/sections/common/IndustriesSection.tsx",
    "./src/components/sections/common/FaqSection.tsx",
    "./src/components/sections/common/BookSection.tsx",
    "./src/components/sections/common/CommonHeroSection.tsx",
    "./src/components/layout/Header.tsx", 
    "./src/components/layout/Footer.tsx",
    "./src/components/common/SectionTitle.tsx",
    "./src/components/common/OurServicesSectionCard.tsx",
    "./src/components/common/DropdownMenu.tsx",
    "./src/components/common/SectionSubtitle.tsx", 
    "./src/components/common/ContactForm.tsx", 
    "./src/components/common/NavLinkCustom.tsx", 
    "./src/components/common/logo.tsx", 
    "./src/components/common/BlueBtn.tsx",
    "./src/components/common/CheckedList.tsx",
    "./src/components/common/Accordion.tsx",


  ],
  theme: {
    extend: {
      colors:{
        lightBlue: '#1b69f8',
        bgBlack: '#141516',
        purpleHeading: '#97bcff',
        goldHover: "#E9C26B",
        grayOverlay: '#22283170',
        lightGray: '#EBEDEF',
        bgGray: '#F4F6FB',
        dividerColor : '#BABABA'
      },
      backgroundImage: {
        'hero-pattern': "url('https://kit.sociolib.com//consulto//wp-content//uploads//sites//25//2025//01//02.webp')",
        'our-services-background': "url('https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/11.webp')",
        'industries-background': "url('https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/20.webp')",
        'booking-background': "url('https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/07.webp')",
      }
    },
  },
  plugins: [],
}

