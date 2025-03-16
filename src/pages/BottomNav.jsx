import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Globe2, Tv, TrendingUp, Newspaper } from "lucide-react"; // Changed icons
import { useSidebar } from "../SidebarProvider/SidebarProvider"; // Sidebar context import

export default function BottomNav() {
  const [active, setActive] = useState("home");
  const { setOpen } = useSidebar(); // Sidebar open function

  const navItems = [
    { title: "Home", icon: Home, id: "home", path: "/" },
    { title: "Country", icon: Globe2, id: "Country", path: "/CountryNews" }, // Country uses Globe2
    { title: "Live TV", icon: Tv, id: "livetv", path: "/LiveVideoNews" }, 
    { title: "Stocks", icon: TrendingUp, id: "stocks", path: "/StocksNews" }, // Updated path
    { title: "Global News", icon: Newspaper, id: "global-news", path: "/GlobalNews" } // Global uses Newspaper icon
  ];

  const handleMenuClick = () => {
    setActive("menu");
    setOpen(true); // Open Sidebar
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-2">
      <ul className="flex justify-around items-center text-gray-800">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            title={item.title}
            icon={item.icon}
            active={active === item.id}
            path={item.path}
            onClick={item.id === "menu" ? handleMenuClick : () => setActive(item.id)}
          />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ title, icon: Icon, active, path, onClick }) {
  return (
    <li className="flex flex-col items-center gap-y-1">
      <Link to={path} className="flex flex-col items-center" onClick={onClick}>
        <Icon
          className={`w-6 h-6 transition-colors duration-200 ${
            active ? "stroke-red-500" : "stroke-gray-600 hover:stroke-red-400"
          }`}
        />
        <p className={`text-xs font-medium transition-colors duration-200 ${active ? "text-red-500" : "text-gray-700 hover:text-red-400"}`}>
          {title}
        </p>
      </Link>
    </li>
  );
}
