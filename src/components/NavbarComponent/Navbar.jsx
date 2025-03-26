import React, { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import SidebarButton from "./SidebarButton";
import TimeDisplay from "./TimeDisplay";
import NavigationLinks from "./NavigationLinks";
import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";
import GoogleTranslate from "@/GoogleTranslate/GoogleTranslate";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const[NotificationCount,setNotificationCount] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetching notifications from a fake API
    const fetchNotifications = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments"); 
        const data = await response.json();

        // Simulate getting the number of new notifications
        setNotificationCount(data.length % 10); // Example: Using length % 10 to get a reasonable number
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  const handleNotificationClick = () => {
    setNotificationCount(0); // Reset notifications count
  };
  

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
            <div className="relative">
            <Link to='/Test' onClick={handleNotificationClick}>
            <FaBell size={22} className="hover:text-yellow-400 transition-all duration-200 cursor-pointer" />

            {NotificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{NotificationCount}</span>
            )}
            </Link>
            </div>

            <UserDropdown />
          </div>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
