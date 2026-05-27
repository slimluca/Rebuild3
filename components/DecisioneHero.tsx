type DecisioneHeroProps = {
  kicker: string;
  title: string;
  intro: string;
};

export function DecisioneHero({ kicker, title, intro }: DecisioneHeroProps) {
  return (
    <section className="siti-hero luxury-hero">
      <div className="container siti-hero-inner">
        <div className="siti-hero-copy">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-badges" aria-label="Criteri decisionali">
            <span>Costi chiari</span>
            <span>Privacy</span>
            <span>Scelta guidata</span>
          </div>
        </div>
        <div className="siti-hero-panel">
          <span className="panel-label">Prima di registrarti</span>
          <p>
            Una pagina decisionale per controllare crediti, pagamenti, privacy, accesso mobile e
            segnali di affidabilità prima di entrare.
          </p>
        </div>
      </div>
    </section>
  );
}
