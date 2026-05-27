import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { QuizCardGrid } from "@/components/QuizCardGrid";
import { QuizHero } from "@/components/QuizHero";
import { RecommendedPaths } from "@/components/RecommendedPaths";
import { recommendedPathGroups } from "@/lib/recommended-paths";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { quizHubCards } from "@/lib/quiz-pages";

const title = "Quiz Chat Webcam: Scegli il Percorso Più Adatto";
const description =
  "Quiz italiani per capire quale chat webcam valutare: gratis o privata, mobile, privacy, LiveJasmin, alternative e percorsi per principianti.";

export const metadata: Metadata = {
  title: "Quiz Chat Webcam: Scegli il Percorso Giusto per Te",
  description,
  alternates: {
    canonical: "/quiz"
  },
  openGraph: {
    title: "Quiz Chat Webcam: Scegli il Percorso Giusto per Te",
    description,
    url: "https://sessochat.net/quiz"
  },
  twitter: {
    title: "Quiz Chat Webcam: Scegli il Percorso Giusto per Te",
    description
  }
};

export default function QuizHubPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("/quiz", title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Quiz", path: "/quiz" }
          ]),
          itemListSchema(quizHubCards.map((card) => ({ name: card.title, path: card.href })))
        ]}
      />
      <QuizHero
        kicker="Quiz chat webcam"
        title={title}
        intro="Quiz discreti per capire quale percorso approfondire prima di registrarti, pagare o scegliere una piattaforma live."
      />
      <ModelGrid />
      <QuizCardGrid
        title="Quiz disponibili"
        copy="Ogni quiz lavora solo nel browser: nessun account, nessuna email e nessuna risposta salvata."
        cards={quizHubCards}
      />
      <RecommendedPaths cards={recommendedPathGroups.quiz} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Scelta guidata</p>
            <h2>Preferisci leggere prima una guida?</h2>
            <p>Puoi partire dalle guide decisione o dalle domande frequenti prima di aprire le opzioni live.</p>
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
