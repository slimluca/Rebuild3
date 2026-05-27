type DecisionChecklistProps = {
  title: string;
  items: string[];
};

export function DecisionChecklist({ title, items }: DecisionChecklistProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="filter-guide-panel">
          <div>
            <p className="section-kicker">Checklist pratica</p>
            <h2>{title}</h2>
            <p>Usa questi controlli prima di creare un account, inserire dati o usare funzioni private.</p>
          </div>
          <ol>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
