import React from 'react';

interface StepsCardProps {
    title: string;
    step: number;
    description: string;
    img: string;
}

const StepsCard: React.FC<StepsCardProps> = ({ title, step, description, img }) => {
    return (
        <div className="steps-card bg-white">
            <div className='border-2 border-lightGray'>
            <div className='p-8'>
                <div className='mb-5'>
                    <div className=' w-fit mx-auto relative z-10'>
                        <div className='p-4 bg-bgGray'>
                            <h5 className='text-lg font-semibold w-7 text-center'>0{step}</h5>
                        </div>
                    </div>
                    <img className='-mt-8' src={img} alt="" />
                </div>
                <div className='text-center'>
                    <div className='mb-5'>
                        <h3 className='text-4xl'>{title}</h3>
                    </div>
                    <div>
                        <p className='text-xl'>{description}</p>
                    </div>
                </div>
            </div>
            </div>
            

        </div>
    );
};

export default StepsCard;