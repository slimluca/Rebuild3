import type { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";

const path = "/diventa-modella-webcam";
const title = "Diventa Modella Webcam: Lavora da Casa Online in Italia";
const description =
  "Guida italiana per diventare modella webcam: lavoro da casa, flessibilità, potenziale di guadagno, privacy, requisiti, sicurezza e registrazione.";
const h1 = "Diventa una modella webcam: lavora online da casa con più libertà";

const faqs = [
  {
    question: "Come posso diventare modella webcam?",
    answer:
      "Puoi iniziare valutando una piattaforma dedicata alle modelle webcam, verificando requisiti, documenti richiesti, regole di contenuto, strumenti di privacy e modalità di pagamento. SessoChat.net offre una guida editoriale e un collegamento interno verso l'accesso di registrazione."
  },
  {
    question: "Serve esperienza per iniziare?",
    answer:
      "Non sempre è richiesta esperienza professionale. È però utile capire come funzionano profilo, privacy, impostazioni dell'account, gestione del tempo e regole della piattaforma prima di iniziare."
  },
  {
    question: "Quanto può guadagnare una modella webcam?",
    answer:
      "Il potenziale economico dipende da molti fattori, tra cui tempo dedicato, piattaforma, interazione con gli utenti, costanza, regole interne e richiesta del pubblico. Non esiste una cifra certa valida per tutte."
  },
  {
    question: "È possibile lavorare da casa?",
    answer:
      "Molte piattaforme webcam permettono di lavorare online da casa, purché si disponga di connessione stabile, dispositivo adeguato, ambiente riservato e rispetto delle regole del servizio scelto."
  },
  {
    question: "La privacy è protetta?",
    answer:
      "La privacy dipende dalle impostazioni e dalle condizioni della piattaforma utilizzata. Prima di registrarti è importante leggere regole, opzioni di blocco geografico se disponibili, gestione dei dati, pagamenti e controlli dell'account."
  },
  {
    question: "Serve mostrare dati personali agli utenti?",
    answer:
      "In genere i dati necessari alla verifica vengono gestiti dalla piattaforma e non dovrebbero essere condivisi con gli utenti. È comunque essenziale leggere le condizioni ufficiali e non pubblicare informazioni personali nel profilo pubblico."
  },
  {
    question: "Posso scegliere quando collegarmi?",
    answer:
      "Molte esperienze webcam sono flessibili, ma la disponibilità effettiva dipende dalla piattaforma e dal modo in cui organizzi il profilo. La flessibilità non equivale a risultati economici automatici."
  },
  {
    question: "SessoChat.net assume direttamente modelle?",
    answer:
      "No. SessoChat.net è una risorsa editoriale in italiano e non assume direttamente modelle. Il collegamento di registrazione porta a un servizio esterno dove verificare requisiti, condizioni e modalità operative."
  },
  {
    question: "La registrazione è gratuita?",
    answer:
      "Le condizioni di registrazione possono dipendere dal servizio esterno. Prima di procedere, controlla sempre requisiti, documenti richiesti, termini, pagamenti e regole dell'account."
  },
  {
    question: "Cosa devo controllare prima di iniziare?",
    answer:
      "Controlla requisiti di accesso, verifica dell'identità, privacy, strumenti di sicurezza, pagamenti, regole sui contenuti, assistenza, gestione del profilo e possibilità di interrompere l'attività se cambi idea."
  }
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path
  },
  openGraph: {
    title: `${title} | SessoChat.net`,
    description,
    url: "https://sessochat.net/diventa-modella-webcam"
  },
  twitter: {
    title: `${title} | SessoChat.net`,
    description
  }
};

