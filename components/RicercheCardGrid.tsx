import Link from "next/link";
import type { RicercaLink } from "@/lib/ricerche-pages";

type RicercheCardGridProps = {
  title?: string;
  copy?: string;
  cards: RicercaLink[];
};

export function RicercheCardGrid({ title, copy, cards }: RicercheCardGridProps) {
  return (
    <section className="section">
      <div className="container">
        {title ? (
          <div className="section-header">
            <div>
              <p className="section-kicker">Ricerche utili</p>
              <h2>{title}</h2>
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
                Apri ricerca
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
