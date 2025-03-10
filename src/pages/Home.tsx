import React from 'react';
import HeroSection from '../components/sections/home_sections/HeroSection';
import WhoWeSection from '../components/sections/common/WhoWeSection';
import OurServicesSection from '../components/sections/common/OurServicesSection';

const Home: React.FC = () => {
    return (
        <main>
            <HeroSection/>
            <WhoWeSection/>
            <OurServicesSection/>
        </main>
    );
};

export default Home;