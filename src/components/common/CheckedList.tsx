import { CheckCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface CheckedListProps {
    items: string[];
    isBgBlack?: boolean;
    isBold?: boolean;
    isBordered?: boolean;
}

const CheckedList: React.FC<CheckedListProps> = ({ items, isBgBlack,isBold, isBordered }) => {
    return (
        <div>
            <ul className='text-lg flex flex-col gap-3'>
                {items.map((item, index) => (
                    <li key={index} className={`flex ${isBordered && index !== items.length - 1 ? "border-b-2 pb-4" : ""} border-lightGray`}>
                        <CheckCircleIcon className={`w-[22px] ${isBgBlack ? "text-goldHover" : "text-lightBlue"}`} />
                        <p className={`ml-2 ${isBgBlack ? "text-white" : ""} ${isBold && "font-semibold"}`}>{item}</p>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default CheckedList;