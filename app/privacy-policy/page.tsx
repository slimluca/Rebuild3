import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const description =
  "Informativa privacy iniziale di SessoChat.net su log tecnici, cookie, analisi, redirect affiliati e dati del modulo contatti quando sarà attivo.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: {
    canonical: "/privacy-policy"
  },
  openGraph: {
    title: "Privacy Policy | SessoChat.net",
    description,
    url: "https://sessochat.net/privacy-policy"
  },
  twitter: {
    title: "Privacy Policy | SessoChat.net",
    description
  }
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell path="/privacy-policy" title="Privacy Policy" description={description}>
      <article className="page-card">
        <h2>Dati tecnici e navigazione</h2>
        <p>
          SessoChat.net può trattare dati tecnici necessari al funzionamento del sito, come log del
          server, informazioni sul browser, indirizzi di rete in forma tecnica e pagine richieste.
          Questi dati aiutano a mantenere sicurezza, prestazioni e stabilità.
        </p>
      </article>
      <article className="page-card">
        <h2>Cookie, analisi e link affiliati</h2>
        <p>
          In futuro il sito potrà usare cookie tecnici, strumenti di analisi del traffico e redirect
          affiliati interni per misurare il funzionamento generale delle pagine e dei collegamenti
          verso piattaforme partner. I link affiliati possono trasferire parametri tecnici al partner
          quando l’utente sceglie di uscire dal sito.
        </p>
      </article>
      <article className="page-card">
        <h2>Modulo contatti</h2>
        <p>
          Il modulo contatti non è attivo in questa fase. Quando sarà attivato, i dati inseriti
          potranno essere usati per leggere e gestire la richiesta inviata, senza pubblicarli nelle
          pagine del sito.
        </p>
      </article>
    </PageShell>
  );
}
