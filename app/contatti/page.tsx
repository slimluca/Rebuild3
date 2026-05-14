import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const description =
  "Contatti SessoChat.net per richieste editoriali e segnalazioni sul sito, con modulo informativo dedicato alle guide italiane sulle chat webcam.";

export const metadata: Metadata = {
  title: "Contatti SessoChat.net: Richieste Editoriali e Segnalazioni",
  description,
  alternates: {
    canonical: "/contatti"
  },
  openGraph: {
    title: "Contatti SessoChat.net: Richieste Editoriali e Segnalazioni",
    description,
    url: "https://sessochat.net/contatti"
  },
  twitter: {
    title: "Contatti SessoChat.net: Richieste Editoriali e Segnalazioni",
    description
  }
};

export default function ContattiPage() {
  return (
    <PageShell path="/contatti" title="Contatti" description={description}>
      <form className="contact-form" aria-describedby="contact-note">
        <p className="form-help" id="contact-note">
          Il modulo è una base grafica e sarà attivato in una fase successiva. Per ora non invia
          messaggi.
        </p>
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="oggetto">Oggetto</label>
          <input id="oggetto" name="oggetto" type="text" />
        </div>
        <div className="field">
          <label htmlFor="messaggio">Messaggio</label>
          <textarea id="messaggio" name="messaggio" />
        </div>
        <button className="button" type="button" aria-describedby="contact-note">
          Invia richiesta
        </button>
      </form>
      <article className="page-card">
        <h2>Per quali richieste usare questa pagina</h2>
        <p>
          Quando il modulo sarà attivo, potrà essere usato per segnalare errori editoriali, proporre
          correzioni o chiedere chiarimenti sul funzionamento generale del sito. Non è pensato per
          assistenza su account, pagamenti o servizi gestiti da piattaforme esterne.
        </p>
      </article>
    </PageShell>
  );
}
