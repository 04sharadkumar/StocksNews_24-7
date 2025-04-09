import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "@/Auth/AuthContext";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        setError(""); // Reset error state

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                
                
            });

            const data = await response.json();
            console.log(data)

            if (!response.ok) {
                setError(data.message || "Login failed. Please try again.");
                return;
            }

            // Save token & user info
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("userId", data.user._id); //store the user data with token or id

            // Update AuthContext
            login(data.user);

            // Redirect to previous or home page
            navigate(location.state?.from || "/");

        } catch (error) {
            console.log("🚨 Login Error:", error);
            setError("Server error. Please try again.");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="w-full max-w-sm h-[65vh] bg-white p-8 rounded-xl shadow-lg border border-black flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-center text-black mb-6">Login</h2>

                {error && <p className="text-red-600 text-center">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-5">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-black rounded-md focus:ring-2 focus:ring-black placeholder-gray-500"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-black rounded-md focus:ring-2 focus:ring-black placeholder-gray-500"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition duration-300"
                    >
                        Login
                    </button>

                    <p className="text-center text-gray-700">
                        Don't have an account?{" "}
                        <Link to="/SignUp" className="text-black font-semibold hover:underline">
                            Sign up
                        </Link>
                    </p>
                </form>
               
            </div>
            
        </div>
    );
};

export default Login;
