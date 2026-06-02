import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-panel">
          <div className="hero-content">
            <p className="eyebrow">Guida italiana alle chat webcam live</p>
            <h1>Sesso Chat e Webcam Live: Guida Italiana per Scegliere Dove Entrare</h1>
            <p>
              SessoChat.net è una guida editoriale italiana per adulti che vogliono valutare chat
              webcam live prima di registrarsi. Non gestiamo servizi webcam: organizziamo percorsi
              pratici su privacy, costi, mobile, chat private, LiveJasmin, alternative e modelli
              verificati, senza recensioni finte o voti inventati.
            </p>
            <div className="hero-badges" aria-label="Punti di orientamento">
              <span>Solo adulti</span>
              <span>Nessun voto finto</span>
              <span>Scelta prima dell&apos;accesso</span>
            </div>
            <div className="hero-actions" aria-label="Azioni principali">
              <Link className="button" href="/go/signup" prefetch={false}>
                Entra ora
              </Link>
              <Link className="button-secondary" href="#modelli-live">
                Vedi modelli live
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


