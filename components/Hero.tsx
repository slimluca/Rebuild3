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
            <div className="hero-actions" aria-label="Azioni principali">
              <Link className="button" href="/go/signup" prefetch={false}>
                Entra ora
              </Link>
              <Link className="button-secondary" href="#modelli-live">
                Vedi modelli live
              </Link>
            </div>
            <div className="hero-notes" aria-label="Punti principali">
              <div className="hero-note">
                <strong>Prima di registrarti</strong>
                <span>Capisci accesso, pagamenti e funzioni senza fretta.</span>
              </div>
              <div className="hero-note">
                <strong>Privacy al centro</strong>
                <span>Indicazioni semplici per navigare con maggiore controllo.</span>
              </div>
              <div className="hero-note">
                <strong>Scoperta modelli</strong>
                <span>Anteprime reali quando il feed partner è disponibile.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
