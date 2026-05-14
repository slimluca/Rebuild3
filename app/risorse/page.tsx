import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { guidaHubCards } from "@/lib/guida-pages";
import { sitiHubCards } from "@/lib/siti-pages";

const description =
  "Risorse SessoChat.net con guide pratiche, siti webcam live, pagine editoriali e collegamenti utili per scegliere chat webcam con più controllo.";

export const metadata: Metadata = {
  title: "Risorse Chat Webcam: Guide, Siti e Pagine Utili",
  description,
  alternates: {
    canonical: "/risorse"
  },
  openGraph: {
    title: "Risorse Chat Webcam: Guide, Siti e Pagine Utili | SessoChat.net",
    description,
    url: "https://sessochat.net/risorse"
  },
  twitter: {
    title: "Risorse Chat Webcam: Guide, Siti e Pagine Utili | SessoChat.net",
    description
  }
};

const existingResources = [
  { href: "/siti", title: "Siti webcam", copy: "Hub editoriale per scegliere siti webcam live con criterio." },
  { href: "/guida", title: "Guida chat webcam", copy: "Guide pratiche su privacy, prezzi, registrazione e mobile." },
  { href: "/chi-siamo", title: "Chi siamo", copy: "Il ruolo editoriale del progetto." },
  { href: "/politica-editoriale", title: "Politica editoriale", copy: "Standard di chiarezza e trasparenza." },
  { href: "/privacy-policy", title: "Privacy Policy", copy: "Informazioni iniziali su privacy e dati tecnici." },
  { href: "/termini-di-servizio", title: "Termini di servizio", copy: "Regole generali per usare il sito." },
  { href: "/mappa-del-sito", title: "Mappa del sito", copy: "Elenco delle pagine pubbliche disponibili." }
];

const futureAreas = [
  "Confronti tra piattaforme",
  "Categorie di chat cam live",
  "Approfondimenti avanzati sui percorsi partner"
];

export default function RisorsePage() {
  return (
    <PageShell path="/risorse" title="Risorse" description={description}>
      <article className="page-card">
        <h2>Guide pratiche</h2>
        <p>
          La sezione guida raccoglie approfondimenti su privacy, prezzi, registrazione, mobile,
          modelli verificati e differenze tra chat gratis e chat privata.
        </p>
      </article>
      <section className="resource-grid" aria-label="Guide pratiche">
        {guidaHubCards.map((resource) => (
          <article className="resource-card" key={resource.href}>
            <h2>{resource.title}</h2>
            <p>{resource.copy}</p>
            <Link className="text-link" href={resource.href}>
              Apri guida
            </Link>
          </article>
        ))}
      </section>
      <article className="page-card">
        <h2>Siti webcam</h2>
        <p>
          La sezione siti raccoglie guide già pubblicate per valutare webcam live, cam gratis, chat
          private, accesso mobile, navigazione senza registrazione, pagamenti e modelli verificati.
        </p>
      </article>
      <section className="resource-grid" aria-label="Guide siti webcam">
        {sitiHubCards.map((resource) => (
          <article className="resource-card" key={resource.href}>
            <h2>{resource.title}</h2>
            <p>{resource.copy}</p>
            <Link className="text-link" href={resource.href}>
              Apri guida
            </Link>
          </article>
        ))}
      </section>
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
