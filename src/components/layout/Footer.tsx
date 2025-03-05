import React from "react";
import Logo from "../common/logo";
import { Link } from "react-router-dom";
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import NavLinkCustom from "../common/NavLinkCustom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-bgBlack">
            <div className="container mx-auto text-white">
                <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 sm:px-0 px-8">
                    <div className="flex flex-col gap-5">
                        <div>
                            <Logo />
                        </div>

                        <div>
                            <p className="sm:max-w-60">We assist you in leveraging digital tools to improve your business success.</p>
                        </div>

                        <div>
                            <ul className="flex gap-2 pl-1">
                                <li className="w-5">
                                    <Link to={""}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" viewBox="0,0,256,256">
                                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z"></path></g></g>
                                        </svg>
                                    </Link>
                                </li>
                                <li className="w-5">
                                    <Link to={""}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" viewBox="0,0,256,256">
                                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z"></path></g></g>
                                        </svg>
                                    </Link>
                                </li>
                                <li className="w-5">
                                    <Link to={""}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" viewBox="0,0,256,256">
                                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z"></path></g></g>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <h4 className="text-purpleHeading uppercase font-semibold">
                                Headquarter
                            </h4>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="sm:max-w-60">
                                    The Consulto. Amphitheater Parkway, Mountain View, California, 54043, CA.
                                </p>
                            </div>

                            <div>
                                <div >
                                    <NavLinkCustom to="tel:123456789" icon={<DevicePhoneMobileIcon />} isBgBlack>
                                        (123) 456 789
                                    </NavLinkCustom>
                                </div>
                                <div>
                                    <NavLinkCustom to="mailto:mail@consulto.biz" icon={<EnvelopeIcon />} isBgBlack>
                                        mail@consulto.biz
                                    </NavLinkCustom>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <h4 className="text-purpleHeading uppercase font-semibold">
                                Services
                            </h4>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-2">
                                <li><NavLinkCustom to="/contact" isBgBlack>Consulting</NavLinkCustom></li>
                                <li><NavLinkCustom to="/process" isBgBlack>Marketing</NavLinkCustom></li>
                                <li><NavLinkCustom to="/services" isBgBlack>Financial Management</NavLinkCustom></li>
                                <li><NavLinkCustom to="/contact" isBgBlack>Business Coaching</NavLinkCustom></li>
                                <li><NavLinkCustom to="/contact" isBgBlack>Market Analysts</NavLinkCustom></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <h4 className="text-purpleHeading uppercase font-semibold">
                                Links
                            </h4>
                        </div>
                        <div>
                            <ul className="flex flex-col gap-2">
                                <li><NavLinkCustom to="/contact" isBgBlack>Our Clients</NavLinkCustom></li>
                                <li><NavLinkCustom to="/process" isBgBlack>Contact</NavLinkCustom></li>
                                <li><NavLinkCustom to="/services" isBgBlack>Help Center</NavLinkCustom></li>
                                <li><NavLinkCustom to="/contact" isBgBlack>Career</NavLinkCustom></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 py-8 flex justify-between flex-col sm:flex-row text-center items-center gap-1">
                    <div>
                        <p>
                            Powered by AJStudio
                        </p>
                    </div>
                    <div>
                        <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className="flex gap-3">
                            <li className="border-r-2 border-goldHover pr-3"><NavLinkCustom to="/privacy" isBgBlack>Privacy Policy</NavLinkCustom></li>
                            <li><NavLinkCustom to="/terms" isBgBlack>Our Terms</NavLinkCustom></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;