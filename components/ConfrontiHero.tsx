type ConfrontiHeroProps = {
  kicker: string;
  title: string;
  intro: string;
};

export function ConfrontiHero({ kicker, title, intro }: ConfrontiHeroProps) {
  return (
    <section className="siti-hero">
      <div className="container">
        <div className="siti-hero-panel">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-badges" aria-label="Criteri del confronto">
            <span>Nessun voto inventato</span>
            <span>Matrice qualitativa</span>
            <span>Modelli live subito sotto</span>
          </div>
        </div>
      </div>
    </section>
  );
}
