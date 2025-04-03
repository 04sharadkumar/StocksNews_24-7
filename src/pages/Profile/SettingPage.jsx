import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Bell,
  BellOff,
  Newspaper,
  Eye,
  EyeOff,
  Globe,
  Shield,
  RefreshCw,
  Languages,
  Bookmark,
  User
} from "lucide-react";

export default function NewsSettings() {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("newsSettings");
    return savedSettings ? JSON.parse(savedSettings) : {
      theme: "light", // Default to light theme
      notifications: true,
      breakingNewsAlerts: true,
      language: "English",
      textSize: "medium",
      showImages: true,
      autoPlayVideos: false,
      saveReadArticles: true,
      privacyMode: false
    };
  });

  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    localStorage.setItem("newsSettings", JSON.stringify(settings));
    setIsModified(false);
    document.documentElement.classList.toggle("dark", settings.theme === "dark");
  }, [settings]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setIsModified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("newsSettings", JSON.stringify(settings));
    setIsModified(false);
  };

  const SettingSection = ({ title, icon: Icon, children }) => (
    <div className="mb-8">
      <div className={`flex items-center gap-3 mb-4 text-lg font-semibold ${
        settings.theme === "dark" ? "text-white" : "text-black"
      } border-b ${settings.theme === "dark" ? "border-gray-700" : "border-gray-300"} pb-2`}>
        <Icon className="w-5 h-5" />
        <h3>{title}</h3>
      </div>
      <div className="space-y-5 pl-8">
        {children}
      </div>
    </div>
  );

  const SettingItem = ({ label, children, description }) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="sm:w-1/2">
        <label className={`block text-sm font-medium ${
          settings.theme === "dark" ? "text-white" : "text-black"
        } mb-1`}>{label}</label>
        {description && (
          <p className={`text-xs ${
            settings.theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>{description}</p>
        )}
      </div>
      <div className="sm:w-1/2">
        {children}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${
      settings.theme === "dark" ? "bg-black" : "bg-white"
    } p-4 md:p-6 transition-colors duration-200`}>
      <div className={`max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden ${
        settings.theme === "dark" ? "bg-gray-900" : "bg-white border border-gray-200"
      }`}>
        {/* Header */}
        <div className={`${
          settings.theme === "dark" ? "bg-black" : "bg-white"
        } p-5 md:p-6 border-b ${
          settings.theme === "dark" ? "border-gray-800" : "border-gray-200"
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Newspaper className={`w-6 h-6 ${
                settings.theme === "dark" ? "text-white" : "text-black"
              }`} />
              <h1 className={`text-2xl font-bold ${
                settings.theme === "dark" ? "text-white" : "text-black"
              }`}>Settings</h1>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              isModified ? "bg-yellow-500 text-black" : "bg-green-500 text-white"
            }`}>
              {isModified ? "Unsaved Changes" : "All Saved"}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-8">
          {/* Appearance Section */}
          <SettingSection title="Appearance" icon={settings.theme === "dark" ? Moon : Sun}>
            <SettingItem label="Theme">
              <select
                name="theme"
                value={settings.theme}
                onChange={handleChange}
                className={`w-full p-2 rounded-lg border ${
                  settings.theme === "dark" ? 
                  "bg-gray-800 border-gray-700 text-white" : 
                  "bg-white border-gray-300 text-black"
                }`}
              >
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
              </select>
            </SettingItem>

            <SettingItem label="Text Size" description="Adjust article text size">
              <select
                name="textSize"
                value={settings.textSize}
                onChange={handleChange}
                className={`w-full p-2 rounded-lg border ${
                  settings.theme === "dark" ? 
                  "bg-gray-800 border-gray-700 text-white" : 
                  "bg-white border-gray-300 text-black"
                }`}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extraLarge">Extra Large</option>
              </select>
            </SettingItem>

            <SettingItem label="Show Images" description="Display images in articles">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="showImages"
                  checked={settings.showImages}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full peer ${
                  settings.theme === "dark" ? 
                  "bg-gray-700 peer-checked:bg-blue-600" : 
                  "bg-gray-200 peer-checked:bg-blue-500"
                } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </SettingItem>
          </SettingSection>

          {/* Notifications Section */}
          <SettingSection title="Notifications" icon={settings.notifications ? Bell : BellOff}>
            <SettingItem label="Enable Notifications" description="Receive app notifications">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={settings.notifications}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full peer ${
                  settings.theme === "dark" ? 
                  "bg-gray-700 peer-checked:bg-blue-600" : 
                  "bg-gray-200 peer-checked:bg-blue-500"
                } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </SettingItem>

            <SettingItem 
              label="Breaking News Alerts" 
              description="Get immediate notifications for breaking news"
            >
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="breakingNewsAlerts"
                  checked={settings.breakingNewsAlerts}
                  onChange={handleChange}
                  disabled={!settings.notifications}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full peer ${
                  !settings.notifications ? 
                  "bg-gray-400 cursor-not-allowed" :
                  settings.theme === "dark" ? 
                  "bg-gray-700 peer-checked:bg-blue-600" : 
                  "bg-gray-200 peer-checked:bg-blue-500"
                } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </SettingItem>
          </SettingSection>

          {/* Content Preferences */}
          <SettingSection title="Content Preferences" icon={Bookmark}>
            <SettingItem label="Language" description="Preferred news language">
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                className={`w-full p-2 rounded-lg border ${
                  settings.theme === "dark" ? 
                  "bg-gray-800 border-gray-700 text-white" : 
                  "bg-white border-gray-300 text-black"
                }`}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </SettingItem>

            <SettingItem label="Auto-play Videos" description="Play videos automatically">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="autoPlayVideos"
                  checked={settings.autoPlayVideos}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full peer ${
                  settings.theme === "dark" ? 
                  "bg-gray-700 peer-checked:bg-blue-600" : 
                  "bg-gray-200 peer-checked:bg-blue-500"
                } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </SettingItem>

            <SettingItem label="Save Read Articles" description="Keep history of articles you've read">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="saveReadArticles"
                  checked={settings.saveReadArticles}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full peer ${
                  settings.theme === "dark" ? 
                  "bg-gray-700 peer-checked:bg-blue-600" : 
                  "bg-gray-200 peer-checked:bg-blue-500"
                } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </SettingItem>
          </SettingSection>

          {/* Privacy Section */}
          <SettingSection title="Privacy" icon={settings.privacyMode ? EyeOff : Eye}>
            <SettingItem label="Privacy Mode" description="Hide your reading history">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="privacyMode"
                  checked={settings.privacyMode}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full peer ${
                  settings.theme === "dark" ? 
                  "bg-gray-700 peer-checked:bg-blue-600" : 
                  "bg-gray-200 peer-checked:bg-blue-500"
                } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </SettingItem>
          </SettingSection>

          {/* Actions Section */}
          <div className={`flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t ${
            settings.theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className={`px-5 py-2.5 rounded-lg border ${
                settings.theme === "dark" ? 
                "border-gray-700 hover:bg-gray-800 text-white" : 
                "border-gray-300 hover:bg-gray-100 text-black"
              } transition-colors`}
            >
              Reset Changes
            </button>
            <button
              type="submit"
              disabled={!isModified}
              className={`px-5 py-2.5 rounded-lg text-white font-medium transition-colors ${
                isModified ? 
                  settings.theme === "dark" ? 
                  "bg-blue-600 hover:bg-blue-700" : 
                  "bg-blue-500 hover:bg-blue-600" : 
                  settings.theme === "dark" ? 
                  "bg-gray-700 cursor-not-allowed" : 
                  "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}