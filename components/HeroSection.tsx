"use client";

import { motion } from "framer-motion";
import { Mail, ChevronDown, Download, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg bg-[#FFFFFF]"
    >
      {/* Floating gradient orbs — soft on light bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb1 absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="orb2 absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/8 badge-pulse mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
          <span
            className="text-[#2563EB] text-sm font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Available for Freelance Projects
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          style={{ fontFamily: "var(--font-display)" }}
          className="text-5xl sm:text-6xl lg:text-[80px] font-black leading-[1.05] tracking-tight mb-6"
        >
          <motion.span {...fadeUp(0.3)} className="block text-[#171717]">
            Building{" "}
            <span className="gradient-text-animated">AI-Powered</span>
          </motion.span>
          <motion.span {...fadeUp(0.4)} className="block text-[#171717]">
            Software That Works.
          </motion.span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.div {...fadeUp(0.55)}>
          <p
            className="text-[#6B7280] text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            AI Engineer · Full-Stack Developer · LLM Systems Architect
          </p>
          <p
            className="text-[#6B7280]/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Turning complex problems into intelligent software — from RAG pipelines
            to real-time automation, I ship products that scale.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="btn-shimmer flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_30px_rgba(37,99,235,0.5)]"
            style={{
              background: "#2563EB",
              fontFamily: "var(--font-body)",
            }}
          >
            View My Work
            <ArrowRight size={16} />
          </button>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-[#171717]/20 text-[#171717] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          {...fadeUp(0.85)}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            {
              icon: LinkedInIcon,
              href: "https://www.linkedin.com/in/prabanjan-banala-6b471a205/",
              label: "LinkedIn",
            },
            {
              icon: GitHubIcon,
              href: "https://github.com/bajrang0704",
              label: "GitHub",
            },
            {
              icon: Mail,
              href: "mailto:prabanjanreddy07@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-full border border-[#171717]/15 flex items-center justify-center text-[#6B7280] hover:text-[#2563EB] hover:border-[#2563EB]/50 hover:shadow-[0_0_15px_rgba(37,99,235,0.25)] transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow text-[#6B7280]">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
