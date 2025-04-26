import { Outlet, Link } from 'react-router-dom';
import {
  FiHome, FiBarChart2, FiPlusCircle, FiFileText,
  FiUsers, FiSettings
} from 'react-icons/fi';
import { useState, useEffect } from 'react';
import axios from 'axios';


const AdminLayout = () => {

  const [admin, setAdmin] = useState('');

  const fetchAdminData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/adminData');
      setAdmin(response.data.admin.username);
      
    } catch (error) {
      console.error('Error fetching admin data:', error);
    }
  };
  
  useEffect(() => {
    fetchAdminData();
  }, []);



  return (
    
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-black to-blue-800 text-white p-6 flex flex-col">
        
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <FiHome className="mr-2" /> Admin Panel
        </h2>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link to="/admin/dashboard" className="flex items-center py-3 px-4 rounded-lg hover:bg-blue-600 transition-all">
                <FiBarChart2 className="mr-3" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/addNews" className="flex items-center py-3 px-4 rounded-lg hover:bg-blue-600 transition-all">
                <FiPlusCircle className="mr-3" /> Add News
              </Link>
            </li>
            <li>
              <Link to="/admin/viewArticles" className="flex items-center py-3 px-4 rounded-lg hover:bg-blue-600 transition-all">
                <FiFileText className="mr-3" /> View Articles
              </Link>
            </li>
            <li>
              <Link to="/admin/manageUsers" className="flex items-center py-3 px-4 rounded-lg hover:bg-blue-600 transition-all">
                <FiUsers className="mr-3" /> Manage Users
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className="flex items-center py-3 px-4 rounded-lg hover:bg-blue-600 transition-all">
                <FiSettings className="mr-3" /> Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto pt-4 border-t border-blue-600">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
              <span className="text-white font-medium">AD</span>
            </div>
            <div>
              <p className="font-medium">{admin}</p>
              <p className="text-xs text-blue-200">Super Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side content area */}
      <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        <Outlet /> {/* This is where nested route content will be rendered */}
      </div>
    </div>
  );
};

export default AdminLayout;
