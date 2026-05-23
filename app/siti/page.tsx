import type { Metadata } from "next";
import Link from "next/link";
import { EditorialChecklist } from "@/components/EditorialChecklist";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { SitiCardGrid } from "@/components/SitiCardGrid";
import { SitiHero } from "@/components/SitiHero";
import { breadcrumbSchema, faqPageSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { sitiHubCards } from "@/lib/siti-pages";

const title = "Siti Webcam Live: Guida Italiana per Scegliere con Criterio";
const description =
  "Hub italiano di SessoChat.net per scegliere siti webcam live, cam gratis, chat private, accesso mobile, privacy e pagamenti con criterio.";

const hubFaq = [
  {
    question: "SessoChat.net pubblica classifiche dei siti webcam?",
    answer:
      "No. La sezione siti offre criteri editoriali, percorsi di scelta e spiegazioni pratiche senza voti, recensioni false o graduatorie inventate."
  },
  {
    question: "Le pagine indicano quali funzioni sono gratis?",
    answer:
      "Spiegano come leggere anteprime, registrazione e funzioni private. Le condizioni precise vanno sempre controllate sulla piattaforma."
  },
  {
    question: "Perche i modelli live sono vicini all'inizio pagina?",
    answer:
      "Perché la scoperta dei modelli è una parte importante dell'esperienza, ma vengono mostrate solo schede reali quando disponibili."
  },
  {
    question: "I link interni sono diretti?",
    answer:
      "No. I pulsanti partner usano percorsi interni /go/ per mantenere pulita la struttura editoriale e dare indicazioni corrette ai motori di ricerca."
  }
];

export const metadata: Metadata = {
  title: "Siti Webcam Live: Guida Italiana per Scegliere",
  description,
  alternates: {
    canonical: "/siti"
  },
  openGraph: {
    title: "Siti Webcam Live: Guida Italiana per Scegliere",
    description,
    url: "https://sessochat.net/siti"
  },
  twitter: {
    title: "Siti Webcam Live: Guida Italiana per Scegliere",
    description
  }
};

export default function SitiHubPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("/siti", title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Siti webcam", path: "/siti" }
          ]),
          itemListSchema(sitiHubCards.map((card) => ({ name: card.title, path: card.href }))),
          faqPageSchema(hubFaq)
        ]}
      />
      <SitiHero
        kicker="Siti webcam"
        title={title}
        intro="La sezione /siti organizza le chat webcam live per esigenza reale: anteprime gratuite, chat privata, accesso mobile, navigazione senza registrazione, pagamenti e modelli verificati. L'obiettivo non è spingere una classifica, ma aiutarti a leggere ogni piattaforma con più controllo prima dell'iscrizione."
      />
      <ModelGrid />
      <SitiCardGrid
        title="Percorsi per scegliere il sito giusto"
        copy="Ogni guida affronta un dubbio specifico e rimanda solo a pagine realmente disponibili in questa fase."
        cards={sitiHubCards}
      />
      <section className="section">
        <div className="container split-section">
          <article className="rich-panel">
            <p className="section-kicker">Metodo editoriale</p>
            <h2>Cosa valutare prima di registrarsi</h2>
            <p>
              Prima di creare un account, osserva come il sito presenta anteprime, profili, chat
              privata, pagamenti e privacy. Una piattaforma chiara non dovrebbe costringerti a
              decidere senza informazioni essenziali.
            </p>
            <p>
              SessoChat.net non assegna voti finti e non inventa prove dirette. Preferiamo spiegare
              i criteri: leggibilità, trasparenza dei costi, accesso mobile, gestione account e
              comunicazione dei limiti.
            </p>
          </article>
          <article className="rich-panel">
            <p className="section-kicker">Anteprima e privato</p>
            <h2>Differenze da capire subito</h2>
            <p>
              L&apos;anteprima gratuita aiuta a capire ambiente e profili. La chat privata webcam può
              richiedere registrazione, crediti o condizioni specifiche. Confondere questi due
              livelli è il modo più rapido per scegliere male.
            </p>
            <p>
              Una buona pagina rende visibili le differenze prima di chiedere dati o pagamenti. Se
              non trovi informazioni chiare, fermati e controlla le condizioni ufficiali.
            </p>
          </article>
        </div>
      </section>
      <EditorialChecklist
        title="Privacy, pagamenti e navigazione responsabile"
        intro="La scelta migliore nasce da passaggi leggibili e da un controllo minimo prima di entrare."
        items={[
          "Controlla se registrazione e pagamento sono passaggi separati.",
          "Verifica che le informazioni sui crediti siano facili da trovare.",
          "Usa un browser aggiornato e attenzione su dispositivi condivisi.",
          "Non fidarti di pagine che promettono tutto gratis senza spiegare limiti."
        ]}
      />
      <FAQSection items={hubFaq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">accesso live</p>
            <h2>Confronta prima di entrare, poi scegli con calma</h2>
            <p>
              Usa il percorso interno per aprire la piattaforma live e valutare anteprime,
              modelli live, condizioni e accesso mobile senza link esterni visibili nelle pagine.
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


