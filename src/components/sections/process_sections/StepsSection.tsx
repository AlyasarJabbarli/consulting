import React from 'react';
import SectionSubtitle from '../../common/SectionSubtitle';
import SectionTitle from '../../common/SectionTitle';
import StepsCard from '../../common/StepsCard';

const StepsSection: React.FC = () => {
    return (
        <section className="steps-section bg-white">
            <div className='py-16'>
                <div className='container mx-auto '>
                    <div className='px-6 sm:px-0'>
                        <div>
                            <div className='text-center flex flex-col items-center gap-5'>
                                <SectionSubtitle subtitle='How it works' />
                                <SectionTitle title='Solutions Tailored for Success' />
                                <div>
                                    <p>We deliver tailored strategies, collaborate closely with you.</p>
                                </div>
                            </div>
                            <div>
                                <div className='mt-10'>
                                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                                        <StepsCard title="Initial Consultation" description='We help you set clear objectives, identify growth and actionable plans for business success.' step={1} img='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/15.webp'/>
                                        <StepsCard title="Discovery & Assessment" description='We help you set clear objectives, identify growth and actionable plans for business success.' step={2} img='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/14.webp'/>
                                        <StepsCard title="Strategy Development" description='We help you set clear objectives, identify growth and actionable plans for business success.' step={3} img='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/12.webp'/>
                                        <StepsCard title="Implementation Support" description='We help you set clear objectives, identify growth and actionable plans for business success.' step={4} img='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/19.webp'/>
                                        <StepsCard title="Performance Monitoring" description='We help you set clear objectives, identify growth and actionable plans for business success.' step={5} img='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/23.webp'/>
                                        <StepsCard title="Continuous Support" description='We help you set clear objectives, identify growth and actionable plans for business success.' step={6} img='https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/24.webp'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepsSection;