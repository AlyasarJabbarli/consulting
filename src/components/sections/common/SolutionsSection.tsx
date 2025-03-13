import React from 'react';
import SectionTitle from '../../common/SectionTitle';
import SectionSubtitle from '../../common/SectionSubtitle';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import CheckedList from '../../common/CheckedList';

interface SolutionsSectionProps {
    image? : string;
    items? : string[];
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({image, items}) => {
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
                        <CheckedList items={items || ["Tailored Solutions for Your Business", "Proven Industry Expertise", "Data-Driven Strategies","Commitment to Results", "Transparent Communication"]}/>
                    </div>
                    <div className='relative w-full md:w-2/4 lg:w-2/5'>
                        <img className='w-full h-full' src={image || `https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/05.webp`} alt="" />
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