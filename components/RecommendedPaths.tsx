import Link from "next/link";
import type { RecommendedPath } from "@/lib/recommended-paths";

type RecommendedPathsProps = {
  title?: string;
  copy?: string;
  cards: RecommendedPath[];
};

export function RecommendedPaths({
  title = "Percorsi consigliati",
  copy = "Link interni selezionati per continuare la scelta senza perdere il contesto.",
  cards
}: RecommendedPathsProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Collegamenti interni</p>
            <h2>{title}</h2>
            <p className="section-copy">{copy}</p>
          </div>
        </div>
        <div className="siti-card-grid">
          {cards.map((card) => (
            <article className="siti-card" key={card.href}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <Link className="text-link" href={card.href}>
                Apri percorso
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
