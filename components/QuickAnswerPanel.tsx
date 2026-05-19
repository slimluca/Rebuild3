type QuickAnswerPanelProps = {
  answer: string;
};

export function QuickAnswerPanel({ answer }: QuickAnswerPanelProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="quick-answer-panel">
          <p className="section-kicker">Risposta rapida</p>
          <h2>In breve</h2>
          <p>{answer}</p>
        </div>
      </div>
    </section>
  );
}
