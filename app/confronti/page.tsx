import type { Metadata } from "next";
import Link from "next/link";
import { ConfrontiCardGrid } from "@/components/ConfrontiCardGrid";
import { ConfrontiHero } from "@/components/ConfrontiHero";
import { DecisionPanel } from "@/components/DecisionPanel";
import { EditorialChecklist } from "@/components/EditorialChecklist";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { breadcrumbSchema, faqPageSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { confrontiHubCards } from "@/lib/confronti-pages";

const title = "Confronti Chat Webcam: Scegliere con PiÃ¹ Chiarezza Prima di Entrare";
const description =
  "Confronta siti webcam live, chat private, opzioni gratis, piattaforme premium e alternative LiveJasmin con guide italiane chiare e discrete.";

const hubFaq = [
  {
    question: "I confronti sono recensioni con voti?",
    answer:
      "No. Sono guide decisionali senza rating, classifiche inventate o dichiarazioni di test non verificabili."
  },
  {
    question: "PerchÃ© parlate di migliori siti senza classifica numerica?",
    answer:
      "PerchÃ© senza dati reali sarebbe fuorviante. Usiamo criteri come privacy, mobile, anteprime, chat privata e pagamenti."
  },
  {
    question: "I modelli live sono reali?",
    answer:
      "Quando sono presenti, le schede mostrano profili reali. In caso contrario resta visibile un accesso live discreto."
  },
  {
    question: "I link interni sono diretti?",
    answer:
      "No. Le CTA usano percorsi interni /go/ con indicazioni noindex/nofollow."
  }
];

export const metadata: Metadata = {
  title: "Confronti Chat Webcam: Siti Live, Chat Private e Alternative",
  description,
  alternates: {
    canonical: "/confronti"
  },
  openGraph: {
    title: "Confronti Chat Webcam: Siti Live, Chat Private e Alternative",
    description,
    url: "https://sessochat.net/confronti"
  },
  twitter: {
    title: "Confronti Chat Webcam: Siti Live, Chat Private e Alternative",
    description
  }
};

export default function ConfrontiHubPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("/confronti", title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Confronti", path: "/confronti" }
          ]),
          itemListSchema(confrontiHubCards.map((card) => ({ name: card.title, path: card.href }))),
          faqPageSchema(hubFaq)
        ]}
      />
      <ConfrontiHero
        kicker="Confronti chat webcam"
        title={title}
        intro="La sezione confronti aiuta a leggere differenze tra piattaforme webcam live, siti premium, opzioni gratis, chat privata e alternative LiveJasmin senza usare classifiche finte o promesse non verificabili."
      />
      <ModelGrid />
      <DecisionPanel summary="Usa questi confronti come strumento di scelta: non indicano un vincitore assoluto, ma spiegano cosa controllare prima di registrarti, usare crediti o entrare in una chat privata webcam." />
      <ConfrontiCardGrid
        title="Confronti disponibili"
        copy="Pagine pensate per utenti italiani che vogliono confrontare piattaforme, modelli live, accesso mobile e condizioni prima dell'ingresso."
        cards={confrontiHubCards}
      />
      <EditorialChecklist
        title="Criteri usati nei confronti"
        intro="Ogni pagina segue lo stesso principio: aiutare a decidere senza inventare dati."
        items={[
          "Nessun voto, recensione falsa o classifica numerica.",
          "Confronto qualitativo tra esperienza, accesso, privacy e pagamenti.",
          "Link interni solo a pagine giÃ  esistenti.",
          "Modelli mostrati solo con schede reali o accesso live discreto."
        ]}
      />
      <FAQSection items={hubFaq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Valutazione live</p>
            <h2>Confronta prima, poi apri la piattaforma con piÃ¹ contesto</h2>
            <p>
              Il percorso interno permette di valutare una piattaforma live mantenendo ordinata
              la struttura editoriale del sito.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/go/signup" prefetch={false}>
                Entra tramite accesso sicuro
              </Link>
              <Link className="button-secondary" href="/guida">
                Apri guida
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


