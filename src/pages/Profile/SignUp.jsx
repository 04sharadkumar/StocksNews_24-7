import { useState } from "react";
import { useAuth } from "@/Auth/AuthContext"; // ✅ AuthContext for authentication state
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        bio: "",
    });

    const [error, setError] = useState("");
    const { login } = useAuth(); // ✅ AuthContext function to update user state
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.email || !formData.password) {
            setError("Please fill all required fields.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", formData, {
                withCredentials: true,
            });

            if (response.data && response.data.token) {
                // Save token & user data
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));

                // ✅ Update AuthContext
                login(response.data.user);

                // Redirect user to homepage
                navigate("/");
            } else {
                setError("Unexpected response from server.");
            }
        } catch (error) {
            console.error("🚨 Signup Error:", error);
            if (error.response) {
                setError(error.response?.data?.message || "Signup failed. Please try again.");
            } else {
                setError("Network error. Please check your connection.");
            }
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg border border-black">
                <h2 className="text-2xl font-bold text-center text-black mb-6">Sign Up</h2>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleSignUp} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-black rounded-md placeholder-gray-500"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-black rounded-md placeholder-gray-500"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 border border-black rounded-md placeholder-gray-500"
                        required
                    />

                    <textarea
                        name="bio"
                        placeholder="Tell us about yourself"
                        value={formData.bio}
                        onChange={handleChange}
                        className="w-full p-3 border border-black rounded-md placeholder-gray-500"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
