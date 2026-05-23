type RicercheHeroProps = {
  kicker: string;
  title: string;
  intro: string;
};

export function RicercheHero({ kicker, title, intro }: RicercheHeroProps) {
  return (
    <section className="siti-hero luxury-hero">
      <div className="container siti-hero-inner">
        <div className="siti-hero-copy">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-badges" aria-label="Criteri della pagina">
            <span>Intento chiaro</span>
            <span>Modelli live</span>
            <span>Scelta discreta</span>
          </div>
        </div>
        <div className="siti-hero-panel">
          <span className="panel-label">Ricerca utile</span>
          <p>
            Pagina rapida per orientarti tra anteprime, accesso mobile, privacy e percorsi di
            approfondimento già pubblicati.
          </p>
        </div>
      </div>
    </section>
  );
}
