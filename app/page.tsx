import Link from "next/link";
import Image from "next/image";
import { teams } from "@/lib/teams";

export default function HomePage() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      {/* Background logo with glow + orbiting spark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="relative aspect-square w-[85vw] max-w-[520px]">
          <Image
            src="/logo.png"
            alt=""
            fill
            priority
            sizes="85vw"
            className="bg-logo object-contain"
          />
          <div className="spark-orbit">
            <span className="spark" />
          </div>
        </div>
      </div>

      {/* Foreground */}
      <main className="relative z-10 mx-auto flex min-h-svh w-full max-w-md flex-col px-5 pb-10 pt-16">
        <nav className="mt-auto mb-auto flex flex-col gap-4">
          {teams.map((team, i) => (
            <Link
              key={team.slug}
              href={`/team/${team.slug}`}
              className="fade-in-up group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition active:scale-[0.98]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-y-0 left-0 w-1.5 bg-tbr-red" />
              <div className="flex items-center gap-4 pl-3">
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
      </main>
    </div>
  );
}
