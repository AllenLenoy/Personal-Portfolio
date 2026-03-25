"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#training" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to highlight active nav item
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        return { name: item.name, el };
      });

      // Find the section closest to the top of the viewport
      let current = "About";
      for (const section of sections) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section.name;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Top Strip - Always Dark Theme Stylized */}
      <div className="bg-[#0a0a0a] text-[#f5f5f0] px-6 py-3.5 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="relative h-12 w-48 -ml-2 mix-blend-screen drop-shadow-sm flex items-center justify-start">
            <img 
              src="/signature.png" 
              alt="Allen Lenoy Signature" 
              className="w-full h-full object-contain filter contrast-150 brightness-110 object-left"
            />
          </div>
          <div className="text-[11px] tracking-[0.1em] text-[#888] uppercase mt-[3px]">
            Full-Stack Developer
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="text-[10px] tracking-[0.1em] uppercase text-[#0a0a0a] bg-[#c8a96e] px-2.5 py-1 rounded-[3px] font-mono font-semibold">
            Available
          </div>
        </div>
      </div>

      {/* Section Nav - Theme Aware */}
      <nav className={`flex gap-0 overflow-x-auto border-b border-bg-border bg-bg-base px-6 scrollbar-hide transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.name)}
            className={`shrink-0 px-4 py-3.5 font-mono text-[11px] tracking-[0.08em] uppercase transition-all duration-200 whitespace-nowrap border-b-2 font-medium ${
              active === item.name
                ? "text-text-base border-[#c8a96e]"
                : "text-text-muted border-transparent hover:text-text-base"
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
