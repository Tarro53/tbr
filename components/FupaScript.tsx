"use client";

import { useEffect } from "react";

/**
 * Lädt das FuPa-Widget-Script einmal pro Seitenbesuch. Bei Client-Navigation
 * wird ein neues Script-Tag angehängt, damit die Widget-Divs der neuen Seite
 * gescannt werden.
 */
export default function FupaScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget-api.fupa.net/vendor/widget.js?v1";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);
  return null;
}
