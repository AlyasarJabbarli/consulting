import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion flex flex-col gap-6">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <button
                        type="button"
                        className="accordion-header w-full flex justify-between bg-white items-center p-5  [&>svg]:w-9"
                        onClick={() => toggleItem(index)}
                    >
                        <span className=' text-lg font-semibold '>
                            {item.title}
                        </span>
                        {activeIndex === index ? <MinusIcon /> : <PlusIcon />}
                    </button>
                  
                    <div className={`accordion-content  ${activeIndex === index ? "h-fit p-5" : "h-0 p-0"} overflow-hidden  duration-200`}>
                            {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;