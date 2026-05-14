import Link from "next/link";

type GuidaCard = {
  href: string;
  title: string;
  copy: string;
};

type GuidaCardGridProps = {
  id?: string;
  title?: string;
  copy?: string;
  cards: GuidaCard[];
};

export function GuidaCardGrid({ id = "guida-card-grid-title", title, copy, cards }: GuidaCardGridProps) {
  return (
    <section className="section" aria-labelledby={title ? id : undefined}>
      <div className="container">
        {title ? (
          <div className="section-header">
            <div>
              <p className="section-kicker">Guide pratiche</p>
              <h2 id={id}>{title}</h2>
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
