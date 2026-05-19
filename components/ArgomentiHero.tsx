type ArgomentiHeroProps = {
  kicker: string;
  title: string;
  intro: string;
};

export function ArgomentiHero({ kicker, title, intro }: ArgomentiHeroProps) {
  return (
    <section className="siti-hero luxury-hero">
      <div className="container siti-hero-inner">
        <div className="siti-hero-copy">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-badges" aria-label="Intento della pagina">
            <span>Risposta rapida</span>
            <span>Modelli live</span>
            <span>Link di approfondimento</span>
          </div>
        </div>
        <div className="siti-hero-panel">
          <span className="panel-label">Pagina argomento</span>
          <p>
            Landing page pensata per rispondere a una ricerca specifica e portare verso guide,
            confronti, categorie e accessi partner già pubblicati.
          </p>
        </div>
      </div>
    </section>
  );
}
