"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaPaperPlane, FaTimes, FaFileDownload, FaArrowUp } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { HiOutlineLightBulb } from "react-icons/hi";
import { basics } from "@/data/portfolio";

export default function FloatingControlHub() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setIsMounted(true);
    
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const variants = {
    closed: {
      width: 60,
      height: 60,
      borderRadius: "30px",
      transition: { type: "spring", bounce: 0.35, duration: 0.5 }
    },
    open: {
      width: 260,
      height: 380,
      borderRadius: "24px",
      transition: { type: "spring", bounce: 0.35, duration: 0.6 }
    }
  };

  const actionButtons = [
    { label: "Email Me", icon: <FaPaperPlane />, href: `mailto:${basics.email}` },
    { label: "Resume", icon: <FaFileDownload />, href: "/resume.pdf" },
    { label: "GitHub", icon: <FaGithub />, href: basics.profiles.github, target: "_blank" },
    { label: "LinkedIn", icon: <FaLinkedinIn />, href: basics.profiles.linkedin, target: "_blank" },
  ];

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[99] flex flex-col items-center gap-4">
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="w-12 h-12 rounded-full border border-[#c8a96e]/40 bg-[#0d0d0d]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(200,169,110,0.2)] flex items-center justify-center text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#0d0d0d] hover:-translate-y-1 transition-all duration-300 z-[100]"
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        drag
        dragConstraints={{ left: -window.innerWidth + 100, right: 0, top: -window.innerHeight + 100, bottom: 0 }}
        dragElastic={0.1}
        dragMomentum={false}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="bg-[#0d0d0d] border border-[#c8a96e]/30 shadow-[0_8px_32px_rgba(200,169,110,0.15)] flex flex-col justify-start overflow-hidden backdrop-blur-md relative cursor-grab active:cursor-grabbing"
      >
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="w-full h-full flex items-center justify-center text-[#c8a96e] hover:text-[#f5f5f0] hover:bg-[#c8a96e]/10 transition-colors duration-300"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <IoSparklesOutline size={26} />
            </motion.div>
          </button>
        ) : (
          <div className="flex flex-col h-full w-full p-6 cursor-default">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <IoSparklesOutline className="text-[#c8a96e] text-xl" />
                <span className="font-syne font-bold text-white tracking-tight">Interactive Hub</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition"
              >
                <FaTimes size={12} />
              </button>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {actionButtons.map((btn, i) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target={btn.target}
                  rel={btn.target ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-[#c8a96e]/40 hover:bg-[#c8a96e]/10 transition-colors group"
                >
                  <div className="text-white/60 group-hover:text-[#c8a96e] transition-colors">{btn.icon}</div>
                  <span className="font-mono text-[10px] text-white/60 uppercase group-hover:text-white tracking-wider">{btn.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Toggles */}
            <div className="space-y-3 mt-auto">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-white/20 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <HiOutlineLightBulb className="text-[#c8a96e]" size={18} />
                  <span className="font-mono text-[11px] text-white/80 uppercase tracking-widest">Theme</span>
                </div>
                <div className="w-8 h-4 rounded-full bg-white/10 relative overflow-hidden">
                  <motion.div 
                    initial={false}
                    animate={{ x: theme === 'dark' ? 16 : 2 }}
                    className="absolute top-0.5 left-0 w-3 h-3 rounded-full bg-[#c8a96e] shadow-[0_0_8px_rgba(200,169,110,0.8)]"
                  />
                </div>
              </motion.button>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#c8a96e]/10 border border-[#c8a96e]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 h-3 items-end overflow-hidden">
                    {[1,2,3,4].map(bar => (
                      <motion.div 
                        key={bar}
                        animate={{ height: ["3px", "12px", "3px"] }}
                        transition={{ repeat: Infinity, duration: Math.random() * 0.5 + 0.5, ease: "easeInOut", delay: Math.random() }}
                        className="w-1 bg-[#c8a96e] rounded-t-sm"
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-[#c8a96e] uppercase tracking-widest font-bold">Vibe Mode</span>
                </div>
                <div className="text-[10px] font-mono text-[#c8a96e]/60 tracking-widest uppercase">ACTIVE</div>
              </motion.div>
            </div>
            
            <div className="mt-4 text-center">
              <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">Drag to move</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
