import React from 'react';
import SectionSubtitle from '../../common/SectionSubtitle';
import SectionTitle from '../../common/SectionTitle';
import Accordion from '../../common/Accordion';

// interface FAQEntry {
//     question: string;
//     answer: string;
// }

// interface FaqSectionProps {
//     title?: string;
//     faqs?: FAQEntry[];
// }

const FaqSection: React.FC = () => {
    return (
        <section>
            <div className='container mx-auto py-16'>
                <div className='px-6 sm:px-0'>
                    <div className='flex justify-between flex-col md:flex-row md:gap-0 gap-5'>
                        <div>
                            <SectionSubtitle subtitle='Questions' />
                            <div className='mt-5 max-w-xl'>
                                <SectionTitle title='Frequently asked questions' />
                            </div>
                        </div>
                        <div className='md:w-1/2'>
                            <Accordion items={[
                                {title : 'What types of businesses do you work with?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco.'}, 
                                {title : 'How do you approach a consulting project?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco.'}, 
                                {title : 'How long does a typical consulting project take?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco.'}, 
                                {title : 'What kind of support do you offer?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco.'}, 
                                {title : 'How much do your consulting services cost?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua exercitation ullamco.'}, 
                                ]}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;