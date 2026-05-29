"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

const accentStyles = {
  cyan: "border-[#D4A800]/50 text-[#D4A800] bg-[#D4A800]/5 hover:border-[#D4A800] hover:bg-[#D4A800]/10 hover:shadow-[0_0_12px_rgba(212,168,0,0.2)]",
  violet: "border-[#007A6A]/50 text-[#007A6A] bg-[#007A6A]/5 hover:border-[#007A6A] hover:bg-[#007A6A]/10 hover:shadow-[0_0_12px_rgba(0,122,106,0.2)]",
  neutral: "border-[#1A1A14]/12 text-[#6B6B5A] bg-[#1A1A14]/4 hover:border-[#1A1A14]/25 hover:text-[#1A1A14]",
};

export default function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const displayed = activeGroup
    ? skillGroups.filter((g) => g.id === activeGroup)
    : skillGroups;

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-[#FAFAF7] grid-bg">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(250,250,247,0.9) 0%, transparent 15%, transparent 85%, rgba(250,250,247,0.9) 100%)" }}
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
            className="text-4xl lg:text-5xl font-black text-[#1A1A14] mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Technical Arsenal
          </h2>
          <p
            className="text-[#6B6B5A] text-base lg:text-lg"
            style={{ fontFamily: "var(--font-dm-sans)" }}
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
                ? "border-[#D4A800] text-[#D4A800] bg-[#D4A800]/10"
                : "border-[#1A1A14]/12 text-[#6B6B5A] hover:border-[#1A1A14]/25 hover:text-[#1A1A14]"
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
                    ? "border-[#D4A800] text-[#D4A800] bg-[#D4A800]/10"
                    : group.accent === "violet"
                    ? "border-[#007A6A] text-[#007A6A] bg-[#007A6A]/10"
                    : "border-[#1A1A14]/25 text-[#1A1A14] bg-[#1A1A14]/8"
                  : "border-[#1A1A14]/12 text-[#6B6B5A] hover:border-[#1A1A14]/25 hover:text-[#1A1A14]"
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
                  fontFamily: "var(--font-dm-sans)",
                  color: group.accent === "cyan" ? "#D4A800" : group.accent === "violet" ? "#007A6A" : "#6B6B5A",
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
