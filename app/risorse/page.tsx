import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { argomentiHubCards } from "@/lib/argomenti-pages";
import { categorieHubCards } from "@/lib/categorie-pages";
import { confrontiHubCards } from "@/lib/confronti-pages";
import { guidaHubCards } from "@/lib/guida-pages";
import { ricercheHubCards } from "@/lib/ricerche-pages";
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
  { href: "/confronti", title: "Confronti", copy: "Confronti tra piattaforme, chat gratis, chat private e alternative LiveJasmin." },
  { href: "/categorie", title: "Categorie modelli", copy: "Percorsi per esplorare modelli webcam live e filtri disponibili." },
  { href: "/argomenti", title: "Argomenti", copy: "Ricerche rapide su registrazione, mobile, privacy, LiveJasmin Italia e anteprime." },
  { href: "/ricerche", title: "Ricerche", copy: "Landing rapide per chat webcam gratis, live, mobile, sicure e senza account." },
  { href: "/chi-siamo", title: "Chi siamo", copy: "Il ruolo editoriale del progetto." },
  { href: "/politica-editoriale", title: "Politica editoriale", copy: "Standard di chiarezza e trasparenza." },
  { href: "/privacy-policy", title: "Privacy Policy", copy: "Informazioni iniziali su privacy e dati tecnici." },
  { href: "/termini-di-servizio", title: "Termini di servizio", copy: "Regole generali per usare il sito." },
  { href: "/mappa-del-sito", title: "Mappa del sito", copy: "Elenco delle pagine pubbliche disponibili." }
];

const futureAreas = [
  "Approfondimenti avanzati sui percorsi partner"
];

export default function RisorsePage() {
  return (
    <PageShell path="/risorse" title="Risorse" description={description}>
      <article className="page-card">
        <h2>Risorse editoriali collegate</h2>
        <p>
          SessoChat.net fa parte di un piccolo gruppo di risorse editoriali dedicate alle chat
          webcam e alla scoperta di piattaforme live. Se preferisci leggere contenuti in inglese,
          puoi consultare anche{" "}
          <a href="https://webcamsex.me" rel="noopener">
            webcamsex.me
          </a>{" "}
          per confronti e{" "}
          <a href="https://webcamsex.site" rel="noopener">
            webcamsex.site
          </a>{" "}
          per una panoramica più ampia dei modelli live.
        </p>
      </article>
      <article className="page-card">
        <h2>Ricerche più cercate</h2>
        <p>
          Le ricerche raccolgono pagine rapide su chat webcam gratis, live, mobile, senza account,
          alternative LiveJasmin e sesso chat webcam con tono discreto.
        </p>
      </article>
      <section className="resource-grid" aria-label="Ricerche più cercate">
        {ricercheHubCards.map((resource) => (
          <article className="resource-card" key={resource.href}>
            <h2>{resource.title}</h2>
            <p>{resource.copy}</p>
            <Link className="text-link" href={resource.href}>
              Apri ricerca
            </Link>
          </article>
        ))}
      </section>
      <article className="page-card">
        <h2>Argomenti più cercati</h2>
        <p>
          Le pagine argomento rispondono a ricerche dirette su chat webcam, registrazione, carta di
          credito, LiveJasmin Italia, mobile, anteprime e sesso chat online.
        </p>
      </article>
      <section className="resource-grid" aria-label="Argomenti più cercati">
        {argomentiHubCards.map((resource) => (
          <article className="resource-card" key={resource.href}>
            <h2>{resource.title}</h2>
            <p>{resource.copy}</p>
            <Link className="text-link" href={resource.href}>
              Apri argomento
            </Link>
          </article>
        ))}
      </section>
      <article className="page-card">
        <h2>Categorie modelli</h2>
        <p>
          Le categorie aiutano a esplorare profili webcam live, opzioni mobile, modelli verificati
          e filtri disponibili senza inventare dati personali o classifiche.
        </p>
      </article>
      <section className="resource-grid" aria-label="Categorie modelli">
        {categorieHubCards.map((resource) => (
          <article className="resource-card" key={resource.href}>
            <h2>{resource.title}</h2>
            <p>{resource.copy}</p>
            <Link className="text-link" href={resource.href}>
              Apri categoria
            </Link>
          </article>
        ))}
      </section>
      <article className="page-card">
        <h2>Confronti utili</h2>
        <p>
          Le pagine confronto aiutano a leggere differenze tra piattaforme webcam live, opzioni
          premium, accesso gratis, chat privata e alternative senza usare classifiche inventate.
        </p>
      </article>
      <section className="resource-grid" aria-label="Confronti utili">
        {confrontiHubCards.map((resource) => (
          <article className="resource-card" key={resource.href}>
            <h2>{resource.title}</h2>
            <p>{resource.copy}</p>
            <Link className="text-link" href={resource.href}>
              Apri confronto
            </Link>
          </article>
        ))}
      </section>
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


