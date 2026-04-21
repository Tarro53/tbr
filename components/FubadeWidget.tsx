"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

type FubadeType =
  | "team-matches"
  | "club-matches"
  | "club-standings";

type Props = {
  id: string;
  type: FubadeType;
  fallbackUrl: string;
  fallbackLabel?: string;
};

/**
 * Fußball.de offizielles Embed-Widget.
 * Snippet-Format (aus fussball.de/widgets):
 *   <div id="TEAM-ID" class="fubade" data-type="team-matches" data-responsive="true"></div>
 *   <script src="https://www.fussball.de/static.widget/fubade.js"></script>
 *
 * Das Script scannt beim Laden alle `.fubade` Divs. Bei Client-Navigation
 * muss es erneut getriggert werden — deshalb laden wir es pro Widget neu.
 */
export default function FubadeWidget({
  id,
  type,
  fallbackUrl,
  fallbackLabel = "Auf Fußball.de öffnen",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Bei Client-Navigation: Script erneut ausführen, falls schon geladen.
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="fussball.de/static.widget/fubade.js"]'
    );
    if (existing) {
      const fresh = document.createElement("script");
      fresh.src = existing.src;
      fresh.async = true;
      document.body.appendChild(fresh);
      return () => {
        fresh.remove();
      };
    }
  }, [id, type]);

  return (
    <div className="space-y-3">
      <div className="fubade-widget-wrap" ref={containerRef}>
        <div
          id={id}
          className="fubade"
          data-type={type}
          data-responsive="true"
        />
        <Script
          src="https://www.fussball.de/static.widget/fubade.js"
          strategy="afterInteractive"
        />
      </div>
      <a
        href={fallbackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-sm text-tbr-cream/70 underline underline-offset-4 hover:text-tbr-cream"
      >
        {fallbackLabel}
      </a>
    </div>
  );
}
