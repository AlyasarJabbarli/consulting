import React from 'react';
import CommonHeroSection from '../components/sections/common/CommonHeroSection';
import StepsSection from '../components/sections/process_sections/StepsSection';
import HowItWorksSection from '../components/sections/common/HowItWorksSection';

const Process: React.FC = () => {
    return (
        <main>
            <CommonHeroSection title='Process' subtitle='We assist you in leveraging digital tools to improve your business processes, customer experience, and market reach.' backgroundImage='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/08.webp'/>
            <StepsSection/>
            <HowItWorksSection/>
        </main>
    );
};

export default Process;