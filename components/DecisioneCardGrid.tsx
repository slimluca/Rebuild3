import Link from "next/link";
import type { DecisioneLink } from "@/lib/decisione-pages";

type DecisioneCardGridProps = {
  title?: string;
  copy?: string;
  cards: DecisioneLink[];
};

export function DecisioneCardGrid({ title, copy, cards }: DecisioneCardGridProps) {
  return (
    <section className="section">
      <div className="container">
        {title ? (
          <div className="section-header">
            <div>
              <p className="section-kicker">Guide alla scelta</p>
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
                Apri guida
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
