import React from 'react'
import MapView from './MapView';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocation } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faWhatsapp,
    faLinkedinIn,
    faPinterestP
} from '@fortawesome/free-brands-svg-icons';


const Contact = () => {

    return (
        <div id='contact' className="pt-8 scroll-mt-10 flex flex-col text-center gap-8 px-4 md:px-12 py-4 items-center">
            <h1
                className="text-[28px] lg:text-[34px] font-extrabold text-[#010f7c] underline underline-offset-8 decoration-4 decoration-[#E20502] w-fit"
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                Contact Us
            </h1>
            <div>
                <p className="mt-3 md:mt-5 lg:mt-6 text-[16px] md:text-[18px] lg:text-[20px] text-[#4b5563] leading-relaxed max-w-4xl" data-aos="fade-right"
                    data-aos-duration="1000">
                    "Feel free to contact us at the provided phone number or email address.
                    You can also visit us in person — our location details are included below."
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start w-full">

                {/* Contact Info (Left) */}
                <div className="flex flex-col gap-4 w-full lg:w-1/2 text-left" data-aos="fade-right"
                        data-aos-duration="1000">


                    {/* Location Card */}
                    <div
                        className="w-[98%] bg-white h-auto rounded-2xl shadow-xl/30 px-6 py-3 border-none"
                        
                    >
                        <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#010f7c] border-b-2 border-[#E20502] inline-block mb-2">
                            <FontAwesomeIcon icon={faLocation} className="mr-2 text-[#E20502]" />
                            Location:
                        </h3>
                        <p className="text-[15px] md:text-[17px] lg:text-[20px] text-gray-700 leading-relaxed tracking-wide">
                            Shop No. 1022B, Building No. 1022G, <br />
                            Road 1220, Block No. 1012 <br />
                            Al Hamala, Bahrain
                        </p>
                    </div>

                    {/* Email Card */}
                    <div
                        className="w-[98%] bg-white h-auto rounded-2xl shadow-xl/30 px-6 py-3 border-none"
                       
                    >
                        <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#010f7c] border-b-2 border-[#E20502] inline-block mb-2">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#E20502]" />
                            Email:
                        </h3>
                        <a
                            href="mailto:bahrainhomeappliancesfix@gmail.com"
                            className="text-blue-800 text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] leading-relaxed md:ml-3.5"
                        >
                            bahrainhomeappliancesfix@gmail.com
                        </a>
                    </div>

                    {/* Phone Card */}
                    <div
                        className="w-[98%] bg-white h-auto rounded-2xl shadow-xl/30 px-6 py-3 border-none"
                        
                    >
                        <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#010f7c] border-b-2 border-[#E20502] inline-block mb-2">
                            <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#E20502]" />
                            Phone:
                        </h3>
                        <a
                            href="tel:+97337517830"
                            className="text-blue-800 text-[15px] md:text-[17px] lg:text-[20px] leading-relaxed ml-3.5"
                        >
                            +973 3751 7830
                        </a>
                    </div>



                    {/* Social Media Icon  */}
            <div className='flex flex-row text-4xl items-center justify-center gap-12 py-4 lg:mt-6'>
                <a href="https://www.facebook.com/profile.php?id=61573107278791" aria-label="Follow Us on Facebook" className="text-black hover:text-blue-500 hover:scale-110 transition duration-200" >
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/bahrainacrepair?igsh=ODhrMTlpeWJ3em1q" aria-label="Follow Us on Instagram" className="text-black hover:text-pink-500 hover:scale-110 transition duration-200" >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://wa.me/97337517830" aria-label="Chat on WhatsApp" className="text-black hover:text-green-500 hover:scale-110 transition duration-200" >
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://pin.it/5Wpsr6SsX" aria-label="Follow Us on Pinterest" className="text-black hover:text-red-500 hover:scale-110 transition duration-200">
                    <FontAwesomeIcon icon={faPinterestP} />
                </a>
            </div>
                </div>

                {/* Map (Right) */}
                <div className="w-full lg:w-[48%] z-0 h-96 mt-6 lg:mt-0 shadow-xl/30">
                    <MapView />
                </div>
            </div>
        </div>
    )
}

export default Contact