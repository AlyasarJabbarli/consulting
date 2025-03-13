import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/SKY-Photoroom.png'
const Logo: React.FC = () => {
    return (
        <div className="logo w-20 overflow-hidden">
            <NavLink to={"/"}>
                <img className='object-contain' src={logo} alt="Sky Consulting Logo" />
            </NavLink>
        </div>
    );
};

export default Logo;