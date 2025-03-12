import React from 'react';
import CheckedList from '../../common/CheckedList';
import BlueBtn from '../../common/BlueBtn';

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className='py-16'>
                <div className='container mx-auto'>
                    <div className='px-6 sm:px-0'>
                        <div className='flex gap-10 lg:flex-row flex-col'>
                            <div className='p-8 border-[1px] border-bgBlack h-fit'>
                                <div className='flex flex-col gap-5'>
                                    <div>
                                        <h3 className='text-4xl'>Basic</h3>
                                    </div>
                                    <div className='flex items-end'>
                                        <h3 className='text-6xl'>$39</h3>
                                        <p className='uppercase font-semibold'>/user</p>
                                    </div>
                                    <div>
                                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    </div>
                                    <CheckedList items={["Consulting", "Business Analyst", "Strategy & Assessment"]} />
                                    <BlueBtn text='Book Now' isWFull />
                                </div>

                            </div>
                            <div className='p-8 border-[1px] bg-bgBlack border-bgBlack text-white h-fit'>
                                <div className='flex flex-col gap-5'>
                                    <div>
                                        <h3 className='text-4xl'>Premium</h3>
                                    </div>
                                    <div className='flex items-end'>
                                        <h3 className='text-6xl'>$89</h3>
                                        <p className='uppercase font-semibold'>/user</p>
                                    </div>
                                    <div>
                                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    </div>
                                    <CheckedList items={["All Basic Features", "Financial Coaching", "Branding & Marketing", "Coaching & Seminar", "Human Resources", "Premium Support"]} isBgBlack />
                                    <BlueBtn text='Book Now' isWFull />
                                </div>

                            </div>
                            <div className='p-8 border-[1px] border-bgBlack h-fit'>
                                <div className='flex flex-col gap-5'>
                                    <div>
                                        <h3 className='text-4xl'>Advance</h3>
                                    </div>
                                    <div className='flex items-end'>
                                        <h3 className='text-6xl'>$129</h3>
                                        <p className='uppercase font-semibold'>/user</p>
                                    </div>
                                    <div>
                                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    </div>
                                    <CheckedList items={["All Premium Features", "Free Updates", "Custom Schedule"]} />
                                    <BlueBtn text='Book Now' isWFull />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;