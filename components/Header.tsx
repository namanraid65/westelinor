"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("solutions");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full h-20 flex justify-between items-center px-6 md:px-10 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-surface)]/90 backdrop-blur-xl border-b border-[var(--color-outline-variant)]/30 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="font-[var(--font-hanken)] text-lg font-bold text-[var(--color-primary)] tracking-tight">
        West Elinor Technologies
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-7 items-center">
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            className={`text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeSection === link.href.replace("#", "")
                ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-0.5"
                : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]"
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button
          onClick={() => scrollTo("#contact")}
          className="hidden md:block bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-5 py-2.5 rounded-lg text-sm font-semibold hover:glow-cyan hover:scale-105 transition-all active:scale-95 cursor-pointer"
        >
          Schedule Consultation
        </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--color-outline-variant)] bg-[var(--color-surface-container)] transition-all cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={18} className="text-[var(--color-on-surface)]" />
          ) : (
            <Menu size={18} className="text-[var(--color-on-surface)]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[var(--color-surface-container)] border-b border-[var(--color-outline-variant)]/30 backdrop-blur-xl p-6 flex flex-col gap-4 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm font-medium text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors py-2 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-2 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-5 py-3 rounded-lg text-sm font-semibold text-center cursor-pointer"
          >
            Schedule Consultation
          </button>
        </div>
      )}
    </header>
  );
}
