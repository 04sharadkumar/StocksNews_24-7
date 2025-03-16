import { useState } from "react";

export default function Login() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", formData);
  };

  return (
    <div className={`flex h-screen items-center justify-center transition-all duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="p-8 w-96 rounded-lg shadow-lg border border-gray-500">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block mb-1">Username</label>
            <input 
              type="text" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-2 mt-2 bg-gray-800 hover:bg-gray-700 transition text-white font-semibold rounded">
            Sign In
          </button>
        </form>

        <button 
          onClick={toggleTheme} 
          className="mt-4 w-full py-2 border border-gray-500 text-sm text-center rounded hover:bg-gray-700 transition">
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}
