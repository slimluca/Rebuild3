import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/site";

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

export default function MappaDelSitoPage() {
  return (
    <PageShell path="/mappa-del-sito" title="Mappa del sito" description={description}>
      <article className="page-card">
        <h2>Pagine pubbliche</h2>
        <ul>
          {siteConfig.publicPages.map((page) => (
            <li key={page.path}>
              <Link className="text-link" href={page.path}>
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </PageShell>
  );
}
