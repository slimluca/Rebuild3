type DecisionPanelProps = {
  summary: string;
};

export function DecisionPanel({ summary }: DecisionPanelProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="decision-panel">
          <p className="section-kicker">Sintesi rapida</p>
          <h2>Come leggere questo confronto</h2>
          <p>{summary}</p>
        </div>
      </div>
    </section>
  );
}
