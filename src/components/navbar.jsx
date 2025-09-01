import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const iconRef = useRef(); // ✅ new

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const underlineLink =
    "relative inline-block px-2 py-0 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#E20502] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[80%] hover:after:translate-x-[-50%]";


  return (
    <>
      <nav>
        <div className="px-2 md:px-10 lg:px-22 bg-[#ffffff] sticky top-0 z-50 flex felx-row items-center justify-between">

          {/* logo  */}
          <div>
            <div className="w-40 md:w-40 lg:w-40">
              <img loading='lazy' src="Images/logo-1.png" alt="Bahrain Home Appliances Repair" />
            </div>
          </div>

          {/* Menu  */}
          <div className="text-3xl md:hidden block">
            <FontAwesomeIcon ref={iconRef} onClick={() => setIsMenuOpen(!isMenuOpen)} icon={faBars} />
          </div>

          {/* Desktop Menu  */}

          <div className="hidden md:block">
            <ul className='flex flex-row md:gap-4 lg:gap-8 text-[18px] font-medium'>
              <li><a href="#home" className={underlineLink}>Home</a></li>
              <li><a href="#service" className={underlineLink}>Services</a></li>
              <li><a href="#about" className={underlineLink}>About</a></li>
              <li><a href="#contact" className={underlineLink}>Contact</a></li>
              <li><a href="#faqs" className={underlineLink}>FAQs</a></li>
              <li><a href="tel:+97337517830" className='text-blue-600 hidden lg:block'><FontAwesomeIcon icon={faPhone} className='text-red-600 px-1' />+973 3751 7830</a></li>
            </ul>
          </div>
        </div>
        {/* Mobile Menu  */}
        {
          isMenuOpen && (
            <ul ref={menuRef} className='shadow-xl/30 flex flex-col gap-4 text-[16px] bg-white px-5 py-4 items-center rounded-bl-xl right-0 absolute font-medium z-50'>
              <li><a href="#home" className='underline underline-offset-4 decoration-[#E20502]'>Home</a></li>
              <li><a href="#service" className='underline underline-offset-4 decoration-[#E20502]'>Services</a></li>
              <li><a href="#about" className='underline underline-offset-4 decoration-[#E20502]'>About</a></li>
              <li><a href="#contact" className='underline underline-offset-4 decoration-[#E20502]'>Contact</a></li>
              <li><a href="#faqs" className='underline underline-offset-4 decoration-[#E20502]'>FAQs</a></li>
            </ul>
          )
        }
      </nav>


    </>
  )
}

export default Navbar