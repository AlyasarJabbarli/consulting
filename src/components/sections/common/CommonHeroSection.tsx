import React from 'react';

interface CommonHeroSectionProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

const CommonHeroSection: React.FC<CommonHeroSectionProps> = ({
    title,
    subtitle,
    backgroundImage,
}) => {
    return (
        <section className="common-hero-section">
            <div className='bg-cover bg-center h-[430px]' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='bg-grayOverlay h-full'>
                    <div className="container mx-auto text-white h-full" >
                        <div className='flex items-center h-full'>
                            <div className='max-w-xl sm:px-0 px-3'>
                                <div>
                                    <h1 className='text-8xl'>{title}</h1>
                                </div>
                                <div className='mt-6'>
                                    <p className='text-lg'>{subtitle}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default CommonHeroSection;