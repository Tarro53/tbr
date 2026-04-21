import Link from "next/link";
import Image from "next/image";
import { teams } from "@/lib/teams";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col px-5 pb-10 pt-10">
      <header className="mb-10 flex flex-col items-center text-center">
        <div className="relative h-28 w-28 overflow-hidden">
          <Image
            src="/logo.png"
            alt="TB Rohrbach Wappen"
            fill
            priority
            sizes="112px"
            className="object-contain"
          />
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-tight">
          TB Rohrbach
        </h1>
        <p className="mt-1 text-sm text-tbr-cream/60">
          Spielplan &amp; Tabelle
        </p>
      </header>

      <nav className="flex flex-1 flex-col gap-4">
        {teams.map((team, i) => (
          <Link
            key={team.slug}
            href={`/team/${team.slug}`}
            className="fade-in-up group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 transition active:scale-[0.98]"
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
                  className="object-contain"
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
                className="shrink-0 text-tbr-cream/40 transition group-hover:translate-x-0.5 group-hover:text-tbr-cream"
                aria-hidden
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
        ))}
      </nav>

      <footer className="mt-10 text-center text-xs text-tbr-cream/40">
        Daten von fussball.de
      </footer>
    </main>
  );
}
