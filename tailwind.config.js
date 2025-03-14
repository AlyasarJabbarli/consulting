/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/SingleService.tsx", 

    "./src/components/sections/home_sections/SuccessStoriesSection.tsx", 
    "./src/components/sections/home_sections/HeroSection.tsx",

    "./src/components/sections/about_sections/StatisticsSection.tsx",

    "./src/components/sections/contact_sections/GetInTouchSection.tsx",

    "./src/components/sections/plan_sections/PricingSection.tsx",
    "./src/components/sections/plan_sections/ReviewsSection.tsx",

    "./src/components/sections/services_sections/ExpertiseSection.tsx",

    "./src/components/sections/process_sections/StepsSection.tsx",





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
    "./src/components/common/ReviewCard.tsx",
    "./src/components/common/ExpertiseCard.tsx",
    "./src/components/common/StepsCard.tsx",
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
        dividerColor : '#BABABA',
        whiteOverlayColor : '#FFFFFF80'
      },
      backgroundImage: {
        'hero-pattern': "url('https://kit.sociolib.com//consulto//wp-content//uploads//sites//25//2025//01//02.webp')",
        'our-services-background': "url('https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/11.webp')",
        'industries-background': "url('https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/20.webp')",
        'booking-background': "url('https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/07.webp')",
        'expert-team-background' : "url('https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/14.webp')",
        'reviews-background' : "url('https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/20.webp')",
        'overlay-gradient' : "linear-gradient(20deg, #141516 15%, #22283170 100%)",
        'overlay-gradient-light' : "linear-gradient(180deg, #FFFFFF00 0%, #141516 100%)",
        'reviews-background2' : "url('https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/04.webp')",
      }
    },
  },
  plugins: [],
}

