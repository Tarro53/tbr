"use client";

import { useEffect } from "react";

type WidgetType = "next-match" | "last-match";

type Props = {
  id: string;
  type: WidgetType;
};

/**
 * Fußball.de offizielles Widget.
 * Das Script scannt alle `.fussballde_widget` Divs im DOM und ersetzt sie
 * durch ein iFrame. Bei Client-Navigation muss ein frisches Script-Tag
 * eingefügt werden, damit es erneut scannt.
 */
export default function FubadeWidget({ id, type }: Props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.fussball.de/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, [id, type]);

  return (
    <div className="fubade-widget-wrap">
      <div
        className="fussballde_widget"
        data-id={id}
        data-type={type}
        style={{ width: "100%" }}
      />
    </div>
  );
}
