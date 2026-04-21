import Image from "next/image";
import { notFound } from "next/navigation";
import { getTeam, teams } from "@/lib/teams";
import FubadeWidget from "@/components/FubadeWidget";
import BackLink from "@/components/BackLink";

export function generateStaticParams() {
  return teams.map((t) => ({ slug: t.slug }));
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const team = getTeam(slug);
  if (!team) notFound();

  return (
    <main className="mx-auto w-full max-w-md px-5 pb-16 pt-6">
      <div className="mb-6">
        <BackLink />
      </div>

      <header className="mb-8 flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0">
          <Image
            src="/logo.png"
            alt=""
            fill
            sizes="64px"
            className="object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-widest text-tbr-red">
            {team.league}
          </p>
          <h1 className="truncate text-2xl font-black">{team.name}</h1>
        </div>
      </header>

      <section className="fade-in-up mb-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-tbr-cream/60">
          Nächstes Spiel
        </h2>
        <FubadeWidget id={team.widgetNextMatchId} type="next-match" />
      </section>

      <a
        href={team.fussballDeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fade-in-up mt-2 flex items-center justify-between rounded-2xl bg-tbr-red px-5 py-4 font-semibold text-white shadow-lg shadow-tbr-red/20 transition active:scale-[0.98]"
        style={{ animationDelay: "120ms" }}
      >
        <span className="flex items-center gap-3">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M3 3v18h18" />
            <rect x="7" y="10" width="3" height="8" rx="0.5" />
            <rect x="12" y="6" width="3" height="12" rx="0.5" />
            <rect x="17" y="13" width="3" height="5" rx="0.5" />
          </svg>
          Tabelle auf Fußball.de
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
    </main>
  );
}
