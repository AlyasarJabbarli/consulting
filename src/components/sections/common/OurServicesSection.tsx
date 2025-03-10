import React from "react";
import SectionSubtitle from "../../common/SectionSubtitle";
import SectionTitle from "../../common/SectionTitle";
import OurServicesSectionCard from "../../common/OurServicesSectionCard";

const OurServicesSection: React.FC = () => {
    return (
        <section>
            <div className="relative">
                <div className="bg-our-services-background bg-no-repeat bg-right-bottom opacity-10 absolute w-full h-full -z-10">

                </div>
                <div className="container mx-auto pb-36 px-6 sm:px-0">
                    <div>
                        <div>
                            <SectionSubtitle subtitle="Our Services" />

                            <div className="flex justify-end">
                                <div className="max-w-2xl">
                                    <SectionTitle title="Innovative insights, actionable strategies" />
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-20 flex-col lg:flex-row xl:gap-32 mt-9">
                            <div className="max-h-[708px] lg:max-w-[600px] overflow-hidden ">
                                <img className="w-full h-full object-cover" src="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/04.webp" alt="" />
                            </div>
                            <div className="lg:w-3/6">
                                <OurServicesSectionCard title="Business Strategy Development" description="We help you set clear objectives, identify growth and actionable plans for success." img="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/19.webp" />
                                <OurServicesSectionCard title="Operational Efficiency" description="We help you set clear objectives, identify growth and actionable plans for success." img="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/15.webp" />
                                <OurServicesSectionCard title="Market Analysis" description="We help you set clear objectives, identify growth and actionable plans for success." img="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/19.webp" />
                                <OurServicesSectionCard title="Leadership Coaching" description="We help you set clear objectives, identify growth and actionable plans for success." img="https://kit.sociolib.com/consulto/wp-content/uploads/sites/25/2025/01/19.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default OurServicesSection;