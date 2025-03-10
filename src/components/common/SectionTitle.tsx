import React from "react";

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title}) => {
    return (
        <div>
            <div className="flex items-center gap-2"> 
                <h2 className="text-7xl">{title}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;