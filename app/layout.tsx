import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prabanjan Banala Reddy | AI Engineer & Freelancer",
  description:
    "AI Engineer specializing in LLMs, RAG systems, and full-stack development. Available for freelance projects in Hyderabad and remote.",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "LLM",
    "RAG",
    "LangChain",
    "FastAPI",
    "Freelancer",
    "Hyderabad",
  ],
  authors: [{ name: "Prabanjan Banala Reddy" }],
  openGraph: {
    title: "Prabanjan Banala Reddy | AI Engineer & Freelancer",
    description:
      "AI Engineer specializing in LLMs, RAG systems, and full-stack development.",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
