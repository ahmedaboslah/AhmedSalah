"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:bg-slate-900/70 dark:text-slate-300"
    >
      <span className="sr-only">Toggle theme</span>
      <span>{isDark ? "Light" : "Dark"}</span>
      <span className="relative flex h-5 w-5 items-center justify-center">
        {isDark ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3.5V5.5M12 18.5V20.5M4.9 4.9L6.3 6.3M17.7 17.7L19.1 19.1M3.5 12H5.5M18.5 12H20.5M4.9 19.1L6.3 17.7M17.7 6.3L19.1 4.9M12 8.3A3.7 3.7 0 1 0 12 15.7A3.7 3.7 0 1 0 12 8.3Z"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.3 13.6A7.7 7.7 0 0 1 10.4 3.7a8 8 0 1 0 9.9 9.9Z"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
