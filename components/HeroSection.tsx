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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb1 absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="orb2 absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(0,191,166,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(0,191,166,0.3) 50%, transparent 70%)",
            filter: "blur(80px)",
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/5 badge-pulse mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
          <span
            className="text-[#FFD700] text-sm font-medium"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Available for Freelance Projects
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          style={{ fontFamily: "var(--font-syne)" }}
          className="text-5xl sm:text-6xl lg:text-[80px] font-black leading-[1.05] tracking-tight mb-6"
        >
          <motion.span {...fadeUp(0.3)} className="block text-[#FFFEF0]">
            Building{" "}
            <span className="gradient-text-animated">AI-Powered</span>
          </motion.span>
          <motion.span {...fadeUp(0.4)} className="block text-[#FFFEF0]">
            Software That Works.
          </motion.span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.div {...fadeUp(0.55)}>
          <p
            className="text-[#8A8A70] text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            AI Engineer · Full-Stack Developer · LLM Systems Architect
          </p>
          <p
            className="text-[#8A8A70]/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
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
            className="btn-shimmer flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#0A0A08] text-sm transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]"
            style={{
              background: "linear-gradient(135deg, #FFD700, #00BFA6)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            View My Work
            <ArrowRight size={16} />
          </button>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-[#FFFEF0]/20 text-[#FFFEF0]/80 hover:border-[#FFD700]/40 hover:text-[#FFFEF0] hover:bg-[#FFD700]/5 transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans)" }}
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
              className="w-10 h-10 rounded-full border border-[#FFFEF0]/10 flex items-center justify-center text-[#8A8A70] hover:text-[#FFD700] hover:border-[#FFD700]/40 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow text-[#8A8A70]">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
