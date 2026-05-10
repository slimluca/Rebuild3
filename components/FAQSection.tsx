type FAQSectionProps = {
  items: Array<{
    question: string;
    answer: string;
  }>;
};

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className="section" aria-labelledby="domande-title">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Domande frequenti</p>
            <h2 id="domande-title">Risposte rapide prima di scegliere</h2>
          </div>
        </div>
        <div className="faq-grid">
          {items.map((item) => (
            <article className="faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
