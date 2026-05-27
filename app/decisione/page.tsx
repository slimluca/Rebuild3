import type { Metadata } from "next";
import Link from "next/link";
import { DecisioneCardGrid } from "@/components/DecisioneCardGrid";
import { DecisioneHero } from "@/components/DecisioneHero";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { QuickAnswerPanel } from "@/components/QuickAnswerPanel";
import { RecommendedPaths } from "@/components/RecommendedPaths";
import { recommendedPathGroups } from "@/lib/recommended-paths";
import { breadcrumbSchema, faqPageSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { decisioneHubCards } from "@/lib/decisione-pages";

const title = "Decisione Chat Webcam: Costi, Privacy e Scelta con Più Controllo";
const description =
  "Guide italiane per valutare chat webcam live, costi, crediti, privacy, pagamenti, modelli verificati e piattaforme premium prima di registrarti.";

const hubFaq = [
  {
    question: "Le pagine decisione sono recensioni?",
    answer:
      "No. Sono guide alla scelta: aiutano a valutare costi, privacy, crediti, sicurezza e alternative senza voti inventati."
  },
  {
    question: "Indicate prezzi ufficiali?",
    answer:
      "No. Spieghiamo cosa controllare prima di spendere, perché prezzi e condizioni vanno verificati sulla piattaforma."
  },
  {
    question: "I modelli mostrati sono inventati?",
    answer:
      "No. Le schede modello usano dati reali disponibili e non aggiungono punteggi, paesi, status o recensioni false."
  }
];

export const metadata: Metadata = {
  title: "Decisione Chat Webcam: Costi, Privacy e Scelta della Piattaforma",
  description,
  alternates: {
    canonical: "/decisione"
  },
  openGraph: {
    title: "Decisione Chat Webcam: Costi, Privacy e Scelta della Piattaforma",
    description,
    url: "https://sessochat.net/decisione"
  },
  twitter: {
    title: "Decisione Chat Webcam: Costi, Privacy e Scelta della Piattaforma",
    description
  }
};

export default function DecisioneHubPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("/decisione", title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Decisione", path: "/decisione" }
          ]),
          itemListSchema(decisioneHubCards.map((card) => ({ name: card.title, path: card.href }))),
          faqPageSchema(hubFaq)
        ]}
      />
      <DecisioneHero
        kicker="Guide alla scelta"
        title={title}
        intro="Una sezione per adulti che stanno valutando se entrare, registrarsi, usare crediti o confrontare una piattaforma webcam live."
      />
      <ModelGrid />
      <QuickAnswerPanel answer="Parti dal tema che ti interessa: costi, pagamenti, privacy, LiveJasmin, chat private, modelli verificati o affidabilità della piattaforma." />
      <DecisioneCardGrid
        title="Tutte le guide decisione"
        copy="Ogni pagina affronta un momento concreto della scelta, con link verso guide più ampie e sezioni già pubblicate."
        cards={decisioneHubCards}
      />
      <RecommendedPaths cards={recommendedPathGroups.decisione} />
      <FAQSection items={hubFaq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Percorso live</p>
            <h2>Valuta le opzioni dopo aver chiarito costi e privacy</h2>
            <p>Usa le guide decisione per orientarti, poi apri l&apos;accesso live con più controllo.</p>
            <div className="hero-actions">
              <Link className="button" href="/go/signup" prefetch={false}>
                Entra in modo sicuro
              </Link>
              <Link className="button-secondary" href="/guida/prezzi-chat-webcam">
                Leggi sui prezzi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
