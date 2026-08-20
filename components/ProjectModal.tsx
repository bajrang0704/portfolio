"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons";
import type { Project } from "@/data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

const topBorderStyle = { background: "#2563EB" };
const dotColor = "#2563EB";

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (project) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Dimming backdrop */}
          <div className="absolute inset-0 bg-[#171717]/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-xl"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(23,23,23,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={topBorderStyle} />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#171717]/10 flex items-center justify-center text-[#171717]/50 hover:text-[#171717] hover:border-[#171717]/30 transition-all z-10"
            >
              <X size={16} />
            </button>

            <div className="p-8 pt-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-2.5 py-0.5 rounded-full text-xs border border-[#171717]/10 text-[#171717]/50"
                    style={{ fontFamily: "var(--font-code)" }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h3
                className="text-2xl font-bold text-[#171717] mb-4 pr-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </h3>

              <p
                className="text-[#171717]/65 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {project.shortDescription}
              </p>

              {project.highlights.length > 0 && (
                <div className="mb-6">
                  <h4
                    className="text-xs font-semibold tracking-widest uppercase text-[#171717]/45 mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: dotColor }}
                        />
                        <span
                          className="text-[#171717]/75 text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.techStack.length > 0 && (
                <div className="mb-7">
                  <h4
                    className="text-xs font-semibold tracking-widest uppercase text-[#171717]/45 mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-xs border border-[#171717]/10 text-[#171717]/50 bg-[#171717]/4"
                        style={{ fontFamily: "var(--font-code)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(project.githubUrl || project.liveUrl) && (
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#171717]/15 text-sm text-[#171717]/75 hover:text-[#171717] hover:border-[#171717]/30 transition-all"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <GitHubIcon size={15} /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white font-semibold transition-all"
                      style={{
                        background: "#2563EB",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
