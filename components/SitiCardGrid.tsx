import Link from "next/link";

type SitiCard = {
  href: string;
  title: string;
  copy: string;
};

type SitiCardGridProps = {
  title?: string;
  copy?: string;
  cards: SitiCard[];
};

export function SitiCardGrid({ title, copy, cards }: SitiCardGridProps) {
  return (
    <section className="section" aria-labelledby={title ? "siti-card-grid-title" : undefined}>
      <div className="container">
        {title ? (
          <div className="section-header">
            <div>
              <p className="section-kicker">Percorsi editoriali</p>
              <h2 id="siti-card-grid-title">{title}</h2>
              {copy ? <p className="section-copy">{copy}</p> : null}
            </div>
          </div>
        ) : null}
        <div className="siti-card-grid">
          {cards.map((card) => (
            <article className="siti-card" key={card.href}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <Link className="text-link" href={card.href}>
                Leggi la guida
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
