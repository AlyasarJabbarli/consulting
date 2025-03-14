import React from 'react';
import CommonHeroSection from '../components/sections/common/CommonHeroSection';
import SectionSubtitle from '../components/common/SectionSubtitle';
import CheckedList from '../components/common/CheckedList';
import ContactForm from '../components/common/ContactForm';

interface SingleServiceProps {
    title?: string;
    description1?: string;
    description2?: string;
    features?: string[];
}

const SingleService: React.FC<SingleServiceProps> = ({ title, description1, description2, features }) => {
    const handleFormSubmit = (formData: any) => {
        console.log("Hero Section Form Submitted:", formData);
    };
    return (
        <main>
            <CommonHeroSection title='Consulting' subtitle='We assist you in leveraging digital tools to improve your business processes, customer experience, and market reach.' backgroundImage='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/22.webp' />
            <section className='bg-white'>
                <div className='py-16'>
                    <div className='container mx-auto '>
                        <div className='px-6 sm:px-0'>
                            <div className='flex flex-col lg:flex-row justify-between gap-20'>
                                <div className='lg:w-2/3 '>
                                    <div className='flex flex-col gap-5 '>
                                        <div className='flex flex-col gap-5'>
                                            <SectionSubtitle subtitle='Service' />
                                            <div className='flex flex-col gap-5 mb-5 text-lg  '>
                                                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse maximus tincidunt ac velit sodales taciti integer. Bibendum risus leo ultrices nibh maecenas aptent consectetur netus risus. Ut rhoncus turpis sodales ultricies molestie justo laoreet id fermentum. Turpis netus placerat habitasse scelerisque mauris proin penatibus. Tincidunt tortor ipsum in; velit interdum lacus. Magnis magnis morbi torquent posuere donec. Himenaeos natoque elementum semper arcu magna risus sollicitudin maximus hendrerit.</p>
                                                <p>Diam sollicitudin malesuada venenatis scelerisque enim nam dignissim vulputate. Iaculis mollis per; felis nostra diam fusce laoreet? Blandit sapien finibus vehicula tempor etiam augue. Massa auctor amet commodo class metus dictum pretium. Penatibus habitasse hac primis ac bibendum tortor risus elit. Natoque donec sodales nullam facilisi venenatis blandit nam. Etiam duis habitasse condimentum, vulputate ac sit auctor.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/02.webp" alt="" />
                                        </div>
                                        <div>
                                            <div className='mb-5'>
                                                <h3 className='text-4xl'>Our Mission, Your Growth</h3>
                                            </div>
                                            <CheckedList items={["Tailored Solutions for Your Business", "Proven Industry Expertise", "Data-Driven Strategies", "Commitment to Results", "Transparent Communication"]} />
                                            <div className='mt-5'>
                                                <p className='text-lg'>Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse maximus tincidunt ac velit sodales taciti integer. Bibendum risus leo ultrices nibh maecenas aptent consectetur netus risus. Ut rhoncus turpis sodales ultricies molestie justo laoreet id fermentum. Turpis netus placerat habitasse scelerisque mauris proin penatibus. Tincidunt tortor ipsum in; velit interdum lacus. Magnis magnis morbi torquent posuere donec. Himenaeos natoque elementum semper arcu magna risus sollicitudin maximus hendrerit.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='mb-5'>
                                                <h3 className='text-4xl'>Driven by Your Success</h3>
                                            </div>
                                            <div>
                                                <p className='text-lg'>Diam sollicitudin malesuada venenatis scelerisque enim nam dignissim vulputate. Iaculis mollis per; felis nostra diam fusce laoreet? Blandit sapien finibus vehicula tempor etiam augue. Massa auctor amet commodo class metus dictum pretium. Penatibus habitasse hac primis ac bibendum tortor risus elit. Natoque donec sodales nullam facilisi venenatis blandit nam. Etiam duis habitasse condimentum, vulputate ac sit auctor.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-1/3 lg:min-w-96'>
                                    <div className='bg-bgGray p-8 pt-10'>
                                        <div className='flex flex-col gap-10'>
                                            <div>
                                                <CheckedList items={["Business Strategy & Planning", "Operations & Process Improvement", "Market Research & Analysis", "Leadership Development & Training", "Digital Transformation Consulting"]} isBold isBordered />
                                            </div>
                                            <div>
                                                <ContactForm
                                                    heading="Request a Free Consultation"
                                                    fields={[
                                                        { name: "name", type: "text", placeholder: "Name", required: true },
                                                        { name: "email", type: "email", placeholder: "Email", required: true },
                                                        { name: "message", type: "textarea", placeholder: "Your Message", required: true },
                                                    ]}
                                                    onSubmit={handleFormSubmit}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
};

export default SingleService;