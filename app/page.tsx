import Link from "next/link";
import Image from "next/image";
import { teams } from "@/lib/teams";

const externalLinks = [
  {
    label: "Fanshop",
    href: "https://tbrohrbach.fan12.de/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 7h12l-1 13H7L6 7z" />
        <path d="M9 7a3 3 0 016 0" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tbrohrbach1889/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Webseite",
    href: "https://www.tbrohrbach.de/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a13 13 0 010 18" />
        <path d="M12 3a13 13 0 000 18" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col px-5 pb-10 pt-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black tracking-tight">TB Rohrbach</h1>
        <p className="mt-2 text-sm tracking-wide text-tbr-cream/70">
          Spielplan, Tabelle &amp; Kader
        </p>
      </header>

      <nav className="flex flex-col gap-4">
        {teams.map((team, i) => (
          <Link
            key={team.slug}
            href={`/team/${team.slug}`}
            className="fade-in-up group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition active:scale-[0.98]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-tbr-red" />
            <div className="flex items-center gap-4 pl-3">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  sizes="56px"
                  className="crest-glow object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-widest text-tbr-red">
                  {team.league}
                </p>
                <p className="truncate text-lg font-semibold">{team.name}</p>
              </div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-tbr-cream/50 transition group-hover:translate-x-0.5 group-hover:text-tbr-cream"
                aria-hidden
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
        ))}
      </nav>

      <nav className="mt-auto grid grid-cols-3 gap-3 pt-10">
        {externalLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-in-up group relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-3 transition active:scale-[0.96]"
            style={{ animationDelay: `${(teams.length + i) * 80}ms` }}
          >
            <span className="flex h-7 w-7 items-center justify-center text-tbr-red">
              {link.icon}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-tbr-cream/70">
              {link.label}
            </span>
          </a>
        ))}
      </nav>
    </main>
  );
}
