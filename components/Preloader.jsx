"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for a short time to mask initial load and let components mount
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="font-syne text-5xl md:text-7xl font-extrabold text-[#f5f5f0] tracking-[-0.04em]">
              Allen Lenoy
            </div>
            <div className="flex gap-3">
              <motion.div 
                 animate={{ scaleY: [1, 2.5, 1], opacity: [0.5, 1, 0.5] }} 
                 transition={{ repeat: Infinity, duration: 1, delay: 0 }} 
                 className="w-1.5 h-6 bg-[#c8a96e] origin-bottom" 
              />
              <motion.div 
                 animate={{ scaleY: [1, 2.5, 1], opacity: [0.5, 1, 0.5] }} 
                 transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} 
                 className="w-1.5 h-6 bg-[#c8a96e] origin-bottom" 
              />
              <motion.div 
                 animate={{ scaleY: [1, 2.5, 1], opacity: [0.5, 1, 0.5] }} 
                 transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} 
                 className="w-1.5 h-6 bg-[#c8a96e] origin-bottom" 
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
