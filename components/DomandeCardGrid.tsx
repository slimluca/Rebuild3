import Link from "next/link";
import type { DomandaLink } from "@/lib/domande-pages";

type DomandeCardGridProps = {
  title?: string;
  copy?: string;
  cards: DomandaLink[];
};

export function DomandeCardGrid({ title, copy, cards }: DomandeCardGridProps) {
  return (
    <section className="section">
      <div className="container">
        {title ? (
          <div className="section-header">
            <div>
              <p className="section-kicker">Domande utili</p>
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
                Leggi risposta
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
