import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const description =
  "SessoChat.net è una guida editoriale italiana per adulti che vogliono confrontare chat webcam live, privacy, costi e piattaforme partner prima di registrarsi.";

export const metadata: Metadata = {
  title: "Chi Siamo: Guida Italiana alle Chat Webcam Live",
  description,
  alternates: {
    canonical: "/chi-siamo"
  },
  openGraph: {
    title: "Chi Siamo: Guida Italiana alle Chat Webcam Live | SessoChat.net",
    description,
    url: "https://sessochat.net/chi-siamo"
  },
  twitter: {
    title: "Chi Siamo: Guida Italiana alle Chat Webcam Live | SessoChat.net",
    description
  }
};

export default function ChiSiamoPage() {
  return (
    <PageShell path="/chi-siamo" title="Chi siamo" description={description}>
      <article className="page-card">
        <h2>Una guida, non una piattaforma di chat</h2>
        <p>
          SessoChat.net è un progetto editoriale in lingua italiana dedicato agli adulti che
          vogliono orientarsi tra webcam live, chat privata, accesso mobile e scoperta modelli prima
          di registrarsi su servizi esterni.
        </p>
        <p>
          Non ci presentiamo come attività locale italiana e non gestiamo direttamente le piattaforme
          partner. Il nostro ruolo è rendere più semplice capire differenze, aspettative di
          pagamento, impostazioni di privacy e punti da controllare prima di entrare.
        </p>
        <p>
          SessoChat.net fa parte di un piccolo gruppo di risorse editoriali dedicate alle chat
          webcam e alla scoperta di piattaforme live. Se preferisci leggere contenuti in inglese,
          puoi consultare anche{" "}
          <a href="https://webcamsex.me" rel="noopener">
            webcamsex.me
          </a>{" "}
          per confronti e{" "}
          <a href="https://webcamsex.site" rel="noopener">
            webcamsex.site
          </a>{" "}
          per una panoramica più ampia dei modelli live.
        </p>
      </article>
      <article className="page-card">
        <h2>Che cosa vogliamo rendere chiaro</h2>
        <ul>
          <li>Quali funzioni possono essere visibili prima della registrazione.</li>
          <li>Quando una chat privata webcam può richiedere credito o pagamento.</li>
          <li>Perché profili, anteprime e disponibilità possono cambiare sulle piattaforme esterne.</li>
          <li>Come navigare con un approccio più ordinato e attento alla privacy.</li>
        </ul>
      </article>
    </PageShell>
  );
}
