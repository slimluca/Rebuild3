type CostPrivacyPanelProps = {
  title: string;
  note: string;
};

export function CostPrivacyPanel({ title, note }: CostPrivacyPanelProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="decision-panel">
          <p className="section-kicker">Nota costi e privacy</p>
          <h2>{title}</h2>
          <p>{note}</p>
        </div>
      </div>
    </section>
  );
}
