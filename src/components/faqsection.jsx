import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We repair home appliances like refrigerators, washing machines, ovens, air conditioners, and much more — quick and reliable!"
  },
  {
    question: "Do you provide services across Bahrain?",
    answer: "Yes! We proudly serve all major cities in Bahrain including Manama, Riffa, Muharraq, and Hamala."
  },
  {
    question: "What are your working hours?",
    answer: "We're open 24/7 — yes, even at midnight! Contact us anytime for emergency or scheduled repairs."
  },
  {
    question: "Do you charge for diagnosis?",
    answer: "Not at all! Appliance inspection is completely free if you proceed with the repair."
  },
  {
    question: "Are your technicians certified?",
    answer: "Absolutely! Our technicians are certified and trained to handle a wide range of appliances with care and expertise."
  },
  {
    question: "Can I request urgent repair?",
    answer: "Yes, we provide same-day and even urgent repair depending on your location and issue."
  },
];

const FAQItem = ({ faq, index, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-xl shadow-md transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-100 rounded-t-xl"
      >
        <span className="font-semibold text-xl">{faq.question}</span>
        <span
          className={`text-2xl transform transition-transform duration-300 ${
            isOpen ? "rotate-45 text-[#E20502] scale-110" : "rotate-0 text-[#010f7c]"
          }`}
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden max-h-0 transition-all duration-500 ease-in-out"
      >
        <div className="p-5 pt-4 text-[18px] text-gray-700 animate-fade-in">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div id='faqs' className="pt-11 scroll-mt-11 w-full max-w-4xl mx-auto my-12 px-4 md:px-8 flex items-center flex-col text-center gap-8">
      <h1 className="text-[28px] lg:text-[34px] font-extrabold text-[#010f7c] underline underline-offset-8 decoration-4 decoration-[#E20502] w-fit" data-aos="fade-right"
      data-aos-duration="1000">
        Frequently Asked Questions
      </h1>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
