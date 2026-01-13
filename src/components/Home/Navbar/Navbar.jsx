import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative fade-in">
      {/* Decorative Background Shape for Navbar */}
      <div className="absolute top-[-100px] right-[-100px] w-[900px] h-[900px] pointer-events-none overflow-hidden">
        <img 
          src="/src/assets/Decore.png" 
          alt="" 
          className="w-full h-full object-contain opacity-40"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      <nav className="container mx-auto px-6 py-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo - Goes to Home */}
          <Link to="/" className="flex items-center">
            <img 
              src="src/assets/Logo (2).png" 
              alt="Jadoo Logo" 
              className="h-7 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-12">
            <NavLink 
              to="/services?type=destinations" 
              className={({ isActive }) => 
                `nav-link text-gray-700 font-medium hover:text-orange-500 transition ${isActive ? 'text-orange-500' : ''}`
              }
            >
              Destinations
            </NavLink>
            <NavLink 
              to="/services?type=hotels" 
              className={({ isActive }) => 
                `nav-link text-gray-700 font-medium hover:text-orange-500 transition ${isActive ? 'text-orange-500' : ''}`
              }
            >
              Hotels
            </NavLink>
            <NavLink 
              to="/services?type=flights" 
              className={({ isActive }) => 
                `nav-link text-gray-700 font-medium hover:text-orange-500 transition ${isActive ? 'text-orange-500' : ''}`
              }
            >
              Flights
            </NavLink>
            <NavLink 
              to="/services?type=bookings" 
              className={({ isActive }) => 
                `nav-link text-gray-700 font-medium hover:text-orange-500 transition ${isActive ? 'text-orange-500' : ''}`
              }
            >
              Bookings
            </NavLink>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/signup">
              <button className="px-6 py-2 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition">
                Sign up
              </button>
            </Link>
            <select className="text-gray-700 font-medium border-none outline-none cursor-pointer bg-transparent hover:text-orange-500 transition">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 fade-in">
            <NavLink 
              to="/services?type=destinations" 
              className="block text-gray-700 font-medium hover:text-orange-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Destinations
            </NavLink>
            <NavLink 
              to="/services?type=hotels" 
              className="block text-gray-700 font-medium hover:text-orange-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hotels
            </NavLink>
            <NavLink 
              to="/services?type=flights" 
              className="block text-gray-700 font-medium hover:text-orange-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Flights
            </NavLink>
            <NavLink 
              to="/services?type=bookings" 
              className="block text-gray-700 font-medium hover:text-orange-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bookings
            </NavLink>
            <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full px-6 py-2 border-2 border-gray-900 text-gray-900 rounded-lg font-medium">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;