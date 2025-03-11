import { CheckCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';
import ContactForm from '../../common/ContactForm';

interface HeroSectionProps {
    // Define props here if needed
}

const HeroSection: React.FC<HeroSectionProps> = () => {
    const handleFormSubmit = (formData: any) => {
        console.log("Hero Section Form Submitted:", formData);
    };

    return (
        <section>
            <div className="hero-content bg-hero-pattern relative  sm:h-[820px] h-fit">
                <div className="absolute inset-0 bg-grayOverlay h-full"></div>
                <div className='container mx-auto h-full'>
                    <div className='flex relative justify-between h-full items-center sm:px-0 px-2 sm:py-0 py-5 sm:flex-row flex-col lg:gap-44 gap-10'>
                        <div className='pl-4 text-white sm:w-6/12 max-w-[600px] flex flex-col gap-7'>
                            <div>
                                <h1 className='text-5xl md:text-6xl lg:text-8xl'>
                                    Growth through expert consulting
                                </h1>
                            </div>
                            <div>
                                <p className='text-lg'>
                                    We assist you in leveraging digital tools to improve your business processes, customer experience, and market reach.
                                </p>
                            </div>
                            <div>
                                <ul className='flex gap-5 '>
                                    <li className='flex gap-2'>
                                        <CheckCircleIcon width={21} color='#E9C26B' />
                                        <p>Proven results</p>
                                    </li>
                                    <li className='flex gap-2'>
                                        <CheckCircleIcon width={21} color='#E9C26B' />
                                        <p>Expert help</p>
                                    </li>
                                    <li className='flex gap-2'>
                                        <CheckCircleIcon width={21} color='#E9C26B' />
                                        <p>Cost saving?</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='sm:w-6/12 max-w-[493px] w-full'>
                            <div>
                                <ContactForm
                                    heading="Request a Free Consultation"
                                    fields={[
                                        { name: "name", type: "text", placeholder: "Name", required: true },
                                        { name: "email", type: "email", placeholder: "Email", required: true },
                                        { name: "message", type: "textarea", placeholder: "Your Message", required: true },
                                    ]}
                                    onSubmit={handleFormSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default HeroSection;