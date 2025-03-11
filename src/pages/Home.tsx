import React from 'react';
import HeroSection from '../components/sections/home_sections/HeroSection';
import WhoWeSection from '../components/sections/common/WhoWeSection';
import OurServicesSection from '../components/sections/common/OurServicesSection';
import SolutionsSection from '../components/sections/common/SolutionsSection';
import HowItWorksSection from '../components/sections/common/HowItWorksSection';
import SuccessStoriesSection from '../components/sections/home_sections/SuccessStoriesSection';
import IndustriesSection from '../components/sections/common/IndustriesSection';

const Home: React.FC = () => {
    return (
        <main>
            <HeroSection/>
            <WhoWeSection/>
            <OurServicesSection/>
            <SolutionsSection/>
            <HowItWorksSection/>
            <SuccessStoriesSection/>
            <IndustriesSection/>
        </main>
    );
};

export default Home;