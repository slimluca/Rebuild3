import Link from "next/link";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { QuizHero } from "@/components/QuizHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import type { QuizPage } from "@/lib/quiz-pages";

type QuizPageLayoutProps = {
  page: QuizPage;
};

export function QuizPageLayout({ page }: QuizPageLayoutProps) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(page.path, page.h1, page.description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Quiz", path: "/quiz" },
            { name: page.navTitle, path: page.path }
          ])
        ]}
      />
      <QuizHero kicker={page.kicker} title={page.h1} intro={page.intro} />
      <ModelGrid />
      <InteractiveQuiz questions={page.questions} results={page.results} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Percorsi utili</p>
            <h2>Vuoi confrontare prima di entrare?</h2>
            <p>Apri le guide decisione o le domande frequenti per chiarire costi, privacy e registrazione.</p>
            <div className="hero-actions">
              <Link className="button-secondary" href="/decisione">
                Guide decisione
              </Link>
              <Link className="button-secondary" href="/domande">
                Domande frequenti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
