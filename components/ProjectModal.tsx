"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons";
import type { Project } from "@/data/projects";

const accentGradient = {
  cyan: "#00D9FF",
  violet: "#7B2FFF",
  gradient: "linear-gradient(135deg, #00D9FF, #7B2FFF)",
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

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

  const topBorderStyle =
    project?.accentColor === "gradient"
      ? { background: "linear-gradient(135deg, #00D9FF, #7B2FFF)" }
      : project?.accentColor === "cyan"
      ? { background: "#00D9FF" }
      : { background: "#7B2FFF" };

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
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#050A0F]/90 backdrop-blur-sm" />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 glass-card rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient top line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={topBorderStyle} />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#7A8A99] hover:text-white hover:border-white/30 transition-all z-10"
            >
              <X size={16} />
            </button>

            <div className="p-8 pt-10">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-2.5 py-0.5 rounded-full text-xs border border-white/10 text-[#7A8A99]"
                    style={{ fontFamily: "var(--font-code)" }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-[#F0F6FF] mb-4 pr-8"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#7A8A99] leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {project.shortDescription}
              </p>

              {/* Highlights */}
              {project.highlights.length > 0 && (
                <div className="mb-6">
                  <h4
                    className="text-xs font-semibold tracking-widest uppercase text-[#7A8A99] mb-3"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            background:
                              project.accentColor === "gradient"
                                ? "#00D9FF"
                                : project.accentColor === "cyan"
                                ? "#00D9FF"
                                : "#7B2FFF",
                          }}
                        />
                        <span
                          className="text-[#F0F6FF]/80 text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {project.techStack.length > 0 && (
                <div className="mb-7">
                  <h4
                    className="text-xs font-semibold tracking-widest uppercase text-[#7A8A99] mb-3"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-xs border border-white/10 text-[#F0F6FF]/60 bg-white/5"
                        style={{ fontFamily: "var(--font-code)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action links */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm text-white/70 hover:text-white hover:border-white/40 transition-all"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <GitHubIcon size={15} /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white font-medium transition-all"
                      style={{
                        background: "linear-gradient(135deg, #00D9FF, #7B2FFF)",
                        fontFamily: "var(--font-dm-sans)",
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
