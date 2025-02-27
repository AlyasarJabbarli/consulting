import React from 'react';
import Logo from '../common/logo';
import { EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid'
import NavLinkCustom from '../common/NavLinkCustom';
import DropdownMenu from '../common/DropdownMenu';

const Header: React.FC = () => {
    return (
        <header>
            <div className='container mx-auto h-20'>
                <div className='flex justify-between h-full'>
                    <div className='flex items-center gap-8'>
                        <div>
                            <Logo />
                        </div>
                        <div>
                            <nav>
                                <ul className='flex gap-x-4 items-center'>
                                    <li><NavLinkCustom to="/">Home</NavLinkCustom></li>
                                    <li>
                                        <DropdownMenu
                                            label="Pages"
                                            links={[
                                                { to: "/single-service", text: "Single Service" },
                                                { to: "/contact", text: "Contact" },
                                                { to: "/process", text: "Process" },
                                            ]}
                                        />

                                    </li>
                                    <li><NavLinkCustom to="/services">Services</NavLinkCustom></li>
                                    <li><NavLinkCustom to="/contact">About</NavLinkCustom></li>
                                    <li><NavLinkCustom to="/contact">Plan</NavLinkCustom></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className='border-r border-gray-300 pr-6'>
                            <NavLinkCustom to="tel:123456789" icon={<DevicePhoneMobileIcon />}>
                                (123) 456 789
                            </NavLinkCustom>
                        </div>
                        <div>
                            <NavLinkCustom to="mailto:mail@consulto.biz" icon={<EnvelopeIcon />}>
                                mail@consulto.biz
                            </NavLinkCustom>
                        </div>
                        <div>
                            <NavLinkCustom to="/contact" isButton>
                                Contact Us
                            </NavLinkCustom>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;