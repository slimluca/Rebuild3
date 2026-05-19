type RelatedPathPanelProps = {
  title: string;
  steps: string[];
  noteTitle: string;
  note: string;
};

export function RelatedPathPanel({ title, steps, noteTitle, note }: RelatedPathPanelProps) {
  return (
    <section className="section">
      <div className="container argomenti-path-grid">
        <div className="decision-panel">
          <p className="section-kicker">Percorso decisionale</p>
          <h2>{title}</h2>
          <ol className="plain-step-list">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="decision-panel">
          <p className="section-kicker">Nota pratica</p>
          <h2>{noteTitle}</h2>
          <p>{note}</p>
        </div>
      </div>
    </section>
  );
}
