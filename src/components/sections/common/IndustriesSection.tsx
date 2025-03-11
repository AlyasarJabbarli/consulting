import React from 'react';
import SectionSubtitle from '../../common/SectionSubtitle';
import SectionTitle from '../../common/SectionTitle';
import CheckedList from '../../common/CheckedList';
import BlueBtn from '../../common/BlueBtn';


const IndustriesSection: React.FC = () => {
    return (
        <section>
            <div className='container mx-auto py-16'>
                <div className='px-6 sm:px-0'>
                    <div>
                        <div className='flex flex-col items-center gap-5 text-center'>
                            <SectionSubtitle subtitle='Industries' />
                            <SectionTitle title='Navigating Success Together' />
                            <div>
                                <p>We deliver tailored strategies, collaborate closely with you.</p>
                            </div>
                        </div>
                        <div className='mt-12'>
                            <div className='flex flex-col gap-5 lg:flex-row '>
                                <div className='bg-industries-background bg-cover bg-center bg-no-repeat lg:w-2/3'>
                                    <div className='p-5 sm:p-10 text-white flex flex-col gap-5' style={{ backgroundImage: "linear-gradient(20deg, #141516 15%, #22283170 100%)" }}>
                                        <div>
                                            <h3 className='text-3xl sm:text-5xl'>Sector-focused strategies</h3>
                                        </div>
                                        <div className='max-w-xl'>
                                            <p className='text-lg'>We assist you in leveraging digital tools to improve your business processes, customer experience, and market reach.</p>
                                        </div>
                                        <div className='flex flex-col sm:flex-row '>
                                            <div className='sm:w-1/2'>
                                                <CheckedList isBgBlack items={["Manufacturing", "Healthcare", "Home & Residential", "Technology", "Automotive"]} />
                                            </div>
                                            <div className='sm:w-1/2'>
                                                <CheckedList isBgBlack items={["Agriculture", "Business & Retail", "Sports", "Media & Entertainment", "Renewable Energy"]} />
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className='bg-lightGray p-10'>
                                    <div className='flex flex-col justify-between h-full gap-5'>
                                        <div className='flex justify-between lg:flex-col gap-5 '>
                                            <div>
                                                <h3 className='text-3xl sm:text-5xl'>Simple plan starts at</h3>
                                            </div>
                                            <div>
                                                <h3 className='text-4xl sm:text-7xl'>
                                                    $49
                                                </h3>
                                            </div>
                                        </div>
                                        <BlueBtn text="View Plans" />
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

export default IndustriesSection;