import { Syne, DM_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import FloatingControlHub from "@/components/FloatingControlHub";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "Allen Lenoy — Full-Stack Developer & AI Engineer",
  description: "Portfolio of Allen Lenoy — Full-Stack Developer & AI Engineer specializing in React, Next.js, Node.js, Python, and NLP. Building intelligent, high-fidelity web applications.",
  keywords: ["Allen Lenoy", "Full-Stack Developer", "AI Engineer", "Portfolio", "React", "Next.js", "Node.js", "Python", "NLP", "LangChain"],
  authors: [{ name: "Allen Lenoy" }],
  openGraph: {
    title: "Allen Lenoy — Full-Stack Developer & AI Engineer",
    description: "Building intelligent, high-fidelity web applications powered by AI.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmMono.variable} ${caveat.variable} font-mono bg-bg-base text-text-base antialiased selection:bg-brand/30 selection:text-brand transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          <CustomCursor />
          <FloatingControlHub />
          <div className="relative min-h-screen flex flex-col noise-bg">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
