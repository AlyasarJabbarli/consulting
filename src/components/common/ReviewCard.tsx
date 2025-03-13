import { StarIcon } from "@heroicons/react/20/solid";

type ReviewObject = {
    name: string, 
    company: string, 
    image: string, 
    text: string 
}

interface ReviewCardProps{
    review : ReviewObject;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
    <div>
        <div className='text-[#FFAE0D]'>
            <ul className='flex gap-1'>
                {Array(5).fill(0).map((_, i) => <li key={i}><StarIcon className='w-5' /></li>)}
            </ul>
        </div>
        <div className='my-8'>
            <p className='text-lg sm:text-3xl leading-normal'>
                {review.text}
            </p>
        </div>
        <div className='flex gap-6 items-center'>
            <div className='rounded-full w-16 h-16 overflow-hidden'>
                <img src={review.image} alt={review.name} />
            </div>
            <div className='text-lg'>
                <h4 className='uppercase font-semibold'>{review.name}</h4>
                <span className='text-lightGray'>{review.company}</span>
            </div>
        </div>
    </div>
);
export default ReviewCard;