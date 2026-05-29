"use client";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A14]/8 py-8 px-6 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-[#6B6B5A]/60 text-xs"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          © 2025 Prabanjan Banala Reddy
        </p>

        <p
          className="text-[#6B6B5A]/40 text-xs"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Built with Next.js · Designed with ❤️
        </p>

        <div className="flex items-center gap-5">
          {quickLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[#6B6B5A]/50 hover:text-[#D4A800] text-xs transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
