import { useState, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Handle scroll events for active section tracking and scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const scrollPosition = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section.id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // If there is an initial hash in URL, scroll smoothly to that section
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "#home");
  };

  return (
    <Router>
      <div className="relative flex min-h-screen flex-col bg-[#050505] text-[#ffffff] font-sans selection:bg-[#ef4444]/35 selection:text-white overflow-x-hidden">
        {/* Background Dot Grid Pattern */}
        <div className="fixed inset-0 dot-grid opacity-20 pointer-events-none z-0" />

        {/* Sticky Header Navigation with Strolling Progress Bar */}
        <Navbar />

        {/* Single Page Strolling Content */}
        <div className="relative flex flex-grow flex-col z-10">
          <section id="home">
            <Home />
          </section>

          <About />

          <Projects />

          <Contact />
        </div>

        {/* Floating Side Stroll Dots Navigation (Visible on lg screens) */}
        <nav
          aria-label="Section navigation"
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 bg-[#0c0c0f]/80 p-2.5 rounded-full border border-rose-500/10 backdrop-blur-md shadow-xl"
        >
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="group relative flex items-center justify-center p-1 cursor-pointer"
                aria-label={`Jump to ${sec.label} section`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-5 w-2 bg-[#ef4444] shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                      : "h-2 w-2 bg-neutral-600 hover:bg-neutral-300"
                  }`}
                />
                <span className="pointer-events-none absolute right-7 rounded-md bg-[#0f0f12] border border-rose-500/20 px-2 py-1 text-[11px] font-mono text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
                  {sec.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Floating Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#ef4444] text-black shadow-lg shadow-[#ef4444]/30 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-5 w-5 stroke-[2.5]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
