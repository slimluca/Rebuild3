type CategoryInsightPanelProps = {
  title: string;
  insight: string;
};

export function CategoryInsightPanel({ title, insight }: CategoryInsightPanelProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="decision-panel category-insight-panel">
          <p className="section-kicker">Nota editoriale</p>
          <h2>{title}</h2>
          <p>{insight}</p>
        </div>
      </div>
    </section>
  );
}
