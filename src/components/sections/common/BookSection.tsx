import React from 'react';
import SectionTitle from '../../common/SectionTitle';
import BlueBtn from '../../common/BlueBtn';



const BookSection: React.FC = () => {
    return (
        <section>
            <div className='relative'>

                <div className='container mx-auto'>
                    <div className='px-6 sm:px-0'>

                        <div className='bg-booking-background w-full bg-cover'>
                            <div className='flex justify-end sm:p-32 p-2'>
                                <div className='md:w-2/5'>
                                    <div className='mb-5 max-w-xl'>
                                        <SectionTitle title='Let’s build your success story together' />
                                    </div>
                                    <BlueBtn text='Book your consultation' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-1/2 bg-bgBlack w-full absolute bottom-0 -z-10'>

                </div>
            </div>
        </section>
    );
};

export default BookSection;