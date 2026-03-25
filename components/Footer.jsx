"use client";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { basics } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [name, setName] = useState("Allen Lenoy");

  const handleScramble = () => {
    setName("Thanks for scrolling 👀");
    setTimeout(() => setName("Allen Lenoy"), 3000);
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0a0a] py-10">
      <div className="container px-6 mx-auto flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] text-white/40 uppercase tracking-[0.08em] gap-6">
        <button onClick={handleScramble} className="hover:text-[#c8a96e] transition-colors text-left cursor-pointer">
          {name}
        </button>

        <div className="flex gap-6 items-center">
          <a
            href={basics.profiles.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c8a96e] hover:border-[#c8a96e]/40 transition-all duration-300"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
          <a
            href={basics.profiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c8a96e] hover:border-[#c8a96e]/40 transition-all duration-300"
          >
            <FaLinkedinIn className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex gap-4 sm:gap-8 items-center text-center sm:text-right">
          <span>&copy; {currentYear} Built with obsession.</span>
          <a href="#top" className="text-[#c8a96e] hover:text-white transition-colors flex items-center gap-1">
            Top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
