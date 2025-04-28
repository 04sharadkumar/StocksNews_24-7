import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useAuth } from "@/Auth/AuthContext"; 
import LoginModal from "./LoginModel";

const UserDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsDropdownOpen(false);
    logout();
    localStorage.removeItem("profileData");
    localStorage.removeItem("profileImage");
    navigate("/login");

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
        className="hover:text-blue-400 transition-all duration-200 cursor-pointer text-white"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black text-white border border-gray-700 shadow-lg rounded-md z-50">
          <Link 
            to="/ProfilePage" 
            className="block px-4 py-2 hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={() => setIsDropdownOpen(false)}
          >
            Profile
          </Link>
          <Link 
            to="/SettingPage" 
            className="block px-4 py-2 hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={() => setIsDropdownOpen(false)}
          >
            Settings
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full text-left block px-4 py-2 text-red-500 hover:bg-gray-800 hover:text-red-300 transition-all duration-200"
          >
            Logout
          </button>
          <Link 
            to="/admin" 
            className="block px-4 py-2 hover:bg-gray-800 hover:text-blue-400 transition-all duration-200"
            onClick={() => setIsDropdownOpen(false)}
          >
            Admin
          </Link>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default UserDropdown;
