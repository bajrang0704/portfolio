"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

const accentStyles = {
  cyan: "border-[#2563EB]/50 text-[#2563EB] bg-[#2563EB]/5 hover:border-[#2563EB] hover:bg-[#2563EB]/10 hover:shadow-[0_0_12px_rgba(37,99,235,0.2)]",
  violet: "border-[#2563EB]/50 text-[#2563EB] bg-[#2563EB]/5 hover:border-[#2563EB] hover:bg-[#2563EB]/10 hover:shadow-[0_0_12px_rgba(37,99,235,0.2)]",
  neutral: "border-[#171717]/12 text-[#6B7280] bg-[#171717]/4 hover:border-[#171717]/25 hover:text-[#171717]",
};

export default function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const displayed = activeGroup
    ? skillGroups.filter((g) => g.id === activeGroup)
    : skillGroups;

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-[#FFFFFF] grid-bg">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.9) 100%)" }}
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
            className="text-4xl lg:text-5xl font-black text-[#171717] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Technical Arsenal
          </h2>
          <p
            className="text-[#6B7280] text-base lg:text-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The stack I use to build production-grade AI systems
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveGroup(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
              activeGroup === null
                ? "border-[#2563EB] text-[#2563EB] bg-[#2563EB]/10"
                : "border-[#171717]/12 text-[#6B7280] hover:border-[#171717]/25 hover:text-[#171717]"
            }`}
            style={{ fontFamily: "var(--font-code)" }}
          >
            All
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id === activeGroup ? null : group.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                activeGroup === group.id
                  ? group.accent === "cyan"
                    ? "border-[#2563EB] text-[#2563EB] bg-[#2563EB]/10"
                    : group.accent === "violet"
                    ? "border-[#2563EB] text-[#2563EB] bg-[#2563EB]/10"
                    : "border-[#171717]/25 text-[#171717] bg-[#171717]/8"
                  : "border-[#171717]/12 text-[#6B7280] hover:border-[#171717]/25 hover:text-[#171717]"
              }`}
              style={{ fontFamily: "var(--font-code)" }}
            >
              {group.label}
            </button>
          ))}
        </motion.div>

        {/* Skill groups */}
        <div className="space-y-10">
          {displayed.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{
                  fontFamily: "var(--font-body)",
                  color: group.accent === "cyan" ? "#2563EB" : group.accent === "violet" ? "#2563EB" : "#6B7280",
                }}
              >
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: si * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1.5 rounded-full text-xs border cursor-default transition-all duration-200 ${accentStyles[group.accent]}`}
                    style={{ fontFamily: "var(--font-code)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
