import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const [imagePreview, setImagePreview] = useState(
    "https://media.istockphoto.com/id/164303089/vector/user-icon-female.jpg?s=612x612&w=is&k=20&c=N8H3ySXljxTozA170udPkTRZq-Ubwr51VKbA5ge-e9Q="
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (savedUser) {
      setFormData({
        name: savedUser.name || "",
        email: savedUser.email || "",
        bio: savedUser.bio || "",
      });

      if (savedUser.image) {
        setImagePreview(savedUser.image);
      }
    }

    if (!token) {
      console.error("User not logged in");
      return;
    }

    axios
      .get("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const { name, email, bio, image } = res.data;
        setFormData({ name, email, bio: bio || "" });

        if (image) {
          setImagePreview(image);
        }

        localStorage.setItem("user", JSON.stringify(res.data));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching profile data:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("bio", formData.bio);
      if (selectedFile) formDataToSend.append("image", selectedFile);

      const res = await axios.put("http://localhost:5000/api/auth/profile", formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("Profile updated successfully!");
      localStorage.setItem("user", JSON.stringify(res.data.user || res.data));

      if (res.data.user?.image) {
        setImagePreview(res.data.user.image);
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setMessage("Failed to update profile.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login"; // Or use navigate("/login") if using React Router
  };

  if (loading) return <div className="p-6 text-center">Loading profile...</div>;

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <img
              src={imagePreview}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
          </label>
          <h2 className="mt-4 text-xl font-semibold">Edit Profile</h2>
        </div>

        <div className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="mt-1 w-full p-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg"
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
            onClick={handleSave}
          >
            Save Changes
          </button>

          <button
            className="w-full bg-red-500 text-white py-2 rounded-lg mt-2 hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>

          {message && (
            <p
              className={`text-center mt-2 text-sm ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
