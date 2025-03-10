import React from "react";

interface SectionSubtitleProps {
    subtitle: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ subtitle}) => {
    return (
        <div>
            <div className="flex items-center gap-2"> 
                <span className="inline-block rounded w-2 h-2 bg-lightBlue"></span>
                <span className="text-lg text-lightBlue font-semibold uppercase">{subtitle}</span>
            </div>
        </div>
    );
};

export default SectionSubtitle;