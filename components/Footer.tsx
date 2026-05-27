import Link from "next/link";

const footerLinks = [
  { href: "/siti", label: "Siti webcam" },
  { href: "/guida", label: "Guida" },
  { href: "/confronti", label: "Confronti" },
  { href: "/categorie", label: "Categorie" },
  { href: "/argomenti", label: "Argomenti" },
  { href: "/ricerche", label: "Ricerche" },
  { href: "/decisione", label: "Decisione" },
  { href: "/domande", label: "Domande" },
  { href: "/quiz", label: "Quiz" },
  { href: "/domande/le-chat-webcam-sono-gratis", label: "Chat gratis?" },
  { href: "/domande/livejasmin-e-sicuro", label: "LiveJasmin sicuro?" },
  { href: "/decisione/costi-chat-webcam", label: "Costi chat webcam" },
  { href: "/decisione/chat-webcam-privacy", label: "Privacy chat webcam" },
  { href: "/decisione/livejasmin-italia-recensione-guida", label: "LiveJasmin guida" },
  { href: "/ricerche/chat-webcam-gratis", label: "Chat webcam gratis" },
  { href: "/ricerche/livejasmin-alternative-italia", label: "Alternative LiveJasmin" },
  { href: "/argomenti/chat-webcam-senza-registrazione", label: "Senza registrazione" },
  { href: "/argomenti/livejasmin-italia", label: "LiveJasmin Italia" },
  { href: "/argomenti/sesso-chat-online", label: "Sesso chat online" },
  { href: "/categorie/modelli-webcam-live", label: "Modelli webcam live" },
  { href: "/categorie/modelli-webcam-verificati", label: "Modelli verificati" },
  { href: "/categorie/modelli-webcam-mobile", label: "Webcam mobile" },
  { href: "/confronti/livejasmin-vs-chaturbate", label: "LiveJasmin vs Chaturbate" },
  { href: "/confronti/siti-premium-vs-siti-gratis", label: "Premium vs gratis" },
  { href: "/guida/come-scegliere-un-sito-webcam", label: "Scegliere un sito webcam" },
  { href: "/guida/chat-webcam-sicura", label: "Chat webcam sicura" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
  { href: "/politica-editoriale", label: "Politica editoriale" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/termini-di-servizio", label: "Termini di servizio" },
  { href: "/risorse", label: "Risorse" },
  { href: "/mappa-del-sito", label: "Mappa del sito" }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <Link className="brand" href="/">
            <span className="brand-mark">SC</span>
            <span>SessoChat.net</span>
          </Link>
          <p className="footer-copy">
            Guida italiana alle chat webcam live, pensata per adulti che vogliono capire
            piattaforme, privacy, accesso mobile e opzioni di registrazione prima di scegliere.
          </p>
          <div className="footer-badges" aria-label="Standard editoriali">
            <span>Tono discreto</span>
            <span>Solo dati reali</span>
            <span>Redirect interni</span>
          </div>
        </div>
        <nav className="footer-links" aria-label="Link del footer">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="affiliate-disclosure">
          SessoChat.net fa parte di un piccolo gruppo di risorse editoriali dedicate alle chat
          webcam e alla scoperta di piattaforme live. Se preferisci leggere contenuti in inglese,
          puoi consultare anche{" "}
          <a href="https://webcamsex.me" rel="nofollow noopener">
            webcamsex.me
          </a>{" "}
          per confronti e{" "}
          <a href="https://webcamsex.site" rel="nofollow noopener">
            webcamsex.site
          </a>{" "}
          per una panoramica più ampia dei modelli live.
        </p>
        <p className="affiliate-disclosure">
          SessoChat.net può ricevere una commissione quando un utente visita piattaforme partner
          tramite link interni. Questo non deve influenzare il tono editoriale o creare recensioni
          false.
        </p>
      </div>
    </footer>
  );
}
