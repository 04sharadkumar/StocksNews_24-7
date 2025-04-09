import { useSidebar } from "../SidebarProvider/SidebarProvider";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt  } from "react-icons/fa"; // Icons
import { IoMdLogOut } from "react-icons/io";
import { toast } from 'react-toastify';
//logoout ke liye hy ye
import { useAuth } from "../Auth/AuthContext" 
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { open, setOpen } = useSidebar(); // Get state from context

  // Function to close sidebar on link click
  const closeSidebar = () => {
    setOpen(false);
  };
    const handleLogout = () => {
      setIsDropdownOpen(false); // Close dropdown if it's open
  
      logout(); // Call logout function from AuthContext
      localStorage.removeItem("profileData"); // Remove user profile data
      localStorage.removeItem("profileImage"); // Remove profile image
      navigate("/login"); // Redirect to login page
  
      // Show success toast notification
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

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-black text-white p-6 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } z-50 border-r border-gray-800`}
      >
        {/* Close Button */}
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 transition-all duration-200"
          aria-label="Close sidebar"
        >
          <AiOutlineClose className="text-3xl" />
        </button>

        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-800 pb-2">
          News Portal
        </h2>
        
        <ul className="space-y-5 text-lg font-medium overflow-y-auto max-h-[calc(100vh-10rem)] no-scrollbar">
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200">
            <FaHome size={20} />
            <Link to="/" className="w-full text-white" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200">
            <FaServicestack size={20} />
            <Link to="/services" className="w-full text-white" onClick={closeSidebar}>
              Services              
            </Link>
          </li>
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200">
            <FaInfoCircle size={20} />
            <Link to="/about" className="w-full text-white" onClick={closeSidebar}>
              About
            </Link>
          </li>
         
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200">
            <FaPhoneAlt size={20} />
            <Link to="/contact" className="w-full text-white" onClick={closeSidebar}>
              Contact
            </Link>
          </li>

          {/* New */}
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all duration-200">
          <IoMdLogOut size={32} />
            <button>
            <Link 
            to="/" 
            className="block px-4 py-2 text-red-500 hover:bg-gray-100" 
            onClick={handleLogout}
          >
            Logout
          </Link>
            </button>
          </li>
         
          
          
        </ul>
        
      </aside>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-md"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
}



