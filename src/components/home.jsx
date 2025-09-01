import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div id='home' className="pt-8 scroll-mt-10 w-full h-1/4 md:gap-8 lg:gap-12 flex flex-col md:flex-row px-4 md:px-12 lg:px-24 py-4 md:py-8 lg:py-16">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-[20px] md:w-[50%] flex flex-col justify-evenly items-center text-center md:text-left md:items-start">
        <h1 className='text-[28px] md:text-[36px] lg:text-[42px] font-extrabold text-[#010f7c] leading-tight tracking-tight drop-shadow-sm'>
          Fast & Reliable Home Appliance Repair Across Bahrain!
        </h1>

        <h1 className='text-[28px] md:text-[36px] lg:text-[42px] font-extrabold text-[#E20502] leading-tight tracking-tight drop-shadow-sm'>
          خدمات إصلاح الغسالات
        </h1>

        {/* Hero Paragraph */}
        <p className="mt-3 md:mt-5 lg:mt-6 text-[16px] md:text-[18px] lg:text-[20px] text-[#4b5563] leading-relaxed max-w-4xl">
          Expert Washing Machine, Refrigerator, Air Conditioner, and Dryer Repair Services in Bahrain – Fast,
          Reliable, and Affordable!
        </p>
        <div className="relative group">
          <a
            href="tel:+97337517830"
            aria-label="Call Us"
            className="mt-6 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#010f7c] to-[#E20502] text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
          </a>
        </div>

      </div>
      <div className='container m-auto mt-6 w-82 md:w-100 lg:w-120 xl:w-140'> <img loading='lazy' src="Images/Home-Page.png" alt="Washing Machine Repair" className='rounded-2xl md:rounded-4xl shadow-xl/30' /></div>
    </div>
  )
}

export default Home