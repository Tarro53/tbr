import { fupaClubUrl } from "@/lib/teams";

type Props = {
  id: string;
};

/**
 * FuPa embed — rendert eine <div id="fp-widget_root-{ID}">. Das Script
 * (`<FupaScript />` auf Seitenebene) scannt diese Divs und ersetzt sie.
 */
export default function FupaWidget({ id }: Props) {
  return (
    <div id={`fp-widget_root-${id}`}>
      <a href={fupaClubUrl} target="_blank" rel="noopener noreferrer">
        TB Rohrbach/Boxberg auf FuPa
      </a>
    </div>
  );
}
