import React from "react";

interface SectionHeaderProps {
    subtitle: string;
    title?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title}) => {
    return (
        <div>
            <div className="flex items-center gap-2"> 
                <span className="inline-block rounded w-2 h-2 bg-lightBlue"></span>
                <span className="text-lg text-lightBlue font-semibold">{subtitle}</span>
            </div>
            {title && <h2>{title}</h2>}
        </div>
    );
};

export default SectionHeader;