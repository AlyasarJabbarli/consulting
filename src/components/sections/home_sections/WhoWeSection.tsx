import React from 'react';
import SectionHeader from '../../common/SectionHeader';

const WhoWeSection: React.FC = () => {
    return (
        <section className="who-we-section relative mb-56">
            <div className='absolute bottom-56 md:bottom-0 right-9'>
                <h1 className='text-8xl sm:text-9xl md:text-[171px] text-lightGray text-right'>
                    Experienced Business Consultants
                </h1>
            </div>
            <div className="container mx-auto py-36 relative">
                <div className='flex justify-end'>
                    <div className='max-w-2xl flex flex-col gap-5'>
                        <SectionHeader subtitle='Who We Are' />
                        <div className='text-lg'>
                            <p className='mb-4'>
                                We are a team of experienced consultants dedicated to helping businesses overcome challenges and unlock their full potential. With a proven track record across industries, we deliver actionable insights that drive results
                            </p>
                            <p>
                                Crafting data-driven strategies tailored to your business goals. We help you set clear objectives, identify growth opportunities, and create actionable plans for long-term success.
                            </p>
                        </div>
                        <div>
                            <iframe className='mx-auto md:ml-0' width="280" height="187" src="https://www.youtube.com/embed/OuWO5F7z4tw" title="Aygün Kazımova - Can Ol (Rəsmi Musiqi)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>                        
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default WhoWeSection;