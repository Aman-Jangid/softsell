"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  // Only run on client-side
  useEffect(() => {
    setMounted(true);
    // Initialize theme based on data-theme attribute
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Update state
    setTheme(newTheme);

    // Update DOM
    document.documentElement.setAttribute("data-theme", newTheme);

    // Save to localStorage
    localStorage.setItem("theme", newTheme);
  };

  // Don't render until client-side
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-6 sm:right-10 md:right-20 z-20 p-2 rounded-full transition-colors duration-300"
      style={{
        backgroundColor:
          theme === "dark"
            ? "rgba(229, 231, 235, 0.2)"
            : "rgba(17, 24, 39, 0.2)",
        color: theme === "dark" ? "#ffffff" : "#000000",
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
