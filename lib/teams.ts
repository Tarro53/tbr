export type Team = {
  slug: string;
  name: string;
  shortName: string;
  league: string;
  teamId: string;
  fussballDeUrl: string;
};

export const teams: Team[] = [
  {
    slug: "erste",
    name: "TB Rohrbach",
    shortName: "TBR I",
    league: "1. Mannschaft",
    teamId: "011MID43G0000000VTVG0001VTR8C1K7",
    fussballDeUrl:
      "https://www.fussball.de/mannschaft/tb-rohrbach-tb-rohrbach-boxberg-baden/-/saison/2526/team-id/011MID43G0000000VTVG0001VTR8C1K7",
  },
  {
    slug: "zweite",
    name: "TB Rohrbach II",
    shortName: "TBR II",
    league: "2. Mannschaft",
    teamId: "011MIFFLSS000000VTVG0001VTR8C1K7",
    fussballDeUrl:
      "https://www.fussball.de/mannschaft/tb-rohrbach-2-tb-rohrbach-boxberg-baden/-/saison/2526/team-id/011MIFFLSS000000VTVG0001VTR8C1K7",
  },
];

export function getTeam(slug: string): Team | undefined {
  return teams.find((t) => t.slug === slug);
}
