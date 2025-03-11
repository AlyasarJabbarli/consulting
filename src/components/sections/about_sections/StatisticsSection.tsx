import React from 'react';
import SectionTitle from '../../common/SectionTitle';

const StatisticsSection: React.FC = () => {
    return (
        <section className="statistics-section">
            <div className='bg-white'>
                <div className='py-16'>
                    <div className='container mx-auto'>
                        <div className='px-6 sm:px-0'>
                            <div>
                                <div className='flex justify-between flex-col md:flex-row gap-3 md:gap-0 text-center md:text-start items-center'>
                                    <div className='max-w-96'>
                                        <h2 className='text-5xl lg:text-6xl leading-tight font-medium'>Where Strategy Meets Excellence</h2>
                                    </div>
                                    <div className='text-lg md:max-w-96'>
                                        <div className='mb-5'>
                                            <h4 className='uppercase font-semibold'>Mission</h4>
                                        </div>
                                        <div>
                                            <p>With over a decade of proven expertise, we deliver tailored strategies, collaborate closely with you to ensure your goals are achieved.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-14'>
                                    <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3'>
                                        <div className=''>
                                            <div className='p-16 text-center bg-bgGray'>
                                                <div className='font-semibold mb-3'>
                                                    <div className='mb-3'>
                                                        <h3 className='text-7xl'>750+</h3>
                                                    </div>
                                                    <div>
                                                        <h4 className='text-lg uppercase'>Success Projects</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='text-lg'>We assist you in leveraging digital tools to improve your business</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='bg-expert-team-background bg-cover bg-center'>
                                                <div className='bg-whiteOverlayColor '>
                                                    <div className='p-16 text-center'>

                                                        <div className='font-semibold mb-3'>
                                                            <div className='mb-3'>
                                                                <h3 className='text-7xl'>28</h3>
                                                            </div>
                                                            <div>
                                                                <h4 className='text-lg uppercase'>Expert Team</h4>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className='text-lg'>We assist you in leveraging digital tools to improve your business</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='sm:col-span-2 col-span-1 lg:col-span-1'>
                                            <div className='p-16 text-center bg-bgGray'>
                                                <div className='font-semibold mb-3'>
                                                    <div className='mb-3'>
                                                        <h3 className='text-7xl'>4.9</h3>
                                                    </div>
                                                    <div>
                                                        <h4 className='text-lg uppercase'>Client Rating</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='text-lg'>We assist you in leveraging digital tools to improve your business</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default StatisticsSection;