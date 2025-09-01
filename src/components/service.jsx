import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Service = () => {

    const [selectedService, setSelectedService] = useState(null);

    const ServiceCard = ({ imageSrc, title, description, modalContent, modalImg, commonIssues }) => {
        return (
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col gap-8 min-w-68 rounded-2xl px-4 md:px-6 py-4 bg-white text-center items-center md:max-h-[560px] shadow-xl/30">
                <img loading='lazy' src={imageSrc} alt={title} className="w-24" data-aos="zoom-in"
                    data-aos-duration="1000" />
                <h2 className="md:h-[66px] text-[24px] lg:text-[28px] font-bold text-[#010f7c]">
                    {title}
                </h2>

                <p className="md:max-h-[220px] text-[15px] md:text-[17px] lg:text-[19px] text-[#555555] leading-relaxed">
                    {description}
                </p>
                <button
                    onClick={() => setSelectedService({ title, modalContent, modalImg, commonIssues })}
                    className="text-blue-800 text-[14px] md:text-[17px] lg:text-[20px] cursor-pointer bg-transparent border-none p-0"
                >
                    Learn More
                </button>
            </div>
        );
    };

    const Modal = ({ isOpen, onClose, title, content, modalImg, commonIssues }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
                <div className="relative bg-white max-h-screen overflow-y-auto rounded-2xl w-full max-w-4xl py-6 md:py-10 px-6 md:px-10 shadow-xl">

                    {/* Close Button in Top-Right Corner */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-3 text-2xl text-red-600 hover:scale-110 transition-transform"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>

                    {/* Modal Content */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-8">

                        {/* Text Content */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
                            <p className="text-sm md:text-base text-black mb-4">{content}</p>
                            {commonIssues && commonIssues.length > 0 && (
                                <div className="mt-4 text-left">
                                    <h3 className="text-lg font-semibold text-[#010f7c] mb-2">Common Issues We Fix:</h3>
                                    <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
                                        {commonIssues.map((issue, index) => (
                                            <li key={index}>{issue}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <a
                                href="tel:+97337517830"
                                className="rounded-full bg-gradient-to-r from-[#010f7c] to-[#E20502] text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 px-5 py-2 mt-6 inline-block"
                                data-aos="fade-down"
                                data-aos-duration="800"
                            >
                                Contact Us Now
                            </a>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <img
                                loading='lazy'
                                src={modalImg}
                                alt={title}
                                className="w-full h-auto max-h-[300px] object-cover rounded-2xl"
                            />
                        </div>

                    </div>
                </div>
            </div>

        );
    };

    return (
        <div id="service" className="container mx-auto px-auto w-[90%] pt-8 scroll flex flex-col text-center items-center gap-12">
            <h1
                className="text-[28px] lg:text-[34px] font-extrabold text-[#010f7c] underline underline-offset-8 decoration-4 decoration-[#E20502] w-fit mb-4"
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <ServiceCard
                    imageSrc="Images/Washing Machine Repair-Fix.png"
                    title="Washing Machine Repair"
                    description="We've been specializing in washing machine repairs for over 10 years, providing fast, reliable, and efficient service. Click below to learn more."
                    modalContent="We offer professional washing machine repair services. Our team of experienced technicians diagnoses and repairs all kinds of washing machine issues quickly and efficiently. We handle repairs for top load, front load, and semi-automatic washing machines. Each type of machine requires specific care, and we ensure that each repair is carried out to the highest standard."
                    modalImg="/Images/Washing Machine Repair.jpg"
                    commonIssues={[
                        "Water not draining",
                        "Machine not spinning",
                        "Unusual noise during operation",
                        "Door not locking",
                        "Error codes displayed"
                    ]}

                />
                <ServiceCard
                    imageSrc="Images/Refrigerator Repair-Fix.png"
                    title="Refrigerator Repair"
                    description="Is your fridge not cooling properly? With over 10 years of experience, we provide quick, lasting solutions to keep your food fresh. Click below for more info."
                    modalContent="We provide reliable refrigerator repair services. Our experienced technicians diagnose and repair all types of refrigerators, whether it's a top-freezer, bottom-freezer, side-by-side, or French-door model. We specialize in repairing cooling issues, water leakage, and faulty components. Our goal is to restore your fridge to optimal working condition quickly and efficiently."
                    modalImg="/Images/Refrigerator Repair.jpg"
                    commonIssues={[
                        "Fridge not cooling",
                        "Water leakage from bottom",
                        "Excess ice in freezer",
                        "Unusual noise",
                        "Compressor not working"
                    ]}

                />
                <ServiceCard
                    imageSrc="Images/Air Contioner Repair-Fix.png"
                    title="Air Conditioner (AC) Repair"
                    description="Struggling with a broken AC? With 10 years of experience, we provide expert repairs for everything from low cooling to complete breakdowns. Click below to learn more."
                    modalContent="We offer professional air conditioning repair services. Whether you have a split AC, window AC, or central air system, our certified technicians are equipped to fix any issues. We focus on improving cooling efficiency, addressing airflow problems, and ensuring your AC runs smoothly during hot weather."
                    modalImg="/Images/AC Repair.png"
                    commonIssues={[
                        "AC not cooling",
                        "Water leakage",
                        "Strange smell or noise",
                        "Remote not working",
                        "Unit not turning on"
                    ]}

                />
                <ServiceCard
                    imageSrc="Images/Dryer Machine Repair-Fix.png"
                    title="Dryer Machine Repair"
                    description="Dryer not heating or making strange noises? With 10 years of experience, we offer fast, reliable repairs to save your time and clothes. Click below to learn more."
                    modalContent="We offer expert dryer repair services for all models, including gas and electric dryers. Our technicians are skilled in diagnosing and fixing issues such as no heat, no spin, and drum malfunction. We aim to ensure your dryer works efficiently and safely."
                    modalImg="/Images/Dryer Repair.webp"
                    commonIssues={[
                        "Dryer not heating",
                        "Clothes coming out damp",
                        "Drum not spinning",
                        "Strange noises",
                        "Dryer not starting"
                    ]}

                />
            </div>

            <Modal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                title={selectedService?.title}
                content={selectedService?.modalContent}
                modalImg={selectedService?.modalImg}
                commonIssues={selectedService?.commonIssues}
            />
        </div>
    );
};

export default Service;
