type BuyerIntentPanelProps = {
  title: string;
  copy: string;
};

export function BuyerIntentPanel({ title, copy }: BuyerIntentPanelProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="quick-answer-panel">
          <p className="section-kicker">Intento decisionale</p>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
      </div>
    </section>
  );
}
