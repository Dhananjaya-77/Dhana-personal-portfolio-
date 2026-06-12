import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, User, Briefcase, Mail, Terminal } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Me", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-500/10 bg-[#0c0c0f]/90 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo - text based Hasitha */}
        <Link 
          to="/" 
          id="nav-logo"
          className="group flex items-center space-x-2 font-mono text-xl font-bold tracking-wider text-[#ef4444] transition-colors hover:text-white"
          aria-label="Hasitha Wickramaarachchi Portfolio Home"
        >
          <span>Hasitha</span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                id={`nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
                className={`relative flex items-center space-x-1.5 px-3 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-md hover:text-white ${
                  isActive ? "text-[#ef4444]" : "text-[#a0a0a0]"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-[#ef4444]" : "text-neutral-500"}`} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ef4444]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle shown only on small screens */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#a0a0a0] hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ef4444] transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile nav items, show/hide based on menu state */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-rose-500/10 bg-[#07070a]"
          >
            <div className="space-y-1 px-3 py-4 sm:px-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    id={`mobile-nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                      isActive 
                        ? "bg-[#ef4444]/10 text-[#ef4444] border-l-4 border-[#ef4444]" 
                        : "text-[#a0a0a0] hover:bg-neutral-950 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5 text-[#ef4444]" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
