"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Dumbbell } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#membership", label: "Membership" },
  { href: "#trainers", label: "Trainers" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <Dumbbell className="w-5 h-5 text-gold transition-transform group-hover:rotate-12" />
            <span className="text-white font-bold text-sm tracking-widest uppercase">
              FITNESS{" "}
              <span className="text-gold">SPORTS</span>{" "}
              CENTER
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-400 hover:text-gold text-xs font-semibold uppercase tracking-widest transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-400 hover:text-gold transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}
            <button
              onClick={() => handleNavClick("#membership")}
              className="bg-gold text-black text-xs font-black uppercase tracking-widest px-6 py-2.5 hover:bg-gold-light transition-colors duration-300"
            >
              JOIN NOW
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="text-gray-400 hover:text-gold transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0d0d0d] border-t border-[#1f1f1f] py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 px-4 text-gray-400 hover:text-gold text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-4 pb-2">
              <button
                onClick={() => handleNavClick("#membership")}
                className="block w-full text-center bg-gold text-black text-xs font-black uppercase tracking-widest py-3 hover:bg-gold-light transition-colors"
              >
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}