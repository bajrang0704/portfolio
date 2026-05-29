export type Project = {
  id: number;
  title: string;
  categories: string[];
  accentColor: "cyan" | "violet" | "gradient";
  shortDescription: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Automated Real Estate Documentation Platform",
    categories: ["Full-Stack", "Automation"],
    accentColor: "cyan",
    shortDescription:
      "Enterprise-grade internal platform for automating real estate project documentation and certification workflows. Includes role-based dashboards, secure authentication, and a Chrome Extension for government portal integration.",
    techStack: [
      "Node.js",
      "TypeScript",
      "Python",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "Zod",
      "AWS S3",
      "Docker",
    ],
    highlights: [
      "Role-based employee & admin dashboards with JWT authentication",
      "Automated certificate generation pipelines → reduced manual work by 80%",
      "Chrome Extension for direct government portal data submission",
      "Client data management, project registration & tracking system",
    ],
  },
  {
    id: 2,
    title: "AI-Powered RAG Knowledge Assistant",
    categories: ["AI/ML"],
    accentColor: "violet",
    shortDescription:
      "A Retrieval-Augmented Generation system that auto-downloads, processes, and enables semantic Q&A over RERA legal documents — judgements, orders, and compliance records.",
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "Vector Database",
      "LLM APIs",
      "PostgreSQL",
    ],
    highlights: [
      "Automated ingestion of RERA portal legal documents",
      "Document embedding, semantic search, and context-aware querying",
      "Document-specific querying and automated summarization",
      "Enables non-technical users to extract legal insights from large document sets",
    ],
  },
  {
    id: 3,
    title: "AI-Powered Instagram Video Agent",
    categories: ["AI/ML", "Automation"],
    accentColor: "gradient",
    shortDescription:
      "End-to-end AI automation agent for Instagram content creation — generates captions, scripts, hashtags, and metadata at scale using LLM pipelines integrated with cloud storage.",
    techStack: [
      "React.js",
      "Python",
      "Groq API",
      "Google Sheets API",
      "Cloud Storage",
    ],
    highlights: [
      "LLM pipeline with tool-calling for structured content generation",
      "Google Sheets integration for managing content queues",
      "Prompt optimization for consistent, scalable outputs",
      "Cloud storage automation for video metadata workflows",
    ],
  },
  {
    id: 4,
    title: "Freelance Project #1",
    categories: ["Freelance"],
    accentColor: "cyan",
    shortDescription: "Details coming soon — currently under NDA.",
    techStack: [],
    highlights: [],
    placeholder: true,
  },
  {
    id: 5,
    title: "Freelance Project #2",
    categories: ["Freelance"],
    accentColor: "violet",
    shortDescription: "Details coming soon — currently under NDA.",
    techStack: [],
    highlights: [],
    placeholder: true,
  },
  {
    id: 6,
    title: "Freelance Project #3",
    categories: ["Freelance"],
    accentColor: "gradient",
    shortDescription: "Details coming soon — currently under NDA.",
    techStack: [],
    highlights: [],
    placeholder: true,
  },
];

export const filterTabs = ["All", "AI/ML", "Full-Stack", "Automation", "Freelance"];
