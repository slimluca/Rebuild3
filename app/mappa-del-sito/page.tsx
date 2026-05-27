import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { argomentiPublicPages } from "@/lib/argomenti-pages";
import { categoriePublicPages } from "@/lib/categorie-pages";
import { confrontiPublicPages } from "@/lib/confronti-pages";
import { decisionePublicPages } from "@/lib/decisione-pages";
import { domandePublicPages } from "@/lib/domande-pages";
import { guidaPublicPages } from "@/lib/guida-pages";
import { quizPublicPages } from "@/lib/quiz-pages";
import { ricerchePublicPages } from "@/lib/ricerche-pages";
import { sitiPublicPages } from "@/lib/siti-pages";

const description =
  "Mappa HTML di SessoChat.net con home, siti webcam, guide pratiche, risorse e pagine editoriali pubbliche.";

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

const sitemapGroups = [
  {
    title: "Pagine principali",
    pages: [
      { path: "/", label: "Home" },
      { path: "/risorse", label: "Risorse" },
      { path: "/mappa-del-sito", label: "Mappa del sito" }
    ]
  },
  { title: "Siti", pages: sitiPublicPages },
  { title: "Guida", pages: guidaPublicPages },
  { title: "Confronti", pages: confrontiPublicPages },
  { title: "Categorie", pages: categoriePublicPages },
  { title: "Argomenti", pages: argomentiPublicPages },
  { title: "Ricerche", pages: ricerchePublicPages },
  { title: "Decisione", pages: decisionePublicPages },
  { title: "Domande", pages: domandePublicPages },
  { title: "Quiz", pages: quizPublicPages },
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
