// Centered decorative divider: [hairline] ◇ • ◇ [hairline]
// `light` variant is used over the dark hero photo.

export default function DividerMotif({
  light = false,
  narrow = false,
}: {
  light?: boolean;
  narrow?: boolean;
}) {
  const cls = [
    "divider",
    light ? "divider--light" : "",
    narrow ? "divider--narrow" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} aria-hidden="true">
      <span className="divider__line" />
      <span className="divider__diamond" />
      <span className="divider__dot" />
      <span className="divider__diamond" />
      <span className="divider__line divider__line--right" />
    </div>
  );
}
