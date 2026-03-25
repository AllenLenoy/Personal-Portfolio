"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";

const titles = ["Full-Stack Developer", "AI Builder", "B.Tech CSE Student", "Open to Work"];

const Typewriter = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullText = titles[currentTitleIndex];
      setCurrentText(prev =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        timer = setTimeout(handleType, 400);
      } else {
        timer = setTimeout(handleType, isDeleting ? 30 : 90);
      }
    };

    if (timer === undefined) {
      timer = setTimeout(handleType, 100);
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] bg-[#c8a96e] ml-1"
      />
    </span>
  );
};

const ParticleField = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 10 + 20,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40 dark:opacity-30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--border)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-20" />
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#c8a96e] rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: ["0vh", "-100vh"],
            x: ["0vw", "5vw", "-5vw", "0vw"],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
            x: { duration: p.duration * 0.8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay },
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };

  const marqueeText = [
    "React", "Next.js", "Node.js", "Python", "MongoDB", "MySQL", "LangChain",
    "React", "Next.js", "Node.js", "Python", "MongoDB", "MySQL", "LangChain"
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100vh-60px)] flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d]"
    >
      <ParticleField />

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        {/* Layer 1 — Name & Ghost Watermark */}
        <div className="relative group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1]">
            <motion.div
              animate={{ x: mousePosition.x * -40, y: mousePosition.y * -40 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="text-[clamp(90px,16vw,180px)] font-syne font-extrabold text-[#f5f5f0] opacity-[0.04] select-none whitespace-nowrap"
            >
              LENOY
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-syne font-extrabold tracking-[-0.04em] leading-[0.92] text-[#f5f5f0] drop-shadow-sm mb-4"
            style={{ fontSize: "clamp(42px, 7vw, 72px)" }}
          >
            Allen Lenoy
          </motion.h1>
        </div>

        {/* Layer 2 — Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-mono text-[13px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.40)] mt-4 mb-[18px]"
        >
          Turning ideas into full-stack products with AI at the core.
        </motion.p>

        {/* Layer 3 — Typewriter animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-2 mb-[22px]"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.22)]">Currently —</span>
          <div className="font-syne font-bold text-[22px] text-[#c8a96e]">
            <Typewriter />
          </div>
        </motion.div>

        {/* Layer 4 — CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center justify-center gap-[12px]"
        >
          <Magnetic intensity={0.5}>
            <a
              href="#projects"
              className="px-6 md:px-8 py-[12px] bg-[#f5f5f0] text-[#0d0d0d] font-mono text-[11px] uppercase tracking-[0.08em] rounded-[3px] transition-colors hover:bg-[#c8a96e] font-semibold block"
            >
              View Projects
            </a>
          </Magnetic>
          <Magnetic intensity={0.5}>
            <a
              href="#contact"
              className="px-6 md:px-8 py-[12px] bg-transparent border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.55)] font-mono text-[11px] uppercase tracking-[0.08em] rounded-[3px] transition-all hover:border-[rgba(255,255,255,0.5)] hover:text-[#f5f5f0] block"
            >
              Get in touch
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Seamless Infinite Marquee - Kept as requested */}
      <div className="absolute bottom-24 w-full overflow-hidden flex border-y border-white/[0.08] py-4 bg-[#0d0d0d]/80 backdrop-blur-sm">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex gap-8 whitespace-nowrap px-4 font-mono text-[11px] uppercase tracking-[0.1em] text-white/30 w-max"
        >
          {marqueeText.map((text, i) => (
            <div key={i} className="flex gap-8 items-center shrink-0">
              <span className="hover:text-[#c8a96e] transition-colors cursor-default">{text}</span>
              <span className="text-[#c8a96e]">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sophisticated Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[rgba(255,255,255,0.3)] mb-4 ml-[0.4em]">Scroll</span>
          <div className="w-[1px] h-14 bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              animate={{
                y: ["-100%", "200%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-[#c8a96e] to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
