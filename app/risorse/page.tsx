import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { RecommendedPaths } from "@/components/RecommendedPaths";
import { argomentiHubCards } from "@/lib/argomenti-pages";
import { categorieHubCards } from "@/lib/categorie-pages";
import { confrontiHubCards } from "@/lib/confronti-pages";
import { decisioneHubCards } from "@/lib/decisione-pages";
import { domandeHubCards } from "@/lib/domande-pages";
import { guidaHubCards } from "@/lib/guida-pages";
import { isPriorityIndexPath } from "@/lib/index-priority-pages";
import { quizHubCards } from "@/lib/quiz-pages";
import { recommendedPathGroups } from "@/lib/recommended-paths";
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
  { href: "/decisione", title: "Decisione", copy: "Guide buyer-intent su costi, privacy, crediti, pagamenti e LiveJasmin." },
  { href: "/domande", title: "Domande", copy: "Risposte rapide su registrazione, carta, crediti, privacy e LiveJasmin." },
  { href: "/quiz", title: "Quiz", copy: "Quiz rapidi e discreti per scegliere il percorso webcam più adatto." },
  {
    href: "/diventa-modella-webcam",
    title: "Diventa modella webcam",
    copy: "Guida discreta per adulti che valutano il lavoro webcam online da casa."
  },
  { href: "/chi-siamo", title: "Chi siamo", copy: "Il ruolo editoriale del progetto." },
  { href: "/politica-editoriale", title: "Politica editoriale", copy: "Standard di chiarezza e trasparenza." },
  { href: "/privacy-policy", title: "Privacy Policy", copy: "Informazioni iniziali su privacy e dati tecnici." },
  { href: "/termini-di-servizio", title: "Termini di servizio", copy: "Regole generali per usare il sito." },
  { href: "/mappa-del-sito", title: "Mappa del sito", copy: "Elenco delle pagine pubbliche disponibili." }
];

const futureAreas = [
  "Approfondimenti avanzati sui percorsi partner"
];

const priorityCards = <T extends { href: string }>(cards: T[]) =>
  cards.filter((card) => isPriorityIndexPath(card.href));

export default function RisorsePage() {
  return (
    <PageShell path="/risorse" title="Risorse" description={description}>
      <RecommendedPaths
        title="Percorsi consigliati"
        copy="Questi collegamenti aiutano a passare rapidamente dalle risorse generali alle pagine più utili per scelta, costi, privacy e LiveJasmin."
        cards={recommendedPathGroups.risorse}
      />
      <article className="page-card">
        <h2>Quiz e strumenti rapidi</h2>
        <p>
          I quiz aiutano a scegliere un percorso tra anteprime gratuite, chat privata, mobile,
          privacy, LiveJasmin e alternative senza raccogliere dati personali.
        </p>
      </article>
      <section className="resource-grid" aria-label="Quiz e strumenti rapidi">
        {priorityCards(quizHubCards).map((resource) => (
          <article className="resource-card" key={resource.href}>
            <h2>{resource.title}</h2>
            <p>{resource.copy}</p>
            <Link className="text-link" href={resource.href}>
              Apri quiz
            </Link>
          </article>
        ))}
      </section>
      <article className="page-card">
        <h2>Domande frequenti</h2>
        <p>
          Le domande raccolgono risposte rapide per utenti italiani su chat webcam gratis,
          registrazione, carta di credito, crediti, privacy, mobile e LiveJasmin.
        </p>
      </article>
      <section className="resource-grid" aria-label="Domande frequenti">
        {priorityCards(domandeHubCards).map((resource) => (
          <article className="resource-card" key={resource.href}>
            <h2>{resource.title}</h2>
            <p>{resource.copy}</p>
            <Link className="text-link" href={resource.href}>
              Leggi risposta
            </Link>
          </article>
        ))}
      </section>
      <article className="page-card">
        <h2>Guide alla decisione</h2>
        <p>
          La sezione decisione raccoglie pagine per chi sta valutando costi, crediti, privacy,
          pagamenti, LiveJasmin Italia e affidabilità prima della registrazione.
        </p>
      </article>
      <section className="resource-grid" aria-label="Guide alla decisione">
        {priorityCards(decisioneHubCards).map((resource) => (
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
        <h2>Ricerche più cercate</h2>
        <p>
          Le ricerche raccolgono pagine rapide su chat webcam gratis, live, mobile, senza account,
          alternative LiveJasmin e sesso chat webcam con tono discreto.
        </p>
      </article>
      <section className="resource-grid" aria-label="Ricerche più cercate">
        {priorityCards(ricercheHubCards).map((resource) => (
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
        {priorityCards(argomentiHubCards).map((resource) => (
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
        {priorityCards(categorieHubCards).map((resource) => (
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
        {priorityCards(confrontiHubCards).map((resource) => (
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
        {priorityCards(guidaHubCards).map((resource) => (
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
        {priorityCards(sitiHubCards).map((resource) => (
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


