import Link from "next/link";

const footerLinks = [
  { href: "/siti", label: "Siti webcam" },
  { href: "/guida", label: "Guida" },
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
          SessoChat.net può ricevere una commissione quando un utente visita piattaforme partner
          tramite link interni. Questo non deve influenzare il tono editoriale o creare recensioni
          false.
        </p>
      </div>
    </footer>
  );
}
