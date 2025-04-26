import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Settings = () => {
  const [admin, setAdmin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // ✅ Make it reusable
  const fetchAdminData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/adminData');
      setAdmin(response.data.admin.username);
      setEmail(response.data.admin.email);
      setPassword(response.data.admin.password);
    } catch (error) {
      console.error('Error fetching admin data:', error);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/admin/adminUpdate', {
        username: newUsername,
        email: newEmail,
        password: newPassword,
      });

      toast.success('Admin settings updated successfully!');

      // ✅ Clear input fields
      setNewUsername('');
      setNewEmail('');
      setNewPassword('');

      // ✅ Re-fetch updated data
      fetchAdminData();

    } catch (error) {
      console.error('Error updating admin settings:', error);
      toast.error('Failed to update admin settings. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>

      {/* Display Current Settings */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Admin</label>
          <div className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100">{admin}</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100">{email}</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100">{password}</div>
        </div>
      </div>

      <hr className="my-6" />

      {/* Update Settings Section */}
      <h3 className="text-xl font-medium mb-4">Update Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Admin</label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="New Admin Username"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="New admin@example.com"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Change Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={handlePasswordChange}
            placeholder="New Password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
