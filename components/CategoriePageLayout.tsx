import Link from "next/link";
import { CategorieCardGrid } from "@/components/CategorieCardGrid";
import { CategorieHero } from "@/components/CategorieHero";
import { CategoryFilterGuide } from "@/components/CategoryFilterGuide";
import { CategoryInsightPanel } from "@/components/CategoryInsightPanel";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import type { CategoriePage } from "@/lib/categorie-pages";

type CategoriePageLayoutProps = {
  page: CategoriePage;
};

export function CategoriePageLayout({ page }: CategoriePageLayoutProps) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(page.path, page.h1, page.description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Categorie modelli", path: "/categorie" },
            { name: page.navTitle, path: page.path }
          ]),
          faqPageSchema(page.faq)
        ]}
      />
      <CategorieHero kicker={page.kicker} title={page.h1} intro={page.intro} />
      <ModelGrid />
      <CategoryInsightPanel title={page.insightTitle} insight={page.insight} />
      <section className="section">
        <div className="container editorial-stack">
          {page.sections.map((section) => (
            <article className="editorial-panel" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
      <CategoryFilterGuide title={page.filterTitle} intro={page.filterIntro} steps={page.filterSteps} />
      <CategorieCardGrid
        id="categorie-related-title"
        title="Percorsi collegati"
        copy="Link interni gia pubblicati per confrontare categorie, siti webcam e guide pratiche."
        cards={page.relatedLinks}
      />
      <FAQSection items={page.faq} />
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="section-kicker">Accesso partner</p>
            <h2>{page.ctaTitle}</h2>
            <p>{page.ctaCopy}</p>
            <div className="hero-actions">
              <Link className="button" href={page.ctaHref} prefetch={false}>
                {page.ctaLabel}
              </Link>
              <Link className="button-secondary" href="/categorie">
                Torna alle categorie
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
