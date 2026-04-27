"use client";

import { useEffect } from "react";

type WidgetType = "next-match" | "last-match" | "news";

type Props = {
  id: string;
  type: WidgetType;
};

export default function FussballdeWidget({ id, type }: Props) {
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
    <div
      className="fussballde_widget"
      data-id={id}
      data-type={type}
      style={{ width: "100%" }}
    />
  );
}
