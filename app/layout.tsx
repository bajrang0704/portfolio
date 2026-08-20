import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// FONTS — change the imported font name above and here to swap a
// typeface (any font from fonts.google.com works). The variable
// names (--font-display, --font-body, --font-code) are matched to
// the same names in app/globals.css, so a swap here needs no other
// changes anywhere else in the app.
const displayFont = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-inter-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-body",
  display: "swap",
});

const codeFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
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
      className={`${displayFont.variable} ${bodyFont.variable} ${codeFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
