import React from 'react';
import ReviewSlider from '../../common/ReviewSlider';




const ReviewsSection: React.FC = () => {
    const reviews = [
        {
            name: "Adam S",
            company: "Google",
            image: "https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/18.jpg",
            text: "Working with Consulto was a game-changer for our business. Their insights into our market helped us streamline our operations and achieve double-digit growth in just six months. Highly recommend their team!"
        },
        {
            name: "Adam S",
            company: "Google",
            image: "https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/18.jpg",
            text: "Working with Consulto was a game-changer for our business. Their insights into our market helped us streamline our operations and achieve double-digit growth in just six months. Highly recommend their team!"
        },
        {
            name: "Adam S",
            company: "Google",
            image: "https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/18.jpg",
            text: "Working with Consulto was a game-changer for our business. Their insights into our market helped us streamline our operations and achieve double-digit growth in just six months. Highly recommend their team!"
        },
        {
            name: "Adam S",
            company: "Google",
            image: "https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/18.jpg",
            text: "Working with Consulto was a game-changer for our business. Their insights into our market helped us streamline our operations and achieve double-digit growth in just six months. Highly recommend their team!"
        },
    ];

    return (
        <section className='py-16'>
            <div className='container mx-auto px-6 sm:px-0'>
                <div className='text-white flex lg:flex-row flex-col gap-9'>
                    <div className='lg:w-3/5'>
                        <div className='bg-reviews-background bg-no-repeat bg-center bg-cover'>
                            <div className="w-full h-full bg-overlay-gradient p-5 sm:p-10">
                                <h3 className='text-3xl sm:text-5xl'>Review from our clients</h3>
                                <ReviewSlider reviews={reviews} />
                            </div>
                        </div>
                    </div>
                    
                    <div className='lg:w-2/5 lg:flex items-stretch'>
                        <div className='bg-reviews-background2 bg-no-repeat bg-center bg-cover'>
                            <div className="w-full bg-overlay-gradient-light p-10 flex items-end h-full max-lg:min-h-96">
                                <h3 className='text-3xl sm:text-5xl leading-normal'>Empowering Business Excellence</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;

