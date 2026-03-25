"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(e.target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#c8a96e] pointer-events-none z-[9999] hidden md:block mix-blend-difference will-change-transform"
        style={{ pointerEvents: 'none', zIndex: 9999, willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#c8a96e] pointer-events-none z-[9999] hidden md:block mix-blend-difference will-change-transform"
        style={{ pointerEvents: 'none', zIndex: 9999, willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 0.6
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </>
  );
}
