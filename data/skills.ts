export type SkillGroup = {
  id: string;
  label: string;
  accent: "cyan" | "violet" | "neutral";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-ml",
    label: "AI / ML",
    accent: "cyan",
    skills: [
      "LangChain",
      "RAG Architectures",
      "LLM APIs",
      "Prompt Engineering",
      "Vector Databases",
      "Gemini API",
      "Groq API",
      "Embedding Models",
      "Agentic AI",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    accent: "violet",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "JWT Auth",
      "Prisma ORM",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    accent: "neutral",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    id: "databases-cloud",
    label: "Databases & Cloud",
    accent: "neutral",
    skills: [
      "PostgreSQL",
      "AWS S3",
      "VPS Deployment",
      "Docker",
      "Google Sheets API",
      "Cloud Storage",
    ],
  },
  {
    id: "tools",
    label: "Tools & Practices",
    accent: "neutral",
    skills: ["Git / GitHub", "Zod", "Data Structures & Algorithms", "Java"],
  },
];
