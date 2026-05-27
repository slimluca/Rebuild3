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
              SessoChat.net aiuta gli adulti a confrontare opzioni di webcam live prima della
              registrazione: chat privata, accesso mobile, privacy, modelli verificati, anteprime
              gratuite e navigazione più consapevole, con un linguaggio discreto e utile.
            </p>
            <div className="hero-badges" aria-label="Punti di orientamento">
              <span>Privacy prima dell&apos;accesso</span>
              <span>Modelli live reali</span>
              <span>Link interni ordinati</span>
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


