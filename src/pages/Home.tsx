import React from 'react';
import HeroSection from '../components/sections/home_sections/HeroSection';
import WhoWeSection from '../components/sections/common/WhoWeSection';
import OurServicesSection from '../components/sections/common/OurServicesSection';
import SolutionsSection from '../components/sections/common/SolutionsSection';
import HowItWorksSection from '../components/sections/common/HowItWorksSection';

const Home: React.FC = () => {
    return (
        <main>
            <HeroSection/>
            <WhoWeSection/>
            <OurServicesSection/>
            <SolutionsSection/>
            <HowItWorksSection/>
        </main>
    );
};

export default Home;