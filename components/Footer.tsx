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
    <footer className="border-t border-[#FFD700]/8 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-[#8A8A70]/60 text-xs"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          © 2025 Prabanjan Banala Reddy
        </p>

        <p
          className="text-[#8A8A70]/40 text-xs"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Built with Next.js · Designed with ❤️
        </p>

        <div className="flex items-center gap-5">
          {quickLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[#8A8A70]/50 hover:text-[#FFD700] text-xs transition-colors"
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
