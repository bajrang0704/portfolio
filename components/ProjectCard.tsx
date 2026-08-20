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

const hoverGlow = "0 20px 60px rgba(37,99,235,0.15)";

export default function ProjectCard({ project, onOpen, index }: Props) {
  if (project.placeholder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="gradient-top-border relative rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]"
        style={{
          background: "rgba(23,23,23,0.03)",
          border: "1px dashed rgba(23,23,23,0.15)",
        }}
      >
        <span className="text-[#171717]/30 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-code)" }}>
          Coming Soon
        </span>
        <p className="text-[#171717]/25 text-sm mt-2 text-center" style={{ fontFamily: "var(--font-body)" }}>
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
      whileHover={{ y: -8, boxShadow: hoverGlow }}
      className="glass-card gradient-top-border relative rounded-xl p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300"
      onClick={() => onOpen(project)}
    >
      {/* Categories */}
      <div className="flex flex-wrap gap-1.5">
        {project.categories.map((cat) => (
          <span
            key={cat}
            className="px-2.5 py-0.5 rounded-full text-[10px] border border-[#171717]/10 text-[#171717]/45"
            style={{ fontFamily: "var(--font-code)" }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold text-[#171717] leading-snug"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="text-[#171717]/65 text-sm leading-relaxed flex-1"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {project.shortDescription}
      </p>

      {/* Tech pills */}
      {project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full text-[10px] bg-[#171717]/4 border border-[#171717]/10 text-[#171717]/45"
              style={{ fontFamily: "var(--font-code)" }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] text-[#171717]/35" style={{ fontFamily: "var(--font-code)" }}>
              +{project.techStack.length - 5}
            </span>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 pt-2 border-t border-[#171717]/8">
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(project); }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#171717]/60 border border-[#171717]/15 hover:border-[#2563EB]/50 hover:text-[#2563EB] transition-all"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <Eye size={12} /> View Details
        </button>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#171717]/45 border border-[#171717]/10 hover:text-[#171717] hover:border-[#171717]/30 transition-all"
            style={{ fontFamily: "var(--font-body)" }}
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#171717]/45 border border-[#171717]/10 hover:text-[#171717] hover:border-[#171717]/30 transition-all"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ExternalLink size={12} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
