export type Team = {
  slug: string;
  name: string;
  shortName: string;
  league: string;
  fupaSpielplanId: string;
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
    fupaSpielplanId: "3CfMZl7ab5mgQUlXRIzaLneEMkM",
    fupaTabelleId: "3CfN3hokAPT1vHBkvlVjHhqAgzB",
    fupaKaderId: "3CfMntfKfn4SbhOQMIQ08aj4Nit",
  },
  {
    slug: "zweite",
    name: "TB Rohrbach II",
    shortName: "TBR II",
    league: "2. Mannschaft",
    fupaSpielplanId: "3CfNEeE25aY6DwbefmQdgA5wxfa",
    fupaTabelleId: "3CfNNKcNb5z4dBJjTroyFz7EJlh",
    fupaKaderId: "3CfNTfPhub3aLYuhtjaNyUjMHCV",
  },
];

export function getTeam(slug: string): Team | undefined {
  return teams.find((t) => t.slug === slug);
}
