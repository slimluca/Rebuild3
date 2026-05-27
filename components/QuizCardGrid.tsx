import Link from "next/link";
import type { QuizLink } from "@/lib/quiz-pages";

type QuizCardGridProps = {
  title?: string;
  copy?: string;
  cards: QuizLink[];
};

export function QuizCardGrid({ title, copy, cards }: QuizCardGridProps) {
  return (
    <section className="section">
      <div className="container">
        {title ? (
          <div className="section-header">
            <div>
              <p className="section-kicker">Quiz rapidi</p>
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
                Apri quiz
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
