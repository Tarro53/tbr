export type Team = {
  slug: string;
  name: string;
  shortName: string;
  league: string;
  fussballdeNextMatchId: string;
  fussballdeNewsId: string;
  fupaTabelleId: string;
  fupaKaderId: string;
};

export const fupaClubUrl = "https://www.fupa.net/club/tb-rohrbachboxberg";

export const teams: Team[] = [
  {
    slug: "erste",
    name: "TB Rohrbach",
    shortName: "TBR I",
    league: "1. Mannschaft",
    fussballdeNextMatchId: "65f3086b-023f-4ecd-a5ea-48428149ecc2",
    fussballdeNewsId: "1281a34d-83fb-48e3-b57e-7c9d9cdd720e",
    fupaTabelleId: "3CfN3hokAPT1vHBkvlVjHhqAgzB",
    fupaKaderId: "3CfMntfKfn4SbhOQMIQ08aj4Nit",
  },
  {
    slug: "zweite",
    name: "TB Rohrbach II",
    shortName: "TBR II",
    league: "2. Mannschaft",
    fussballdeNextMatchId: "6f4f3a60-8731-4c4e-b3ce-0bd1745f275e",
    fussballdeNewsId: "05d8a9b6-f7fd-4ef0-8dbd-92b5eb17622b",
    fupaTabelleId: "3CfNNKcNb5z4dBJjTroyFz7EJlh",
    fupaKaderId: "3CfNTfPhub3aLYuhtjaNyUjMHCV",
  },
];

export function getTeam(slug: string): Team | undefined {
  return teams.find((t) => t.slug === slug);
}
