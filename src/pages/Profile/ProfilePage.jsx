import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData ? JSON.parse(savedData) : {
      name: "Sharad kumar",
      email: "sharadkumar@example.com",
      bio: "Software Developer",
    };
  });

  const [image, setImage] = useState(() => {
    return localStorage.getItem("profileImage") || "https://via.placeholder.com/150";
  });

  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("profileImage", image);
  }, [image]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          <label className="cursor-pointer">
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            <img src={image} alt="Profile" className="w-24 h-24 rounded-full object-cover border-2 border-gray-300" />
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
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg"
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
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}