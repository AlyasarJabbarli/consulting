import React from 'react';

interface OurServicesSectionCardProps {
    title: string;
    description: string;
    img: string;
    alt?: string;
}

const OurServicesSectionCard: React.FC<OurServicesSectionCardProps> = ({ title, description, img, alt }) => {
    return (
        <div className="our-services-section-card group pb-8">
            <div className='flex flex-col-reverse gap-2 sm:flex-row sm:gap-10 justify-between pt-6 border-t-2 border-lightGray group-hover:border-lightBlue duration-500'>
                <div className='text-lg w-4/6'>
                    <h4 className='font-semibold uppercase mt-2 mb-3'>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className='w-44 h-20 sm:h-32 overflow-hidden'>
                    <img className='object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300' src={img} alt={alt ? alt : ""} />
                </div>
            </div>
        </div>

    );
};

export default OurServicesSectionCard;