"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#1A1A14]/8 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-3 group"
        >
          <span
            className="text-2xl font-black gradient-text"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            PBR
          </span>
          <span
            className="text-[#6B6B5A] text-sm font-medium tracking-widest uppercase hidden sm:block group-hover:text-[#1A1A14] transition-colors"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Prabanjan
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[#6B6B5A] hover:text-[#1A1A14] transition-colors text-sm font-medium tracking-wide"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 rounded-full text-sm font-semibold border border-[#D4A800] text-[#D4A800] hover:bg-[#D4A800] hover:text-white hover:shadow-[0_0_20px_rgba(212,168,0,0.3)] transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#6B6B5A] hover:text-[#1A1A14] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-b border-[#1A1A14]/8 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-[#6B6B5A] hover:text-[#1A1A14] transition-colors text-sm font-medium py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="self-start px-5 py-2 rounded-full text-sm font-semibold border border-[#D4A800] text-[#D4A800] hover:bg-[#D4A800] hover:text-white transition-all"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
