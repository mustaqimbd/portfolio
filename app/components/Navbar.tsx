"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-wide text-white">
          Mustaqim<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
            >
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white py-2 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
