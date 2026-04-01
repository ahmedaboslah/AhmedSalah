import Image from "next/image";
import { ContactSection } from "./components/contact-section";
import { Navbar } from "./components/navbar";
import { ProjectsSection } from "./components/projects-section";
import type { Project } from "./components/projects-section";

const summary =
  "Flutter Developer with 2+ years of experience building and delivering scalable mobile applications for Android & iOS, Skilled in Clean Architecture, Bloc/Cubit state management, and performance optimization, experienced in working with real clients, handling production apps, and publishing to App Store & Google Play, Passionate about building high-quality, user-friendly applications and continuously improving performance and maintainability";

const experiences = [
  {
    role: "Flutter Developer",
    company: "Harmony Invention Team",
    type: "Remotely, Part Time",
    period: "Jan 2025 - Present",
    bullets: [
      "Continued developing and maintaining production applications during military service.",
      "Implemented features using Clean Architecture and Bloc/Cubit.",
      "Fixed bugs and improved app stability based on tester feedback.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Harmony Invention Team",
    type: "Hybrid, Full Time",
    period: "Jul 2024 - Jan 2025",
    bullets: [
      "Developed and delivered multiple Flutter features based on client requirements.",
      "Collaborated with backend developers and QA to ensure high-quality releases.",
      "Participated in code reviews to improve code quality and maintainability.",
    ],
  },
  {
    role: "Flutter Developer - Freelancer (Mostaql)",
    company: "",
    type: "",
    period: "Sep 2023 - Present",
    bullets: [
      "Built custom Flutter mobile applications for different clients.",
      "Integrated RESTful APIs, Firebase services, and local storage solutions.",
      "Wrote clean, maintainable, and scalable Flutter code.",
      "Delivered projects end-to-end from requirements to deployment.",
    ],
  },
  {
    role: "Flutter Developer Internship",
    company: "Make Your Miracle Startup",
    type: "Remotely",
    period: "May 2023 - Oct 2023",
    bullets: [
      "Developed a Flutter application for schools to send announcements and notifications.",
      "Implemented features for events, schedule updates, and emergency alerts.",
      "Collaborated with cross-functional teams to meet functional requirements.",
    ],
  },
  {
    role: "Flutter GDSC Community",
    company: "Menoufi",
    type: "Community",
    period: "Jun 2022 - Jun 2023",
    bullets: [
      "Contributed to developing a Flutter-based e-commerce application.",
      "Worked within a team following structured development practices.",
      "Successfully completed the project and received certification.",
    ],
  },
];

const skills = {
  technical: [
    {
      title: "Core",
      items: "Flutter, Dart, OOP",
    },
    {
      title: "State Management",
      items: "Bloc, Cubit",
    },
    {
      title: "Architecture",
      items: "Clean Architecture, MVC, MVVM",
    },
    {
      title: "Backend",
      items: "REST APIs, Dio, HTTP, Firebase, Firestore",
    },
    {
      title: "Local Storage",
      items: "Hive",
    },
    {
      title: "Tools",
      items: "Git, CI/CD, Figma, Postman",
    },
    {
      title: "Platforms",
      items: "Android, iOS",
    },
    {
      title: "Other",
      items: "Responsive UI, Animations, Localization, Problem Solving",
    },
  ],
  soft: [
    "Communication Skills",
    "Teamwork",
    "Ability to Work Independently",
    "Project Management",
    "English: Professional Working Proficiency",
  ],
};

const projects: Project[] = [
  {
    name: "Wassal App",
    date: "Mar 2026",
    status: "Under development",
    description:
      "A bilingual mobile application that connects users with merchants to order construction materials. The application is under development.",
    tags: ["Construction", "In Progress"],
    links: [],
  },
  {
    name: "Food Rank App",
    date: "Feb 2026",
    status: "Published",
    description:
      "A mobile application that allows users to rate restaurants based on overall experience.",
    tags: ["Food", "Published", "iOS", "Android"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=me.tamoura.foodrank",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/eg/app/foodrank/id6760346130",
      },
    ],
  },
  {
    name: "Filey App",
    date: "Nov 2025",
    status: "Published",
    description:
      "A mobile application for managing, organizing, and editing files directly on the device.",
    tags: ["Productivity", "Published", "iOS"],
    logo: "/Filey.png",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/filey-studio/id6758226508",
      },
    ],
  },
  {
    name: "Boost App",
    date: "Aug 2025",
    status: "Published",
    description:
      "A mobile application that allows users to book football fields, subscribe to clubs, and enroll in training sessions.",
    tags: ["Sports", "Published", "iOS", "Android"],
    logo: "/BOOST.png",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/boost-sports-club/id6759531131",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=online.boostclub.app",
      },
    ],
  },
  {
    name: "Sinan Club App",
    date: "Jul 2025",
    status: "Published",
    description:
      "Built a production platform for an educational club serving parents and children.",
    tags: ["Education", "Published", "Web"],
    logo: "/sinan.png",
    links: [
      {
        label: "Web Site",
        href: "https://ladmission.app/sinan",
      },
    ],
  },
  {
    name: "Juniors App",
    date: "Feb 2025",
    status: "Published",
    description:
      "Flutter-based educational platform published on App Store and Google Chrome.",
    tags: ["Education", "Published", "iOS", "Web"],
    logo: "/Juniors.png",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/eg/app/juniors/id6496682724",
      },
      {
        label: "Web Site",
        href: "https://juniors.app/juniors",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-20 right-[-5%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.35),transparent_70%)] blur-3xl opacity-70 motion-safe:animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-15%] left-[-10%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.3),transparent_70%)] blur-3xl opacity-60 motion-safe:animate-[float_14s_ease-in-out_infinite]" />
      </div>

      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 lg:px-10">
        <section id="hero" className="scroll-mt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-6 motion-safe:animate-[fade-up_0.8s_ease-out]">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available for opportunities
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Mobile Application Developer | Flutter Developer (iOS & Android) | FrontEnd Developer
                </p>
                <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl font-serif">
                  <span className="inline-flex items-center gap-3">
                    <span className="inline-flex items-end">
                      <span className="inline-block overflow-hidden whitespace-nowrap align-bottom motion-safe:max-w-[0px] motion-safe:animate-[typing_2.8s_steps(25,end)_1_forwards]">
                        Ahmed Salah Anter Mohamed
                      </span>
                      <span
                        aria-hidden="true"
                        className="ml-1 inline-block h-[1em] w-[2px] bg-[color:var(--accent)] motion-safe:animate-[caret_0.8s_step-end_infinite] motion-reduce:hidden"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/85 px-2 py-1 text-xs font-semibold text-slate-700 shadow-sm motion-safe:animate-[hi-wave_1.6s_ease-in-out_infinite] dark:bg-slate-900/70 dark:text-slate-200"
                      style={{ transformOrigin: "70% 70%" }}
                    >
                      Hi
                    </span>
                  </span>
                </h1>
                <p className="mt-3 text-lg font-medium text-[color:var(--accent)]">
                  Flutter Developer & FrontEnd Developer
                </p>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                  Building high-quality mobile experiences with scalable architecture,
                  polished UI, and production-ready performance.
                </p>
              </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/+201061008876"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:text-slate-200"
                  >
                    Let&apos;s talk
                  </a>
                </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                    Cairo, El-Zaher
                  </span>
                  <a
                    href="mailto:aahmedabosalah2@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01l8 5 8-5V7H4zm16 10V9.24l-7.4 4.63a1 1 0 0 1-1.2 0L4 9.24V17h16z" />
                    </svg>
                    aahmedabosalah2@gmail.com
                  </a>
                  <a
                    href="https://wa.me/+201061008876"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="h-4 w-4 text-emerald-500 dark:text-emerald-400"
                      fill="currentColor"
                    >
                      <path d="M19.11 17.65c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.13-.17.25-.65.8-.8.96-.15.16-.3.18-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.23-1.48-1.38-1.73-.14-.25-.02-.39.11-.52.11-.11.25-.29.38-.43.13-.14.17-.24.25-.4.08-.16.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.48-.4-.41-.57-.42-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.12.16 1.77 2.7 4.28 3.78.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29M16.03 27.6h-.01c-1.97 0-3.9-.53-5.58-1.52l-.4-.24-4.14 1.09 1.11-4.03-.26-.41a11.57 11.57 0 0 1-1.78-6.15c0-6.4 5.22-11.6 11.63-11.6 3.1 0 6.01 1.2 8.2 3.38a11.52 11.52 0 0 1 3.4 8.2c0 6.4-5.22 11.58-11.6 11.58m9.88-21.5A13.75 13.75 0 0 0 16.04 2C8.44 2 2.26 8.18 2.26 15.78c0 2.5.65 4.94 1.89 7.09L2 30.98l8.4-2.21a13.66 13.66 0 0 0 5.64 1.21h.01c7.6 0 13.78-6.18 13.78-13.78 0-3.68-1.43-7.13-4.02-9.72" />
                    </svg>
                    +201061008876
                  </a>
              </div>

              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                  <a
                    href="https://www.linkedin.com/in/ahmed-salah-5084b71b6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-slate-700 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:text-slate-200"
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
                    href="https://github.com/ahmedaboslah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-slate-700 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] dark:text-slate-200"
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
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute -top-6 left-4 h-24 w-24 rounded-full bg-[var(--accent-soft)] blur-2xl" />
              <div className="absolute bottom-4 right-0 h-32 w-32 rounded-full bg-[var(--accent-soft)] blur-2xl" />
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.6)] dark:bg-slate-900/70">
                <Image
                  src="/salah.png"
                  alt="Ahmed Salah Anter Mohamed portrait"
                  width={560}
                  height={620}
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="w-full rounded-2xl object-cover"
                  priority
                />
                <div className="mt-6 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <span>Location</span>
                    <span className="inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-white sm:text-right">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                      </svg>
                      Cairo, El-Zaher
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <span>Focus</span>
                    <span className="font-semibold text-slate-900 dark:text-white sm:text-right">
                      Flutter Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                About
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
                Flutter mobile developer focused on clean architecture and
                performance.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                {summary}
              </p>
            </div>

            <div className="self-start rounded-3xl border border-[var(--border)] bg-white/85 p-6 shadow-sm dark:bg-slate-900/70">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Profile Snapshot
              </p>
              <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span>Title</span>
                  <span className="font-semibold text-slate-900 dark:text-white sm:text-right">
                    Mobile Application Developer | Flutter Developer (iOS & Android) | FrontEnd Developer
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span>Location</span>
                  <span className="inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-white sm:text-right">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                    Cairo, El-Zaher
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span>Email</span>
                  <span className="break-all font-semibold text-slate-900 dark:text-white sm:text-right">
                    aahmedabosalah2@gmail.com
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span>Phone</span>
                  <span className="font-semibold text-slate-900 dark:text-white sm:text-right">
                    +201061008876
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Skills
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
                Core Flutter skills backed by clean architecture delivery.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-6 shadow-sm dark:bg-slate-900/70">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Technical
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {skills.technical.map((skill) => (
                    <div
                      key={skill.title}
                      className="rounded-2xl border border-[var(--border)] bg-white/70 p-4 text-sm text-slate-600 shadow-sm dark:bg-slate-900/60 dark:text-slate-300"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        {skill.title}
                      </p>
                      <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-200">
                        {skill.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-6 shadow-sm dark:bg-slate-900/70">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Soft Skills
                </h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {skills.soft.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-200"
                    >
                      <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                      <span className="leading-relaxed">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Experience
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
                Roles spanning mobile delivery, freelance work, and community
                projects.
              </h2>
            </div>

            <div className="grid gap-6">
              {experiences.map((experience) => (
                <div
                  key={`${experience.role}-${experience.company}-${experience.period}`}
                  className="rounded-3xl border border-[var(--border)] bg-white/85 p-6 shadow-sm dark:bg-slate-900/70"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {experience.role}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {[experience.company, experience.type].filter(Boolean).join(" - ")}
                      </p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      {experience.period}
                    </span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection projects={projects} />

        <section id="education" className="scroll-mt-28">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Education
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
                Foundation in Information Technology with a focus on applied
                learning.
              </h2>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-6 shadow-sm dark:bg-slate-900/70">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Bachelor of Information Technology
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Sep 2020 - Jun 2024
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Egyptian E-Learning University (EELU)
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Graduation Project: A+; GPA 3.52; Very Good with Honors.
              </p>
            </div>
          </div>
        </section>

        <ContactSection
          email="aahmedabosalah2@gmail.com"
          phone="+201061008876"
          location="Cairo, El-Zaher"
          linkedin="https://www.linkedin.com/in/ahmed-salah-5084b71b6"
          github="https://github.com/ahmedaboslah"
        />
      </main>

      <footer className="border-t border-[var(--border)] bg-white/70 py-8 dark:bg-slate-900/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row lg:px-10">
          <span>(c) 2026 Ahmed Salah Anter Mohamed. All rights reserved.</span>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/ahmed-salah-5084b71b6"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[color:var(--accent)]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ahmedaboslah"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[color:var(--accent)]"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
