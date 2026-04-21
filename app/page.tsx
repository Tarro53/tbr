import Link from "next/link";
import Image from "next/image";
import { teams } from "@/lib/teams";

// Wappen-Outline für die Funken-Bahn. Koordinaten in viewBox 100×120.
// Flach oben, seitlich gerade, unten spitz zulaufend.
const SHIELD_PATH =
  "M 5 4 L 95 4 L 95 55 Q 95 96 50 116 Q 5 96 5 55 L 5 4 Z";

export default function HomePage() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      {/* Background wappen + glow + orbiting spark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="relative aspect-[5/6] w-[110vw] max-w-[760px]">
          <Image
            src="/logo.png"
            alt=""
            fill
            priority
            sizes="110vw"
            className="bg-logo object-contain"
          />
          <svg
            className="spark-svg absolute inset-0 h-full w-full"
            viewBox="0 0 100 120"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <path id="shield-path" d={SHIELD_PATH} />
            </defs>
            <circle r="1.6" fill="#ff5252" className="spark-dot">
              <animateMotion dur="6s" repeatCount="indefinite">
                <mpath href="#shield-path" />
              </animateMotion>
            </circle>
          </svg>
        </div>
      </div>

      {/* Foreground */}
      <main className="relative z-10 mx-auto flex min-h-svh w-full max-w-md flex-col px-5 pb-10 pt-12">
        <header className="mb-auto text-center">
          <h1 className="text-4xl font-black tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            TB Rohrbach
          </h1>
          <p className="mt-2 text-sm tracking-wide text-tbr-cream/70">
            Spielplan, Tabelle &amp; Kader
          </p>
        </header>

        <nav className="mt-auto flex flex-col gap-4 pb-6">
          {teams.map((team, i) => (
            <Link
              key={team.slug}
              href={`/team/${team.slug}`}
              className="fade-in-up group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.015] p-5 backdrop-blur-[2px] transition active:scale-[0.98]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-tbr-red/90" />
              <div className="flex items-center gap-4 pl-3">
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-widest text-tbr-red">
                    {team.league}
                  </p>
                  <p className="truncate text-lg font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                    {team.name}
                  </p>
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
                  className="shrink-0 text-tbr-cream/60 transition group-hover:translate-x-0.5 group-hover:text-tbr-cream"
                  aria-hidden
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
