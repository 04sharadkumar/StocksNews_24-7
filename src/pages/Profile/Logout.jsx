import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout process (clear storage, auth, etc.)
    localStorage.removeItem("userToken"); // Example: clearing auth token

    // Redirect to login page after 2 seconds
    setTimeout(() => {
      navigate("/login"); // Change this to your login page route
    }, 2000);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800">You have been logged out</h2>
        <p className="text-gray-600 mt-2">Redirecting to login page...</p>
      </div>
    </div>
  );
};

export default Logout;
