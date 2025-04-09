import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { SidebarProvider } from "./SidebarProvider/SidebarProvider.jsx";
import Navbar from "./components/NavbarComponent/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import BottomNav from "./pages/BottomNav.jsx";
import SearchResults from "./pages/SearchResult.jsx";

import ProfilePage from "./pages/Profile/ProfilePage.jsx";
import SettingsPage from "./pages/Profile/SettingPage.jsx";
import Login from "./pages/Profile/Login.jsx";
import SignUp from "./pages/Profile/SignUp.jsx";

// Example Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact";
import LiveVideoNews from "./pages/LiveVideoNews.jsx";
import Youtube from "./pages/Youtube.jsx";
import GlobalNews from "./pages/GlobalNews.jsx";
import StocksNews from "./pages/StocksNews.jsx";
import CountryNews from "./pages/CountryNews.jsx";
import Test from "./pages/Test.jsx";
import SearchQuery from "./pages/SearchQuery.jsx";
import WeatherNav from "./components/NavbarComponent/WeatherNav.jsx";

// login 
import { AuthProvider } from "./Auth/AuthContext.jsx";
import ProtectedRoute from "./Auth/ProtectedRoute.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
//Theme
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get("/api/message")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <ThemeProvider>
    <AuthProvider>
      <BrowserRouter>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
          <p>{message}</p>

          {/* ✅ Render Routes */}
          <AppRoutes />

          {/* ✅ Hide Footer & BottomNav on LiveVideoNews */}
          <ConditionalLayout />
        </SidebarProvider>
      </BrowserRouter>
    </AuthProvider>
    </ThemeProvider>
  );
}

// ✅ Extract Routes into a separate component
function AppRoutes() {
  return (
    <Routes>
      {/* ✅ Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Youtube" element={<Youtube />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/WeatherNav" element={<WeatherNav />} />

      {/* 🔒 Protected Routes */}
      <Route path="/ProfilePage" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/SettingPage" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
      <Route path="/LiveVideoNews" element={<ProtectedRoute><LiveVideoNews /></ProtectedRoute>} />
      <Route path="/StocksNews" element={<ProtectedRoute><StocksNews /></ProtectedRoute>} />
      <Route path="/GlobalNews" element={<ProtectedRoute><GlobalNews /></ProtectedRoute>} />
      <Route path="/CountryNews" element={<ProtectedRoute><CountryNews /></ProtectedRoute>} />
      <Route path="/Test" element={<ProtectedRoute><Test /></ProtectedRoute>} />
      <Route path="/SearchQuery" element={<ProtectedRoute><SearchQuery /></ProtectedRoute>} />
    </Routes>
  );
}

// ✅ Conditional Layout: Hide Footer & Bottom Navbar on `/LiveVideoNews`
function ConditionalLayout() {
  const location = useLocation();
  return location.pathname !== "/LiveVideoNews" ? (
    <>
      <BottomNav />
      <Footer />
    </>
  ) : null;
}

export default App;
