import React from 'react';
import SectionSubtitle from '../../common/SectionSubtitle';
import SectionTitle from '../../common/SectionTitle';
import BlueBtn from '../../common/BlueBtn';



const HowItWorksSection: React.FC = () => {
    return (
        <section>
            <div className='py-16'>
                <div className='container mx-auto  pb-5 px-6 sm:px-0'>
                    <div className='flex flex-col md:flex-row gap-y-3'>
                        <div className='md:w-2/4'>
                            <SectionSubtitle subtitle='How it works' />
                        </div>
                        <div className='bg-white p-5 sm:p-10 md:max-w-md flex flex-col gap-5 relative z-10'>
                            <SectionTitle title='Our process, simplified' />
                            <div>
                                <BlueBtn text='Start your journey' />
                            </div>
                            <div>
                                <p className='sm:text-lg'>
                                    We understand your needs, analyze opportunities, develop tailored strategies, and implement solutions with measurable results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:h-screen sm:-mt-72'>
                    <img className='w-full h-full object-cover' src="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/06.webp" alt="" />
                </div>
            </div>

        </section>
    );
};

export default HowItWorksSection;