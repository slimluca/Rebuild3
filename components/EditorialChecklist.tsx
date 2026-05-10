type EditorialChecklistProps = {
  title: string;
  intro: string;
  items: string[];
};

export function EditorialChecklist({ title, intro, items }: EditorialChecklistProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="check-panel">
          <div>
            <p className="section-kicker">Lista pratica</p>
            <h2>{title}</h2>
            <p>{intro}</p>
          </div>
          <ul className="check-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
