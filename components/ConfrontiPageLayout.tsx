import Link from "next/link";
import { ComparisonMatrix } from "@/components/ComparisonMatrix";
import { ConfrontiCardGrid } from "@/components/ConfrontiCardGrid";
import { ConfrontiHero } from "@/components/ConfrontiHero";
import { DecisionPanel } from "@/components/DecisionPanel";
import { EditorialChecklist } from "@/components/EditorialChecklist";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ModelGrid } from "@/components/ModelGrid";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import type { ConfrontiPage } from "@/lib/confronti-pages";

type ConfrontiPageLayoutProps = {
  page: ConfrontiPage;
};

export function ConfrontiPageLayout({ page }: ConfrontiPageLayoutProps) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(page.path, page.h1, page.description),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Confronti", path: "/confronti" },
            { name: page.navTitle, path: page.path }
          ]),
          faqPageSchema(page.faq)
        ]}
      />
      <ConfrontiHero kicker={page.kicker} title={page.h1} intro={page.intro} />
      <ModelGrid />
      <DecisionPanel summary={page.summary} />
      <ComparisonMatrix leftLabel={page.leftLabel} rightLabel={page.rightLabel} rows={page.matrix} />
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
      <EditorialChecklist title={page.checklistTitle} intro="Usa questi criteri prima di registrarti o usare funzioni private." items={page.checklist} />
      <ConfrontiCardGrid
        id="confronti-related-title"
        title="Approfondimenti collegati"
        copy="Link interni a pagine già pubblicate, senza percorsi futuri o pagine vuote."
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
              <Link className="button-secondary" href="/confronti">
                Torna ai confronti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


