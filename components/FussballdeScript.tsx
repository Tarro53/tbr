"use client";

import { useEffect } from "react";

/**
 * Lädt das fussball.de-Widget-Script einmal pro Seitenbesuch. Bei
 * Client-Navigation wird ein neues Script-Tag angehängt, damit die
 * Widget-Divs der neuen Seite gescannt werden.
 */
export default function FussballdeScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.fussball.de/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);
  return null;
}
