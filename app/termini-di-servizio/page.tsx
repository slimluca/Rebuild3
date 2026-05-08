import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const description =
  "Termini di servizio iniziali di SessoChat.net su accesso per adulti, contenuti informativi, piattaforme esterne e uso responsabile.";

export const metadata: Metadata = {
  title: "Termini di servizio",
  description,
  alternates: {
    canonical: "/termini-di-servizio"
  },
  openGraph: {
    title: "Termini di servizio | SessoChat.net",
    description,
    url: "https://sessochat.net/termini-di-servizio"
  },
  twitter: {
    title: "Termini di servizio | SessoChat.net",
    description
  }
};

export default function TerminiPage() {
  return (
    <PageShell path="/termini-di-servizio" title="Termini di servizio" description={description}>
      <article className="page-card">
        <h2>Accesso riservato agli adulti</h2>
        <p>
          SessoChat.net tratta argomenti legati a servizi di videochat adulti ed è destinato solo a
          persone che hanno l’età richiesta dalla legge applicabile nel proprio luogo di accesso.
          Chi non possiede tale requisito non deve usare il sito.
        </p>
      </article>
      <article className="page-card">
        <h2>Natura informativa</h2>
        <p>
          Le pagine hanno finalità editoriali e informative. Non garantiamo disponibilità, prezzi,
          funzioni o condizioni di piattaforme esterne, perché tali elementi possono cambiare fuori
          dal controllo di SessoChat.net.
        </p>
      </article>
      <article className="page-card">
        <h2>Uso responsabile</h2>
        <p>
          Ogni utente deve leggere le condizioni dei servizi esterni prima di registrarsi, usare
          strumenti di pagamento con prudenza e rispettare regole, limiti e impostazioni di privacy
          della piattaforma scelta.
        </p>
      </article>
    </PageShell>
  );
}
