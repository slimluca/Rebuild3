type QuizHeroProps = {
  kicker: string;
  title: string;
  intro: string;
};

export function QuizHero({ kicker, title, intro }: QuizHeroProps) {
  return (
    <section className="siti-hero luxury-hero">
      <div className="container siti-hero-inner">
        <div className="siti-hero-copy">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-badges" aria-label="Caratteristiche del quiz">
            <span>Nessun dato salvato</span>
            <span>Risultato locale</span>
            <span>Scelta discreta</span>
          </div>
        </div>
        <div className="siti-hero-panel">
          <span className="panel-label">Quiz rapido</span>
          <p>
            Rispondi senza inserire dati personali. Il risultato serve solo a suggerire pagine
            utili e percorsi di approfondimento.
          </p>
        </div>
      </div>
    </section>
  );
}
