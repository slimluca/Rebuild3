import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

const description =
  "Risorse iniziali di SessoChat.net con pagine pubbliche Phase 1 e aree guida previste per le fasi successive.";

export const metadata: Metadata = {
  title: "Risorse",
  description,
  alternates: {
    canonical: "/risorse"
  },
  openGraph: {
    title: "Risorse | SessoChat.net",
    description,
    url: "https://sessochat.net/risorse"
  },
  twitter: {
    title: "Risorse | SessoChat.net",
    description
  }
};

const existingResources = [
  { href: "/chi-siamo", title: "Chi siamo", copy: "Il ruolo editoriale del progetto." },
  { href: "/politica-editoriale", title: "Politica editoriale", copy: "Standard di chiarezza e trasparenza." },
  { href: "/privacy-policy", title: "Privacy Policy", copy: "Informazioni iniziali su privacy e dati tecnici." },
  { href: "/termini-di-servizio", title: "Termini di servizio", copy: "Regole generali per usare il sito." },
  { href: "/mappa-del-sito", title: "Mappa del sito", copy: "Elenco delle pagine pubbliche disponibili." }
];

const futureAreas = [
  "Guide sui siti webcam live",
  "Confronti tra piattaforme",
  "Categorie di chat cam live",
  "Approfondimenti su chat privata e pagamenti"
];

export default function RisorsePage() {
  return (
    <PageShell path="/risorse" title="Risorse" description={description}>
      <section className="resource-grid" aria-label="Risorse disponibili">
        {existingResources.map((resource) => (
          <article className="resource-card" key={resource.href}>
            <h2>{resource.title}</h2>
            <p>{resource.copy}</p>
            <Link className="text-link" href={resource.href}>
              Apri pagina
            </Link>
          </article>
        ))}
      </section>
      <article className="page-card">
        <h2>Aree previste</h2>
        <p>
          Le sezioni seguenti sono pianificate per fasi successive e non sono ancora linkate perché
          non vogliamo creare pagine vuote o percorsi interrotti.
        </p>
        <ul>
          {futureAreas.map((area) => (
            <li key={area}>{area}: in arrivo.</li>
          ))}
        </ul>
      </article>
    </PageShell>
  );
}
