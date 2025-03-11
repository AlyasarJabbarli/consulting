import React, { useEffect, useState } from 'react';
import Logo from '../common/logo';
import { EnvelopeIcon, DevicePhoneMobileIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import NavLinkCustom from '../common/NavLinkCustom';
import DropdownMenu from '../common/DropdownMenu';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
          document.body.style.overflow = ""; // Enable scrolling
        }
        
        return () => {
          document.body.style.overflow = ""; // Cleanup on unmount
        };
      }, [isMenuOpen]);
    
    return (
        <header>
            <div className='container mx-auto h-20'>
                <div className='flex justify-between h-full px-2'>
                    <div className='flex items-center gap-8'>
                        <div>
                            <Logo />
                        </div>

                        {/* Desktop Navigation */}
                        <div className='hidden lg:block'>
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
                                    <li><NavLinkCustom to="/about">About</NavLinkCustom></li>
                                    <li><NavLinkCustom to="/contact">Plan</NavLinkCustom></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                    {/* Desktop Navigation */}
                    <div className="items-center hidden lg:flex xl:gap-6 ">
                        <div className='xl:gap-6 gap-2 flex flex-col xl:flex-row'>
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
                        </div>

                        <div>
                            <NavLinkCustom to="/contact" isButton>
                                Contact Us
                            </NavLinkCustom>
                        </div>

                    </div>
                    {/* Mobile Navigation */}
                    <div className='lg:hidden flex items-center'>
                        <button className='w-5' onClick={() => setIsMenuOpen(true)}>
                            <Bars3Icon />
                        </button>
                    </div>

                    <div className={`${isMenuOpen ? "w-full" : "w-0"} h-full duration-300 bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 overflow-hidden lg:hidden  z-50`} onClick={() => setIsMenuOpen(false)} >
                        <div className={`${isMenuOpen ? "w-72" : "w-0"} duration-500 z-10  bg-white absolute top-0 left-0 h-full`}>
                            <div className='flex flex-col h-full justify-between py-4'>
                                <div>
                                    <div className='flex justify-between px-4 mb-4'>
                                        <div>
                                            <Logo />
                                        </div>
                                        <div>
                                            <button className='w-11 h-8 bg-lightBlue text-white' onClick={() => setIsMenuOpen(false)}>
                                                <XMarkIcon className='w-6 mx-auto' />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <nav>
                                            <ul className='flex flex-col gap-y-2'>
                                                <li><NavLinkCustom to="/">Home</NavLinkCustom></li>
                                                <li><NavLinkCustom to="/single-service">Single Service</NavLinkCustom></li>
                                                <li><NavLinkCustom to="/contact">Contact</NavLinkCustom></li>
                                                <li><NavLinkCustom to="/process">Process</NavLinkCustom></li>
                                                <li><NavLinkCustom to="/services">Services</NavLinkCustom></li>
                                                <li><NavLinkCustom to="/contact">About</NavLinkCustom></li>
                                                <li><NavLinkCustom to="/contact">Plan</NavLinkCustom></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div>
                                    <div className='gap-2 flex flex-col items-center'>
                                        <div className='text-sm'>
                                            <NavLinkCustom to="tel:123456789" icon={<DevicePhoneMobileIcon />}>
                                                (123) 456 789
                                            </NavLinkCustom>
                                        </div>
                                        <div>
                                            <NavLinkCustom to="mailto:mail@consulto.biz" icon={<EnvelopeIcon />}>
                                                mail@consulto.biz
                                            </NavLinkCustom>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;