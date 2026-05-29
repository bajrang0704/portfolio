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
    "w-full bg-[#FFFEF0]/5 border border-[#FFFEF0]/10 rounded-xl px-4 py-3 text-[#FFFEF0] placeholder-[#8A8A70]/60 focus:outline-none focus:border-[#FFD700]/60 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.08)] transition-all text-sm";

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(ellipse, rgba(255,215,0,0.3) 0%, rgba(0,191,166,0.3) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl lg:text-5xl font-black text-[#FFFEF0] mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Let&apos;s Build Something
          </h2>
          <p
            className="text-[#8A8A70] text-base lg:text-lg"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/5 self-start badge-pulse">
              <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
              <span className="text-[#FFD700] text-sm font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
                  <div className="w-10 h-10 rounded-xl border border-[#FFD700]/20 bg-[#FFD700]/5 flex items-center justify-center text-[#FFD700]">
                    <Icon size={18} />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#FFFEF0]/80 hover:text-[#FFD700] transition-colors text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-[#8A8A70] text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>{label}</span>
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
                  className="w-11 h-11 rounded-full border border-[#FFFEF0]/10 flex items-center justify-center text-[#8A8A70] hover:text-[#FFD700] hover:border-[#FFD700]/40 hover:shadow-[0_0_15px_rgba(255,215,0,0.25)] transition-all duration-300"
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
                  <label className="block text-[#8A8A70] text-xs mb-2 font-medium tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
                  <label className="block text-[#8A8A70] text-xs mb-2 font-medium tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
                <label className="block text-[#8A8A70] text-xs mb-2 font-medium tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
                  <option value="" disabled className="bg-[#0A0A08]">Select project type</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#0A0A08]">{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#8A8A70] text-xs mb-2 font-medium tracking-wide" style={{ fontFamily: "var(--font-dm-sans)" }}>
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
                className="btn-shimmer w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-[#0A0A08] text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #FFD700, #00BFA6)",
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
