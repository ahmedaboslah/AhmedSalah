"use client";

import { useMemo, useState } from "react";

type ContactSectionProps = {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio?: string;
};

type CopyState = "idle" | "copied" | "failed";

export function ContactSection({
  email,
  phone,
  location,
  linkedin,
  github,
  portfolio,
}: ContactSectionProps) {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const statusLabel = useMemo(() => {
    if (copyState === "copied") {
      return "Copied to clipboard.";
    }
    if (copyState === "failed") {
      return "Copy failed. Please copy manually.";
    }
    return "";
  }, [copyState]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch (err) {
      setCopyState("failed");
    }
    window.setTimeout(() => setCopyState("idle"), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-28" suppressHydrationWarning>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Contact
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Ready to collaborate on your next mobile experience.
          </h2>
          <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
            Share a brief and I will respond quickly with timelines, stack
            recommendations, and delivery milestones.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-6 shadow-sm dark:bg-slate-900/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01l8 5 8-5V7H4zm16 10V9.24l-7.4 4.63a1 1 0 0 1-1.2 0L4 9.24V17h16z" />
                </svg>
                {email}
              </a>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:text-slate-200"
                >
                  Copy email
                </button>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:text-slate-200"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01l8 5 8-5V7H4zm16 10V9.24l-7.4 4.63a1 1 0 0 1-1.2 0L4 9.24V17h16z" />
                  </svg>
                  Open mail
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
              <p
                className="mt-3 text-xs text-slate-500 dark:text-slate-400"
                aria-live="polite"
              >
                {statusLabel}
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-6 shadow-sm dark:bg-slate-900/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Direct
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    className="h-4 w-4 text-emerald-500 dark:text-emerald-400"
                    fill="currentColor"
                  >
                    <path d="M19.11 17.65c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.13-.17.25-.65.8-.8.96-.15.16-.3.18-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.23-1.48-1.38-1.73-.14-.25-.02-.39.11-.52.11-.11.25-.29.38-.43.13-.14.17-.24.25-.4.08-.16.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.48-.4-.41-.57-.42-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.12.16 1.77 2.7 4.28 3.78.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29M16.03 27.6h-.01c-1.97 0-3.9-.53-5.58-1.52l-.4-.24-4.14 1.09 1.11-4.03-.26-.41a11.57 11.57 0 0 1-1.78-6.15c0-6.4 5.22-11.6 11.63-11.6 3.1 0 6.01 1.2 8.2 3.38a11.52 11.52 0 0 1 3.4 8.2c0 6.4-5.22 11.58-11.6 11.58m9.88-21.5A13.75 13.75 0 0 0 16.04 2C8.44 2 2.26 8.18 2.26 15.78c0 2.5.65 4.94 1.89 7.09L2 30.98l8.4-2.21a13.66 13.66 0 0 0 5.64 1.21h.01c7.6 0 13.78-6.18 13.78-13.78 0-3.68-1.43-7.13-4.02-9.72" />
                  </svg>
                  {phone}
                </a>
                <span className="inline-flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                  {location}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:text-slate-200"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm15.11 13.02h-3.55v-5.55c0-1.32-.03-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.93v5.64H9.38V9h3.41v1.56h.05c.47-.9 1.62-1.84 3.34-1.84 3.57 0 4.22 2.35 4.22 5.41v6.32z" />
                  </svg>
                  LinkedIn
                  <span aria-hidden="true">-&gt;</span>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:text-slate-200"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.84 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.69.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                  GitHub
                  <span aria-hidden="true">-&gt;</span>
                </a>
                {portfolio ? (
                  <a
                    href={portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:text-slate-200"
                  >
                    Portfolio
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
