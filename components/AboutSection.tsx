"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1+", label: "Year Professional Experience" },
  { value: "10+", label: "AI Projects Shipped" },
  { value: "3+", label: "Freelance Clients" },
  { value: "80%", label: "Manual Work Eliminated for Clients" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-[#F5F5F5]">
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left column — text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="mb-6">
              <h2
                className="text-4xl lg:text-5xl font-black text-[#171717] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Who I Am
              </h2>
              <div className="h-1 w-16 rounded-full" style={{ background: "#2563EB" }} />
            </div>

            <div
              className="space-y-5 text-[#6B7280] text-base lg:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>
                I&apos;m Prabanjan — an AI Engineer based in Hyderabad with 1+ year of experience
                building AI-powered applications that solve real business problems.
              </p>
              <p>
                At <span className="text-[#2563EB] font-semibold">Sync AI Technologies</span>, I architect and ship end-to-end AI systems: RAG
                knowledge bases, LLM automation workflows, compliance tools, and intelligent
                agents — using LangChain, FastAPI, Gemini, Groq, and more.
              </p>
              <p>
                I also train the next generation of AI builders as an{" "}
                <span className="text-[#2563EB] font-semibold">Agentic AI Trainer at Capably</span>,
                running workshops at engineering colleges across Hyderabad.
              </p>
              <p>
                As a freelancer, I take on projects where AI can make a real difference —
                automation, intelligent chatbots, document processing, and full-stack products.
              </p>
            </div>
          </motion.div>

          {/* Right column — stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="glass-card gradient-top-border relative rounded-xl p-6 flex flex-col gap-2 hover:shadow-md transition-all"
              >
                <span
                  className="text-3xl lg:text-4xl font-black gradient-text"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[#6B7280] text-xs leading-snug"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
