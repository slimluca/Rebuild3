import type { Metadata } from "next";
import Link from "next/link";
import { DirectAnswerPanel } from "@/components/DirectAnswerPanel";
import { DomandeCardGrid } from "@/components/DomandeCardGrid";
import { DomandeHero } from "@/components/DomandeHero";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { breadcrumbSchema, faqPageSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { domandeHubCards } from "@/lib/domande-pages";

const title = "Domande Chat Webcam: Risposte Utili Prima di Entrare";
const description =
  "Risposte italiane su chat webcam, registrazione, carta di credito, crediti, privacy, LiveJasmin, chat private e scelta della piattaforma.";

const hubFaq = [
  {
    question: "Le domande sostituiscono le guide complete?",
    answer:
      "No. Sono risposte rapide che rimandano a guide, pagine decisione, confronti e sezioni più approfondite."
  },
  {
    question: "Le risposte includono prezzi ufficiali?",
    answer:
      "No. Spiegano cosa controllare prima di spendere, senza inventare cifre o promesse."
  },
  {
    question: "Le pagine sono adatte a utenti italiani?",
    answer:
      "Sì. Il contenuto è scritto in italiano con tono discreto e orientato alla scelta consapevole."
  }
];

export const metadata: Metadata = {
  title: "Domande Chat Webcam: Risposte Chiare per Utenti Italiani",
  description,
  alternates: {
    canonical: "/domande"
  },
  openGraph: {
    title: "Domande Chat Webcam: Risposte Chiare per Utenti Italiani",
    description,
    url: "https://sessochat.net/domande"
  },
  twitter: {
    title: "Domande Chat Webcam: Risposte Chiare per Utenti Italiani",
    description
  }
};

export default function DomandeHubPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("/domande", title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Domande", path: "/domande" }
          ]),
          itemListSchema(domandeHubCards.map((card) => ({ name: card.title, path: card.href }))),
          faqPageSchema(hubFaq)
        ]}
      />
      <DomandeHero
        kicker="Q&A chat webcam"
        title={title}
        intro="Risposte brevi e pratiche alle domande più comuni su chat webcam, registrazione, carta, crediti, privacy e LiveJasmin."
      />
      <ModelGrid />
      <DirectAnswerPanel answer="Scegli una domanda, leggi la risposta diretta e usa i link interni per approfondire costi, privacy, sicurezza e piattaforme." />
      <DomandeCardGrid
        title="Tutte le domande"
        copy="Ogni risposta affronta un singolo dubbio e collega a guide più complete già pubblicate."
        cards={domandeHubCards}
      />
      <FAQSection items={hubFaq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Percorso live</p>
            <h2>Hai chiarito il dubbio? Valuta le opzioni live</h2>
            <p>Apri l&apos;accesso live solo dopo aver controllato registrazione, pagamenti e privacy.</p>
            <div className="hero-actions">
              <Link className="button" href="/go/signup" prefetch={false}>
                Entra in modo sicuro
              </Link>
              <Link className="button-secondary" href="/decisione">
                Apri guide decisione
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
