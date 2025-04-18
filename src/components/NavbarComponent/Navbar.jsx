import React, { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import SidebarButton from "./SidebarButton";
import TimeDisplay from "./TimeDisplay";
import NavigationLinks from "./NavigationLinks";
import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";
import GoogleTranslate from "@/GoogleTranslate/GoogleTranslate";
import { FaBell ,FaRegNewspaper} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getWeatherIconByCondition } from "@/utils/weatherUtils"; // Adjust path as needed
import {   FiX, FiClock, FiBookmark, FiShare2, FiChevronRight, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [NotificationCount, setNotificationCount] = useState(4);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments"); 
        const data = await response.json();
        setNotificationCount(data.length % 10);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const apiKey = "f05c5126624595469053bcd933efaa1e";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod === 200) {
          setWeatherCondition(data.weather[0].main);
          setIsDaytime(Date.now() / 1000 < data.sys.sunset);
        }
      } catch (err) {
        console.error("Weather fetch failed:", err);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather(40.7128, -74.0060) // Default to New York
      );
    }
  }, []);

  const handleNotificationClick = () => setNotificationCount(0);

  return (
    <div className="w-full">
      <ToastContainer />
      
      <nav className="bg-black text-white px-4 py-3 w-full sticky top-0 z-50 shadow-lg border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            
            <SidebarButton />
            <FaRegNewspaper className="hidden sm:inline text-blue-600 dark:text-blue-400 text-2xl mr-2" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                  NexusNews
            </h1>
            <TimeDisplay time={time} className="hover:text-yellow-400 transition-all duration-200 cursor-pointer" />
            <Link to="/WeatherNav">
            {getWeatherIconByCondition(weatherCondition, isDaytime)}
            </Link>
          </div>

          <NavigationLinks />

          <div className="flex items-center gap-4">
            <SearchBar />
            <div className="">
              {/* <GoogleTranslate /> */}
              <button className="p-2 rounded-full bg-gray-700 text-gray-300 hover:text-blue-400">
              <FiSun size={18} />
              </button>
            </div>
            <div className="relative">
             
              <Link to='/Test' onClick={handleNotificationClick}>
              <button className="p-2 rounded-full bg-gray-700 text-gray-300 hover:text-blue-400 ">
              <FaBell size={18}  />
              </button>
                
                {NotificationCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {NotificationCount}
                  </span>
                )}
              </Link>
            </div>
            
            <UserDropdown className='p-2 bg-amber-500' />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
