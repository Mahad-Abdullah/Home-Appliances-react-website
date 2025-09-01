import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faLinkedinIn,
  faPinterestP
} from '@fortawesome/free-brands-svg-icons'
import { faTools, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 mt-16 animate-fade-in">
      <div className="max-w-6xl mx-auto py-12 px-8 flex justify-between flex-col md:flex-row lg:gap-28 gap-8 md:gap-8">

        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-white text-3xl font-bold">

            <span>Home Appliances Fix Bahrain</span>
          </div>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-400 text-sm leading-relaxed">
            24/7 available for urgent home appliance repair services across Bahrain. Reliable, quick, and affordable fixes at your doorstep.
          </p>
        </div>
        <div className='flex lg:flex-row flex-col gap-8 lg:gap-28'>
          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] flex items-center space-x-2 text-sm text-gray-300">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>bahrainhomeappliancesfix@gmail.com</span>
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] flex items-center space-x-2 text-sm text-gray-300">
              <FontAwesomeIcon icon={faPhone} />
              <span>+973 3751 7830</span>
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-green-400 font-medium mt-2 animate-pulse">
              We are open 24/7!
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mt-3 text-2xl">
              <a href="https://www.facebook.com/profile.php?id=61573107278791" aria-label="Follow Us on Facebook" className="text-gray-300 hover:text-blue-500 transition duration-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/bahrainacrepair?igsh=ODhrMTlpeWJ3em1q" aria-label="Follow Us on Instagram" className="text-gray-300 hover:text-pink-500 transition duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://wa.me/97337517830" aria-label="Chat on WhatsApp" className="text-gray-300 hover:text-green-500 transition duration-300">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://pin.it/5Wpsr6SsX" aria-label="Follow Us on Pinterest" className="text-gray-300 hover:text-red-500 transition duration-300">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Bahrain Appliance Fix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
