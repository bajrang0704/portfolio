"use client";

import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { GitHubIcon } from "./icons";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
};

const topBorderClass = {
  cyan: "gradient-top-border-cyan",
  violet: "gradient-top-border-violet",
  gradient: "gradient-top-border-gradient",
};

const glowShadow = {
  cyan: "0 20px 60px rgba(255,215,0,0.15)",
  violet: "0 20px 60px rgba(0,191,166,0.15)",
  gradient: "0 20px 60px rgba(255,215,0,0.12)",
};

export default function ProjectCard({ project, onOpen, index }: Props) {
  if (project.placeholder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`glass-card gradient-top-border ${topBorderClass[project.accentColor]} relative rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]`}
      >
        <span className="text-[#8A8A70]/40 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-code)" }}>
          Coming Soon
        </span>
        <p className="text-[#8A8A70]/30 text-sm mt-2 text-center" style={{ fontFamily: "var(--font-dm-sans)" }}>
          {project.title}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: glowShadow[project.accentColor] }}
      className={`glass-card gradient-top-border ${topBorderClass[project.accentColor]} relative rounded-xl p-6 flex flex-col gap-4 cursor-pointer transition-shadow duration-300`}
      onClick={() => onOpen(project)}
    >
      {/* Categories */}
      <div className="flex flex-wrap gap-1.5">
        {project.categories.map((cat) => (
          <span
            key={cat}
            className="px-2.5 py-0.5 rounded-full text-[10px] border border-[#FFFEF0]/10 text-[#8A8A70]"
            style={{ fontFamily: "var(--font-code)" }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold text-[#FFFEF0] leading-snug"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="text-[#8A8A70] text-sm leading-relaxed flex-1"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {project.shortDescription}
      </p>

      {/* Tech pills */}
      {project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full text-[10px] bg-[#FFFEF0]/5 border border-[#FFFEF0]/10 text-[#FFFEF0]/50"
              style={{ fontFamily: "var(--font-code)" }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] text-[#8A8A70]" style={{ fontFamily: "var(--font-code)" }}>
              +{project.techStack.length - 5}
            </span>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 pt-2 border-t border-[#FFFEF0]/5">
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(project); }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#FFFEF0]/70 border border-[#FFFEF0]/15 hover:border-[#FFD700]/40 hover:text-[#FFD700] transition-all"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <Eye size={12} /> View Details
        </button>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#8A8A70] border border-[#FFFEF0]/10 hover:text-[#FFFEF0] hover:border-[#FFFEF0]/25 transition-all"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <GitHubIcon size={12} /> GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#8A8A70] border border-[#FFFEF0]/10 hover:text-[#FFFEF0] hover:border-[#FFFEF0]/25 transition-all"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <ExternalLink size={12} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
