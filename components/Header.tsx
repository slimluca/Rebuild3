import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="SessoChat.net home">
          <span className="brand-mark">SC</span>
          <span>SessoChat.net</span>
        </Link>
        <nav className="nav" aria-label="Navigazione principale">
          <Link href="/">Home</Link>
          <Link href="/siti">Siti</Link>
          <Link href="/guida">Guida</Link>
          <Link href="/risorse">Risorse</Link>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/contatti">Contatti</Link>
        </nav>
        <div className="header-actions">
          <Link className="button" href="/go/signup" prefetch={false}>
            Entra ora
          </Link>
        </div>
      </div>
    </header>
  );
}
