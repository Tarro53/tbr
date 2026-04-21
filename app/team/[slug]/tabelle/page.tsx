import Image from "next/image";
import { notFound } from "next/navigation";
import { getTeam, teams } from "@/lib/teams";
import FubadeWidget from "@/components/FubadeWidget";
import BackLink from "@/components/BackLink";

export function generateStaticParams() {
  return teams.map((t) => ({ slug: t.slug }));
}

export default async function TablePage({
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
        <BackLink href={`/team/${team.slug}`} label="Zurück zum Team" />
      </div>

      <header className="mb-6 flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0">
          <Image
            src="/logo.png"
            alt=""
            fill
            sizes="56px"
            className="object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-widest text-tbr-red">
            Tabelle
          </p>
          <h1 className="truncate text-2xl font-black">{team.name}</h1>
        </div>
      </header>

      <p className="mb-3 text-xs text-tbr-cream/50">
        {team.shortName} ist in der Tabelle hervorgehoben.
      </p>

      <section className="fade-in-up">
        <FubadeWidget
          id={team.teamId}
          type="club-standings"
          fallbackUrl={team.fussballDeUrl}
          fallbackLabel="Tabelle auf Fußball.de"
        />
      </section>
    </main>
  );
}
