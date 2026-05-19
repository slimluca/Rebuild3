type GuidaHeroProps = {
  kicker: string;
  title: string;
  intro: string;
};

export function GuidaHero({ kicker, title, intro }: GuidaHeroProps) {
  return (
    <section className="siti-hero">
      <div className="container">
        <div className="siti-hero-panel">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-badges" aria-label="Criteri della guida">
            <span>Consigli pratici</span>
            <span>Tono discreto</span>
            <span>Scelta prima dell&apos;accesso</span>
          </div>
        </div>
      </div>
    </section>
  );
}
