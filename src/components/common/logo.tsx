import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo: React.FC = () => {
    return (
        <div className="logo w-10">
            <NavLink to={"/"}>
                <img src="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/consulto.png" alt="Company Logo" />
            </NavLink>
        </div>
    );
};

export default Logo;