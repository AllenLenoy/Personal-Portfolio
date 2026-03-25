"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-5 h-5" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-[#888] hover:text-[#f5f5f0] transition-colors p-1"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <FaSun className="w-4 h-4" />
      ) : (
        <FaMoon className="w-4 h-4" />
      )}
    </button>
  );
}
