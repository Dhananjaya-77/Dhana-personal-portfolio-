import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="relative flex min-h-screen flex-col bg-[#050505] text-[#ffffff] font-sans selection:bg-[#ef4444]/35 selection:text-white overflow-x-hidden">
        
        {/* Background Dot Grid Pattern from Professional Polish theme */}
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none z-0"></div>

        {/* Navigation Header */}
        <Navbar />

        {/* Content Section Routes */}
        <div className="relative flex flex-grow flex-col z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Graceful redirect for robust system error handling */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Layout Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}
