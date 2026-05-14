import type { Metadata } from "next";
import Link from "next/link";
import { EditorialChecklist } from "@/components/EditorialChecklist";
import { FAQSection } from "@/components/FAQSection";
import { GuidaCardGrid } from "@/components/GuidaCardGrid";
import { GuidaHero } from "@/components/GuidaHero";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { breadcrumbSchema, faqPageSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { guidaHubCards } from "@/lib/guida-pages";

const title = "Guida Chat Webcam: Consigli Italiani per Scegliere con Più Controllo";
const description =
  "Guide italiane per capire chat webcam live, privacy, registrazione, pagamenti, modelli verificati e differenze tra chat gratis e private prima di entrare.";

const hubFaq = [
  {
    question: "A cosa serve la sezione guida di SessoChat.net?",
    answer:
      "Serve a spiegare criteri pratici per valutare chat webcam live, privacy, registrazione, pagamenti, mobile e differenze tra funzioni gratuite e private."
  },
  {
    question: "Le guide sono recensioni di piattaforme?",
    answer:
      "No. Sono contenuti editoriali informativi, senza voti finti, recensioni inventate o promesse non verificabili."
  },
  {
    question: "I modelli live sono mostrati anche nelle guide?",
    answer:
      "Sì. Ogni pagina guida mostra il ModelGrid direttamente sotto l'introduzione usando dati reali dal feed o il fallback se il feed non risponde."
  },
  {
    question: "Le guide sostituiscono le condizioni delle piattaforme partner?",
    answer:
      "No. Aiutano a leggere meglio le piattaforme, ma prezzi, disponibilità e regole operative vanno sempre controllati sul servizio esterno."
  }
];

export const metadata: Metadata = {
  title: "Guida Chat Webcam: Consigli Italiani per Scegliere in Sicurezza",
  description,
  alternates: {
    canonical: "/guida"
  },
  openGraph: {
    title: "Guida Chat Webcam: Consigli Italiani per Scegliere in Sicurezza",
    description,
    url: "https://sessochat.net/guida"
  },
  twitter: {
    title: "Guida Chat Webcam: Consigli Italiani per Scegliere in Sicurezza",
    description
  }
};

export default function GuidaHubPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("/guida", title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guida", path: "/guida" }
          ]),
          itemListSchema(guidaHubCards.map((card) => ({ name: card.title, path: card.href }))),
          faqPageSchema(hubFaq)
        ]}
      />
      <GuidaHero
        kicker="Guida chat webcam"
        title={title}
        intro="La sezione guida raccoglie spiegazioni pratiche per adulti che vogliono capire chat webcam live, privacy, accesso mobile, registrazione, crediti e differenze tra anteprime gratuite e chat private prima di entrare in una piattaforma."
      />
      <ModelGrid />
      <GuidaCardGrid
        title="Guide pratiche per orientarti"
        copy="Ogni approfondimento risponde a un intento diverso, senza pagine vuote e senza promesse eccessive."
        cards={guidaHubCards}
      />
      <section className="section">
        <div className="container split-section">
          <article className="rich-panel">
            <p className="section-kicker">Metodo</p>
            <h2>Come usare queste guide</h2>
            <p>
              Parti dalla domanda più vicina alla tua situazione: scegliere un sito, capire i
              prezzi, navigare senza registrazione o proteggere meglio privacy e dispositivo.
            </p>
            <p>
              Le guide non sostituiscono le condizioni ufficiali delle piattaforme partner, ma
              aiutano a leggere meglio passaggi, limiti e segnali utili prima della registrazione.
            </p>
          </article>
          <article className="rich-panel">
            <p className="section-kicker">Collegamenti</p>
            <h2>Guide e sezione siti lavorano insieme</h2>
            <p>
              La sezione siti organizza le pagine per esigenza pratica. La guida spiega invece il
              ragionamento: cosa controllare, quali limiti aspettarsi e come evitare scelte
              affrettate.
            </p>
            <div className="hero-actions">
              <Link className="button-secondary" href="/siti">
                Vai ai siti webcam
              </Link>
              <Link className="button-secondary" href="/siti/siti-webcam-per-principianti">
                Percorso principianti
              </Link>
            </div>
          </article>
        </div>
      </section>
      <EditorialChecklist
        title="Criteri da tenere sempre presenti"
        intro="Le guide tornano spesso sugli stessi principi perché sono quelli che riducono davvero la confusione."
        items={[
          "Distingui anteprima, registrazione, crediti e funzioni private.",
          "Controlla privacy del browser e del dispositivo prima di registrarti.",
          "Leggi i costi reali sulla piattaforma partner, senza affidarti a numeri inventati.",
          "Valuta modelli e profili solo attraverso dati reali o informazioni ufficiali.",
          "Preferisci pagine leggibili da mobile e prive di promesse aggressive."
        ]}
      />
      <FAQSection items={hubFaq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Prossimo passo</p>
            <h2>Leggi una guida, poi valuta le opzioni live con calma</h2>
            <p>
              Usa i collegamenti interni per mantenere ordinata la navigazione e controllare la
              piattaforma partner solo quando hai chiaro cosa cercare.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/go/signup" prefetch={false}>
                Entra tramite accesso sicuro
              </Link>
              <Link className="button-secondary" href="/risorse">
                Apri risorse
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
