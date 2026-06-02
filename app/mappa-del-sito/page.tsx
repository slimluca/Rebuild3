import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { argomentiPublicPages } from "@/lib/argomenti-pages";
import { categoriePublicPages } from "@/lib/categorie-pages";
import { confrontiPublicPages } from "@/lib/confronti-pages";
import { decisionePublicPages } from "@/lib/decisione-pages";
import { domandePublicPages } from "@/lib/domande-pages";
import { guidaPublicPages } from "@/lib/guida-pages";
import { isPriorityIndexPath } from "@/lib/index-priority-pages";
import { quizPublicPages } from "@/lib/quiz-pages";
import { ricerchePublicPages } from "@/lib/ricerche-pages";
import { sitiPublicPages } from "@/lib/siti-pages";

const description =
  "Mappa HTML prioritaria di SessoChat.net con le pagine editoriali e le guide più importanti per iniziare la navigazione.";

export const metadata: Metadata = {
  title: "Mappa del Sito: Tutte le Guide Chat Webcam",
  description,
  alternates: {
    canonical: "/mappa-del-sito"
  },
  openGraph: {
    title: "Mappa del Sito: Tutte le Guide Chat Webcam | SessoChat.net",
    description,
    url: "https://sessochat.net/mappa-del-sito"
  },
  twitter: {
    title: "Mappa del Sito: Tutte le Guide Chat Webcam | SessoChat.net",
    description
  }
};

const priorityOnly = <T extends { path: string }>(pages: T[]) =>
  pages.filter((page) => isPriorityIndexPath(page.path));

const sitemapGroups = [
  {
    title: "Pagine principali",
    pages: [
      { path: "/", label: "Home" },
      { path: "/risorse", label: "Risorse" },
      { path: "/mappa-del-sito", label: "Mappa del sito" }
    ]
  },
  { title: "Siti", pages: priorityOnly([...sitiPublicPages]) },
  { title: "Guida", pages: priorityOnly([...guidaPublicPages]) },
  { title: "Confronti", pages: priorityOnly([...confrontiPublicPages]) },
  { title: "Categorie", pages: priorityOnly([...categoriePublicPages]) },
  { title: "Argomenti", pages: priorityOnly([...argomentiPublicPages]) },
  { title: "Ricerche", pages: priorityOnly([...ricerchePublicPages]) },
  { title: "Decisione", pages: priorityOnly([...decisionePublicPages]) },
  { title: "Domande", pages: priorityOnly([...domandePublicPages]) },
  { title: "Quiz", pages: priorityOnly([...quizPublicPages]) },
  {
    title: "Pagine editoriali",
    pages: [
      { path: "/chi-siamo", label: "Chi siamo" },
      { path: "/contatti", label: "Contatti" },
      { path: "/politica-editoriale", label: "Politica editoriale" },
      { path: "/privacy-policy", label: "Privacy Policy" },
      { path: "/termini-di-servizio", label: "Termini di servizio" }
    ]
  }
];

export default function MappaDelSitoPage() {
  return (
    <PageShell path="/mappa-del-sito" title="Mappa del sito" description={description}>
      {sitemapGroups.map((group) => (
        <article className="page-card" key={group.title}>
          <h2>{group.title}</h2>
          <ul>
            {group.pages.map((page) => (
              <li key={page.path}>
                <Link className="text-link" href={page.path}>
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </PageShell>
  );
}
