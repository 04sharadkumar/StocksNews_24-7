import React, { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import SidebarButton from "./SidebarButton";
import TimeDisplay from "./TimeDisplay";
import NavigationLinks from "./NavigationLinks";
import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";
import GoogleTranslate from "@/GoogleTranslate/GoogleTranslate";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <ToastContainer />
      <nav className="bg-black text-white px-4 py-3 w-full sticky top-0 z-50 shadow-lg border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <SidebarButton />
            <TimeDisplay time={time} />
          </div>

          <NavigationLinks />

          <div className="flex items-center gap-4">
            <SearchBar />
            <div className="hidden lg:block">
              <GoogleTranslate />
            </div>

            <FaBell size={22} className="hover:text-yellow-400 transition-all duration-200 cursor-pointer" />

            <UserDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
