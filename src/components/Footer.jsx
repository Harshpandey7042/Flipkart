import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.RzC1m_L15K7p94lAzF7bTwHaHa&pid=Api&P=0&h=180"
              alt="Logo"
              className="w-24 h-24 mb-4"
            />
            <p className="text-sm">
              Flipkart Private Limited is an Indian e-commerce company, headquartered in Bangalore, and incorporated in Singapore as a private limited company.
            </p>
            <div className="flex mt-4">
             
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl mr-4 cursor-pointer hover:text-blue-400"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCP_Pyfx-4UgeEeGO4oFqqIw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-2xl mr-4 cursor-pointer hover:text-red-600"
                />
              </a>
              <a href="https://www.linkedin.com/in/hemant-pandey-868182265/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl mr-4 cursor-pointer hover:text-blue-800"
                />
              </a>
              <a href="https://www.instagram.com/hemantpandey092/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl mr-4 cursor-pointer hover:text-purple-600"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+91 7011677112</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>hemantpandey900@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">We Accept</h3>
            <div className="flex space-x-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/022/100/832/large_2x/paytm-logo-transparent-free-png.png"
                alt="Visa"
                className="h-8"
              />
              <img
                src="https://i.pinimg.com/originals/ae/5f/e3/ae5fe3dc423e44c0ddbef5dc64fa356b.png"
                alt="MasterCard"
                className="h-8"
              />
              <img
                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253843/google-icon-icon-sm.png"
                alt="American Express"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <p className="text-sm text-gray-300">
            © 2024 Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
