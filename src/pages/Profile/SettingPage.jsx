import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("userSettings");
    return savedSettings ? JSON.parse(savedSettings) : {
      theme: "light",
      notifications: true,
      privacy: "public",
      language: "English",
      accountVisibility: "Everyone",
      autoUpdates: false,
      securityLevel: "Medium",
    };
  });

  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
  }, [settings]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setSettings({ ...settings, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Theme</label>
            <select
              name="theme"
              value={settings.theme}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Language</label>
            <select
              name="language"
              value={settings.language}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Enable Notifications</label>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Privacy</label>
            <select
              name="privacy"
              value={settings.privacy}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Account Visibility</label>
            <select
              name="accountVisibility"
              value={settings.accountVisibility}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg"
            >
              <option value="Everyone">Everyone</option>
              <option value="Only Me">Only Me</option>
              <option value="Friends Only">Friends Only</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Enable Auto Updates</label>
            <input
              type="checkbox"
              name="autoUpdates"
              checked={settings.autoUpdates}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Security Level</label>
            <select
              name="securityLevel"
              value={settings.securityLevel}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-lg"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}