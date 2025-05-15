"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isAnimating, setIsAnimating] = useState(false);
  const [position, setPosition] = useState("default");

  useEffect(() => {
    setMounted(true);
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setPosition("up");

    setTimeout(() => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      setTimeout(() => {
        setPosition("default");
        setTimeout(() => {
          setIsAnimating(false);
        }, 200);
      }, 200);
    }, 140);
  };

  if (!mounted) return null;

  const getTopPosition = () => {
    if (position === "up") {
      return "calc(60% + 18px)";
    }

    return "calc(100% - 38px)";
  };

  const getBottomPosition = () => {
    if (position === "up") {
      return "14px";
    }
  };

  return (
    <div className="fixed -top-1/50 right-6 z-100 flex flex-col items-center">
      {/* Main lever box */}
      <div
        className="w-10 h-20 mt-2 rounded-b-xl flex flex-col items-center justify-end relative cursor-pointer overflow-hidden"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {/* Lever track */}
        <div
          className="absolute top-0 bottom-9 w-[3px] bg-black/40 rounded-full mx-auto transition-all duration-300"
          style={{
            backgroundColor:
              theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
            bottom: getBottomPosition(),
          }}
        />

        {/* Lever Handle */}
        <div
          className="flex flex-col justify-between items-center absolute transition-all duration-300 ease-in-out"
          style={{
            top: getTopPosition(),
          }}
        >
          {/* Sun/Moon Icon */}
          <div
            className="flex w-9 h-9 items-center justify-center rounded-full shadow-lg z-150"
            style={{
              backgroundColor:
                theme === "dark"
                  ? "rgba(59, 130, 246, 0.3)"
                  : "rgba(251, 191, 36, 0.3)",
              border: "1px solid",
              borderColor:
                theme === "dark"
                  ? "rgba(96, 165, 250, 0.5)"
                  : "rgba(251, 191, 36, 0.5)",
            }}
          >
            {theme === "dark" ? (
              <Sun size={22} color="rgba(96, 165, 250, 0.7)" />
            ) : (
              <Moon size={22} color="rgba(251, 191, 36, 0.5)" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
