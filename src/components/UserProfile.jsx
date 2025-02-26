import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaTimes } from "react-icons/fa";

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close sidebar on Escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Disable scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4 flex justify-end">
      {/* Profile Button */}
      <button
        className="fixed top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300 ease-in-out"
        onClick={() => setIsOpen(true)}
      >
        <FaUserCircle size={28} />
      </button>

      {/* Overlay (BackDrop Effect) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity" />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl p-6 rounded-l-xl flex flex-col sidebar"
      >
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
          <button
            className="text-gray-600 hover:text-red-500 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>
        <p className="mt-4 text-gray-700">
          Welcome to your dashboard! Here you can manage your settings and preferences.
        </p>
      </motion.div>
    </div>
  );
}
