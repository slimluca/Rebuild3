type DirectAnswerPanelProps = {
  answer: string;
};

export function DirectAnswerPanel({ answer }: DirectAnswerPanelProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="quick-answer-panel">
          <p className="section-kicker">Risposta diretta</p>
          <h2>In breve</h2>
          <p>{answer}</p>
        </div>
      </div>
    </section>
  );
}
