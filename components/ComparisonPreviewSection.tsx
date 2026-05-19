import Link from "next/link";

const comparisons = [
  {
    href: "/confronti/livejasmin-vs-chaturbate",
    title: "LiveJasmin vs Chaturbate",
    copy: "Approccio premium, chat pubblica, privacy e funzioni private da leggere con criterio."
  },
  {
    href: "/confronti/siti-premium-vs-siti-gratis",
    title: "Premium o gratis",
    copy: "Differenze tra anteprime, registrazione, pagamenti e qualità dell'esperienza."
  },
  {
    href: "/confronti/chat-privata-vs-chat-gratis",
    title: "Privata o gratis",
    copy: "Come distinguere esplorazione iniziale, crediti e funzioni più riservate."
  },
  {
    href: "/confronti/alternative-livejasmin",
    title: "Alternative LiveJasmin",
    copy: "Criteri per confrontare altri siti webcam live senza classifiche inventate."
  }
];

export function ComparisonPreviewSection() {
  return (
    <section className="section" aria-labelledby="comparison-preview-title">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">Confronti</p>
            <h2 id="comparison-preview-title">Confronta prima di entrare</h2>
            <p className="section-copy">
              Pagine decisionali per valutare piattaforme, opzioni gratuite, chat private e
              alternative LiveJasmin senza voti finti.
            </p>
          </div>
          <Link className="button-secondary" href="/confronti">
            Apri confronti
          </Link>
        </div>
        <div className="guide-grid">
          {comparisons.map((comparison) => (
            <article className="guide-card" key={comparison.href}>
              <h3>{comparison.title}</h3>
              <p>{comparison.copy}</p>
              <Link className="text-link" href={comparison.href}>
                Apri confronto
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
