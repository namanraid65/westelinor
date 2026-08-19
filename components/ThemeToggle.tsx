"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--color-outline-variant)] bg-[var(--color-surface-container)] opacity-0"
      />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--color-outline-variant)] bg-[var(--color-surface-container)] hover:border-[var(--color-primary)] hover:bg-[var(--color-surface-container-high)] transition-all duration-200 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun size={16} className="text-[var(--color-primary)]" />
      ) : (
        <Moon size={16} className="text-[var(--color-primary)]" />
      )}
    </button>
  );
}
