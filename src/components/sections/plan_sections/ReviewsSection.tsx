import { StarIcon } from '@heroicons/react/20/solid';
import React from 'react';

const ReviewsSection: React.FC = () => {
    return (
        <section>
            <div className='py-16'>
                <div className='container mx-auto'>
                    <div className='px-6 sm:px-0'>
                        <div className='text-white flex gap-9 '>
                            <div className='w-3/5'>
                                <div className='bg-reviews-background bg-no-repeat bg-center bg-cover'>
                                    <div className="w-full h-full bg-overlay-gradient">
                                        <div className=' p-10'>
                                            <div>
                                                <h3 className='text-5xl'>Review from our clients</h3>
                                            </div>

                                            <div>
                                                <div className='text-[#FFAE0D]'>
                                                    <ul className='flex gap-1'>
                                                        <li><StarIcon className='w-5' /></li>
                                                        <li><StarIcon className='w-5' /></li>
                                                        <li><StarIcon className='w-5' /></li>
                                                        <li><StarIcon className='w-5' /></li>
                                                        <li><StarIcon className='w-5' /></li>
                                                    </ul>
                                                </div>
                                                <div className='my-8'>
                                                    <p className='text-3xl leading-normal'>
                                                        Working with Consulto was a game-changer for our business. Their insights into our market helped us streamline our operations and achieve double-digit growth in just six months. Highly recommend their team!
                                                    </p>
                                                </div>
                                                <div className='flex gap-6 items-center'>
                                                    <div className='rounded-full w-16 h-16 overflow-hidden'>
                                                        <img src="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/18.jpg" alt="" />
                                                    </div>
                                                    <div className='text-lg '>
                                                        <h4 className='uppercase font-semibold'>Adam S</h4>
                                                        <span className='text-lightGray'>Google</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-2/5 flex items-stretch'>
                                <div className='bg-reviews-background2 bg-no-repeat bg-center bg-cover'>
                                    <div className="w-full h-full bg-overlay-gradient-light">
                                        <div className='p-10 flex items-end h-full'>
                                            <div>
                                                <h3 className='text-5xl leading-normal'>Empowering Business Excellence</h3>
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

export default ReviewsSection;