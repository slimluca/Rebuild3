import type { Metadata } from "next";
import Link from "next/link";
import { ArgomentiCardGrid } from "@/components/ArgomentiCardGrid";
import { ArgomentiHero } from "@/components/ArgomentiHero";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { QuickAnswerPanel } from "@/components/QuickAnswerPanel";
import { RelatedPathPanel } from "@/components/RelatedPathPanel";
import { breadcrumbSchema, faqPageSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { argomentiHubCards } from "@/lib/argomenti-pages";

const title = "Argomenti Chat Webcam: Ricerche Utili per Scegliere con Più Controllo";
const description =
  "Raccolta di pagine italiane su chat webcam, videochat adulti, accesso senza registrazione, privacy, mobile, anteprime gratuite e LiveJasmin Italia.";

const hubFaq = [
  {
    question: "A cosa servono le pagine argomento?",
    answer:
      "Rispondono rapidamente a ricerche specifiche e collegano a guide, siti, confronti e categorie più approfondite."
  },
  {
    question: "Sono copie delle guide già pubblicate?",
    answer:
      "No. Sono landing page più dirette, con risposta rapida e percorsi interni verso le sezioni principali."
  },
  {
    question: "I modelli mostrati sono inventati?",
    answer:
      "No. Le schede arrivano dal flusso dati reale quando disponibile; altrimenti appare il pannello alternativo."
  }
];

export const metadata: Metadata = {
  title: "Argomenti Chat Webcam: Ricerche Utili per Scegliere Meglio",
  description,
  alternates: {
    canonical: "/argomenti"
  },
  openGraph: {
    title: "Argomenti Chat Webcam: Ricerche Utili per Scegliere Meglio",
    description,
    url: "https://sessochat.net/argomenti"
  },
  twitter: {
    title: "Argomenti Chat Webcam: Ricerche Utili per Scegliere Meglio",
    description
  }
};

export default function ArgomentiHubPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("/argomenti", title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Argomenti", path: "/argomenti" }
          ]),
          itemListSchema(argomentiHubCards.map((card) => ({ name: card.title, path: card.href }))),
          faqPageSchema(hubFaq)
        ]}
      />
      <ArgomentiHero
        kicker="Ricerche ad alto intento"
        title={title}
        intro="Questa sezione raccoglie landing page rapide per utenti italiani che cercano risposte concrete su chat webcam, videochat adulti, registrazione, pagamenti, sicurezza e LiveJasmin Italia."
      />
      <ModelGrid />
      <QuickAnswerPanel answer="Usa gli argomenti come ingresso veloce: trovi una risposta sintetica, modelli live subito sotto l'introduzione e link verso pagine più profonde quando vuoi confrontare o approfondire." />
      <ArgomentiCardGrid
        title="Tutti gli argomenti"
        copy="Ogni pagina risponde a una ricerca diversa senza duplicare guide, confronti o categorie già pubblicate."
        cards={argomentiHubCards}
      />
      <RelatedPathPanel
        title="Come usare questa sezione"
        steps={[
          "Parti dalla ricerca più vicina al tuo dubbio.",
          "Leggi la risposta rapida e cosa aspettarti.",
          "Apri le guide collegate se vuoi più dettaglio.",
          "Usa i percorsi /go/ solo quando vuoi valutare la piattaforma live."
        ]}
        noteTitle="Collegamento con il resto del sito"
        note="Le pagine argomento non sostituiscono /siti, /guida, /confronti o /categorie: servono a guidare utenti nuovi verso il percorso più utile."
      />
      <FAQSection items={hubFaq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Percorso rapido</p>
            <h2>Hai già un intento chiaro?</h2>
            <p>Scegli un argomento o apri direttamente le opzioni live tramite accesso interno.</p>
            <div className="hero-actions">
              <Link className="button" href="/go/livejasmin" prefetch={false}>
                Apri opzioni live
              </Link>
              <Link className="button-secondary" href="/siti">
                Vai ai siti webcam
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


