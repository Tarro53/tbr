import Image from "next/image";
import { notFound } from "next/navigation";
import { getTeam, teams, fupaClubUrl } from "@/lib/teams";
import FupaWidget from "@/components/FupaWidget";
import FupaScript from "@/components/FupaScript";
import FussballdeWidget from "@/components/FussballdeWidget";
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

      <section className="fade-in-up mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-tbr-cream/60">
          Nächster Spieltag
        </h2>
        <FussballdeWidget id={team.fussballdeNextMatchId} type="next-match" />
      </section>

      <section className="fade-in-up mb-10" style={{ animationDelay: "80ms" }}>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-tbr-cream/60">
          Tabelle
        </h2>
        <FupaWidget id={team.fupaTabelleId} />
      </section>

      <section className="fade-in-up mb-6" style={{ animationDelay: "160ms" }}>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-tbr-cream/60">
          Kader
        </h2>
        <FupaWidget id={team.fupaKaderId} />
      </section>

      <a
        href={fupaClubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-sm text-tbr-cream/70 transition active:scale-[0.98]"
      >
        Auf FuPa öffnen
        <svg
          width="16"
          height="16"
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

      <FupaScript />
    </main>
  );
}
