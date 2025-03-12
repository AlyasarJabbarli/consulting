import React from 'react';


const MapSection: React.FC = () => {
    return (
        <section className="map-section">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.4550957660267!2d49.87098617869642!3d40.38868301286073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d17b24f2a4f%3A0xe1b88294b8b93edb!2sBeauttech%20Bab%C9%99k%20Plaza!5e0!3m2!1sen!2shu!4v1741741022058!5m2!1sen!2shu" width="100%" height="600" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    );
};

export default MapSection;