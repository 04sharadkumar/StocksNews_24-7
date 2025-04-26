import { useNavigate } from 'react-router-dom';
import axiosInstance from '@/Auth/axiosConfig';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Backend ko logout request bhej rahe hain
      await axiosInstance.post('/api/auth/logout'); // base URL is already handled by axiosInstance
      console.log('Logout successfully');

      // Clear localStorage or any frontend state, if applicable
      localStorage.removeItem('token');
      localStorage.removeItem('user'); // Ya tum apne state management system (AuthContext) se bhi clear kar sakte ho

      // Redirect to login page
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err.response?.data?.message || err.message);
      // Optional: Show user-friendly message or error on UI
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
