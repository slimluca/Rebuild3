import Link from "next/link";

const cards = [
  {
    id: "chat-gratis",
    title: "Chat gratis",
    copy: "Capire quali anteprime gratuite sono utili, quali limiti aspettarsi e quando serve un account.",
    href: "#chat-gratis"
  },
  {
    id: "chat-privata",
    title: "Chat privata",
    copy: "Valutare controlli, costi e funzioni prima di entrare in una chat privata webcam.",
    href: "#chat-privata"
  },
  {
    id: "senza-registrazione",
    title: "Webcam senza registrazione",
    copy: "Distinguere accesso pubblico, preview e aree che richiedono registrazione adulta.",
    href: "#senza-registrazione"
  },
  {
    id: "senza-carta",
    title: "Senza carta di credito",
    copy: "Orientarsi tra anteprime, iscrizione iniziale e pagamenti richiesti solo per funzioni avanzate.",
    href: "#senza-carta"
  },
  {
    id: "modelli-verificati",
    title: "Modelli verificati",
    copy: "Cercare piattaforme con controlli chiari sui profili e informazioni trasparenti.",
    href: "#modelli-verificati"
  },
  {
    id: "webcam-mobile",
    title: "Webcam mobile",
    copy: "Scegliere siti cam live leggibili da telefono, con pagine rapide e comandi semplici.",
    href: "#webcam-mobile"
  }
];

export function QuickPathCards() {
  return (
    <section className="section" aria-labelledby="percorsi-title">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Percorsi rapidi</p>
            <h2 id="percorsi-title">Scegli il punto di partenza più adatto</h2>
            <p className="section-copy">
              Sei aree pratiche per capire meglio siti cam gratis, chat private, accesso mobile e
              registrazione senza creare percorsi interni non ancora pronti.
            </p>
          </div>
        </div>
        <div className="quick-grid">
          {cards.map((card) => (
            <article className="quick-card" id={card.id} key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <Link className="text-link" href={card.href}>
                Vai al tema
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
