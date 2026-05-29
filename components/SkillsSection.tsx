"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

const accentStyles = {
  cyan: "border-[#FFD700]/40 text-[#FFD700] hover:border-[#FFD700] hover:shadow-[0_0_12px_rgba(255,215,0,0.3)]",
  violet: "border-[#00BFA6]/40 text-[#00BFA6] hover:border-[#00BFA6] hover:shadow-[0_0_12px_rgba(0,191,166,0.3)]",
  neutral: "border-[#FFFEF0]/10 text-[#FFFEF0]/70 hover:border-[#FFFEF0]/30 hover:text-[#FFFEF0]",
};

export default function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const displayed = activeGroup
    ? skillGroups.filter((g) => g.id === activeGroup)
    : skillGroups;

  return (
    <section id="skills" className="py-24 lg:py-32 relative grid-bg">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(10,10,8,0.8) 0%, transparent 20%, transparent 80%, rgba(10,10,8,0.8) 100%)" }}
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
            className="text-4xl lg:text-5xl font-black text-[#FFFEF0] mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Technical Arsenal
          </h2>
          <p
            className="text-[#8A8A70] text-base lg:text-lg"
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
                ? "border-[#FFD700] text-[#FFD700] bg-[#FFD700]/10"
                : "border-[#FFFEF0]/10 text-[#8A8A70] hover:border-[#FFFEF0]/30 hover:text-[#FFFEF0]"
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
                    ? "border-[#FFD700] text-[#FFD700] bg-[#FFD700]/10"
                    : group.accent === "violet"
                    ? "border-[#00BFA6] text-[#00BFA6] bg-[#00BFA6]/10"
                    : "border-[#FFFEF0]/30 text-[#FFFEF0] bg-[#FFFEF0]/10"
                  : "border-[#FFFEF0]/10 text-[#8A8A70] hover:border-[#FFFEF0]/30 hover:text-[#FFFEF0]"
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
                  color: group.accent === "cyan" ? "#FFD700" : group.accent === "violet" ? "#00BFA6" : "#8A8A70",
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
                    className={`px-3 py-1.5 rounded-full text-xs border bg-[#FFFEF0]/5 cursor-default transition-all duration-200 ${accentStyles[group.accent]}`}
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
