type TrafficIntentPanelProps = {
  title: string;
  items: string[];
  noteTitle: string;
  note: string;
};

export function TrafficIntentPanel({ title, items, noteTitle, note }: TrafficIntentPanelProps) {
  return (
    <section className="section">
      <div className="container argomenti-path-grid">
        <div className="filter-guide-panel">
          <div>
            <p className="section-kicker">Guida pratica</p>
            <h2>{title}</h2>
            <p>Usa questi criteri prima di registrarti o usare funzioni private.</p>
          </div>
          <ol>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="decision-panel">
          <p className="section-kicker">Nota editoriale</p>
          <h2>{noteTitle}</h2>
          <p>{note}</p>
        </div>
      </div>
    </section>
  );
}
