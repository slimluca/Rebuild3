type CategoryFilterGuideProps = {
  title: string;
  intro: string;
  steps: string[];
};

export function CategoryFilterGuide({ title, intro, steps }: CategoryFilterGuideProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="filter-guide-panel">
          <div>
            <p className="section-kicker">Guida ai filtri</p>
            <h2>{title}</h2>
            <p>{intro}</p>
          </div>
          <ol>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
