import React from 'react';
import CommonHeroSection from '../components/sections/common/CommonHeroSection';
import SolutionsSection from '../components/sections/common/SolutionsSection';
import OurServicesSection from '../components/sections/common/OurServicesSection';
import ExpertiseSection from '../components/sections/services_sections/ExpertiseSection';

const Services: React.FC = () => {
    return (
        <main>
            <CommonHeroSection title='Our Services' subtitle='We assist you in leveraging digital tools to improve your business processes, customer experience, and market reach.' backgroundImage='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/08.webp'/>
            <SolutionsSection image='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/17.webp' items={["Business Strategy & Planning", "Operations & Process Improvement", "Market Research & Analysis", "Leadership Development & Training", "Digital Transformation Consulting"]}/>
            <ExpertiseSection/>
            <OurServicesSection/>
        </main>
    );
};

export default Services;