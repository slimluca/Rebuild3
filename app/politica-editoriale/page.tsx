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
        <h2>Metodo editoriale</h2>
        <p>
          SessoChat.net pubblica contenuti per adulti che vogliono valutare chat webcam live con
          più contesto prima di registrarsi. Ogni pagina deve aiutare a chiarire una scelta:
          privacy, costi, crediti, accesso mobile, alternative, modelli verificati o differenze tra
          anteprime e chat private.
        </p>
        <p>
          Non siamo un operatore webcam e non presentiamo le guide come recensioni ufficiali. Il
          tono resta discreto, professionale e adult-safe, senza linguaggio volgare o promesse
          aggressive.
        </p>
      </article>
      <article className="page-card">
        <h2>Cosa evitiamo</h2>
        <ul>
          <li>Recensioni false, voti inventati o classifiche non basate su dati verificabili.</li>
          <li>Prezzi, conteggi utenti, paesi, status o dettagli modello aggiunti senza fonte reale.</li>
          <li>Test dichiarati quando non esiste una verifica documentabile.</li>
          <li>Pagine create solo per ripetere parole chiave senza valore editoriale.</li>
        </ul>
      </article>
      <article className="page-card">
        <h2>Link interni e affiliazione</h2>
        <p>
          Alcuni collegamenti possono passare da redirect interni verso servizi esterni. Questa
          impostazione serve a mantenere ordinata la struttura del sito e non autorizza contenuti
          gonfiati, recensioni artificiali o consigli privi di contesto. Le pagine devono restare
          utili anche prima di qualunque clic commerciale.
        </p>
      </article>
    </PageShell>
  );
}
