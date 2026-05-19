import Link from "next/link";

type ConfrontiCard = {
  href: string;
  title: string;
  copy: string;
};

type ConfrontiCardGridProps = {
  id?: string;
  title?: string;
  copy?: string;
  cards: ConfrontiCard[];
};

export function ConfrontiCardGrid({
  id = "confronti-card-grid-title",
  title,
  copy,
  cards
}: ConfrontiCardGridProps) {
  return (
    <section className="section" aria-labelledby={title ? id : undefined}>
      <div className="container">
        {title ? (
          <div className="section-header">
            <div>
              <p className="section-kicker">Confronti utili</p>
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
                Apri confronto
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
