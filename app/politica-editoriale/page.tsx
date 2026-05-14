import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const description =
  "Standard editoriali di SessoChat.net: chiarezza, tono adult-safe, privacy, niente recensioni false e uso trasparente dei link interni.";

export const metadata: Metadata = {
  title: "Politica Editoriale: Standard per Guide Chat Webcam",
  description,
  alternates: {
    canonical: "/politica-editoriale"
  },
  openGraph: {
    title: "Politica Editoriale: Standard per Guide Chat Webcam | SessoChat.net",
    description,
    url: "https://sessochat.net/politica-editoriale"
  },
  twitter: {
    title: "Politica Editoriale: Standard per Guide Chat Webcam | SessoChat.net",
    description
  }
};

export default function PoliticaEditorialePage() {
  return (
    <PageShell path="/politica-editoriale" title="Politica editoriale" description={description}>
      <article className="page-card">
        <h2>Principi di scrittura</h2>
        <p>
          I contenuti di SessoChat.net devono essere chiari, discreti e utili per adulti che stanno
          valutando servizi di chat webcam live. Evitiamo linguaggio volgare, promesse aggressive e
          contenuti costruiti solo per accumulare parole chiave.
        </p>
        <p>
          Non pubblichiamo recensioni false, voti inventati, conteggi non verificati o affermazioni
          di test diretto quando non esiste una verifica reale. Le informazioni sui modelli vengono
          mostrate solo se arrivano da un feed partner configurato.
        </p>
      </article>
      <article className="page-card">
        <h2>Link partner e indipendenza del tono</h2>
        <p>
          Alcuni collegamenti possono passare da redirect interni verso piattaforme partner. Questo
          sistema serve a mantenere ordinata la struttura del sito e non deve creare recensioni
          artificiali, valutazioni gonfiate o consigli privi di contesto.
        </p>
      </article>
    </PageShell>
  );
}
