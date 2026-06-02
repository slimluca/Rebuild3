import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const description =
  "SessoChat.net è una guida editoriale italiana per adulti che vogliono confrontare chat webcam live, privacy, costi e piattaforme prima di registrarsi.";

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
        <h2>Una guida editoriale per adulti, non un servizio webcam</h2>
        <p>
          SessoChat.net è una risorsa in lingua italiana pensata per adulti che vogliono capire
          meglio le chat webcam live prima di registrarsi, inserire dati o usare funzioni a
          pagamento. Il sito non gestisce webcam, account modello o chat private: aiuta a leggere
          le differenze tra piattaforme e percorsi disponibili.
        </p>
        <p>
          Il nostro lavoro è editoriale: organizziamo guide su privacy, costi, crediti, accesso
          mobile, LiveJasmin, alternative e modelli verificati. Non pubblichiamo classifiche
          inventate, recensioni finte o valutazioni numeriche costruite per spingere una scelta.
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
          <li>Quali passaggi controllare prima della registrazione.</li>
          <li>Come distinguere anteprime, crediti, pagamenti e chat private.</li>
          <li>Perché privacy, browser e dispositivo contano prima dell&apos;accesso.</li>
          <li>Come usare le guide interne senza confondere informazione editoriale e servizio esterno.</li>
        </ul>
      </article>
    </PageShell>
  );
}
