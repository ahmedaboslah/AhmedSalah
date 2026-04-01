"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type Project = {
  name: string;
  date: string;
  status: string;
  description?: string;
  tags: string[];
  links: { label: string; href: string }[];
  logo?: string;
  logoScale?: number;
};

type ProjectsSectionProps = {
  projects: Project[];
};

const PLATFORM_ICONS: Record<string, { src: string; alt: string }> = {
  iOS: { src: "/appleStore.jpg", alt: "Apple App Store" },
  Android: { src: "/googlePlay.jpg", alt: "Google Play" },
  Web: { src: "/globe.svg", alt: "Web" },
  "App Store": { src: "/appleStore.jpg", alt: "Apple App Store" },
  "Google Play": { src: "/googlePlay.jpg", alt: "Google Play" },
  "Web Site": { src: "/globe.svg", alt: "Web" },
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    return ["All", ...Array.from(tagSet).sort()];
  }, [projects]);

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <section id="projects" className="scroll-mt-28">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Projects
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Shipped apps across finance, education, fitness, and more.
          </h2>
          <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
            Filter by domain or release status to see the breadth of cross-platform
            work delivered for clients and production teams.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  isActive
                    ? "border-[color:var(--accent)] bg-[var(--accent-soft)] text-[color:var(--accent)]"
                    : "border-[var(--border)] text-slate-600 hover:border-[color:var(--accent)] hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
                aria-pressed={isActive}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 gap-y-12 md:grid-cols-2">
          {filteredProjects.map((project) => {
            const normalizedStatus = project.status.toLowerCase();
            const isDraft =
              normalizedStatus.includes("not") ||
              normalizedStatus.includes("under") ||
              normalizedStatus.includes("progress") ||
              normalizedStatus.includes("development");
            return (
              <article
                key={project.name}
                className="group relative flex h-full flex-col justify-between rounded-3xl border border-[var(--border)] bg-white/85 p-6 pt-12 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-45px_rgba(15,23,42,0.5)] dark:bg-slate-900/70"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {project.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        {project.date}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${
                        isDraft
                          ? "bg-amber-100/80 text-amber-700 dark:bg-amber-500/15 dark:text-amber-200"
                          : "bg-emerald-100/80 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => {
                      const icon = PLATFORM_ICONS[tag];
                      return (
                        <span
                          key={`${project.name}-${tag}`}
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-slate-600 dark:text-slate-300"
                        >
                          {icon ? (
                            <Image
                              src={icon.src}
                              alt={icon.alt}
                              width={20}
                              height={20}
                              sizes="20px"
                              className="h-4 w-4 rounded-full object-cover"
                            />
                          ) : null}
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {project.description ? (
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.length > 0 ? (
                    project.links.map((link) => (
                      <a
                        key={`${project.name}-${link.label}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:text-slate-200"
                      >
                        {PLATFORM_ICONS[link.label] ? (
                          <Image
                            src={PLATFORM_ICONS[link.label].src}
                            alt={PLATFORM_ICONS[link.label].alt}
                            width={22}
                            height={22}
                            sizes="22px"
                            className="h-4 w-4 rounded-full object-cover"
                          />
                        ) : null}
                        {link.label}
                        <span aria-hidden="true">-&gt;</span>
                      </a>
                    ))
                  ) : (
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      Private build or pre-launch release.
                    </span>
                  )}
                </div>

                {project.logo ? (
                  <div className="pointer-events-none absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-white/90 p-2 shadow-md dark:bg-slate-900/70">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={64}
                      height={64}
                      sizes="64px"
                      className="h-full w-full rounded-full object-contain origin-center"
                      style={
                        project.logoScale
                          ? { transform: `scale(${project.logoScale})` }
                          : undefined
                      }
                    />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
