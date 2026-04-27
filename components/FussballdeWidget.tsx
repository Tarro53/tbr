type WidgetType = "next-match" | "last-match" | "news";

type Props = {
  id: string;
  type: WidgetType;
};

export default function FussballdeWidget({ id, type }: Props) {
  return (
    <div
      className="fussballde_widget"
      data-id={id}
      data-type={type}
      style={{ width: "100%" }}
    />
  );
}
