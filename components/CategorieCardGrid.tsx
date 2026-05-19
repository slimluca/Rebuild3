import Link from "next/link";
import type { CategoryLink } from "@/lib/categorie-pages";

type CategorieCardGridProps = {
  id?: string;
  title?: string;
  copy?: string;
  cards: CategoryLink[];
};

export function CategorieCardGrid({
  id = "categorie-card-grid-title",
  title,
  copy,
  cards
}: CategorieCardGridProps) {
  return (
    <section className="section" aria-labelledby={title ? id : undefined}>
      <div className="container">
        {title ? (
          <div className="section-header">
            <div>
              <p className="section-kicker">Categorie modelli</p>
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
                Apri categoria
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
