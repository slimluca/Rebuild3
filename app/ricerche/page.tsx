import type { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { QuickAnswerPanel } from "@/components/QuickAnswerPanel";
import { RecommendedPaths } from "@/components/RecommendedPaths";
import { RicercheCardGrid } from "@/components/RicercheCardGrid";
import { RicercheHero } from "@/components/RicercheHero";
import { recommendedPathGroups } from "@/lib/recommended-paths";
import { breadcrumbSchema, faqPageSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { ricercheHubCards } from "@/lib/ricerche-pages";

const title = "Ricerche Chat Webcam: Percorsi Utili per Trovare Siti Live";
const description =
  "Scopri ricerche utili su chat webcam, siti cam live, videochat adulti, accesso mobile, privacy, chat private e modelli online.";

const hubFaq = [
  {
    question: "Queste pagine sono guide complete?",
    answer:
      "Sono landing rapide: rispondono a ricerche precise e rimandano a guide, categorie e confronti più approfonditi."
  },
  {
    question: "Le ricerche contengono classifiche?",
    answer:
      "No. Non usiamo punteggi o classifiche inventate."
  },
  {
    question: "I modelli mostrati sono reali?",
    answer:
      "Quando presenti, le schede mostrano profili reali senza dati inventati."
  }
];

export const metadata: Metadata = {
  title: "Ricerche Chat Webcam: Pagine Utili per Trovare Siti Live",
  description,
  alternates: {
    canonical: "/ricerche"
  },
  openGraph: {
    title: "Ricerche Chat Webcam: Pagine Utili per Trovare Siti Live",
    description,
    url: "https://sessochat.net/ricerche"
  },
  twitter: {
    title: "Ricerche Chat Webcam: Pagine Utili per Trovare Siti Live",
    description
  }
};

export default function RicercheHubPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("/ricerche", title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Ricerche", path: "/ricerche" }
          ]),
          itemListSchema(ricercheHubCards.map((card) => ({ name: card.title, path: card.href }))),
          faqPageSchema(hubFaq)
        ]}
      />
      <RicercheHero
        kicker="Ricerche chat webcam"
        title={title}
        intro="Una raccolta di pagine rapide per utenti italiani che cercano chat webcam gratis, live, mobile, sicure, senza account o orientate a LiveJasmin e alternative."
      />
      <ModelGrid />
      <QuickAnswerPanel answer="Scegli una ricerca, leggi la risposta breve e usa i link interni per passare a guide, confronti, categorie o accessi live." />
      <RicercheCardGrid
        title="Tutte le ricerche"
        copy="Ogni pagina ha un intento autonomo e rimanda a risorse più profonde quando serve contesto."
        cards={ricercheHubCards}
      />
      <RecommendedPaths cards={recommendedPathGroups.ricerche} />
      <FAQSection items={hubFaq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Accesso live</p>
            <h2>Parti da una ricerca o guarda subito le opzioni live</h2>
            <p>Il percorso interno ti porta verso le opzioni disponibili mantenendo ordinata la navigazione.</p>
            <div className="hero-actions">
              <Link className="button" href="/go/livejasmin" prefetch={false}>
                Guarda opzioni live
              </Link>
              <Link className="button-secondary" href="/argomenti">
                Apri argomenti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
