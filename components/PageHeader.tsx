import DividerMotif from "./DividerMotif";

// Standard interior-page header: divider motif + script kicker + H1 (+ optional place line).
export default function PageHeader({
  script,
  title,
  place,
}: {
  script: string;
  title: string;
  place?: string;
}) {
  return (
    <section className="page-header">
      <DividerMotif />
      <div className="page-header__body">
        <div className="page-header__script">{script}</div>
        <h1 className="page-header__title">{title}</h1>
        {place ? <div className="page-header__place">{place}</div> : null}
      </div>
    </section>
  );
}
