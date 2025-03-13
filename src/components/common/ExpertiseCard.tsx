import React from 'react';

interface ExpertiseCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, description, icon }) => {
    return (
        <div className="expertise-card bg-white border-2 border-lightGray">
            <div className='p-8'>
                <div className="text-lightBlue mb-3 w-16 h-16">{icon}</div>
                <div className='mt-2 mb-3'>
                    <h3 className="text-4xl">{title}</h3>
                </div>
                <div>
                    <p className="text-lg">{description}</p>
                </div>
            </div>

        </div>
    );
};

export default ExpertiseCard;