"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      const offset = 140;
      const scrollPosition = window.scrollY + offset;
      let current = NAV_ITEMS[0].id;
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (!element) {
          continue;
        }
        if (element.offsetTop <= scrollPosition) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#f6f4ef]/85 backdrop-blur dark:bg-[#0b0f1a]/85">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <a href="#hero" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-white shadow-md dark:bg-slate-900/70">
            <Image
              src="/salah.png"
              alt="Ahmed Salah Anter Mohamed"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <div className="hidden flex-col sm:flex">
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Mobile Developer
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Ahmed Salah Anter Mohamed
            </span>
          </div>
        </a>

        <nav className="hidden min-w-0 flex-1 md:flex" aria-label="Primary">
          <div className="flex items-center gap-2 overflow-x-auto rounded-full border border-[var(--border)] bg-white/80 px-3 py-2 text-xs font-medium text-slate-600 shadow-sm dark:bg-slate-900/70 dark:text-slate-300">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`whitespace-nowrap rounded-full px-3 py-1 transition ${
                    isActive
                      ? "bg-[var(--accent-soft)] text-[color:var(--accent)]"
                      : "hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:bg-slate-900/70 dark:text-slate-300 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={`w-full md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          aria-label="Primary"
        >
          <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-white/90 p-3 text-sm font-semibold text-slate-700 shadow-sm dark:bg-slate-900/70 dark:text-slate-200">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 transition ${
                    isActive
                      ? "bg-[var(--accent-soft)] text-[color:var(--accent)]"
                      : "hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
