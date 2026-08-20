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
    <footer className="border-t border-[#171717]/10 py-8 px-6 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-[#6B7280] text-xs"
          style={{ fontFamily: "var(--font-body)" }}
        >
          © 2025 Prabanjan Banala Reddy
        </p>

        <div className="flex items-center gap-5">
          {quickLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[#6B7280] hover:text-[#2563EB] text-xs transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
