export type Team = {
  slug: string;
  name: string;
  shortName: string;
  league: string;
  widgetNextMatchId: string;
  fussballDeUrl: string;
};

export const teams: Team[] = [
  {
    slug: "erste",
    name: "TB Rohrbach",
    shortName: "TBR I",
    league: "1. Mannschaft",
    widgetNextMatchId: "65f3086b-023f-4ecd-a5ea-48428149ecc2",
    fussballDeUrl:
      "https://www.fussball.de/mannschaft/tb-rohrbach-tb-rohrbach-boxberg-baden/-/saison/2526/team-id/011MID43G0000000VTVG0001VTR8C1K7",
  },
  {
    slug: "zweite",
    name: "TB Rohrbach II",
    shortName: "TBR II",
    league: "2. Mannschaft",
    widgetNextMatchId: "6f4f3a60-8731-4c4e-b3ce-0bd1745f275e",
    fussballDeUrl:
      "https://www.fussball.de/mannschaft/tb-rohrbach-2-tb-rohrbach-boxberg-baden/-/saison/2526/team-id/011MIFFLSS000000VTVG0001VTR8C1K7",
  },
];

export function getTeam(slug: string): Team | undefined {
  return teams.find((t) => t.slug === slug);
}
