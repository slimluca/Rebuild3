type SitiHeroProps = {
  kicker: string;
  title: string;
  intro: string;
};

export function SitiHero({ kicker, title, intro }: SitiHeroProps) {
  return (
    <section className="siti-hero">
      <div className="container">
        <div className="siti-hero-panel">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </div>
    </section>
  );
}