export default function DiventaModellaWebcamPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(path, title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Diventa modella webcam", path }
          ]),
          faqPageSchema(faqs)
        ]}
      />
      <section className="siti-hero">
        <div className="container">
          <div className="siti-hero-panel">
            <p className="eyebrow">Opportunità per adulti</p>
            <h1>{h1}</h1>
            <p>
              Se stai valutando il lavoro webcam da casa, questa pagina ti aiuta a capire cosa
              controllare prima di registrarti: privacy, requisiti, flessibilità, impostazioni del
              profilo, pagamenti e aspettative realistiche. SessoChat.net non assume direttamente,
              ma orienta verso un accesso dedicato dove verificare le condizioni ufficiali.
            </p>
            <div className="hero-badges" aria-label="Punti chiave">
              <span>Lavoro online da casa</span>
              <span>Privacy da valutare</span>
              <span>Nessuna promessa di guadagno</span>
              <span>Registrazione esterna</span>
            </div>
            <div className="hero-actions" aria-label="Azioni principali">
              <Link className="button" href="/go/diventa-modella" prefetch={false}>
                Inizia come modella
              </Link>
              <Link className="button-secondary" href="#come-funziona">
                Leggi come funziona
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ModelGrid />

      <section className="section" id="come-funziona">
        <div className="container split-section">
          <article className="page-card">
            <p className="section-kicker">Prima decisione</p>
            <h2>Come funziona il lavoro webcam da casa</h2>
            <p>
              Il lavoro webcam può offrire flessibilità e accesso da remoto, ma richiede attenzione
              alle regole della piattaforma, alla gestione del profilo e alla protezione dei dati
              personali. Prima di iniziare, conviene leggere le condizioni del servizio e capire
              quali strumenti sono disponibili per gestire visibilità, pagamenti e sicurezza.
            </p>
            <p>
              Questa pagina non è una promessa di risultato economico. È una guida di orientamento
              per adulti che vogliono valutare un percorso online in modo più consapevole.
            </p>
          </article>
          <article className="page-card">
            <p className="section-kicker">Accesso dedicato</p>
            <h2>Registrazione tramite percorso interno</h2>
            <p>
              Il pulsante di candidatura usa un collegamento interno di SessoChat.net. Dopo il clic
              sarai indirizzata a un servizio esterno dove verificare requisiti, documenti,
              condizioni e passaggi richiesti.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/go/diventa-modella" prefetch={false}>
                Apri registrazione modelle
              </Link>
              <Link className="button-secondary" href="/privacy-policy">
                Leggi privacy
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-kicker">Cosa valutare</p>
              <h2>Requisiti, privacy e aspettative realistiche</h2>
            </div>
            <p className="section-copy">
              Una scelta seria parte da controlli semplici: chi gestisce l&apos;account, quali documenti
              sono richiesti, come vengono trattati i pagamenti e quali opzioni aiutano a mantenere
              discrezione.
            </p>
          </div>
          <div className="editorial-stack">
            <article className="editorial-panel">
              <h3>Requisiti e verifica</h3>
              <p>
                Controlla con attenzione quali verifiche sono richieste, quali documenti servono e
                come vengono gestiti i dati. Una piattaforma seria deve indicare regole chiare,
                accesso riservato e condizioni leggibili prima dell&apos;attivazione.
              </p>
            </article>
            <article className="editorial-panel">
              <h3>Privacy operativa</h3>
              <p>
                Valuta nome pubblico, impostazioni del profilo, eventuali strumenti di limitazione
                della visibilità, cronologia, dispositivi usati e ambiente da cui lavori. La
                discrezione dipende anche da scelte pratiche quotidiane.
              </p>
            </article>
            <article className="editorial-panel">
              <h3>Pagamenti e tempi</h3>
              <p>
                Prima di iniziare, leggi come funzionano pagamenti, soglie, commissioni, metodi
                disponibili e tempi di accredito. Non basare la decisione su cifre generiche o
                aspettative non verificate.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <article className="page-card">
            <p className="section-kicker">Checklist</p>
            <h2>Controlli utili prima di registrarti</h2>
            <ul className="check-list">
              <li>Verifica che il servizio sia riservato ad adulti e richieda controlli chiari.</li>
              <li>Leggi termini, privacy, regole dei contenuti e modalità di pagamento.</li>
              <li>Prepara un ambiente privato, connessione stabile e dispositivo adeguato.</li>
              <li>Decidi in anticipo limiti, disponibilità e livello di visibilità del profilo.</li>
              <li>Evita di condividere dati personali nel profilo o nelle conversazioni.</li>
            </ul>
          </article>
          <article className="page-card">
            <p className="section-kicker">Percorsi collegati</p>
            <h2>Risorse interne da leggere</h2>
            <p>
              Se vuoi capire meglio privacy, pagamenti e sicurezza prima di procedere, queste guide
              aiutano a leggere il settore webcam con più controllo.
            </p>
            <ul>
              <li>
                <Link className="text-link" href="/decisione/chat-webcam-privacy">
                  Privacy nelle chat webcam
                </Link>
              </li>
              <li>
                <Link className="text-link" href="/decisione/chat-webcam-pagamenti">
                  Pagamenti e controlli
                </Link>
              </li>
              <li>
                <Link className="text-link" href="/guida/chat-webcam-sicura">
                  Guida alla chat webcam sicura
                </Link>
              </li>
              <li>
                <Link className="text-link" href="/politica-editoriale">
                  Politica editoriale
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Passo successivo</p>
            <h2>Valuta la registrazione con calma</h2>
            <p>
              Apri l&apos;accesso dedicato, leggi le condizioni ufficiali e procedi solo se requisiti,
              privacy e modalità operative sono compatibili con le tue aspettative.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/go/diventa-modella" prefetch={false}>
                Inizia come modella
              </Link>
              <Link className="button-secondary" href="/termini-di-servizio">
                Termini di SessoChat.net
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />
    </>
  );
}
