import { ArrowRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface BlueBtnProps {
    onClick?: () => void;
    text: string;
    isWFull?: boolean;
}

const BlueBtn: React.FC<BlueBtnProps> = ({ onClick, text, isWFull }) => {
    return (
        <div>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`flex gap-10 sm:gap-32 p-5 text-white text-lg font-semibold ${isWFull ? "w-full justify-between" : "w-fit"}`} style={{ backgroundImage: 'linear-gradient(125deg, #1B69F8 70%, #2673FF 70%)' }}
            >
                {text}
                <ArrowRightIcon className='w-6' />
            </button>
        </div>

    );
};

export default BlueBtn;