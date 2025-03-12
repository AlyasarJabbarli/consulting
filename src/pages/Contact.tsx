import React from 'react';
import CommonHeroSection from '../components/sections/common/CommonHeroSection';
import GetInTouchSection from '../components/sections/contact_sections/GetInTouchSection';
import MapSection from '../components/sections/contact_sections/MapSection';

const Contact: React.FC = () => {
    return (
        <main>
            <CommonHeroSection title='Contact Us' subtitle='We assist you in leveraging digital tools to improve your business processes, customer experience, and market reach.' backgroundImage='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/21.webp'/>
            <GetInTouchSection/>
            <MapSection/>
        </main>
    );
};

export default Contact;