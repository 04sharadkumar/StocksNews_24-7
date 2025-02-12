import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "./SidebarProvider/SidebarProvider.jsx";
  // ✅ Corrected import path
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx"// Uncomment if needed

// Example Pages (Replace with your actual pages)
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider> {/* Wrap only the components that need sidebar state */}
        <Navbar />
        <Sidebar />  {/* Uncomment if needed */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
