import React from 'react';
import CommonHeroSection from '../components/sections/common/CommonHeroSection';
import FaqSection from '../components/sections/common/FaqSection';
import PricingSection from '../components/sections/plan_sections/PricingSection';

const Plan: React.FC = () => {
    return (
        <main>
            <CommonHeroSection title='Plan' subtitle='We assist you in leveraging digital tools to improve your business processes, customer experience, and market reach.' backgroundImage='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/03.webp'/>
            <PricingSection/>
            <FaqSection/>
        </main>
    );
};

export default Plan;