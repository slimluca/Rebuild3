type DomandeHeroProps = {
  kicker: string;
  title: string;
  intro: string;
};

export function DomandeHero({ kicker, title, intro }: DomandeHeroProps) {
  return (
    <section className="siti-hero luxury-hero">
      <div className="container siti-hero-inner">
        <div className="siti-hero-copy">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-badges" aria-label="Criteri della risposta">
            <span>Risposta diretta</span>
            <span>Privacy</span>
            <span>Scelta pratica</span>
          </div>
        </div>
        <div className="siti-hero-panel">
          <span className="panel-label">Domanda frequente</span>
          <p>
            Risposta rapida per orientarti prima di registrarti, pagare, usare crediti o entrare
            in una piattaforma webcam live.
          </p>
        </div>
      </div>
    </section>
  );
}
