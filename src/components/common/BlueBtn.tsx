import { ArrowRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface BlueBtnProps {
    onClick?: () => void;
    text: string;
}

const BlueBtn: React.FC<BlueBtnProps> = ({ onClick, text }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className="flex gap-10 sm:gap-32 p-5 text-white text-lg w-fit font-semibold" style={{ backgroundImage: 'linear-gradient(125deg, #1B69F8 70%, #2673FF 70%)' }}
            >
                {text}
                <ArrowRightIcon className='w-6' />
            </button>
        </div>

    );
};

export default BlueBtn;