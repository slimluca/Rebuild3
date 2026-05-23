import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">SessoChat.net</p>
        <h1>Pagina non trovata</h1>
        <p>
          La risorsa richiesta non è disponibile. Puoi tornare alla homepage o aprire le sezioni
          principali della guida italiana alle chat webcam live.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/">
            Torna alla homepage
          </Link>
          <Link className="button-secondary" href="/siti">
            Apri siti webcam
          </Link>
        </div>
      </div>
    </section>
  );
}
