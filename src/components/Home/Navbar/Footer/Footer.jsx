import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-4">

          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 transition-all duration-300 hover:text-purple-600">
              Jadoo.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {['About', 'Careers', 'Mobile'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              {['Help/FAQ', 'Press', 'Affiliates'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More + Social + App Downloads - Fourth Column */}
          <div className="space-y-8">
            {/* More Links */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-6">More</h3>
              <ul className="space-y-3">
                {['Airline fees', 'Airline', 'Low fare tips'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-purple-600 transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-purple-600 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 shadow-lg flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-400 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* App Download Section */}
            <div>
              <p className="text-gray-700 font-semibold mb-4">Discover our app</p>
              <div className="flex gap-3">
                <a href="#" className="hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-10 rounded shadow-sm hover:shadow-md transition-shadow duration-300"
                  />
                </a>

                <a href="#" className="hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-10 rounded shadow-sm hover:shadow-md transition-shadow duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            All rights reserved © jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;