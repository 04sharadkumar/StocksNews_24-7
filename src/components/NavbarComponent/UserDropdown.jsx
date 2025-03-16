import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import LoginModal from "./LoginModel"; // Import Login Modal

const UserDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for Login Modal
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    setIsDropdownOpen(false);
    toast.success("Logged Out Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
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

          {/* Login Button - Opens Modal */}
          <button 
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              setIsDropdownOpen(false); 
              setIsLoginOpen(true); 
            }}
          >
            Login
          </button>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default UserDropdown;
