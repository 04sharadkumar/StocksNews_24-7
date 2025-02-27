import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "./SidebarProvider/SidebarProvider.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx"
import BottomNav from "./pages/BottomNav.jsx"
import SearchResults from "./pages/SearchResult.jsx";

import ProfilePage from "./pages/Profile/ProfilePage.jsx";
import SettingsPage from "./pages/Profile/SettingPage.jsx";
// Example Pages (Replace with your actual pages)
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact";
import LiveVideoNews from "./pages/LiveVideoNews.jsx";
import Youtube from "./pages/Youtube.jsx";
import GlobalNews from "./pages/GlobalNews.jsx";
import StocksNews from "./pages/StocksNews.jsx";

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider> {/* Wrap only the components that need sidebar state */}
        <Navbar />
        <Sidebar /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
         
          <Route path="Youtube" element={<Youtube />} />
          <Route path="/search" element={<SearchResults />} />

          <Route path='/ProfilePage' element={<ProfilePage />} />
          <Route path='/SettingPage' element={<SettingsPage />} />


          <Route path="/LiveVideoNews" element={<LiveVideoNews />} />
          <Route path="/StocksNews" element={<StocksNews />} />
          <Route path="/GlobalNews" element={<GlobalNews />} />
          
          

        </Routes>
        <BottomNav />

        <Footer />
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
