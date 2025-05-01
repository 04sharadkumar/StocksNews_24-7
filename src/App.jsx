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


// Admin Setup
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AddNews from "./pages/admin/AddNews.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import Settings from "./pages/admin/Setting.jsx";
import ManageUsers from "./pages/admin/ManageUsers.jsx";
import ViewArticles from "./pages/admin/ViewArticles.jsx"; 
import AdminLogin from "./pages/admin/AdminLogin.jsx";

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


function App() {

  return (
    
    <AuthProvider>
      <BrowserRouter>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
         

          {/* ✅ Render Routes */}
          <AppRoutes />

          {/* ✅ Hide Footer & BottomNav on LiveVideoNews */}
          <ConditionalLayout />
        </SidebarProvider>
      </BrowserRouter>
    </AuthProvider>
    
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
      {/* admin routes  */}
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
           <Route path="dashboard" element={<AdminDashboard />} />
           <Route path="addNews" element={<AddNews />} />   
           <Route path="viewArticles" element={<ViewArticles />} />
           <Route path="manageUsers" element={<ManageUsers />} />
           <Route path="settings" element={<Settings />} />
      </Route>
      {/* 🔒 Protected Routes */}
      <Route path="/ProfilePage" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/SettingPage" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
      <Route path="/LiveVideoNews" element={<ProtectedRoute><LiveVideoNews /></ProtectedRoute>} />
      <Route path="/StocksNews" element={<ProtectedRoute><StocksNews /></ProtectedRoute>} />
      <Route path="/GlobalNews" element={<ProtectedRoute><GlobalNews /></ProtectedRoute>} />
      <Route path="/CountryNews" element={<ProtectedRoute><CountryNews /></ProtectedRoute>} />
      <Route path="/Test" element={<Test />}/>
      <Route path="/SearchQuery" element={<ProtectedRoute><SearchQuery /></ProtectedRoute>} />
    </Routes>
  );
}

// ✅ Conditional Layout: Hide Footer & Bottom Navbar on `/LiveVideoNews`
function ConditionalLayout() {
  const location = useLocation();

  const hideRoutes = ["/LiveVideoNews"];

  const isAdminRoute = location.pathname.startsWith("/admin");

  const shouldHideLayout = isAdminRoute || hideRoutes.includes(location.pathname);

  return !shouldHideLayout ? (
    <>
      <BottomNav />
      <Footer />
    </>
  ) : null;
}

export default App;
