import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";



const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(""); // To handle error state for login

    // Function to decode JWT token manually
    const decodeJwt = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const decodedPayload = JSON.parse(atob(base64));
        return decodedPayload;
    };

    // Function to check token validity
    const checkAuth = async () => {
        const token = localStorage.getItem("token");
        

        if (!token) {
            setUser(null);
            setLoading(false);
            return;
        }
        if(token){

        }

        try {
            const decoded = decodeJwt(token);
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                localStorage.removeItem("token");
                setUser(null);
                setLoading(false);
                return;
            }

            const res = await axios.get("http://localhost:5000/api/user", {
                headers: { Authorization: `Bearer ${token}` }
            });

            setUser(res.data.user);
        } catch (error) {
            localStorage.removeItem("token");
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
        
        
    }, []);

    // ✅ Fixed this: login should only update state, since the actual API call is done in Login.jsx
    const login = (userData) => {
        setUser(userData);
        setError("");
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
 