import { CheckCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface CheckedListProps {
    items: string[];
    isBgBlack?: boolean;
}

const CheckedList: React.FC<CheckedListProps> = ({ items, isBgBlack }) => {
    return (
        <div>
            <ul className='text-lg flex flex-col gap-3'>
                {items.map((item, index) => (
                    <li key={index} className='flex '>
                        <CheckCircleIcon className={`w-[22px] ${isBgBlack ? "text-goldHover" : "text-lightBlue"}`} />
                        <p className={`ml-2 ${isBgBlack ? "text-white" : ""}`}>{item}</p>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default CheckedList;