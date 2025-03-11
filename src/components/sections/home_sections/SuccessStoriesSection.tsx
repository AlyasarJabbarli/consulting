import React from 'react';
import SectionSubtitle from '../../common/SectionSubtitle';
import SectionTitle from '../../common/SectionTitle';
import BlueBtn from '../../common/BlueBtn';

const SuccessStoriesSection: React.FC = () => {
    return (
        <section>
            <div className='container mx-auto py-16'>
                <div className='px-6 sm:px-0'>
                    <div className='border-b-2 border-lightGray pb-10'>
                        <div className='flex justify-end '>
                            <div className='md:w-2/4'>
                                <SectionSubtitle subtitle='success stories' />
                                <div className='max-w-md mt-5'>
                                    <SectionTitle title='Real result and real impact' />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='mt-10 flex flex-col gap-y-3 sm:flex-row px-3'>
                        <div className='sm:w-2/4'>
                            <div className='rounded-full w-20 h-20 overflow-hidden'>
                                <img className='w-full h-full object-cover' src="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/07.jpg" alt="" />
                            </div>
                            <div className='text-lg mt-4'>
                                <div className='mb-1'>
                                    <h5 className='uppercase font-semibold'>Karin Gabriella</h5>
                                </div>
                                <div>
                                    <p>Product manager at Machino</p>
                                </div>
                            </div>
                        </div>
                        <div className='sm:w-2/4'>
                            <div className='mb-4'>
                                <p className='text-xl md:text-3xl leading-normal'>
                                    ”Our business has transformed thanks to their expert guidance. From strategy development to seamless execution, they helped us unlock new growth opportunities and achieve measurable success. We couldn’t have done it without their team!”
                                </p>
                            </div>
                            <BlueBtn text='See our case studies' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SuccessStoriesSection;