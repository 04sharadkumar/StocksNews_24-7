import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaGlobe, FaBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useSidebar } from "../SidebarProvider/SidebarProvider";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate.jsx";

const Navbar = () => {
  const { setOpen } = useSidebar();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="bg-black text-white px-6 py-3 w-full sticky top-0 z-50 shadow-lg border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <button onClick={() => setOpen(true)} className="md:hidden hover:text-blue-400 transition-all duration-200">
              <FaBars size={28} />
            </button>
            <span className="hidden md:block text-sm text-gray-400 font-medium">
              {time.toLocaleTimeString()}
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <ul className="flex space-x-8 text-lg font-semibold tracking-wide">
              <li><Link to="/" className="text-white hover:text-blue-400 transition-all duration-200">Home</Link></li>
              <li><Link to="/services" className="text-white hover:text-blue-400 transition-all duration-200">Services</Link></li>
              <li><Link to="/about" className="text-white hover:text-blue-400 transition-all duration-200">About</Link></li>
              <li><Link to="/contact" className="text-white hover:text-blue-400 transition-all duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search news..."
                className="bg-gray-900 text-white px-4 py-2 rounded-full w-52 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
            </div>

           < GoogleTranslate />

            <FaBell size={24} className="hover:text-yellow-400 transition-all duration-200 cursor-pointer" />
            <FaUserCircle size={32} className="hover:text-blue-400 transition-all duration-200 cursor-pointer" />
          </div>
        </div>
      </nav>

     
    </div>
  );
};

export default Navbar;
