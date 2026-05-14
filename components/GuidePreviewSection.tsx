import Link from "next/link";

const guides = [
  {
    href: "/guida/consigli-per-principianti",
    title: "Chat webcam per principianti",
    copy: "Termini base, anteprime, registrazione, crediti e privacy spiegati con un percorso semplice."
  },
  {
    href: "/guida/chat-webcam-sicura",
    title: "Chat webcam sicura",
    copy: "Controlli pratici su browser, account, pagamenti e segnali di affidabilità prima di registrarti."
  },
  {
    href: "/guida/prezzi-chat-webcam",
    title: "Prezzi chat webcam",
    copy: "Come leggere crediti, chat private e funzioni a pagamento senza affidarsi a numeri inventati."
  }
];

export function GuidePreviewSection() {
  return (
    <section className="section" aria-labelledby="guide-title">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Guide pratiche</p>
            <h2 id="guide-title">Risorse italiane per scegliere con più controllo</h2>
            <p className="section-copy">
              Approfondimenti già disponibili per capire privacy, prezzi, registrazione e uso
              responsabile delle chat webcam live.
            </p>
          </div>
          <Link className="button-secondary" href="/guida">
            Apri guida
          </Link>
        </div>
        <div className="guide-grid">
          {guides.map((guide) => (
            <article className="guide-card" key={guide.href}>
              <h3>{guide.title}</h3>
              <p>{guide.copy}</p>
              <Link className="text-link" href={guide.href}>
                Leggi la guida
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
