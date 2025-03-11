import React from 'react';
import SectionTitle from '../../common/SectionTitle';
import SectionSubtitle from '../../common/SectionSubtitle';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { LightBulbIcon } from '@heroicons/react/24/outline';

interface SolutionsSectionProps { }

const SolutionsSection: React.FC<SolutionsSectionProps> = () => {
    return (
        <section>
            <div className="container mx-auto py-24 px-6 sm:px-0">
                <div className='flex flex-col gap-y-10 md:flex-row justify-between'>
                    <div className='w-full md:w-2/4 lg:w-2/5 flex flex-col justify-center'>
                        <div className='mb-6 border-b-2 border-lightGray pb-6'>
                            <SectionSubtitle subtitle="Why work with us" />

                            <div className="max-w-xl mt-5">
                                <SectionTitle title="Results-Driven Consulting Solutions" />
                            </div>

                            <div className='text-lg mt-5'>
                                <p >
                                    With over a decade of proven expertise, we deliver tailored strategies, collaborate closely with you, and make data-backed decisions to ensure your goals are achieved.
                                </p>
                            </div>
                        </div>
                        <div>
                            <ul className='text-lg flex flex-col gap-3 [&>li]:flex [&>li>p]:ml-2 [&>li>svg]:w-[22px] [&>li>svg]:text-lightBlue '>
                                <li><CheckCircleIcon /><p>Tailored Solutions for Your Business</p></li>
                                <li><CheckCircleIcon /><p>Proven Industry Expertise</p> </li>
                                <li><CheckCircleIcon /><p>Data-Driven Strategies</p> </li>
                                <li><CheckCircleIcon /><p>Commitment to Results</p> </li>
                                <li><CheckCircleIcon /><p>Transparent Communication</p> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='relative w-full md:w-2/4 lg:w-2/5'>
                        <img className='w-full h-full' src="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/05.webp" alt="" />
                        <div className='absolute  sm:w-96 bg-white bottom-9 max-sm:left-2 right-2 sm:right-9  '>
                            <div className='flex gap-5 p-3 sm:p-8'>
                                <div className='text-lightBlue'>
                                    <LightBulbIcon className='w-9 sm:w-12' />
                                </div>
                                <div>
                                    <div className=' text-2xl sm:text-4xl mb-2'>
                                        <h3>Innovative Solutions</h3>
                                    </div>
                                    <div className='text-sm sm:text-lg'>
                                        <p>We bring fresh, innovative ideas to help your business maintain a competitive edge.</p>
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

export default SolutionsSection;