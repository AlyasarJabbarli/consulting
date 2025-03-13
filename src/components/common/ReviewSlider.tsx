import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay"
import ReviewCard from "./ReviewCard";

type ReviewObject = {
    name: string, 
    company: string, 
    image: string, 
    text: string 
}

interface ReviewSliderProps{
    reviews : ReviewObject[]
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({ reviews }) => (
    <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
    >
        {reviews.map((review, index) => (
            <SwiperSlide key={index}>
                <ReviewCard review={review} />
            </SwiperSlide>
        ))}
    </Swiper>
);

export default ReviewSlider;