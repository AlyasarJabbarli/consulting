import React from 'react';
import SectionSubtitle from '../../common/SectionSubtitle';

const WhoWeSection: React.FC = () => {
    return (
        <section>
            <div className='relative'>
                <div className='absolute bottom-56 md:bottom-0 right-9'>
                    <h1 className='text-8xl sm:text-9xl md:text-[171px] text-lightGray text-right'>
                        Experienced Business Consultants
                    </h1>
                </div>
                <div className="container mx-auto py-36 relative px-6 sm:px-0 sm:mb-32">
                    <div className='flex justify-end'>
                        <div className='max-w-2xl flex flex-col gap-5'>
                            <SectionSubtitle subtitle='Who We Are' />
                            <div className='text-lg'>
                                <p className='mb-4'>
                                    We are a team of experienced consultants dedicated to helping businesses overcome challenges and unlock their full potential. With a proven track record across industries, we deliver actionable insights that drive results
                                </p>
                                <p>
                                    Crafting data-driven strategies tailored to your business goals. We help you set clear objectives, identify growth opportunities, and create actionable plans for long-term success.
                                </p>
                            </div>
                            <div>
                                <iframe width="280" height="187" src="https://www.youtube.com/embed/uf2jgX0I4Bk" title="Bəxtiyar film, Pulumu verün" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default WhoWeSection;