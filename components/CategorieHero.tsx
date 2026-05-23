type CategorieHeroProps = {
  kicker: string;
  title: string;
  intro: string;
};

export function CategorieHero({ kicker, title, intro }: CategorieHeroProps) {
  return (
    <section className="siti-hero luxury-hero">
      <div className="container siti-hero-inner">
        <div className="siti-hero-copy">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-badges" aria-label="Criteri editoriali">
            <span>Dati reali</span>
            <span>Filtri verificati</span>
            <span>Nessun dato inventato</span>
          </div>
        </div>
        <div className="siti-hero-panel">
          <span className="panel-label">Scoperta modelli</span>
          <p>
            Le categorie aiutano a orientarsi tra profili live, filtri e preferenze, ma le schede
            visibili restano basate solo su dati reali della piattaforma live.
          </p>
        </div>
      </div>
    </section>
  );
}


