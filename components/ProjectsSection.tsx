"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, filterTabs, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-[#0A0A08]">
      {/* Subtle gold orb top-left */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Subtle teal orb bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(0,191,166,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Projects That Ship
          </h2>
          <p
            className="text-white/50 text-base lg:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            From AI systems to full-stack products — built to solve real problems
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                activeFilter === tab
                  ? "border-[#FFD700] text-[#FFD700] bg-[#FFD700]/10"
                  : "border-white/10 text-white/50 hover:border-white/25 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-code)" }}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setSelectedProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
