import React from 'react';
import SectionSubtitle from '../../common/SectionSubtitle';
import SectionTitle from '../../common/SectionTitle';
import NavLinkCustom from '../../common/NavLinkCustom';
import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/outline';
import ContactForm from '../../common/ContactForm';


const GetInTouchSection: React.FC = () => {
    const handleFormSubmit = (formData: any) => {
        console.log("Hero Section Form Submitted:", formData);
    };
    return (
        <section className="get-in-touch-section">
            <div className='py-16'>
                <div className='container mx-auto'>
                    <div className='px-6 sm:px-0'>
                        <div className='flex justify-between lg:flex-row flex-col lg:gap-0 gap-5'>
                            <div className='lg:w-1/2'>
                                <div className='border-b-2 border-lightGray pb-5 flex flex-col gap-5'>
                                    <SectionSubtitle subtitle='Get in touch' />
                                    <SectionTitle title='Connect with Us' />
                                    <div>
                                        <p className='text-lg'>With over a decade of proven expertise, we deliver tailored strategies, collaborate closely with you, and make data-backed decisions to ensure your goals are achieved.</p>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <ul className='flex flex-col gap-3 text-lg'>
                                        <li>
                                            <NavLinkCustom to="mailto:mail@consulto.biz" icon={<EnvelopeIcon />}>
                                                mail@consulto.biz
                                            </NavLinkCustom>
                                        </li>
                                        <li>
                                            <NavLinkCustom to="tel:123456789" icon={<DevicePhoneMobileIcon />}>
                                                (123) 456 789
                                            </NavLinkCustom>
                                        </li>
                                        <li>
                                            <NavLinkCustom to="mailto:mail@consulto.biz" icon={<MapIcon />}>
                                                Biz Center, Amphitheater Parkway, California 
                                            </NavLinkCustom>
                                        </li>
                                        <li>
                                            <NavLinkCustom to="mailto:mail@consulto.biz" icon={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48"><path fill="#1b69f8" d="M8.421 14h.052 0C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5 5.789 5 4 6.945 4 9.5 4 12 5.736 14 8.421 14zM4 17H13V43H4zM44 26.5c0-5.247-4.253-9.5-9.5-9.5-3.053 0-5.762 1.446-7.5 3.684V17h-9v26h9V28h0c0-2.209 1.791-4 4-4s4 1.791 4 4v15h9C44 43 44 27.955 44 26.5z"></path></svg>}>
                                                Consulto Official
                                            </NavLinkCustom>
                                        </li>
                                        <li>
                                            <NavLinkCustom to="mailto:mail@consulto.biz" icon={<EnvelopeIcon />}>
                                                Consulto Official
                                            </NavLinkCustom>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='lg:w-2/5'>
                            <ContactForm
                                    heading="Send us a message"
                                    fields={[
                                        { name: "name", type: "text", placeholder: "Name", required: true },
                                        { name: "email", type: "email", placeholder: "Email", required: true },
                                        { name: "phone", type: "tel", placeholder: "Phone", required: true },
                                        { name: "title", type: "text", placeholder: "Title", required: true },
                                        { name: "message", type: "textarea", placeholder: "Your Message", required: true },
                                    ]}
                                    onSubmit={handleFormSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouchSection;