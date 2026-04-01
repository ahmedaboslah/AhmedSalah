import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Ahmed Salah Anter Mohamed | Mobile Application Developer | Flutter Developer (iOS & Android) | FrontEnd Developer",
  description:
    "Ahmed Salah Anter Mohamed, a Flutter mobile developer specializing in clean architecture, state management, and performance optimization.",
  openGraph: {
    title:
      "Ahmed Salah Anter Mohamed | Mobile Application Developer | Flutter Developer (iOS & Android) | FrontEnd Developer",
    description:
      "Flutter mobile developer specializing in clean architecture, state management, and performance optimization for production-ready apps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ahmed Salah Anter Mohamed | Mobile Application Developer | Flutter Developer (iOS & Android) | FrontEnd Developer",
    description:
      "Flutter mobile developer specializing in clean architecture, state management, and performance optimization for production-ready apps.",
  },
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system";
    const resolved = theme === "system" ? (prefersDark ? "dark" : "light") : theme;
    const root = document.documentElement;
    root.classList.toggle("dark", resolved === "dark");
    root.classList.toggle("light", resolved === "light");
    root.dataset.theme = resolved;
  } catch (err) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} min-h-screen antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
