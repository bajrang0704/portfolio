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
          ? "backdrop-blur-md border-b border-white/10 bg-[#050A0F]/80"
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
            className="text-white/70 text-sm font-medium tracking-widest uppercase hidden sm:block group-hover:text-white transition-colors"
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
              className="text-[#7A8A99] hover:text-white transition-colors text-sm font-medium tracking-wide"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 rounded-full text-sm font-semibold border border-[#00D9FF]/40 text-[#00D9FF] hover:bg-[#00D9FF]/10 hover:border-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
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
        <div className="bg-[#050A0F]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-[#7A8A99] hover:text-white transition-colors text-sm font-medium py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="self-start px-5 py-2 rounded-full text-sm font-semibold border border-[#00D9FF]/40 text-[#00D9FF] hover:bg-[#00D9FF]/10 transition-all"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
