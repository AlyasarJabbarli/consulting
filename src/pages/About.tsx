import React from 'react';
import CommonHeroSection from '../components/sections/common/CommonHeroSection';
import WhoWeSection from '../components/sections/common/WhoWeSection';
import IndustriesSection from '../components/sections/common/IndustriesSection';
import SolutionsSection from '../components/sections/common/SolutionsSection';
import StatisticsSection from '../components/sections/about_sections/StatisticsSection';

const About: React.FC = () => {
    return (
        <main>
            <CommonHeroSection title='About Us' subtitle='We assist you in leveraging digital tools to improve your business processes, customer experience, and market reach.' backgroundImage='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/10.webp'/>
            <WhoWeSection/> 
            <IndustriesSection/>
            <SolutionsSection/>
            <StatisticsSection/>
        </main>
    );
};

export default About;