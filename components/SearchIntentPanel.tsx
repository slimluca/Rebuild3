type SearchIntentPanelProps = {
  title: string;
  items: string[];
};

export function SearchIntentPanel({ title, items }: SearchIntentPanelProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="filter-guide-panel">
          <div>
            <p className="section-kicker">Cosa aspettarti</p>
            <h2>{title}</h2>
            <p>Questi punti aiutano a distinguere promessa, anteprima e uso reale della piattaforma.</p>
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
