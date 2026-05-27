import Link from "next/link";
import type { DomandaLink } from "@/lib/domande-pages";

type RelatedQuestionPanelProps = {
  questions: DomandaLink[];
};

export function RelatedQuestionPanel({ questions }: RelatedQuestionPanelProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Domande correlate</p>
            <h2>Altre risposte utili</h2>
          </div>
        </div>
        <div className="siti-card-grid">
          {questions.map((question) => (
            <article className="siti-card" key={question.href}>
              <h3>{question.title}</h3>
              <p>{question.copy}</p>
              <Link className="text-link" href={question.href}>
                Apri domanda
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
