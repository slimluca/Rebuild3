import type { Metadata } from "next";
import Link from "next/link";
import { CategorieCardGrid } from "@/components/CategorieCardGrid";
import { CategorieHero } from "@/components/CategorieHero";
import { CategoryFilterGuide } from "@/components/CategoryFilterGuide";
import { CategoryInsightPanel } from "@/components/CategoryInsightPanel";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { breadcrumbSchema, faqPageSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { categorieHubCards } from "@/lib/categorie-pages";

const title = "Categorie Modelli Webcam Live: Esplora le Opzioni con Più Criterio";
const description =
  "Esplora categorie di modelli webcam live, profili online, opzioni mobile, modelli verificati e chat cam disponibili tramite una guida italiana discreta.";

const hubFaq = [
  {
    question: "Le categorie mostrano modelli filtrati automaticamente?",
    answer:
      "Solo se il flusso dati fornisce filtri affidabili. In caso contrario viene mostrato il flusso dati reale generale e la categoria resta una guida alla ricerca."
  },
  {
    question: "SessoChat.net inventa attributi dei modelli?",
    answer:
      "No. Non inventiamo nomi, stati, età, provenienza, popolarità, valutazioni o caratteristiche personali."
  },
  {
    question: "Perché alcune categorie usano un linguaggio prudente?",
    answer:
      "Perché filtri come aspetto, età o provenienza devono essere verificati sulla piattaforma live e non dedotti."
  },
  {
    question: "I link interni sono diretti?",
    answer:
      "No. Le CTA usano percorsi interni /go/ con indicazioni noindex/nofollow."
  }
];

export const metadata: Metadata = {
  title: "Categorie Modelli Webcam Live: Guida Italiana alla Scelta",
  description,
  alternates: {
    canonical: "/categorie"
  },
  openGraph: {
    title: "Categorie Modelli Webcam Live: Guida Italiana alla Scelta",
    description,
    url: "https://sessochat.net/categorie"
  },
  twitter: {
    title: "Categorie Modelli Webcam Live: Guida Italiana alla Scelta",
    description
  }
};

export default function CategorieHubPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("/categorie", title, description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Categorie modelli", path: "/categorie" }
          ]),
          itemListSchema(categorieHubCards.map((card) => ({ name: card.title, path: card.href }))),
          faqPageSchema(hubFaq)
        ]}
      />
      <CategorieHero
        kicker="Categorie modelli webcam"
        title={title}
        intro="La sezione categorie organizza percorsi di scoperta per modelli webcam live, profili online, filtri mobile, verifica e preferenze. Le schede visibili arrivano solo da dati reali o dal pannello alternativo editoriale."
      />
      <ModelGrid />
      <CategoryInsightPanel
        title="Categorie utili, senza classifiche inventate"
        insight="Questa sezione non promette classifiche, stati o attributi personali non verificati. Serve a capire quali filtri cercare sulla piattaforma live e come scegliere con maggiore controllo."
      />
      <CategorieCardGrid
        title="Categorie disponibili"
        copy="Percorsi SEO e editoriali per esplorare modelli live, verificati, mobile, online e categorie di preferenza senza dati finti."
        cards={categorieHubCards}
      />
      <CategoryFilterGuide
        title="Come usare le categorie"
        intro="Tratta ogni categoria come punto di partenza, non come garanzia assoluta."
        steps={[
          "Controlla se il filtro esiste sulla piattaforma live.",
          "Non attribuire caratteristiche non indicate dal flusso dati o dal sito ufficiale.",
          "Verifica disponibilità, privacy e condizioni prima della chat privata.",
          "Usa le guide interne per confrontare siti, prezzi e sicurezza."
        ]}
      />
      <FAQSection items={hubFaq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Scoperta live</p>
            <h2>Esplora le categorie con dati reali e criteri chiari</h2>
            <p>
              Apri l&apos;accesso live per controllare direttamente profili, filtri, anteprime e
              condizioni disponibili.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/go/livejasmin" prefetch={false}>
                Apri categorie live
              </Link>
              <Link className="button-secondary" href="/guida/modelli-webcam-verificati">
                Leggi guida verifica
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


