"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";

const projectTypes = [
  "AI Development",
  "Full-Stack App",
  "Automation",
  "Consulting",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F0F6FF] placeholder-[#7A8A99]/60 focus:outline-none focus:border-[#00D9FF]/60 focus:shadow-[0_0_0_3px_rgba(0,217,255,0.08)] transition-all text-sm";

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Orbs */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(ellipse, rgba(0,217,255,0.3) 0%, rgba(123,47,255,0.3) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl lg:text-5xl font-black text-[#F0F6FF] mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let&apos;s Build Something
          </h2>
          <p
            className="text-[#7A8A99] text-base lg:text-lg"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Available for freelance projects, consulting, and full-time roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/5 self-start badge-pulse">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
              <span className="text-[#00D9FF] text-sm font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Open to Work — Freelance &amp; Full-Time
              </span>
            </div>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "prabanjanreddy07@gmail.com", href: "mailto:prabanjanreddy07@gmail.com" },
                { icon: Phone, label: "+91 94911 90138", href: "tel:+919491190138" },
                { icon: MapPin, label: "Hyderabad, Telangana, India", href: null },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-[#00D9FF]">
                    <Icon size={18} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#F0F6FF]/80 hover:text-[#00D9FF] transition-colors text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-[#7A8A99] text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>{label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: LinkedInIcon, href: "https://www.linkedin.com/in/prabanjan-banala-6b471a205/", label: "LinkedIn" },
                { icon: GitHubIcon, href: "https://github.com/bajrang0704", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#7A8A99] hover:text-[#00D9FF] hover:border-[#00D9FF]/40 hover:shadow-[0_0_15px_rgba(0,217,255,0.25)] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#7A8A99] text-xs mb-2 font-medium tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClass}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>
                <div>
                  <label className="block text-[#7A8A99] text-xs mb-2 font-medium tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#7A8A99] text-xs mb-2 font-medium tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none`}
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <option value="" disabled className="bg-[#0D1117]">Select project type</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#0D1117]">{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#7A8A99] text-xs mb-2 font-medium tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-shimmer w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #00D9FF, #7B2FFF)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-xs text-center" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Something went wrong. Please email directly at prabanjanreddy07@gmail.com
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
