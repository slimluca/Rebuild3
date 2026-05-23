import Link from "next/link";
import { ArgomentiCardGrid } from "@/components/ArgomentiCardGrid";
import { ArgomentiHero } from "@/components/ArgomentiHero";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { QuickAnswerPanel } from "@/components/QuickAnswerPanel";
import { RelatedPathPanel } from "@/components/RelatedPathPanel";
import { SearchIntentPanel } from "@/components/SearchIntentPanel";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import type { ArgomentoPage } from "@/lib/argomenti-pages";

type ArgomentiPageLayoutProps = {
  page: ArgomentoPage;
};

export function ArgomentiPageLayout({ page }: ArgomentiPageLayoutProps) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(page.path, page.h1, page.description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Argomenti", path: "/argomenti" },
            { name: page.navTitle, path: page.path }
          ]),
          faqPageSchema(page.faq)
        ]}
      />
      <ArgomentiHero kicker={page.kicker} title={page.h1} intro={page.intro} />
      <ModelGrid />
      <QuickAnswerPanel answer={page.quickAnswer} />
      <SearchIntentPanel title={page.expectationTitle} items={page.expectations} />
      <RelatedPathPanel
        title={page.decisionTitle}
        steps={page.decisionSteps}
        noteTitle={page.noteTitle}
        note={page.note}
      />
      <ArgomentiCardGrid
        title="Approfondisci il percorso"
        copy="Risorse giÃ  pubblicate per passare dalla risposta rapida a guide, categorie e confronti piÃ¹ completi."
        cards={page.relatedLinks}
      />
      <FAQSection items={page.faq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">accesso live</p>
            <h2>{page.ctaTitle}</h2>
            <p>{page.ctaCopy}</p>
            <div className="hero-actions">
              <Link className="button" href={page.ctaHref} prefetch={false}>
                {page.ctaLabel}
              </Link>
              <Link className="button-secondary" href="/argomenti">
                Torna agli argomenti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


