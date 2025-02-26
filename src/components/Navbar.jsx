import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaSearch, FaBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useSidebar } from "../SidebarProvider/SidebarProvider";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const { setOpen } = useSidebar();
  const [time, setTime] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const notify = () => {
    setTimeout(() => {
      toast.success("Logged Out Successfully!", {
        position: "top-right",
        autoClose: 2000, // Toast will be visible for 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }, 20); // Delay before showing the toast
  };
  
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?q=${query}`);
    }
  };
  const handleLogout = () => {
    setIsDropdownOpen(false); 
    
    notify(); // Ensure notify() is being called
    
  };

  return (
    <div className="w-full">
      <ToastContainer />
      <nav className="bg-black text-white px-4 py-3 w-full sticky top-0 z-50 shadow-lg border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden hover:text-blue-400 transition-all duration-200"
            >
              <FaBars size={24} />
            </button>
            <span className="hidden md:block text-sm text-gray-400 font-medium">
              {time.toLocaleTimeString()}
            </span>
          </div>

          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6 text-base font-medium">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="bg-gray-900 text-white px-4 py-2 rounded-full w-full md:w-52 border border-gray-700 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
            </div>

            <div className="hidden lg:block">
              <GoogleTranslate />
            </div>

            <FaBell size={22} className="hover:text-yellow-400 transition-all duration-200 cursor-pointer" />

            <div className="relative" ref={dropdownRef}>
              <FaUserCircle
                size={28}
                className="hover:text-blue-400 transition-all duration-200 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-md rounded-md py-2 border z-50">
                  <Link to="/ProfilePage" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                    Profile
                  </Link>
                  <Link to="/SettingPage" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                    Settings
                  </Link>
                  <Link 
                    to="/" 
                    className="block px-4 py-2 text-red-500 hover:bg-gray-100" 
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                  
                </div>
                
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;