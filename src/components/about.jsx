import React from 'react'

const About = () => {

    const AboutCard = ({ title, description }) => {
        return (
            <div className="min-w-68 flex flex-col gap-3 rounded-2xl px-4 md:px-6 py-6 bg-white text-center items-center shadow-xl/30" data-aos="fade-right"
                data-aos-duration="1000">
                <h3 className='text-[24px] lg:text-[28px] font-bold text-[#010f7c] pb-4'>
                    {title}
                </h3>
                <p className="text-[15px] md:text-[17px] lg:text-[19px] text-[#555555] leading-relaxed">
                    {description}
                </p>
            </div>
        )
    }
    return (
        <div id='about' className='container mx-auto px-auto w-[90%] text-center items-center pt-8 scroll-mt-10 flex flex-col py-4 md:py-12 gap-6'>
            <h1
                className="text-[28px] lg:text-[34px] font-extrabold text-[#010f7c] underline underline-offset-8 decoration-4 decoration-[#E20502] w-fit"
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                About Us
            </h1>
            <h3 className='mt-1 md:mt-2 lg:mt-4 text-[16px] md:text-[20px] lg:text-[24px] text-gray-900' data-aos="fade-up"
                data-aos-duration="1000">Why Choose Us?</h3>
            <p className="mt-1 md:mt-2 text-[16px] md:text-[18px] lg:text-[20px] text-[#4b5563] leading-relaxed max-w-4xl">
                "I warmly welcome you. My repair services are available across all of Bahrain. You can simply give us a call to get the information you need. Our service is fast and guaranteed, so feel free to reach out with confidence. We take pride in providing excellent customer service."
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <AboutCard
                    title="Unmatched Expertise"
                    description="With over a decade of hands-on experience, we bring expert-level solutions to every appliance problem. Our skilled technicians understand the root of the issue and fix it with precision and care."
                />
                <AboutCard
                    title=" Customer Satisfaction First"
                    description="Your happiness is our top priority. We work hard to deliver reliable, timely service with clear communication — because a happy customer is our biggest success."
                />
                <AboutCard
                    title="Affordable & Transparent Pricing"
                    description="No surprises, no hidden fees. We offer competitive prices with full transparency so you always know what you're paying for — honest service at honest rates."
                />
                <AboutCard
                    title=" 24/7 Emergency Repairs"
                    description="Appliance breakdowns don’t wait, and neither do we. Our team is available around the clock to provide fast, reliable repairs whenever you need them."
                />
            </div>
        </div>
    )
}

export default About